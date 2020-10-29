import Image from 'next/image';
import {
  Card,
  Button,
  Tabs,
  Tab,
  FormGroup,
  H4,
  Intent,
  Icon,
  Divider,
} from '@blueprintjs/core';
import Orderbook from 'src/components/exchange/orderbook';
import { FlexRow, FlexColumn } from 'src/lib/globalStyles';
import Link from 'next/link';
const Home = () => {
  return (
    <FlexColumn
      style={{
        alignItems: 'center',
        width: '100%',
        background: 'linear-gradient(to bottom, #898989, #202B33)',
      }}
    >
      <FlexRow
        style={{
          height: '60vh',
        }}
      >
        <FlexColumn>
          <FlexRow style={{ paddingTop: '20vh' }}>
            <Image
              src="/images/hermes_logo.svg"
              alt="hermes.exec()"
              width={350}
              height={150}
            />
          </FlexRow>
          <FlexRow style={{ justifyContent: 'space-around' }}>
            <Link href="/dashboard">
              <Button intent={Intent.NONE} minimal style={{ color: 'white' }}>
                Dashboard
              </Button>
            </Link>
            <Link href="/dashboard">
              <Button intent={Intent.NONE} minimal style={{ color: 'white' }}>
                Github
              </Button>
            </Link>
          </FlexRow>
        </FlexColumn>
      </FlexRow>
      <FlexRow
        style={{
          height: '40vh',

          alignItems: 'center',
          width: '100%',
        }}
      >
        <div style={{ paddingLeft: '2em', margin: 'auto auto 0 auto' }}>
          <Image
            src="/images/powered-chintai-white.svg"
            alt="hermes.exec()"
            width={200}
            height={100}
          />
        </div>
      </FlexRow>
    </FlexColumn>
  );
};

// export const getServerSideProps = async () => {
//   //   const siteKey = process.env.RECAPTCHA_SITE_KEY;
//   //   if (siteKey) {
//   //     return { props: { siteKey } };
//   //   }
// };

export default Home;
