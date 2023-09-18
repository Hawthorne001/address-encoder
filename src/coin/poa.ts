import { Coin } from "../types";
import {
  createHexChecksummedDecoder,
  createHexChecksummedEncoder,
} from "../utils/hex";
  
const name = "POA";
const evmChainId = 99;
const coinType = 2147483747;
  
export const encodePoaAddress = createHexChecksummedEncoder();
export const decodePoaAddress = createHexChecksummedDecoder();
  
export const poa = {
  name,
  coinType,
  evmChainId,
  encode: encodePoaAddress,
  decode: decodePoaAddress,
} as const satisfies Coin;
