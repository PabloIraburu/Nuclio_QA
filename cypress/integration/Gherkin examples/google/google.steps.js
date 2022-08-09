import {Given, When } from 'cypress-cucumber-preprocessor/steps'


Given(/^I go to google$/, function () {
    cy.visit('www.google.com')
});

When(/^I click the (aceptar|rechazar) button$/, function (buttonName) {
    switch (buttonName) {
        case 'aceptar':
    cy.get('#L2AGLb > .QS5gu').click()
            break
        case 'rechazar':
            cy.get('#W0wltc > .QS5gu').click()
    }
});