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
} from '@blueprintjs/core';

const Orderbook = () => {
  const [rows, setRows] = useState<Array<any>>([]);
  const socket = useSocket('ws://localhost:8060');

  useEffect(() => {
    function handleEvent(payload: any) {
      setRows(payload);
      // HelloWorld
    }
    if (socket) {
      socket.on('connect', (payload: any) => {
        socket.on('level1', (payload: any) => {
          console.log(payload);
          setRows(payload);
        });
      });
    }
  }, [socket]);

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
      <Collapse isOpen={true} keepChildrenMounted={true}>
        <Pre>{rows.length > 0 ? renderAskRows() : <Spinner />}</Pre>
      </Collapse>
      <Collapse isOpen={true} keepChildrenMounted={true}>
        <Pre>{rows.length > 0 ? renderBidRows() : <Spinner />}</Pre>
      </Collapse>
    </Card>
  );
};

export default Orderbook;
