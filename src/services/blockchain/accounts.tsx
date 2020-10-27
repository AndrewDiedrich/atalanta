// @ts-ignore
import ecc from 'eosjs-ecc';

export interface ICreateAccount {
    privateKey: string;
    publicKey: string;
}

export const generateRandomCharString = (string_length: number) => {
    let random_string = '';
    let random_ascii;
    for (let i = 0; i < string_length; i++) {
        random_ascii = Math.floor(Math.random() * 25 + 97);
        random_string += String.fromCharCode(random_ascii);
    }
    return random_string;
};

export const createKeys = async (): Promise<ICreateAccount> => {
    let tmp_keys = { privateKey: '', publicKey: '' };
    await ecc.randomKey().then((privateKey: string) => {
        tmp_keys.privateKey = privateKey;
        tmp_keys.publicKey = ecc.privateToPublic(privateKey);
    });
    return tmp_keys;
};
