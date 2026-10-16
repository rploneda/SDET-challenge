import { APIRequestContext, APIResponse } from '@playwright/test';
import { AuthRequest } from '../models/auth';
import { ROUTES } from '../configs/constants';

export class AuthApi {
    constructor(private readonly request: APIRequestContext) {}

    async login(credentials: Partial<AuthRequest>): Promise<APIResponse> {
        return this.request.post(`${ROUTES.LOGIN_ENDPOINT}`, {
            data: credentials,
        });
    }
}