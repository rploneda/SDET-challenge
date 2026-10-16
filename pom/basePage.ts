import { Page, expect } from '@playwright/test';
import { TestUtilities } from '../utils/testUtilities';


export abstract class BasePage {
    protected readonly abstract path: string;
    protected readonly page: Page;

    constructor(page: Page) { 
        this.page = page;
    }

    async goto() {
        await this.page.goto(this.path);
        await this.verifyLoaded();
        await TestUtilities.logToConsole(`Navigated to ${this.path}`);
    }

    async verifyLoaded() {
        await expect(this.page).toHaveURL(this.path);
    }
}