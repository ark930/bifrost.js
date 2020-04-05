// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import { Enum, Struct } from '@polkadot/types/codec';
import { Bytes, u16 } from '@polkadot/types/primitive';
import { Balance } from '@bifrost-network/types/interfaces/runtime';

/** @name AirDropCurrencyId */
export interface AirDropCurrencyId extends Enum {
  readonly isKar: boolean;
  readonly isAca: boolean;
}

/** @name CurrencyId */
export interface CurrencyId extends Enum {
  readonly isAca: boolean;
  readonly isAusd: boolean;
  readonly isDot: boolean;
  readonly isXbtc: boolean;
  readonly isLdot: boolean;
}

/** @name Token */
export interface Token extends Struct {
  readonly symbol: Bytes;
  readonly precision: u16;
  readonly totalSupply: Balance;
}

/** @name TokenType */
export interface TokenType extends Enum {
  readonly isToken: boolean;
  readonly isVToken: boolean;
}

export type PHANTOM_PRIMITIVES = 'primitives';
