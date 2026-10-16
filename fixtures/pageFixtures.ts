import { test as base } from 'playwright-bdd';
import { expect } from '@playwright/test';

import { HomePage } from '../pom/homePage';
import { PracticePage } from '../pom/practicePage';

// Lists every page object the fixture provides
type PageObjects = {
    homePage: HomePage;
    practicePage: PracticePage;
};

export const test = base.extend<PageObjects>({
    homePage: async ({ page }, use) => {
        await use(new HomePage(page));
    },
    practicePage: async ({ page }, use) => {
        await use(new PracticePage(page));
    },
});

export { expect };