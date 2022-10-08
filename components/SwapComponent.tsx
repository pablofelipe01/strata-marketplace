import { usePublicKey, Swap } from "@strata-foundation/react";
import { CSSReset } from "@chakra-ui/react";
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import ReactShadow from "react-shadow/emotion";

export function SwapComponent() {
  const { id: idRaw } = useVariables();
  const { publicKey } = useWallet();
  const { setVisible } = useWalletModal();
  // console.log(`Pubkey: $/{publicKey!.toString()}`);

  const id = usePublicKey(idRaw);

  return <div>
      { publicKey ?
        <Swap id={id} />
        : <div>Please sign in with your wallet first</div>
      }
  </div>
}

function useVariables(): { id: any; } {
  return { id: "4HK5WwBnX3ATZrw56stf1xuY9PPCU7D9nvkLPLFVy9Tq"}
} 

