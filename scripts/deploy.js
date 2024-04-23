const { ethers } = require('hardhat');

async function main() {
  try {
    // Retrieve the account to deploy the contract
    const accounts = await ethers.getSigners();
    console.log('Deploying contracts with account:', accounts[0].address);

    // Retrieve the contract factory
    const ToDoList = await ethers.getContractFactory('ToDoList');

    // Deploy the contract
    console.log('Deploying ToDoList contract...');
    const todoList = await ToDoList.deploy();
    await todoList.deployed();

    console.log('ToDoList contract deployed to:', todoList.address);
  } catch (error) {
    console.error('Error deploying contract:', error);
    process.exit(1);
  }
}

// Execute the deployment function
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error('Deployment script error:', error);
    process.exit(1);
  });
