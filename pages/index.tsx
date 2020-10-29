// import Link from 'next/link';
// import { NextPageContext } from 'next';

// @ts-ignore
// import ATL from '../__atl__/src/core/';
import { Card, Elevation, Drawer } from '@blueprintjs/core';
import { FlexBanner } from 'src/lib/globalStyles';
import Home from '@components/pages/home';
export interface ITradeHistory {
  quantity: number;
  price: number;
  time: string;
}

const HomePage = () => {
  return (
    <>
      {/* <FlexBanner /> */}
      <Home />
    </>
  );
};

// ssr

export default HomePage;
