import { SwapComponent } from '@/components/SwapComponent';
import { TokenDisplay } from '@/components/TokenDisplay';
import { Container } from '@chakra-ui/react';
import { usePublicKey } from '@strata-foundation/react';
import type { InferGetServerSidePropsType, NextPage } from 'next';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import React from 'react';
import { MarketplaceFrom } from '../components/MarketplaceForm';
import styles from '../styles/Home.module.css';

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      foo: "bar"
    }
  }
}

const Home: NextPage = ({ foo }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  console.log("Hello12");
  // const myPublicKey = usePublicKey();
  return (
    <div className={styles.container}>
      <Head>
        <title>Swap </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Container>
          {/* <MarketplaceFrom /> */}
          <SwapComponent />
          {/* <TokenDisplay/> */}
        </Container>
      </main>
    </div>
  );
};

export default Home;
