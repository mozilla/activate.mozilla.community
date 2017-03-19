(function() {
    'use stict';
    var activityCards, find, mapCardToClassName, hideCard, showCard,
        filterCards, onSeachChange, createSearchInput, activityContainer,
        searchInput;

    activityCards = [].slice.call(document.querySelectorAll('.activity-card'));

    find = function(needle, haystack) {
        var regex;

        regex = new RegExp(needle);
        return regex.test(haystack);
    };

    mapCardToClassName = function(card) {
        return card.className;
    };

    hideCard = function(card) {
        if (card.className.split(' ').indexOf('fade') === -1) {
            card.className += ' fade';
        }
        setTimeout(function() { card.style.display = 'none'; }, 155);
    };

    showCard = function(card) {
        // kudos https://gist.github.com/k-gun/c2ea7c49edf7b757fe9561ba37cb19ca
        // resp. https://developer.mozilla.org/en-US/docs/Web/API/Element/classList#Polyfill
        if (card.className.split(' ').indexOf('fade') > -1) {
            card.className = card.className.replace(new RegExp('(^| )fade( |$)'), '');
        }
        setTimeout(function() { card.style.display = ''; }, 300);
    };

    filterCards = function(searchTerm) {
        classNames = activityCards.map(mapCardToClassName);
        classNames = classNames.filter(function(className){
            return find(searchTerm, className);
        });

        activityCards.forEach(function(card) {
            if (find(searchTerm, mapCardToClassName(card))) {
                showCard(card);
            } else {
                hideCard(card);
            }
        });
    };

    onSeachChange = function(event) {
        var searchTerm, classNames;


        searchTerm = event.target.value;

        if (!searchTerm) { return; }
        filterCards(searchTerm);
        console.log('Found ' + searchTerm + ' in ', classNames);
    };

    createSearchInput = function() {
        var label, searchInput, container;
        
        label = document.createElement('label');
        label.setAttribute('for', 'activity-search');
        label.textContent = 'Filter for …';

        searchInput = document.createElement('input');
        searchInput.setAttribute('type', 'search');
        searchInput.setAttribute('id', 'activity-search');
        searchInput.addEventListener('keydown', onSeachChange, false);

        container = document.createElement('div');
        container.appendChild(label);
        container.appendChild(searchInput);
        return container;
    };

    searchInput = createSearchInput();
    activityContainer = activityCards[0].parentNode;
    activityContainer.parentNode.insertBefore(searchInput, activityContainer);
})();
