import { type RecoilState, useRecoilState, atom } from "recoil";
import * as SecureStore from "expo-secure-store";

const USER_TOKEN_KEY = "UserTokenKey";

const saveToken = async (token: string): Promise<void> => {
  await SecureStore.setItemAsync(USER_TOKEN_KEY, token);
};

const retrieveToken = async (): Promise<string | null> => {
  const token = await SecureStore.getItemAsync(USER_TOKEN_KEY);
  return token;
};

const clearToken = async (): Promise<void> => {
  await SecureStore.deleteItemAsync(USER_TOKEN_KEY);
};

export const tokenState: RecoilState<string | null> = atom({
  key: "UserToken",
  default: retrieveToken(),
});

export const useAuthToken = () => {
  const [token, setToken] = useRecoilState(tokenState);

  return {
    token: token,
    saveToken: (token: string) => {
      saveToken(token);
      setToken(token);
    },
    retrieveToken,
    clearToken: () => {
      clearToken();
      setToken(null);
    },
  };
};
