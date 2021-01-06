type FetcherParams = RequestInit & {
  uri: string;
};

const handleErrors = (response: Response) => {
  let errorMessage = '';
  switch (response.status) {
    case 404:
      errorMessage = 'Server Not Found';
      break;
    case 400:
      errorMessage = 'Bad request';
      break;
    case 403:
      errorMessage = 'Forbidden';
      break;
    case 422:
      errorMessage = 'Bad request';
      break;
    case 500:
      errorMessage = 'Server error';
      break;
    default:
      errorMessage = response.statusText;
      break;
  }

  throw {
    statusCode: response.status,
    message: errorMessage,
  };
};

export const fetcher = <T>({ uri }: FetcherParams): Promise<T | null> => {
  return new Promise((resolve, reject) => {
    fetch(uri)
      .then(async (response) => {
        if (!response.ok) {
          resolve(handleErrors(response));
        }
        try {
          const jsonResponse = await response.json();
          resolve(jsonResponse);
        } catch (error) {
          resolve(null);
        }
      })
      .catch(reject);
  });
};
