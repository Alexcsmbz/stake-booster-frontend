export type UserStore = {
  auth?: WavesKeeper.IAuthResponse;
  setAuth: (value: WavesKeeper.IAuthResponse) => void;
};
