import { uiObj } from '../pageObject/objects'

class EbayPage {
  visit() {
    let baseUrl = "https://www.ebay.com/"
    cy.visit(`${baseUrl}`)
  }

  searchForItem(item) {
    cy.get(uiObj.textBox).find('input').should('be.visible').click().clear().type(`${item}`)
    cy.get(uiObj.listBox).should('be.visible')
    cy.get(uiObj.btnSearch).should('be.enabled').click()
    cy.wait(1200)
  }

  selectFirstItem() {
    cy.get(uiObj.firstItems).find(uiObj.firstItemLink).invoke('removeAttr', 'target')
    cy.get(uiObj.firstItems).find(uiObj.firstItemLink).click()
    cy.wait(1500)
  }

  addItemToCart() {
    cy.get(uiObj.btnAddToCart).find('span').contains('Add to cart').click()
    cy.wait(3000)
  }

  verifyCartUpdate() {
    cy.get(uiObj.cartIcon).should('contain.text', '1').click()
    cy.get(uiObj.cartListItem).should('have.length', 1)
  }
}

export default new EbayPage()

