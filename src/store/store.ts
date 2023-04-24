import { create } from 'zustand';
import { UserStore } from './types';
// middleware saves data to storage
// import { persist } from 'zustand/middleware';

export const useUser = create<UserStore>(
  // persist<UserStore>(
  (set) => ({
    auth: undefined,
    setAuth: (auth) => set({ auth }),
  })
  //   { name: 'user' }
  // )
);
