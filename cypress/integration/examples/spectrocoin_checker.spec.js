describe('Spectrocoin checker', function() {
    it('Check if price negative', function () {
        var currencyName = 'Cardano'
        var relevantTimeOfPrice = 'Last 24 hours'
        //go to page
        cy.visit('https://spectrocoin.com/en/bitcoin-price-rates.html')

        //get cell
        cy.get('td')
        //where specific currency name exits
        .contains(currencyName)
        .parent()
        //go to parent row
        .parent()
        //select all rows for that specific currency
        .siblings()
        // get row where is 'Last 24 hours' cell
        .contains(relevantTimeOfPrice)
        //select sibling column
        .siblings()
        //select where is percentage value
        .contains('%')
        //check if negative value
        .contains('-')
    })
})