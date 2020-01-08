[
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: '_reserve',
        type: 'address'
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_user',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_borrowRateMode',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_borrowRate',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_originationFee',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_borrowBalanceIncrease',
        type: 'uint256'
      },
      {
        indexed: true,
        internalType: 'uint16',
        name: '_referral',
        type: 'uint16'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_timestamp',
        type: 'uint256'
      }
    ],
    name: 'Borrow',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: '_reserve',
        type: 'address'
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_user',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256'
      },
      {
        indexed: true,
        internalType: 'uint16',
        name: '_referral',
        type: 'uint16'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_timestamp',
        type: 'uint256'
      }
    ],
    name: 'Deposit',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: '_target',
        type: 'address'
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_reserve',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_totalFee',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_protocolFee',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_timestamp',
        type: 'uint256'
      }
    ],
    name: 'FlashLoan',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: '_collateral',
        type: 'address'
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_reserve',
        type: 'address'
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_user',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_purchaseAmount',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_liquidatedCollateralAmount',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_accruedBorrowInterest',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'address',
        name: '_liquidator',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'bool',
        name: '_receiveAToken',
        type: 'bool'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_timestamp',
        type: 'uint256'
      }
    ],
    name: 'LiquidationCall',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: '_collateral',
        type: 'address'
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_reserve',
        type: 'address'
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_user',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_feeLiquidated',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_liquidatedCollateralForFee',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_timestamp',
        type: 'uint256'
      }
    ],
    name: 'OriginationFeeLiquidated',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: '_reserve',
        type: 'address'
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_user',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_newStableRate',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_borrowBalanceIncrease',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_timestamp',
        type: 'uint256'
      }
    ],
    name: 'RebalanceStableBorrowRate',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: '_reserve',
        type: 'address'
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_user',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_timestamp',
        type: 'uint256'
      }
    ],
    name: 'RedeemUnderlying',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: '_reserve',
        type: 'address'
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_user',
        type: 'address'
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_repayer',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_amountMinusFees',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_fees',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_borrowBalanceIncrease',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_timestamp',
        type: 'uint256'
      }
    ],
    name: 'Repay',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: '_reserve',
        type: 'address'
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_user',
        type: 'address'
      }
    ],
    name: 'ReserveUsedAsCollateralDisabled',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: '_reserve',
        type: 'address'
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_user',
        type: 'address'
      }
    ],
    name: 'ReserveUsedAsCollateralEnabled',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: '_reserve',
        type: 'address'
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_user',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_newRateMode',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_newRate',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_borrowBalanceIncrease',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_timestamp',
        type: 'uint256'
      }
    ],
    name: 'Swap',
    type: 'event'
  },
  {
    constant: true,
    inputs: [],
    name: 'LENDINGPOOL_REVISION',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [],
    name: 'UINT_MAX_VALUE',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [],
    name: 'addressesProvider',
    outputs: [
      {
        internalType: 'contract LendingPoolAddressesProvider',
        name: '',
        type: 'address'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [],
    name: 'core',
    outputs: [
      {
        internalType: 'contract LendingPoolCore',
        name: '',
        type: 'address'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [],
    name: 'dataProvider',
    outputs: [
      {
        internalType: 'contract LendingPoolDataProvider',
        name: '',
        type: 'address'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [],
    name: 'parametersProvider',
    outputs: [
      {
        internalType: 'contract LendingPoolParametersProvider',
        name: '',
        type: 'address'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: false,
    inputs: [
      {
        internalType: 'contract LendingPoolAddressesProvider',
        name: '_addressesProvider',
        type: 'address'
      }
    ],
    name: 'initialize',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    constant: false,
    inputs: [
      {
        internalType: 'address',
        name: '_reserve',
        type: 'address'
      },
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256'
      },
      {
        internalType: 'uint16',
        name: '_referralCode',
        type: 'uint16'
      }
    ],
    name: 'deposit',
    outputs: [],
    payable: true,
    stateMutability: 'payable',
    type: 'function'
  },
  {
    constant: false,
    inputs: [
      {
        internalType: 'address',
        name: '_reserve',
        type: 'address'
      },
      {
        internalType: 'address payable',
        name: '_user',
        type: 'address'
      },
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: '_aTokenBalanceAfterRedeem',
        type: 'uint256'
      }
    ],
    name: 'redeemUnderlying',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    constant: false,
    inputs: [
      {
        internalType: 'address',
        name: '_reserve',
        type: 'address'
      },
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: '_interestRateMode',
        type: 'uint256'
      },
      {
        internalType: 'uint16',
        name: '_referralCode',
        type: 'uint16'
      }
    ],
    name: 'borrow',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    constant: false,
    inputs: [
      {
        internalType: 'address',
        name: '_reserve',
        type: 'address'
      },
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256'
      },
      {
        internalType: 'address payable',
        name: '_onBehalfOf',
        type: 'address'
      }
    ],
    name: 'repay',
    outputs: [],
    payable: true,
    stateMutability: 'payable',
    type: 'function'
  },
  {
    constant: false,
    inputs: [
      {
        internalType: 'address',
        name: '_reserve',
        type: 'address'
      }
    ],
    name: 'swapBorrowRateMode',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    constant: false,
    inputs: [
      {
        internalType: 'address',
        name: '_reserve',
        type: 'address'
      },
      {
        internalType: 'address',
        name: '_user',
        type: 'address'
      }
    ],
    name: 'rebalanceStableBorrowRate',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    constant: false,
    inputs: [
      {
        internalType: 'address',
        name: '_reserve',
        type: 'address'
      },
      {
        internalType: 'bool',
        name: '_useAsCollateral',
        type: 'bool'
      }
    ],
    name: 'setUserUseReserveAsCollateral',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    constant: false,
    inputs: [
      {
        internalType: 'address',
        name: '_collateral',
        type: 'address'
      },
      {
        internalType: 'address',
        name: '_reserve',
        type: 'address'
      },
      {
        internalType: 'address',
        name: '_user',
        type: 'address'
      },
      {
        internalType: 'uint256',
        name: '_purchaseAmount',
        type: 'uint256'
      },
      {
        internalType: 'bool',
        name: '_receiveAToken',
        type: 'bool'
      }
    ],
    name: 'liquidationCall',
    outputs: [],
    payable: true,
    stateMutability: 'payable',
    type: 'function'
  },
  {
    constant: false,
    inputs: [
      {
        internalType: 'address',
        name: '_receiver',
        type: 'address'
      },
      {
        internalType: 'address',
        name: '_reserve',
        type: 'address'
      },
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256'
      },
      {
        internalType: 'bytes',
        name: '_params',
        type: 'bytes'
      }
    ],
    name: 'flashLoan',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    constant: true,
    inputs: [
      {
        internalType: 'address',
        name: '_reserve',
        type: 'address'
      }
    ],
    name: 'getReserveConfigurationData',
    outputs: [
      {
        internalType: 'uint256',
        name: 'ltv',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: 'liquidationThreshold',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: 'liquidationBonus',
        type: 'uint256'
      },
      {
        internalType: 'address',
        name: 'interestRateStrategyAddress',
        type: 'address'
      },
      {
        internalType: 'bool',
        name: 'usageAsCollateralEnabled',
        type: 'bool'
      },
      {
        internalType: 'bool',
        name: 'borrowingEnabled',
        type: 'bool'
      },
      {
        internalType: 'bool',
        name: 'stableBorrowRateEnabled',
        type: 'bool'
      },
      {
        internalType: 'bool',
        name: 'isActive',
        type: 'bool'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [
      {
        internalType: 'address',
        name: '_reserve',
        type: 'address'
      }
    ],
    name: 'getReserveData',
    outputs: [
      {
        internalType: 'uint256',
        name: 'totalLiquidity',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: 'availableLiquidity',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: 'totalBorrowsStable',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: 'totalBorrowsVariable',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: 'liquidityRate',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: 'variableBorrowRate',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: 'stableBorrowRate',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: 'averageStableBorrowRate',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: 'utilizationRate',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: 'liquidityIndex',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: 'variableBorrowIndex',
        type: 'uint256'
      },
      {
        internalType: 'address',
        name: 'aTokenAddress',
        type: 'address'
      },
      {
        internalType: 'uint40',
        name: 'lastUpdateTimestamp',
        type: 'uint40'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [
      {
        internalType: 'address',
        name: '_user',
        type: 'address'
      }
    ],
    name: 'getUserAccountData',
    outputs: [
      {
        internalType: 'uint256',
        name: 'totalLiquidityETH',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: 'totalCollateralETH',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: 'totalBorrowsETH',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: 'totalFeesETH',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: 'availableBorrowsETH',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: 'currentLiquidationThreshold',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: 'ltv',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: 'healthFactor',
        type: 'uint256'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [
      {
        internalType: 'address',
        name: '_reserve',
        type: 'address'
      },
      {
        internalType: 'address',
        name: '_user',
        type: 'address'
      }
    ],
    name: 'getUserReserveData',
    outputs: [
      {
        internalType: 'uint256',
        name: 'currentATokenBalance',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: 'currentBorrowBalance',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: 'principalBorrowBalance',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: 'borrowRateMode',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: 'borrowRate',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: 'liquidityRate',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: 'originationFee',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: 'variableBorrowIndex',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: 'lastUpdateTimestamp',
        type: 'uint256'
      },
      {
        internalType: 'bool',
        name: 'usageAsCollateralEnabled',
        type: 'bool'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [],
    name: 'getReserves',
    outputs: [
      {
        internalType: 'address[]',
        name: '',
        type: 'address[]'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  }
];
