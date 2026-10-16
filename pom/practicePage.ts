import { Locator, expect } from '@playwright/test';
import { BasePage } from './basePage';
import { TestUtilities } from '../utils/testUtilities';
import { ContactDetails } from '../models/contactDetails';
import { ROUTES } from '../configs/constants';
 

export class PracticePage extends BasePage {
    protected readonly path = ROUTES.PRACTICE_PATH;

    //xpath is not needed because every element has a unique data test id
    // Text Inputs Section
    private readonly textInputsSection: Locator = this.page.locator('section[data-testid="section-text-inputs"]');
    private readonly inputName: Locator = this.textInputsSection.locator('input[data-testid="input-name"]');
    private readonly inputEmail: Locator = this.textInputsSection.locator('input[data-testid="input-email"]');
    private readonly inputAddress: Locator = this.textInputsSection.locator('textarea[data-testid="input-address"]');
    private readonly submitButton: Locator = this.textInputsSection.locator('button[data-testid="btn-submit-text-inputs"]');
    private readonly submitConfirmationText: Locator = this.textInputsSection.locator('p[data-testid="text-inputs-status"]');

    // Dropdown Section
    private readonly dropdownSection: Locator = this.page.locator('section[data-testid="section-dropdowns"]');
    private readonly countryDropdown: Locator = this.dropdownSection.locator('select[data-testid="dropdown-country"]');

    // Checkbox Section
    private readonly checkboxSection: Locator = this.page.locator('section[data-testid="section-checkboxes"]');
    private readonly checkboxSelectAll: Locator = this.checkboxSection.locator('input[data-testid="checkbox-select-all"]');
    private readonly allDayCheckboxes: Locator = this.checkboxSection.locator('input[name="days"]');


    //submit text input method
    async submitTextInput(contact: ContactDetails) {
        await this.inputName.fill(contact.name);
        await TestUtilities.logToConsole(`Filled name input with: ${contact.name}`);

        await this.inputEmail.fill(contact.email);
        await TestUtilities.logToConsole(`Filled email input with: ${contact.email}`);

        await this.inputAddress.fill(contact.address);
        await TestUtilities.logToConsole(`Filled address input with: ${contact.address}`);

        await this.submitButton.click();
        await TestUtilities.logToConsole('Submitted text inputs');
    }
    // verify text input submission method
    async verifyTextInputSubmission() {
        await expect(this.submitConfirmationText).toHaveText('submitted');
        await TestUtilities.logToConsole('Verified text input submission');
    }
    // select country method
    async selectCountry(country: string) {
        await this.countryDropdown.selectOption({ label: country });
        await TestUtilities.logToConsole(`Selected country: ${country}`);
    }
    // verify country selection method
    async verifyCountrySelection(country: string) {
        await expect(this.countryDropdown.locator('option:checked')).toHaveText(country);
        await TestUtilities.logToConsole(`Verified country selection: ${country}`);
    }

    //select all checkboxes method
    async selectAllCheckboxes() {
        await this.checkboxSelectAll.check();
        await TestUtilities.logToConsole('Selected all checkboxes');
    }

    // verify all checkboxes selected method
    async verifyAllCheckboxesSelected() {
        await expect(this.allDayCheckboxes).toHaveCount(7);
        await expect(this.allDayCheckboxes.and(this.page.locator(':not(:checked)'))).toHaveCount(0);
        await TestUtilities.logToConsole('Verified all checkboxes are selected');
    }

    override async verifyLoaded() {
        await super.verifyLoaded();
        await expect(this.textInputsSection).toBeVisible();
    }
}
