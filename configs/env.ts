import dotenv from 'dotenv';
import path from 'path';

const envName = process.env.TEST_ENV ?? 'qa';
dotenv.config({ path: path.resolve(__dirname, `../.env.${envName}`) });

function required(key: string): string {
    const value = process.env[key];
    if (!value) {
        throw new Error(`Missing "${key}" in .env.${envName}. Copy .env.example to .env.${envName} and fill it in.`);
    }
    return value;
}

export const env = {
    name: envName,
    uiBaseUrl: required('UI_BASE_URL'),
    apiBaseUrl: required('API_BASE_URL'),
};
