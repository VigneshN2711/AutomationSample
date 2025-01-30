class ApiPage {
    getApiResponse() {
        let apiUrl = 'https://api.coindesk.com/v1/bpi/currentprice.json'
        return cy.request('GET', `${apiUrl}`)
            .its('body')
    }

    verifyBpiKeys(response) {
        expect(response.bpi).to.have.all.keys('USD', 'GBP', 'EUR');
    }

    verifyGbpDescription(response) {
        expect(response.bpi.GBP.description).to.equal('British Pound Sterling');
    }
}

export default new ApiPage();