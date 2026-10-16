import { APIRequestContext, APIResponse } from '@playwright/test';
import { NewProduct } from '../models/product';
import { ROUTES } from '../configs/constants';

export class ProductsApi {
    constructor(private readonly request: APIRequestContext) {}

    async getProductById(id: number): Promise<APIResponse> {
        return this.request.get(`${ROUTES.PRODUCTS_ENDPOINT}/${id}`);
    }

    async createProduct(newProduct: NewProduct): Promise<APIResponse> {
        return this.request.post(`${ROUTES.PRODUCTS_ENDPOINT}`, {
            data: newProduct,
        });
    }
}