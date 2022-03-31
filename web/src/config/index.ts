// the default commitment used by the Solana web3 connection when checking the blockchain state
import { Commitment, PublicKey } from '@solana/web3.js';

export const isDev =
  process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test';

export const cryptoCompareApiKey = process.env.REACT_APP_CRYPTO_COMPARE_API_KEY;

export const defaultCommitment: Commitment =
  (process.env.REACT_APP_DEFAULT_COMMITMENT as Commitment) || 'processed';

// the amount of time to sleep after sending a transaction
// in order to work around a known Solana web3 bug
export const postTransactionSleepMS = Number(
  process.env.REACT_APP_POST_TRANSACTION_SLEEP_MS,
);

export const TOKEN_PROGRAM_ID = new PublicKey(
  'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
);

export const STR_PROGRAM_ID = new PublicKey(
  process.env.REACT_APP_STR_PROGRAM_ID ||
    'FuSZkVMihAtrZYfD2UUqnRDcCmbW6XqvrPWWAWxc8LM7',
);

export const SWAP_PROGRAM_ID = new PublicKey(
  process.env.REACT_APP_SWAP_PROGRAM_ID ||
    'En3jYk8Y68PkMYgzZ1bL7oDDTpSUHDJgwGdM1LsrRfCu',
);

export const HOST_FEE_VAULT = new PublicKey(
  process.env.REACT_APP_HOST_FEE_VAULT ||
    '5P3giWpPBrVKL8QP8roKM7NsLdi3ie1Nc2b5r9mGtvwb',
);
