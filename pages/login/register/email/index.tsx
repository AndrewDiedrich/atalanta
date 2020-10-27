import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import { useEffect } from 'react';
import { NextPageContext } from 'next';
import { useRouter } from 'next/router';
import Email from 'src/components/login/register/email';
// import { FlexColumn } from '@globalStyles';
// import TradeHistory from '@components/exchange/tradeHistory';
// import DepositButton from '@components/exchange/depositButton';

const ConfirmEmail = ({
  siteKey,
  email,
  token,
}: {
  siteKey: string;
  email: string;
  token: number;
}) => {
  const router = useRouter();

  useEffect(() => {
    if (!email) router.push('/login');
  }, []);

  return (
    <GoogleReCaptchaProvider reCaptchaKey={siteKey}>
      <Email email={email} token={token} />
    </GoogleReCaptchaProvider>
  );
};

// export const getServerSideProps = async (appContext: NextPageContext) => {
//     const token = appContext.query.token ? appContext.query.token : null;
//     const { email } = appContext.query;
//     if (!email) {
//         appContext.res!.writeHead(302, {
//             Location: '/login',
//         });
//         appContext.res!.end();
//         return {};
//     } else {
//         return { props: { siteKey: process.env.RECAPTCHA_SITE_KEY, email, token } };
//     }
// };

export default ConfirmEmail;
