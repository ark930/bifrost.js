export default {
  types: {
    CurrencyId: {
      _enum: ['ACA', 'AUSD', 'DOT', 'XBTC', 'LDOT']
    },
    AirDropCurrencyId: {
      _enum: ['KAR', 'ACA']
    },
    Token: {
      symbol: 'Vec<u8>',
      precision: 'u16',
      totalSupply: 'Balance'
    },
    TokenType: {
      _enum: ["Token", "VToken"]
    },
  }
};
