import { usePublicKey, Swap } from "@strata-foundation/react";
import { CSSReset, Text } from "@chakra-ui/react";
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import ReactShadow from "react-shadow/emotion";
import { Lbc } from "@strata-foundation/marketplace-ui";


export function SwapComponent() {
  const { id: idRaw } = useVariables();
  const { publicKey } = useWallet();
  const { setVisible } = useWalletModal();
  // console.log(`Pubkey: $/{publicKey!.toString()}`);

  const id = usePublicKey(idRaw);

  return <div>
      { publicKey ?
        <Swap id={id} />
        : <Text fontSize="25px" color='#5603FA' alignItems='right'>
          {/* 👉🏽 Please sign in with your wallet first ↗️ */}
          {/* <p>
          <a href="https://phantom.app/">No Wallet? click here 🆑 </a>
          </p> */}
          </Text>
      }
  </div>
}

function useVariables(): { id: any; } {
  return { id: "4HK5WwBnX3ATZrw56stf1xuY9PPCU7D9nvkLPLFVy9Tq"}
} 

