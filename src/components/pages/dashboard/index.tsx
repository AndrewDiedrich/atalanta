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
import ChartAnimtion from 'src/components/shared/animations/chartAnimation';
import { FlexRow, FlexColumn } from 'src/lib/globalStyles';
const Dashboard = () => {
  return (
    <FlexColumn style={{ alignItems: 'center' }}>
      <Orderbook />
      <ChartAnimtion />
    </FlexColumn>
  );
};

// export const getServerSideProps = async () => {
//   //   const siteKey = process.env.RECAPTCHA_SITE_KEY;
//   //   if (siteKey) {
//   //     return { props: { siteKey } };
//   //   }
// };

export default Dashboard;
