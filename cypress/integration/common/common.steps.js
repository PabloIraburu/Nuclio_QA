import {Given, Then} from 'cypress-cucumber-preprocessor/steps'



Given(/^I am at the (traversal|actions|querying) demo page$/, function (page) {
    cy.visit(`https://example.cypress.io/commands/${page}`)
});

Then(/^It contains the "([^"]*)" text$/, function (text) {
    cy.get('.action-email').should('have.value', text)
});
