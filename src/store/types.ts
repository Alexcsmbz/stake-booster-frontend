export type UserStore = {
  auth?: WavesKeeper.IAuthResponse;
  totalSurfStaked: number;
  totalSurfPendingForWithdrawal: number;
  canWithdraw: boolean;
  setAuth: (value: WavesKeeper.IAuthResponse) => void;
  updateUserInfo: (wallet: string) => void;
};

export type Info = {
  totalSurfStaked: number;
  isSwapActive: boolean;
  apy: string;
  blocksToNextSwap: number;
  surfScPrice: number;
  gNsbt: number;
  totalRevenueXtn: number;
  totalRevenueWaves: number;
  totalRevenueWX: number;
};

export type InfoStore = Info & { updateInfo: () => void };
