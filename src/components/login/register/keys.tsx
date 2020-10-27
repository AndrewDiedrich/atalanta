// import Head from 'next/head';
import { useEffect, useState } from 'react';
import Router from 'next/router';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { useRequest } from 'src/hooks/use-request';
import { Card, Button, H3, Callout, FormGroup, InputGroup, Intent, Spinner, ControlGroup } from '@blueprintjs/core';
import { createKeys, ICreateAccount } from 'src/services/blockchain/accounts';
// import { FlexColumn } from '@globalStyles';
// import TradeHistory from '@components/exchange/tradeHistory';
// import DepositButton from '@components/exchange/depositButton';

export interface ITradeHistory {
    quantity: number;
    price: number;
    time: string;
}

declare var grecaptcha: any;

const Keys = () => {
    const [copyForm, setCopyForm] = useState<boolean>(true);
    const [keys, setKeys] = useState<ICreateAccount>();
    const [userKeyCopy, setUserKeyCopy] = useState<string>();
    const { executeRecaptcha } = useGoogleReCaptcha();
    const { doRequest, errors } = useRequest({
        url: '/api/users/signup',
        method: 'post',
        body: {
            privateKey: keys?.privateKey,
            publicKey: keys?.publicKey,
        },
        onSuccess: () => Router.push(`/profile`),
    });

    const onSubmit = async (e: Event) => {
        e.preventDefault();
        const reCaptchaToken = await executeRecaptcha!('final_register');
        await doRequest({ reCaptchaToken });
    };

    const copyText = (e: Event) => {
        e.preventDefault();
        var copyText = document.querySelector('#priv-key');
        // @ts-ignore
        copyText!.select();
        document.execCommand('copy');
    };

    useEffect(() => {
        (async function createKeysCall() {
            setKeys(await createKeys());
        })();
    }, []);

    return (
        <Card elevation={2} style={{ margin: '0 auto', width: '400px' }}>
            {copyForm ? (
                <>
                    <H3>Copy Password</H3>
                    <Callout style={{ margin: '5px 0' }} intent={Intent.PRIMARY} title="User Must Copy this Password">
                        Copy this password and store in safe and secure location, this key will be needed to login!
                    </Callout>

                    <FormGroup
                        disabled={false}
                        helperText={false && 'Helper text with details...'}
                        inline={false}
                        label={false}
                        labelFor="token"
                        labelInfo={false && '(required)'}
                    >
                        {keys ? (
                            <InputGroup
                                id="priv-key"
                                placeholder="key"
                                disabled={false}
                                value={keys?.privateKey}
                                type="text"
                            />
                        ) : (
                            <div style={{ margin: '10px 0' }}>
                                <Spinner intent={Intent.PRIMARY} />
                            </div>
                        )}
                        <Button
                            style={{ margin: '5px 0' }}
                            // disabled={code ? code.toString().length !== 6 : true}
                            // intent={code && code.toString().length === 6 ? Intent.SUCCESS : Intent.PRIMARY}
                            icon="clipboard"
                            fill
                            onClick={(e: any) => copyText(e)}
                        >
                            Copy
                        </Button>
                        <Button
                            style={{ margin: '5px 0' }}
                            // disabled={code ? code.toString().length !== 6 : true}
                            // intent={code && code.toString().length === 6 ? Intent.SUCCESS : Intent.PRIMARY}

                            fill
                            onClick={() => setCopyForm(!copyForm)}
                            intent={Intent.PRIMARY}
                        >
                            I have copied My Password
                        </Button>
                    </FormGroup>
                </>
            ) : (
                <>
                    <H3>Confirm Password</H3>
                    <Callout style={{ margin: '5px 0' }} intent={Intent.PRIMARY}>
                        Paste your password to Confirm You've recorded it correctly.
                    </Callout>

                    <FormGroup
                        disabled={false}
                        helperText={false && 'Helper text with details...'}
                        inline={false}
                        label={false}
                        labelFor="token"
                        labelInfo={false && '(required)'}
                    >
                        <ControlGroup fill={true} vertical={false}>
                            <InputGroup
                                style={{ margin: '5px 0' }}
                                intent={
                                    !userKeyCopy || userKeyCopy === ''
                                        ? Intent.PRIMARY
                                        : keys?.privateKey !== userKeyCopy
                                        ? Intent.DANGER
                                        : Intent.SUCCESS
                                }
                                id="copied-priv-key"
                                placeholder="key"
                                disabled={false}
                                value={userKeyCopy}
                                type="text"
                                onChange={(e: any) => setUserKeyCopy(e.target.value)}
                            />
                            {!userKeyCopy || userKeyCopy === '' ? (
                                <Button
                                    active={false}
                                    style={{ margin: '5px 0' }}
                                    icon="error"
                                    text="Enter Key"
                                    intent={Intent.PRIMARY}
                                />
                            ) : keys?.privateKey !== userKeyCopy ? (
                                <Button
                                    active={false}
                                    style={{ margin: '5px 0' }}
                                    icon="error"
                                    text="Incorrect Copy"
                                    intent={Intent.DANGER}
                                />
                            ) : (
                                <Button
                                    active={false}
                                    style={{ margin: '5px 0' }}
                                    icon="confirm"
                                    text="Correct Copy"
                                    intent={Intent.SUCCESS}
                                />
                            )}
                        </ControlGroup>
                        <Button
                            style={{ margin: '5px 0' }}
                            // disabled={code ? code.toString().length !== 6 : true}
                            // intent={code && code.toString().length === 6 ? Intent.SUCCESS : Intent.PRIMARY}
                            icon="clipboard"
                            fill
                            onClick={() => setCopyForm(!copyForm)}
                        >
                            Recopy Key
                        </Button>
                        <Button
                            style={{ margin: '5px 0' }}
                            disabled={keys?.privateKey !== userKeyCopy}
                            // intent={code && code.toString().length === 6 ? Intent.SUCCESS : Intent.PRIMARY}

                            fill
                            onClick={(e: any) => onSubmit(e)}
                            intent={Intent.PRIMARY}
                        >
                            Register
                        </Button>
                    </FormGroup>
                </>
            )}

            {errors}
        </Card>
    );
};

export default Keys;
