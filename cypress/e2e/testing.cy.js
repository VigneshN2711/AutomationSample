import EbayPage from '../pageObject/ui';
import ApiPage from '../pageObject/api';

describe('UI and API Automation test', () => {

  context('UI Automation', () => {

    it.only('Verify the Add Cart option on Ebay page', () => {

      //Verify to open the browser and navigate to Ebay page
      EbayPage.visit();

      //Verify to search for 'book
      EbayPage.searchForItem('book');

      //Verify to click the first book in the list
      EbayPage.selectFirstItem()

      //Verify to add the item to cart
      EbayPage.addItemToCart()

      //Verify to check the cart has been updated
      EbayPage.verifyCartUpdate()
    });
  });

  context('API Automation', () => {
    it('Verify the response contains required BPIs', () => {
      ApiPage.getApiResponse().then((respVal) => {
        
        //Verify the required BPIs
        ApiPage.verifyBpiKeys(respVal)

        //Verify the GBP description
        ApiPage.verifyGbpDescription(respVal)
      })
    })
  })
})