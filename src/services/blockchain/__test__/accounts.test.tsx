import { generateRandomCharString, createKeys } from '../accounts';

describe('random character string generator', () => {
    it('should return a string a specified number in length', () => {
        const string = generateRandomCharString(12);
        expect(string).toHaveLength(12);
    });

    it('should not contain anything but lowercase letters', () => {
        const string = generateRandomCharString(12);
        const res = /^[a-z]/.test(string);
        expect(res).toEqual(true);
    });
});

describe('createKeys function', () => {
    it('Should return created keys object', async () => {
        // @ts-ignore
        const keys = await createKeys();
        expect(typeof keys).toBe('object');
        expect(typeof keys.privateKey).toBe('string');
        expect(typeof keys.publicKey).toBe('string');
    });
});
