// import Link from 'next/link';
// import { NextPageContext } from 'next';

// @ts-ignore
// import ATL from '../__atl__/src/core/';
import fs from 'fs';
import path from 'path';
import { Card, Elevation, Drawer } from '@blueprintjs/core';
import { FlexBanner } from 'src/lib/globalStyles';
import Header from '@components/shared/header';
import Dashboard from '@components/pages/dashboard';
export interface ITradeHistory {
  quantity: number;
  price: number;
  time: string;
}

const HomePage = ({ filenames }: any) => {
  return (
    <>
      <Header filenames={filenames} />
      <Dashboard />
    </>
  );
};

// ssr
export const getServerSideProps = async () => {
  const postsDirectory = path.join(process.cwd(), './__atl__/src/core/');
  const filenames = fs.readdirSync(postsDirectory);
  filenames.filter((file) => file !== 'index.tsx');
  return { props: { filenames } };
};

export default HomePage;
