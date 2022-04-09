// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { log } from 'console';
import type { NextApiRequest, NextApiResponse } from 'next';
import * as soap from 'soap';

export default async function handler(_req: NextApiRequest, res: NextApiResponse): Promise<void> {
  const client = await soap.createClientAsync('https://www.w3schools.com/xml/tempconvert.asmx?WSDL');
  // const result = await client.CelsiusToFahrenheit({ Celsius: 100 });
  // console.log(result);
  log(client);

  res.status(200).json({ name: 'hello' });
}
