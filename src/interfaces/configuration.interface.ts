export interface Configuration {
  email: {
    name: string;
    from: string;
    retries: number;
    ses?: {
      accessKeyId: string;
      secretAccessKey: string;
      region: string;
    };
    transport?: {
      host: string;
      port: number;
      secure: boolean;
      auth: {
        user: string;
        pass: string;
      };
    };
  };
}
