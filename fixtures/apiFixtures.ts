import { test as base } from '@playwright/test';
import { AuthApi } from '../api/authApi';
import { ProductsApi } from '../api/productsApi';
import { expect } from '../utils/customerMatch';


type ApiFixtures = {
    authApi: AuthApi;
    productsApi: ProductsApi;
};

export const test = base.extend<ApiFixtures>({

    productsApi: async ({ request }, use) => {
        await use(new ProductsApi(request));
    },
    authApi: async ({ request }, use) => {
        await use(new AuthApi(request));
    },
});

export { expect };