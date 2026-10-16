export class ContactDetails {
    
    //STATIC - the email syntax will be the same for every test
    //no need to have one email regex for every object
    private static readonly EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // INSTANCE - every contact created has its own email so it lives on each object
    private _email: string;



    constructor(
        public readonly name: string,
        email: string,
        public readonly address: string
    ) {
           this._email = ContactDetails.validateEmail(email);
    }

    get email(): string {
        return this._email;
    }

    set email(value: string) {
       this._email = ContactDetails.validateEmail(value);
    }

    //STATIC - due to it not needing an object, only needs EMAIL_REGEX
    private static validateEmail(value: string): string{
        if(!ContactDetails.EMAIL_REGEX.test(value)){
            throw new Error(`Invalid email: "${value}" :(`)
        }
        return value;
    }
}