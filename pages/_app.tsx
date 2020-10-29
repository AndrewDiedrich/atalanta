// using node-style package resolution in a CSS file:
import 'normalize.css';
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';
import fs from 'fs';
import path from 'path';
import { useState } from 'react';
import { Card, FormGroup, InputGroup } from '@blueprintjs/core';

// wrapper around all pages

const AppComponent = ({ Component, pageProps, filenames }: any): any => {
  const [login, setLogin] = useState(false);
  const [pw, setPw] = useState<string>('');

  const checkPassword = (value: string) => {
    setPw(value);
    if (value === 'chintaiadminpassword') {
      setLogin(false);
    }
  };
  return (
    <div>
      {login ? (
        <Card elevation={2} style={{ margin: '20vh auto', width: '400px' }}>
          <img
            src="/images/logo-gray-bg.png"
            style={{ width: '350px', height: 'auto' }}
          />

          <FormGroup
            disabled={false}
            helperText={false && 'Helper text with details...'}
            inline={true}
            label={true && 'Password'}
            labelFor="pw"
            labelInfo={false && '(required)'}
          >
            <InputGroup
              id="admin-pword"
              placeholder="password"
              disabled={false}
              value={pw}
              type="text"
              onChange={(e: any) => checkPassword(e.target.value)}
            />
          </FormGroup>
          {/* <FormGroup
                disabled={false}
                helperText={false && 'Helper text with details...'}
                inline={true}
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
            </FormGroup> */}

          {/* <Checkbox checked={false} label="Accept Chintai's ">
                        <strong>Terms and Conditions</strong>
                    </Checkbox> */}

          {/* <Button intent={Intent.PRIMARY} fill onClick={(e: any) => onSubmit(e)}>
                        Register
                    </Button> */}
        </Card>
      ) : (
        <>
          <div>
            <Component {...pageProps} />
          </div>
        </>
      )}
    </div>
  );
};

// ssr
export const getServerSideProps = async () => {
  const postsDirectory = path.join(process.cwd(), './__atl__/src/core/');
  const filenames = fs.readdirSync(postsDirectory);
  filenames.filter((file) => file !== 'index.tsx');
  return { props: { filenames } };
};

export default AppComponent;
