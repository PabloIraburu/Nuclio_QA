import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps'

let scenarioElement

When(/^I type "([^"]*)" in the text input of the (first|fourth) example$/, function (text,test) {
    const translator = {
        "first":".action-email",
        "fourth":".form-control.action-clear"
    }
    scenarioElement = translator[test]
    cy.get(scenarioElement)
        .type(text)
});

When(/^I clear the text input$/, function () {
    cy.get(scenarioElement).clear()
});
Then(/^the input is empty$/, function () {
    cy.get(scenarioElement).should('have.value', "")
});

When(/^I click in the (first|second|next to last) component of the (sixth|ninth) example$/, function (example) {
    switch (example){
        case('first'):
            cy.get('.action-btn').click()
            break
        case('second'):
            cy.get('.action-multiple-checkboxes [type="checkbox"]').click({multiple:true})
                .check(['checkbox1', 'checkbox2']).should('be.checked')
            break
        case('next to last'):
            cy.get('.action-labels>.label').click({ multiple: true })
            break
    }
});
Then(/^the input has a popover$/, function () {
    cy.get('.popover-content')
});
Then(/^I get (\d+) popovers$/, function (number) {
    cy.get('.popover-content').should('have.length',number)
});

Then(/^All (\d+) checkboxes should be checked$/, function (number) {
    let array = []
    for (let i = 1; i<=number;i++){
        array = [...array, `checkbox${i}`]
    }
    cy.log(JSON.stringify(array))
    cy.get('.action-multiple-checkboxes [type="checkbox"]')
        .check(array).should('be.checked')
});
