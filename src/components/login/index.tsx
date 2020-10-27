import { useState } from 'react';
import Router from 'next/router';
import { useRequest } from 'src/hooks/use-request';
import { Card, Button, Tabs, Tab, FormGroup, InputGroup, Intent, Checkbox, Icon, TabId } from '@blueprintjs/core';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import RegisterTab from './registerTab';
import LoginTab from './loginTab';

export interface ITradeHistory {
    quantity: number;
    price: number;
    time: string;
}

const Login = () => {
    const [loginPanelTabId, setLoginPanelTabId] = useState('register');

    const handleLoginPanelTabId = (loginPanelTabId: string) => setLoginPanelTabId(loginPanelTabId);

    return (
        <Card elevation={2} style={{ margin: '0 auto', width: '400px' }}>
            <img src="/images/logo-gray-bg.png" style={{ width: '350px', height: 'auto' }} />
            <Tabs
                animate={true}
                id="navbar"
                large={true}
                selectedTabId={loginPanelTabId}
                onChange={handleLoginPanelTabId}
            >
                <Tab id="login" title="Login" />
                <Tab id="register" title="Register" />
            </Tabs>
            {loginPanelTabId === 'register' ? <RegisterTab /> : <LoginTab />}
        </Card>
    );
};

export default Login;
