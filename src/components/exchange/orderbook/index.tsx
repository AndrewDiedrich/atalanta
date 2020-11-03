import { useEffect, useState } from 'react';
import { useSocket } from 'src/hooks/use-socket';
import {
  Spinner,
  Card,
  Pre,
  Collapse,
  Code,
  Intent,
  Colors,
  Classes,
  Tag,
} from '@blueprintjs/core';
import { FlexRow } from 'src/lib/globalStyles';

const Orderbook = () => {
  const [rows, setRows] = useState<any>([]);
  const socket = useSocket('ws://localhost:8060');

  useEffect(() => {
    if (socket) {
      socket.on('connect', (payload: any) => {
        socket.on('level1', (payload: any) => {
          console.log(payload);
          setRows(payload);
        });
      });
    }
  }, [socket]);

  const rowSkeleton = () => {
    return (
      <>
        <p className={Classes.SKELETON}>date: price row valkjlskdjflskdf</p>
        <p className={Classes.SKELETON}>date: price row valkjlskdjflskdf</p>
        <p className={Classes.SKELETON}>date: price row valkjlskdjflskdf</p>
        <p className={Classes.SKELETON}>date: price row valkjlskdjflskdf</p>
        <p className={Classes.SKELETON}>date: price row valkjlskdjflskdf</p>
        <p className={Classes.SKELETON}>date: price row valkjlskdjflskdf</p>
      </>
    );
  };

  const renderAskRows = () => {
    return rows.asks.rows.map((row: any) => {
      return (
        <>
          <Code>{`${row.date} ${row.price}: ${row.value}`}</Code>
          <br />
        </>
      );
    });
  };

  const renderBidRows = () => {
    return rows.bids.rows.map((row: any) => {
      return (
        <>
          <Code>{`${row.date} ${row.price}: ${row.value}`}</Code>
          <br />
        </>
      );
    });
  };
  return (
    <Card>
      <Tag intent={Intent.DANGER}>Ask</Tag>
      <Collapse isOpen={true} keepChildrenMounted={true}>
        <Pre>
          {rows.asks && rows.asks.rows.length > 0
            ? renderAskRows()
            : rowSkeleton()}
        </Pre>
      </Collapse>
      <FlexRow>
        <Code>
          Spread {rows.spread ? rows.spread.pct : 0}%{' '}
          {rows.spread ? rows.spread.diff : 0} last{' '}
          {rows.spread ? rows.spread.last : 0}
        </Code>
      </FlexRow>
      <Tag intent={Intent.SUCCESS}>Bid</Tag>
      <Collapse isOpen={true} keepChildrenMounted={true}>
        <Pre>
          {rows.bids && rows.bids.rows.length > 0
            ? renderBidRows()
            : rowSkeleton()}
        </Pre>
      </Collapse>
    </Card>
  );
};

export default Orderbook;
