Feature: EATestFeature

    Test EA features

    Scenario Outline: Test the login feature
        Given I visit EA Site
        When I click login link
        And I login as a user with '<username>' and '<password>'
        Examples:
            | username | password |
            | admin    | password |