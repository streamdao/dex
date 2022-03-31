import { $funds, findFundFx } from '.';

import './effects';
import { PublicKey } from '@solana/web3.js';
import { AppGate } from '../app';

$funds.on(findFundFx.doneData, (state, newFund) => [
  ...state.filter((find) => !find.pubkey.equals(newFund.pubkey)),
  newFund,
]);

// TODO: temp
const fundAddress = new PublicKey(
  'HFWxF9iwKKQEsJVysz9n18vHuQCaRrnCgfGhkCuPKZuk',
);
AppGate.open.watch(() => {
  findFundFx(fundAddress);
});
