import {
  ConnectionProvider,
  WalletProvider
} from "@solana/wallet-adapter-react";
import {
  LedgerWalletAdapter,
  PhantomWalletAdapter,
  SlopeWalletAdapter,
  SolflareWalletAdapter,
  SolletExtensionWalletAdapter,
  SolletWalletAdapter,
  TorusWalletAdapter
} from "@solana/wallet-adapter-wallets";
import React, { FC, useMemo } from "react";

export const DEFAULT_ENDPOINT = "https://thrilling-radial-sound.solana-mainnet.quiknode.pro/8fe764c0ef90c722ac80bcdb6e2c81d9c0dfad74/"

// Default styles that can be overridden by your app
require("@solana/wallet-adapter-react-ui/styles.css");

export const Wallet: FC = ({ children }) => {
  // @solana/wallet-adapter-wallets includes all the adapters but supports tree shaking and lazy loading --
  // Only the wallets you configure here will be compiled into your application, and only the dependencies
  // of wallets that your users connect to will be loaded
  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
      // new SlopeWalletAdapter(),
      // new SolflareWalletAdapter(),
      // new TorusWalletAdapter(),
      // new LedgerWalletAdapter(),
      // new SolletWalletAdapter({}),
      // new SolletExtensionWalletAdapter({}),
    ],
    []
  );


  return (
    <ConnectionProvider endpoint={DEFAULT_ENDPOINT}>
      <WalletProvider wallets={wallets} autoConnect>
        {children}
      </WalletProvider>
    </ConnectionProvider>
  );
};
