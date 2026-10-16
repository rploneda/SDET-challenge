import { Locator, expect } from '@playwright/test';
import { BasePage } from './basePage';
import { TestUtilities } from '../utils/testUtilities';
import { ROUTES } from '../configs/constants';


export class HomePage extends BasePage {
    protected readonly path = ROUTES.HOME_PATH;
    private static readonly LOGOS = ['tcs', 'infosys', 'wipro', 'cognizant', 'hcltech', 'tech-mahindra',
        'capgemini', 'accenture', 'deloitte', 'epam', 'servicenow', 'zoho'
    ];

    private logo (name:string): Locator {
        return this.page.getByTestId(`logo-${name}`);
    }
    async verifyAllLogosVisible() {
        for (const name of HomePage.LOGOS) {
            await expect.soft(this.logo(name), `${name} logo should be visible`).toBeVisible();
            await TestUtilities.logToConsole(`${name} logo is visible`);
        }
    }
}