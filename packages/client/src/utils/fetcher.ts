type FetcherParams = RequestInit & {
  uri: string;
};

const handleHttpErrors = (response: Response) => {
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

  return {
    statusCode: response.status || 500,
    message: errorMessage,
  };
};

const handleCustomErrors = (jsonResponse: any) => {
  return {
    statusCode: 200,
    message: jsonResponse.error,
  };
};

export const fetcher = <T>({ uri }: FetcherParams): Promise<T> => {
  return new Promise((resolve, reject) => {
    fetch(uri)
      .then(async (response) => {
        if (!response.ok) {
          return reject(handleHttpErrors(response));
        }
        const jsonResponse = await response.json();
        if (jsonResponse.error) {
          return reject(handleCustomErrors(jsonResponse));
        }

        resolve(jsonResponse);
      })
      .catch((error: any) => {
        reject({
          statusCode: 500,
          message: error.message,
        });
      });
  });
};
