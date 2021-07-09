Feature: Nuclio cypress Assessment testing


  Scenario: Get children of element
    Given I am at the traversal demo page
    When I look for the children of the first example
#   Primer planteamiento
   Then It contains the "Data" text
#   Planteamiento reutilizable
#    Then The navbar contains the "Data" text

#  Reusability example

#  Scenario: Get the third element of a list
#    Given I am at the traversal demo page
#    When I look for the third text in the list of the third example
#    Then The list contains the "persian" text
