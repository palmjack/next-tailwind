import { useEffect } from 'react';
import type { NextPage } from 'next';
import soap from 'soap';

const soapConnect = async (): Promise<void> => {
  const client = await soap.createClientAsync('https://www.w3schools.com/xml/tempconvert.asmx?WSDL');
  console.log(client.describe());
};

const Soap: NextPage = () => {
  useEffect(() => {
    soapConnect();
  }, []);

  return <div>soap</div>;
};

export default Soap;
