import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps'


When(/^I look for the (children|third text in the list) of the (first|third) example$/, function (text, scenario) {
    switch (scenario){
        case('first'):
            cy.get('.traversal-breadcrumb').children('li')
            break
        case('third'):
            cy.get('.traversal-list')
    }
});


Then(/^It contains the "([^"]*)" text$/, function (text) {
    cy.get('.traversal-breadcrumb').children('li').contains(text)
});


// Then(/^The (navbar|list) contains the "([^"]*)" text$/, function (element, text) {
//         switch (element) {
//             case('navbar'):
//                 cy.get('.traversal-breadcrumb').as('container')
//                 break
//             case ('list'):
//                 cy.get('.traversal-list').as('container')
//                 break
//         }
//                 cy.get('@container').children('li').contains(text)
// });
