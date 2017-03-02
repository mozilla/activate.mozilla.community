(function() {
    'use stict';
    var activityCards, find, mapCardToClassName, filterCards, onSeachChange,
        createSearchInput, activityContainer, searchInput;

    activityCards = [].slice.call(document.querySelectorAll('.activity-card'));

    find = function(needle, haystack) {
        var regex;

        regex = new RegExp(needle);
        return regex.test(haystack);
    };

    mapCardToClassName = function(card) {
        return card.className;
    }

    filterCards = function(searchTerm) {
        classNames = activityCards.map(mapCardToClassName);
        classNames = classNames.filter(function(className){
            return find(searchTerm, className);
        });

        activityCards.forEach(function(card) {
            card.style.display = 'none';
            if (find(searchTerm, mapCardToClassName(card))) {
                card.style.display = ''; // show match
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
        var searchInput;
        
        searchInput = document.createElement('input');
        searchInput.setAttribute('type', 'search');
        searchInput.setAttribute('id', 'activity-search');
        searchInput.setAttribute('placeholder', 'Filter for …');
        searchInput.addEventListener('keydown', onSeachChange, false);
        return searchInput;
    };

    searchInput = createSearchInput();
    activityContainer = activityCards[0].parentNode;
    activityContainer.parentNode.insertBefore(searchInput, activityContainer);
})();
