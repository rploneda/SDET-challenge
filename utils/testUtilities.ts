export class TestUtilities {
    public static logToConsole(message: string): void {
        const timestamp: string = TestUtilities.returnCurrentTimestamp();
        message = `[${timestamp}]: ${message}`;
        console.log(message);
    }
    
    public static returnCurrentTimestamp(): string {
        const currentDate: Date = new Date();
        return currentDate.toLocaleString();
    }
}