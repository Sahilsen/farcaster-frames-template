export type FrameSignaturePacket = {
  untrustedData: {
    fid: number;
    url: string;
    messageHash: string;
    timestamp: number;
    network: number;
    buttonIndex: number;
    inputText?: string;
    castId: {
      fid: number;
      hash: string;
    };
  };
  trustedData: {
    messageBytes: string;
  };
};
export interface TokenBalance {
  name: string; // Token Name
  address: string; // Token Address
  totalBalance: string; // Token Balance
  decimals: string; // Token Decimal Places
}