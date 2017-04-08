;(function () {
    'use strict'

    var activityCards = document.querySelectorAll('.activity-card')
    activityCards = [].slice.call(activityCards)

    if (activityCards.length === 0) {
        // Nothing to do, if there is nothing to search/filter for
        return
    }

    var find = function (needle, haystack) {
        return (new RegExp(needle)).test(haystack)
    }

    var mapCardToTag = function (card) {
        return card.querySelector('.tags').textContent.toLowerCase()
    }

    var mapCardToHeading = function (card) {
        return card.querySelector('h2').textContent.toLowerCase()
    }

    var onHideEnd = function (card) {
        card.setAttribute('aria-hidden', true)
    }

    var hideCard = function (card) {
        card.classList.add('fade')
        setTimeout(function () { onHideEnd(card); }, 200)
    }

    var onShowEnd = function (card) {
        card.setAttribute('aria-hidden', false)
    }

    var showCard = function (card) {
        card.classList.remove('fade')
        setTimeout(function () { onShowEnd(card); }, 150)
    }

    var showAllCards = function () {
        activityCards.forEach(function (card) {
            showCard(card)
        })
    }

    var filterCards = function (searchTerm) {
        searchTerm = searchTerm.toLowerCase()

        if (!searchTerm) {
            return showAllCards()
        }

        var tags = activityCards.map(mapCardToTag)
        tags = tags.filter(function (tag) {
            return find(searchTerm, tag)
        })

        var headings = activityCards.map(mapCardToHeading)
        headings = headings.filter(function (heading) {
            return find(searchTerm, heading)
        })

        activityCards.forEach(function (card) {
            if (find(searchTerm, mapCardToTag(card))) {
                showCard(card)
            } else if (find(searchTerm, mapCardToHeading(card))) {
                showCard(card)
            } else {
                hideCard(card)
            }
        })
    }

    var extractStrings = function () {
        var scriptTag = document.querySelector('script[src$="search.js"]')
        return {
            labelText: scriptTag.dataset.labelText || 'Filter for …',
            inputPlaceholder: scriptTag.dataset.inputPlaceholder || 'tag or headline'
        }
    }

    var searchInputId = 'activity-search'

    var onSearchChange = function (event) {
        filterCards(event.target.value)
    }

    var onClearSearch = function (event) {
        var searchInput = document.getElementById(searchInputId)
        searchInput.setAttribute('value', '')
        searchInput.value = ''
        filterCards('')
    }

    var createSearchInput = function () {
        var translations = extractStrings()

        var label = document.createElement('label')
        label.setAttribute('for', searchInputId)
        label.textContent = translations.labelText

        var searchInput = document.createElement('input')
        searchInput.setAttribute('type', 'search')
        searchInput.setAttribute('id', searchInputId)
        searchInput.setAttribute('placeholder', translations.inputPlaceholder)
        searchInput.className = 'form-control'
        searchInput.addEventListener('input', onSearchChange, false)

        var clearInput = document.createElement('input')
        clearInput.setAttribute('type', 'button')
        clearInput.setAttribute('id', 'clear-search')
        clearInput.setAttribute('value', '×')
        clearInput.className = 'close'
        clearInput.addEventListener('click', onClearSearch, false)

        label.appendChild(searchInput)
        label.appendChild(clearInput)
        return label
    }

    var searchInput = createSearchInput()
    var activityContainer = activityCards[0].parentNode
    activityContainer.parentNode.insertBefore(searchInput, activityContainer)
})()
