import { useState, useEffect } from 'react';
import io from 'socket.io-client';

interface IRequestTypes {
  url: string;
  method: string;
  body: any;
  onSuccess: any;
}

export const useSocket = (socketUrl: any) => {
  const [socket, setSocket] = useState<any>(null);

  useEffect(() => {
    const socketIo = io(socketUrl);

    setSocket(socketIo);

    function cleanup() {
      socketIo.disconnect();
    }
    return cleanup;

    // should only run once and not on every re-render,
    // so pass an empty array
  }, []);

  return socket;
};
