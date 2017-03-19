(function() {
    'use stict';
    var activityCards, find, mapCardToClassName, mapCardToHeading, hideCard,
        showCard, filterCards, onSeachChange, onClearSearch, createSearchInput,
        activityContainer, searchInput;

    activityCards = [].slice.call(document.querySelectorAll('.activity-card'));

    find = function(needle, haystack) {
        var regex;

        regex = new RegExp(needle);
        return regex.test(haystack);
    };

    mapCardToClassName = function(card) {
        return card.className;
    };

    mapCardToHeading = function(card) {
        var heading;

        heading = card.querySelector('h2').textContent;
        return heading.toLowerCase();
    };

    hideCard = function(card) {
        if (card.className.split(' ').indexOf('fade') === -1) {
            card.className += ' fade';
        }
        // Bootstrap's .fade animates for 150 ms
        setTimeout(function() { card.style.display = 'none'; }, 155);
    };

    showCard = function(card) {
        // kudos https://gist.github.com/k-gun/c2ea7c49edf7b757fe9561ba37cb19ca
        // resp. https://developer.mozilla.org/en-US/docs/Web/API/Element/classList#Polyfill
        if (card.className.split(' ').indexOf('fade') > -1) {
            card.className = card.className.replace(new RegExp('(^| )fade( |$)'), '');
        }
        // In order to kick in after async hideCard calls
        // 300 ms is a magic limit, where effect becomes notable to humans
        setTimeout(function() { card.style.display = ''; }, 300);
    };

    filterCards = function(searchTerm) {
        var classNames, headings;

        searchTerm = searchTerm.toLowerCase();
        classNames = activityCards.map(mapCardToClassName);
        classNames = classNames.filter(function(className) {
            return find(searchTerm, className);
        });

        headings = activityCards.map(mapCardToHeading);
        headings = headings.filter(function(heading) {
            return find(searchTerm, heading);
        });

        activityCards.forEach(function(card) {
            if (find(searchTerm, mapCardToClassName(card))) {
                showCard(card);
            } else if (find(searchTerm, mapCardToHeading(card))) {
                showCard(card);
            } else {
                hideCard(card);
            }
        });
    };

    onSeachChange = function(event) {
        var searchTerm, classNames;


        searchTerm = event.target.value;
        filterCards(searchTerm);
    };

    onClearSearch = function(event) {
        var searchInput;

        searchInput = document.getElementById('activity-search');
        searchInput.setAttribute('value', '');
        searchInput.value = '';
        filterCards('');
    };

    createSearchInput = function() {
        var label, searchInput, clearInput, container;
        
        label = document.createElement('label');
        label.setAttribute('for', 'activity-search');
        label.textContent = 'Filter for …';

        searchInput = document.createElement('input');
        searchInput.setAttribute('type', 'search');
        searchInput.setAttribute('id', 'activity-search');
        searchInput.addEventListener('keydown', onSeachChange, false);

        clearInput = document.createElement('input');
        clearInput.setAttribute('type', 'button');
        clearInput.setAttribute('id', 'clear-search');
        clearInput.setAttribute('value', '×');
        clearInput.style.backgroundColor = 'transparent';
        clearInput.style.borderStyle = 'none';
        clearInput.style.left = '-1.5em';
        clearInput.style.position = 'relative';
        clearInput.addEventListener('click', onClearSearch, false);

        container = document.createElement('div');
        container.appendChild(label);
        container.appendChild(searchInput);
        container.appendChild(clearInput);
        return container;
    };

    searchInput = createSearchInput();
    activityContainer = activityCards[0].parentNode;
    activityContainer.parentNode.insertBefore(searchInput, activityContainer);
})();
