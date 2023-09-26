import { Wallet } from "ethers";

// Test mnemonic - Kindly do not transfer real assets to this account
const mnemonic: string = 'candy maple cake sugar pudding cream honey rich smooth crumble sweet treat';

const createPrivateKeyList = (num: number = 5, mn: string = mnemonic, index: number = 0, path: string = "m/44'/60'/0'/0/"): string[] => {
  let accounts: string[] = [];
  let i: number;
  for (i = 0; i < num; i++) {
    accounts.push(Wallet.fromMnemonic(mn, path + i).privateKey);
  }
  return accounts;
};

const makeSignerList = (num: number = 1, mn: string = mnemonic, index: number = 0, path: string = "m/44'/60'/0'/0/"): Wallet[] => {
  let accounts: Wallet[] = [];
  let i: number;
  for (i = 0; i < num; i++) {
    accounts.push(Wallet.fromMnemonic(mn, path + i));
  }
  return accounts;
};

const localWallet = (b: number, num: number = 1, mn: string = mnemonic, index: number = 0, path: string = "m/44'/60'/0'/0/"): { privateKey: string, balance: number }[] => {
  const hdW: string[] = createPrivateKeyList(num, mn, index, path);
  let lW: { privateKey: string, balance: number }[] = [];
  let i: number;
  for (i = 0; i < hdW.length; i++) {
    lW.push({ privateKey: hdW[i], balance: b });
  }
  return lW;
};

const ganacheWallet = (b: number, num: number = 1, mn: string = mnemonic, index: number = 0, path: string = "m/44'/60'/0'/0/"): { secretKey: string, balance: number }[] => {
  const hdW: string[] = createPrivateKeyList(num, mn, index, path);
  let lW: { secretKey: string, balance: number }[] = [];
  let i: number;
  for (i = 0; i < hdW.length; i++) {
    lW.push({ secretKey: hdW[i], balance: b });
  }
  return lW;
};

export {
    createPrivateKeyList,
    makeSignerList,
    localWallet,
    ganacheWallet
}