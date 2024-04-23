# ToDo List Smart Contract

[![License](https://img.shields.io/static/v1?label=License&message=MIT&color=blue&?style=plastic&logo=appveyor)](https://opensource.org/licenses/MIT)

![GitHub repo size](https://img.shields.io/github/repo-size/blockchaincyberpunk1/blockchain-todo-list)
![GitHub top language](https://img.shields.io/github/languages/top/blockchaincyberpunk1/blockchain-todo-list)



## Table Of Content

- [Description](#description)
- [Technology](#technology)
- [Installation](#installation)
- [Usage](#usage)
- [Tools and Libraries](#tools-and-libraries)
- [Contributing](#contributing)
- [Contact](#contact)
- [License](#license)


## Description

The ToDo List Smart Contract is part of a decentralized application that uses Ethereum blockchain technology to manage tasks securely and transparently. It leverages Solidity to handle task management through smart contracts.

## Smart Contract Features

- **Task Management**: Users can add tasks, complete tasks, and view tasks status.
- **Events**: Emit events for task addition and completion for easy integration and frontend interaction.


## Development Tools

- **Solidity**: The programming language used to create the smart contract.
- **Hardhat**: A development environment to compile, deploy, test, and debug the contract.
- **Ethers.js**: Library to interact with Ethereum Blockchain from JavaScript applications.
- **MetaMask**: As the Ethereum wallet provider.


## Setup

To deploy and test this smart contract locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/blockchaincyberpunk1/blockchain-todo-list.git
   cd blockchain-todo-list
   ```
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Compile the contract**:
    ```bash
    npx hardhat compile
   ```
4. **Deploy to a test network (e.g., Sepolia)**:
    ```bash
    npx hardhat run scripts/deploy.js --network sepolia
   ```


## Usage

After deployment, interact with the smart contract through a frontend interface or directly via Ethers.js:

- **Adding a Task**: Call the addTask function with the task content.
- **Completing a Task**: Use the completeTask function with the task ID.
- **Viewing Task Details**: Access tasks using the getTask and getTaskCount functions.



## Contribution
 
Contributions are welcome! Please feel free to submit any issues or pull requests.


## Contact

Feel free to reach out to me on my email:
thepolyglot8@gmail.com


## License

[![License](https://img.shields.io/static/v1?label=Licence&message=MIT&color=blue)](https://opensource.org/license/MIT)


