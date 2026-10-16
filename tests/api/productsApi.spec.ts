import { test, expect } from '../../fixtures/apiFixtures';
import newProducts from '../../data/api/newProducts.json';
import loginErrors from '../../data/api/loginErrors.json';
import { SchemaValidator } from '../../utils/schemaValidator';

test.describe('Products API Tests', () => {
    test('GET - Get product by ID', async ({ productsApi }) => {
        const response = await productsApi.getProductById(1);

        expect(response.status()).toBe(200);
        const product = await SchemaValidator.validateProduct(response);
        expect(product.id).toBe(1);
    });

    for (const newProduct of newProducts) {
        test(`POST - Create new product: ${newProduct.title}`, async ({ productsApi }) => {
            const response = await productsApi.createProduct(newProduct);

            expect(response.status()).toBe(201);
            const created = await SchemaValidator.validateProduct(response);
            expect(created).toMatchObject(newProduct);
            expect(created.id).toBeGreaterThan(0);
        });
    }
});

test.describe('Auth API - Negative Tests', () => {
    for (const { case: testName, body, status, message } of loginErrors) {
        test(`POST /auth/login with ${testName} returns ${status}`, async ({ authApi }) => {
            const response = await authApi.login(body);

            await expect(response).toHaveStatusAndBody(status, message);
        });
    }
});