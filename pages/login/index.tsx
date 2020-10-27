import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import Login from '@components/login';

const LoginPage = ({ siteKey }: { siteKey: string }) => {
  return (
    <GoogleReCaptchaProvider reCaptchaKey={siteKey}>
      <Login />
    </GoogleReCaptchaProvider>
  );
};

// export const getServerSideProps = async () => {
//     const siteKey = process.env.RECAPTCHA_SITE_KEY;
//     if (siteKey) {
//         return { props: { siteKey } };
//     }
// };

export default LoginPage;
