import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import { NextPageContext } from 'next';
import { buildClient } from 'src/api/build-client';
import Keys from 'src/components/login/register/keys';
// import { FlexColumn } from '@globalStyles';
// import TradeHistory from '@components/exchange/tradeHistory';

const ConfirmKeys = ({ siteKey }: { siteKey: string }) => {
  return (
    <GoogleReCaptchaProvider reCaptchaKey={siteKey}>
      <Keys />
    </GoogleReCaptchaProvider>
  );
};

// export const getServerSideProps = async (appContext: NextPageContext) => {
//     const client = buildClient(appContext);
//     const { data } = await client.get(`/api/users/currentuser`);
//     if (!data.currentUser) {
//         appContext.res!.writeHead(302, {
//             Location: '/login',
//         });
//         appContext.res!.end();
//         return {};
//     } else {
//         return { props: { siteKey: process.env.RECAPTCHA_SITE_KEY } };
//     }
// };

export default ConfirmKeys;
