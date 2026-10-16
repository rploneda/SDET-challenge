import { APIResponse } from '@playwright/test';
import { ProductSchema, Product } from '../models/product';
import { TestUtilities } from './testUtilities';

export class SchemaValidator {
    static async validateProduct(response: APIResponse): Promise<Product>{
        const body = await response.json();

        try {
            return ProductSchema.parse(body);
        }catch (error){
            throw new Error (`Product from ${response.url()} does not match the expected schema`)
        }
        finally{
            TestUtilities.logToConsole('Finished product schema validation')
        }
    }
}