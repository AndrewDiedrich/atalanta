// import Head from 'next/head';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Router from 'next/router';
import { useRequest } from 'src/hooks/use-request';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { Card, Button, FormGroup, Intent, H3, NumericInput } from '@blueprintjs/core';
// import { FlexColumn } from '@globalStyles';
// import TradeHistory from '@components/exchange/tradeHistory';
// import DepositButton from '@components/exchange/depositButton';

export interface ITradeHistory {
    quantity: number;
    price: number;
    time: string;
}

declare var grecaptcha: any;

const Email = ({ email, token }: { email: string; token: number }) => {
    const router = useRouter();
    const [code, setCode] = useState<number>();
    const { executeRecaptcha } = useGoogleReCaptcha();
    const { doRequest, errors } = useRequest({
        url: '/api/users/verifytoken',
        method: 'post',
        body: {
            email,
            code,
        },
        onSuccess: () => Router.push(`/login/register/keys`),
    });

    const onSubmit = async (e: Event) => {
        e.preventDefault();
        const reCaptchaToken = await executeRecaptcha!('verify_token');
        await doRequest({ reCaptchaToken });
    };

    useEffect(() => {
        if (!email) router.push('/login');
    }, []);

    useEffect(() => {
        if (token) {
            setCode(token);
        }
    }, [token]);

    return (
        <Card elevation={2} style={{ margin: '0 auto', width: '400px' }}>
            <H3>Enter Verification Token</H3>
            <FormGroup
                disabled={false}
                helperText={false && 'Helper text with details...'}
                inline={true}
                label={true && 'verification code'}
                labelFor="code"
                labelInfo={true && '(required)'}
            >
                <NumericInput
                    type="text"
                    id="veh-hp"
                    allowNumericCharactersOnly={true}
                    majorStepSize={1}
                    max={999999}
                    min={0}
                    buttonPosition="none"
                    minorStepSize={0.01}
                    stepSize={0.01}
                    placeholder="verification code"
                    value={token ? token : code}
                    onValueChange={(value: number) => setCode(value)}
                />
            </FormGroup>
            {errors}
            <Button
                disabled={code ? code.toString().length !== 6 : true}
                intent={code && code.toString().length === 6 ? Intent.SUCCESS : Intent.PRIMARY}
                fill
                onClick={(e: any) => onSubmit(e)}
            >
                Verify
            </Button>
        </Card>
    );
};

export default Email;
