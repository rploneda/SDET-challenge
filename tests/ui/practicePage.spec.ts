import { test } from '../../fixtures/pageFixtures';
import countries from '../../data/ui/countries.json';
import { ContactDetails } from '../../models/contactDetails';
import { TestUtilities } from '../../utils/testUtilities';


test.describe('Practice page', () => {
    test.beforeEach(async ({ practicePage }) => {
        await practicePage.goto();
    });

    test.afterEach(async ({ page }, testInfo) =>{
        TestUtilities.logToConsole(`Finished "${testInfo.title}" with status: ${testInfo.status}`);

    })

    test('submit a text input', async ({ practicePage }) => {
        //change email @ to - to get error thanks to get set
        const contact = new ContactDetails('Roberto Ploneda', 'Rob@col.com', 'Diego Rivera 123');
        await practicePage.submitTextInput(contact);
        await practicePage.verifyTextInputSubmission();
    });

    test('use a dropdown to select each country', async ({ practicePage }) => {
        for (const country of countries) {
            await test.step(`select ${country}`, async () => {
                await practicePage.selectCountry(country);
                await practicePage.verifyCountrySelection(country);
            });
        }
    });

    test('select all checkboxes', async ({ practicePage }) => {
        await practicePage.selectAllCheckboxes();
        await practicePage.verifyAllCheckboxesSelected();
    });
});
