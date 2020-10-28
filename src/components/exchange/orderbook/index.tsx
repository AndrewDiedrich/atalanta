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
import { TAG } from '@blueprintjs/core/lib/esm/common/classes';

const Orderbook = () => {
  const [rows, setRows] = useState<Array<any>>([]);
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
    return rows[0].rows.map((row: any) => {
      return (
        <>
          <Code>{`${row.date} ${row.price}: ${row.value}`}</Code>
          <br />
        </>
      );
    });
  };

  const renderBidRows = () => {
    return rows[1].rows.map((row: any) => {
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
        <Pre>{rows.length > 0 ? renderAskRows() : rowSkeleton()}</Pre>
      </Collapse>
      <Tag intent={Intent.SUCCESS}>Bid</Tag>
      <Collapse isOpen={true} keepChildrenMounted={true}>
        <Pre>{rows.length > 0 ? renderBidRows() : rowSkeleton()}</Pre>
      </Collapse>
    </Card>
  );
};

export default Orderbook;
