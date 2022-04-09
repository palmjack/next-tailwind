import type { NextApiRequest, NextApiResponse } from 'next';
import { getSoapClient } from 'soap/client';

const handler = async (_req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  // const client = await soap.createClientAsync('https://www.w3schools.com/xml/tempconvert.asmx?WSDL');
  // client
  //   .CelsiusToFahrenheitAsync({ Celsius: 100 })
  //   .then()
  //   .catch((err) => console.log(err));
  const client = await getSoapClient();
  const result = await client.AddAsync({ intA: 1, intB: 3 });

  return res.status(200).json(result);
};

export default handler;
