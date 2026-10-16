Feature: Contact form on the practice page

Scenario: User submits their contact details
    Given I am on the practice page
    When I submit my contact details with name "Roberto Plo", email "rob@col.com" and address "Diego Rivera 123"
    Then I see the submission confirmation