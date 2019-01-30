<h3>Create a new project</h3>

`$ npm init`

<h3>The framework used is next.js version 4.1.4</h3>

`$ npm install --save next@4.1.4`

<h3>Various libraries installed are:</h3>

`$ npm install --save solc`

`$ npm install --save mocha ganache-cli fs-extra web3@1.0.0-beta.26`

`$ npm install --save truffle-hdwallet-provider`

`$ npm install --save react react-dom`

`$ npm install --save semantic-ui-react`

`$ npm install --save semantic-ui-css`

`$ npm install --save next-routes`

<h3>To run the application</h3>

1. Add `{"dev": "next dev"}` in the scripts section of package.json.
2. If we have customizations to our `next` application we Add `{"dev": "node server.js"}` instead in the scripts section of package.json.}

3. Run command:
   `$ npm run dev`
4. Browse to localhost:3000

<h3>Important Notes</h3>

1. The content of the files stored in the pages folder can be displayed from the browser by appending the url with `/filename`.
2. `index.js` serves to be the root page that gets displayed on running the application.
3. `ganache-cli` is used for testing purpose to create local accounts.
4. `HDWalletProvider` is used to connect to the rinkeby test network through the remote infura node.
5. `next.js` provides <b>server side rendering, routing and hot module reloading</b> facility. It renders the files at the server and sends rendered HTML content to the browser followed by the JS code.
6. `window` is a global variable available only on the browser and not on the node js server.
7. The ethereum network is accessed through the next server hence the application will run irrespective of whether the browser has access to the ethereum network or not.
8. To handle routes/urls with custom tokens we make use of `next-routes` module. We create a file named `routes.js` and add all the custom routes in that file. We also create a `server.js` file that can allow us to manaully boot up the "next" application and tell it to specifically to use the `routes.js` file.
9. The `<Link>` tag gives the navigational functionality(does the work of `href`) and the `<a>` tag provides us to click the link.
