import { create } from 'zustand';
import { UserStore, InfoStore } from './types';
// middleware saves data to storage
// import { persist } from 'zustand/middleware';

export const useUser = create<UserStore>(
  // persist<UserStore>(
  (set) => ({
    auth: undefined,
    totalSurfStaked: 0,
    totalSurfPendingForWithdrawal: 0,
    canWithdraw: false,
    setAuth: (auth) => set({ auth }),
    updateUserInfo: async (wallet: string) => {
      const res = await fetch(`${process.env.REACT_APP_API_URL}info/${wallet}`);
      const userInfo = await res.json();
      set({ ...userInfo.data });
    },
  })
  //   { name: 'user' }
  // )
);

export const useInfo = create<InfoStore>(
  // persist<UserStore>(
  (set) => ({
    totalSurfStaked: 0,
    isSwapActive: false,
    apy: '0',
    blocksToNextSwap: 0,
    surfScPrice: 0,
    gNsbt: 0,
    totalRevenueXtn: 0,
    totalRevenueWaves: 0,
    totalRevenueWX: 0,
    updateInfo: async () => {
      const res = await fetch(`${process.env.REACT_APP_API_URL}info`);
      const info = await res.json();

      set({ ...info.data });
    },
  })
  //   { name: 'user' }
  // )
);
