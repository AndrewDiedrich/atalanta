import axios from 'axios';
import { useState } from 'react';
import { Callout, Intent } from '@blueprintjs/core';

interface IRequestTypes {
    url: string;
    method: string;
    body: any;
    onSuccess: any;
}

export const useRequest = ({ url, method, body, onSuccess }: IRequestTypes) => {
    const [errors, setErrors] = useState<any>(null);

    const doRequest = async (additionalBody: any = {}, props: any = {}) => {
        try {
            setErrors(null);
            let finalBody = { ...body, ...additionalBody };
            // @ts-ignore
            const response = await axios[method](url, { ...finalBody, ...props });

            // after a successful response
            if (onSuccess) {
                onSuccess(response.data);
            }
            console.log('in try after response');
            return response.data;
        } catch (err) {
            setErrors(
                <Callout intent={Intent.DANGER} title={'Error'}>
                    <ul>
                        {err.response?.data.errors.map((err: any) => (
                            <li key={err.message}>{err.message}</li>
                        ))}
                    </ul>
                </Callout>,
            );
        }
    };

    return { doRequest, errors };
};
