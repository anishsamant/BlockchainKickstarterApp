# BlockchainKickstarterApp
The project implements the various features of the Kickstarter website using the concept of smart contracts and Blockchain technology.

### Steps to setup
#### 1. Clone the repository and cd into the project directory
```
git clone https://github.com/anishsamant/BlockchainKickstarterApp
cd BlockchainKickstarterApp
```

#### 2. Install the required dependencies
```
npm install
```

#### 3. Inside ethereum directory Run the compile.js file. This will create a build folder in the same directory storing the json        equivalent of the created contracts.
```
node compile.js
```

#### 4. Inside the deploy.js file add your meta mask seed words and infura endpoint (Create an account [here](https://infura.io/) to setup the endpoint) for rinkeby test network as mentioned in the file. Run the deploy.js file after making the changes.
```
node deploy.js
```

#### 5. Note the address where the contract gets deployed from the terminal and paste the address in factory.js file at the mentioned place.

#### 6. All set. Run the project.
```
npm run dev
```
