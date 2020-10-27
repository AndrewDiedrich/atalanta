import { useState } from 'react';
import Router from 'next/router';
import { useRequest } from 'src/hooks/use-request';
import { Card, Button, Tabs, Tab, FormGroup, InputGroup, Intent, Checkbox, Icon, TabId } from '@blueprintjs/core';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';

const LoginTab = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const { executeRecaptcha } = useGoogleReCaptcha();
    const { doRequest, errors } = useRequest({
        url: '/api/users/signin',
        method: 'post',
        body: {
            email,
        },
        onSuccess: () => Router.push(`/user/profile`),
    });

    const onSubmit = async (e: Event) => {
        e.preventDefault();
        const reCaptchaToken = await executeRecaptcha!('signin_token');
        await doRequest({ reCaptchaToken });
    };

    return (
        <>
            <FormGroup
                disabled={false}
                helperText={false && 'Helper text with details...'}
                inline={false}
                label={true && 'Email'}
                labelFor="email"
                labelInfo={true && '(required)'}
            >
                <InputGroup
                    id="sym-add-input"
                    placeholder="email"
                    disabled={false}
                    value={email}
                    type="text"
                    onChange={(e: any) => setEmail(e.target.value)}
                />
            </FormGroup>
            <FormGroup
                disabled={false}
                helperText={false && 'Helper text with details...'}
                inline={false}
                label={true && 'password'}
                labelFor="password"
                labelInfo={true && '(required)'}
            >
                <InputGroup
                    id="sym-add-input"
                    placeholder="symbol"
                    disabled={false}
                    value={password}
                    type="text"
                    onChange={(e: any) => setPassword(e.target.value)}
                />
            </FormGroup>

            {errors}
            <Button intent={Intent.PRIMARY} fill onClick={(e: any) => onSubmit(e)}>
                Sign In
            </Button>
        </>
    );
};

export default LoginTab;
