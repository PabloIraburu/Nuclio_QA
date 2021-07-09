Feature: NUCLIO cypress Action testing


  Scenario: Fill input element
    Given I am at the actions demo page
    When I type "test" in the text input of the first example
    Then It contains the "test" text


  Scenario: Clear input element
    Given I am at the actions demo page
    When I type "test" in the text input of the fourth example
    When I clear the text input
    Then the input is empty


  Scenario: Click popover
    Given I am at the actions demo page
    When I click in the first component of the sixth example
    Then the input has a popover


  Scenario: Click multiple
    Given I am at the actions demo page
    When I click in the next to last component of the sixth example
    Then I get 6 popovers

  Scenario: Check buttons
    Given I am at the actions demo page
    When I click in the second component of the ninth example
    Then All 3 checkboxes should be checked
