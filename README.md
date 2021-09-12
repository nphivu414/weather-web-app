<p align="center">
  <h1 align="center">Weather Web App</h1>

  <p align="center">
    A web app which can display a five day weather forecast based upon Metaweather API.
  </p>
</p>

### Built With

* [ReactJS](https://reactjs.org)
* [NodeJS](https://nodejs.org/en/)

### Install dependencies

   ```sh
   yarn install
   ```
   
## How to start

1. Start back-end API
   ```sh
   yarn start-server
   ```
2. Start React app and open http://localhost:3000 to view it in the browser
   ```sh
   yarn start-client
   ```

### Other available scripts

Launches the React app's test runner in the interactive watch mode.
   ```sh
   yarn test-client
   ```
Builds the React app for production to the build folder in packages/client.
  ```sh
   yarn build-client
   ```
### Issues
If you get this error code "UNABLE_TO_GET_ISSUER_CERT_LOCALLY" when running the back-end API, please add this line to your terminal environment (~/.bashrc, ~/.zshrc, or equivalent), then restart your terminal and run "yarn start-server" to start the back-end API again.
```sh
  export NODE_TLS_REJECT_UNAUTHORIZED = 0
```
