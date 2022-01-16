// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import GetTokens from '../../components/utils/get-tokens';

type Data = {
  name: string;
  timestamp: string;
  version: {};
  keywords: [string];
  logoURI: string;
  tokens: [...any];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const result: any = GetTokens();
    res.send(result);
  } catch (error: any) {
    throw new Error(error);
  }
}
