import axios from 'axios';
import { NextPageContext } from 'next';

export const buildClient = ({ req }: NextPageContext) => {
    if (typeof window === 'undefined') {
        // we are on the server
        // ingress routes api request between services
        return axios.create({
            baseURL: `http://ingress-nginx-controller.ingress-nginx.svc.cluster.local`,
            headers: req?.headers,
        });
    } else {
        // we must be on the browser
        return axios.create({
            baseURL: '/',
        });
    }
};
