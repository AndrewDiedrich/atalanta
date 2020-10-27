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
const HomeOptions = () => {
  return (
    <FlexColumn style={{ alignItems: 'center' }}>
      <FlexRow
        style={{
          paddingBottom: '10px',
          justifyContent: 'space-between',
          maxWidth: '700px',
          width: '100%',
        }}
      >
        <Card
          style={{ minWidth: '200px', minHeight: '220px' }}
          interactive
          elevation={2}
        >
          <Icon
            icon="user"
            style={{ margin: '0 10px 0 0' }}
            iconSize={26}
            intent={Intent.PRIMARY}
          />
          Users
          <Divider />
        </Card>

        <Card
          style={{ minWidth: '200px', minHeight: '220px' }}
          interactive
          elevation={2}
        >
          <Icon
            style={{ margin: '0 10px 0 0' }}
            iconSize={26}
            intent={Intent.PRIMARY}
            icon="bank-account"
          />
          Pay Expenses
          <Divider />
        </Card>

        <Card
          style={{ minWidth: '200px', minHeight: '220px' }}
          interactive
          elevation={2}
        >
          <Icon
            style={{ margin: '0 10px 0 0' }}
            iconSize={26}
            intent={Intent.PRIMARY}
            icon="series-add"
          />
          Register Market
          <Divider />
        </Card>
      </FlexRow>
      <FlexRow
        style={{
          paddingBottom: '10px',
          justifyContent: 'space-between',
          maxWidth: '700px',
          width: '100%',
        }}
      >
        <Card
          style={{ minWidth: '200px', minHeight: '220px' }}
          interactive
          elevation={2}
        >
          <Icon
            style={{ margin: '0 10px 0 0' }}
            iconSize={26}
            intent={Intent.PRIMARY}
            icon="dollar"
          />
          Balances
          <Divider />
        </Card>
        <Card
          style={{ minWidth: '200px', minHeight: '220px' }}
          interactive
          elevation={2}
        >
          <Icon
            style={{ margin: '0 10px 0 0' }}
            iconSize={26}
            intent={Intent.PRIMARY}
            icon="wrench"
          />
          Exchange Command
          <Divider />
        </Card>
        <Card
          style={{ minWidth: '200px', minHeight: '220px' }}
          interactive
          elevation={2}
        >
          <Icon
            style={{ margin: '0 10px 0 0' }}
            iconSize={26}
            intent={Intent.PRIMARY}
            icon="lab-test"
          />
          Misc
          <Divider />
        </Card>
      </FlexRow>
      <Orderbook />
    </FlexColumn>
  );
};

// export const getServerSideProps = async () => {
//   //   const siteKey = process.env.RECAPTCHA_SITE_KEY;
//   //   if (siteKey) {
//   //     return { props: { siteKey } };
//   //   }
// };

export default HomeOptions;
