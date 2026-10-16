import { expect as baseExpect, APIResponse } from '@playwright/test';

export const expect = baseExpect.extend({

    async toHaveStatusAndBody(response: APIResponse, expectedStatusCode: number, expectedResponseBody: string){
        const nameAssertion = "toHaveStatusAndBody";

        const actualStatus = response.status();
        const actualBody = await response.text();

        const pass = actualStatus === expectedStatusCode && actualBody === expectedResponseBody;

        // message
        const message = () =>
            this.utils.matcherHint(nameAssertion, undefined, undefined, { isNot: this.isNot }) +
            '\n\n' +
            `Expected: ${this.isNot ? 'not ' : ''}status ${expectedStatusCode}, body ${this.utils.printExpected(expectedResponseBody)}\n` +
            `Received: status ${actualStatus}, body ${this.utils.printReceived(actualBody)}`;
        
            return {
                pass,
                message,
                name: nameAssertion,
                expected: { status: expectedStatusCode, body: expectedResponseBody},
                actual: { status: actualStatus, body: actualBody},
            };
    }, 
})