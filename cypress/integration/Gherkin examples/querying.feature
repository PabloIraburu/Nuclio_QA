Feature: NUCLIO cypress Action testing

  Scenario: Get the 'Button' button
    Given I am at the querying demo page
    When I query for the "button" button
    Then The button contains the "Button" text

  Scenario: Get element by data attribute
    Given I am at the querying demo page
    When I select the element with the test-example data-test
    Then It has the example class