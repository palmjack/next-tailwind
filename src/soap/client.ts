import * as soap from 'soap';

let soapClient: Promise<soap.Client> | null = null;

export const getSoapClient = async (): Promise<soap.Client> => {
  console.log('running getSoapClient', !!soapClient);
  if (!soapClient) {
    soapClient = soap.createClientAsync('http://www.dneonline.com/calculator.asmx?wsdl');
  }

  return soapClient;
};
