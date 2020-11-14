import { useEffect, useState } from 'react';
import { useSocket } from 'src/hooks/use-socket';
import {
  Icon,
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
import BookRows from './bookRows';

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
    return rows.asks.rows.map((row: any, index: number) => {
      return (
        <>
          <BookRows
            index={index}
            row={row}
            side={'asks'}
            widthPercent={Math.round((row.size / rows.totalAskSize) * 100)}
            color={'#e73a23ff'}
          />
        </>
      );
    });
  };

  const renderBidRows = () => {
    return rows.bids.rows.map((row: any, index: number) => {
      console.log(row.price * 100, Math.round(row.price * 100));
      return (
        <>
          <BookRows
            index={index}
            row={row}
            side={'bids'}
            widthPercent={Math.round((row.size / rows.totalBidSize) * 100)}
            color={'#7fc431ff'}
          />
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
          <Icon
            icon={
              rows.spread && rows.spread.side === 'asks'
                ? 'chevron-down'
                : 'chevron-up'
            }
          />
          Spread {rows.spread ? rows.spread.pct.toPrecision(2) : 0}%{' '}
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
