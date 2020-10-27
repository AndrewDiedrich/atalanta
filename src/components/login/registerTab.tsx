import { useEffect, useState } from 'react';
import Router from 'next/router';
import { useRequest } from 'src/hooks/use-request';
import { Button, FormGroup, InputGroup, Intent, Checkbox, HTMLSelect, ControlGroup, Colors } from '@blueprintjs/core';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { countryCodes } from 'src/lib/authy';

export interface ITradeHistory {
    quantity: number;
    price: number;
    time: string;
}

const RegisterTab = () => {
    const [email, setEmail] = useState<string>('');
    const [countryCode, setCountryCode] = useState<string>();
    const [phone, setPhone] = useState<string>('');
    const { executeRecaptcha } = useGoogleReCaptcha();
    const { doRequest, errors } = useRequest({
        url: '/api/users/createverifytoken',
        method: 'post',
        body: {
            email,
            phone,
            countryCode,
        },
        onSuccess: () => Router.push(`/login/register/email?email=${email}`),
    });

    const onSubmit = async (e: Event) => {
        e.preventDefault();
        const reCaptchaToken = await executeRecaptcha!('create_register_token');
        await doRequest({ reCaptchaToken });
    };

    const handleCountryCodeChange = (e: any) => {
        e.preventDefault();
        console.log(e.target.value);
        setCountryCode(e.target.value);
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
                label={true && 'Country Code & Phone'}
                labelFor="phone"
                labelInfo={true && '(required)'}
            >
                <ControlGroup>
                    <HTMLSelect
                        style={{ width: '180px' }}
                        value={countryCode}
                        onChange={(e) => handleCountryCodeChange(e)}
                    >
                        {countryCodes.map((country) => {
                            return (
                                <option value={country.value} key={`${country.label}-${country.value}`}>
                                    {country.label}
                                </option>
                            );
                        })}
                    </HTMLSelect>

                    <InputGroup
                        fill
                        id="sym-add-input"
                        placeholder="cellphone number"
                        disabled={false}
                        value={phone}
                        type="text"
                        onChange={(e: any) => setPhone(e.target.value)}
                    />
                </ControlGroup>
            </FormGroup>

            <Checkbox checked={false} label="Accept Chintai's ">
                <strong>Terms and Conditions</strong>
            </Checkbox>

            {errors}
            <Button intent={Intent.PRIMARY} fill onClick={(e: any) => onSubmit(e)}>
                Register
            </Button>
        </>
    );
};

export default RegisterTab;
