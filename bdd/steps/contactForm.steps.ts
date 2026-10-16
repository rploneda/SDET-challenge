import { createBdd } from 'playwright-bdd';
import { test } from '../../fixtures/pageFixtures';
import { ContactDetails } from '../../models/contactDetails';
import { PracticePage } from '../../pom/practicePage';

const { Given, When, Then } = createBdd(test);

Given('I am on the practice page', async ({ practicePage }) => {
    await practicePage.goto();
});

When('I submit my contact details with name {string}, email {string} and address {string}',
    async ({ practicePage }, name: string, email: string, address: string) => {
        const contact = new ContactDetails(name, email, address);
        await practicePage.submitTextInput(contact);
    }
);

Then ('I see the submission confirmation', async ({ practicePage }) => {
    await practicePage.verifyTextInputSubmission();
});