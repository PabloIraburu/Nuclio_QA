import { When, Then} from 'cypress-cucumber-preprocessor/steps'


let scenarioDataTest

When(/^I query for the "([^"]*)" button$/, function () {
  cy.get('#query-btn')
});
Then(/^The button contains the "([^"]*)" text$/, function (buttonText) {
  cy.get('.query-btn').should('contain', buttonText)
  cy.get('#query-btn').should('contain', buttonText)
  cy.get('#querying .well>button:first').should('contain', buttonText)
  cy.elementContainsText('.query-btn', buttonText)
});

When(/^I select the element with the ([^"]*) data\-test$/, function (dataTest) {
  scenarioDataTest = dataTest
  cy.get(`[data-test-id="${dataTest}"]`)
});
Then(/^It has the (example) class$/, function (className) {
  cy.get(`[data-test-id="${scenarioDataTest}"]`).should('have.class', className)
});