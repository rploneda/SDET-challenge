import { test } from '../../fixtures/pageFixtures';

test.describe('Home page', () => {
    test.beforeEach(async ({ homePage }) => {
        await homePage.goto();
    });

    test('all logos are visible', async ({ homePage }) => {
        await homePage.verifyAllLogosVisible();
    });
});
