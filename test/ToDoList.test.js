// SPDX-License-Identifier: MIT
const { expect } = require("chai");

/**
 * @title ToDoList
 * @dev A simple smart contract for managing a to-do list.
 */
describe("ToDoList", function() {

    let ToDoList;
    let toDoList;
    const content1 = "Buy groceries";
    const content2 = "Pay bills";

    beforeEach(async function () {
        ToDoList = await ethers.getContractFactory("ToDoList");
        toDoList = await ToDoList.deploy();
        await toDoList.deployed();
    });

    /**
     * @dev Test case to add a new task to the to-do list.
     */
    it("Should add a new task", async function() {
        await toDoList.addTask(content1);
        const taskCount = await toDoList.getTaskCount();
        expect(taskCount).to.equal(1);
        const [taskContent, isCompleted] = await toDoList.getTask(0);
        expect(taskContent).to.equal(content1);
        expect(isCompleted).to.equal(false);
    });

    /**
     * @dev Test case to mark a task as completed.
     */
    it("Should mark a task as completed", async function() {
        await toDoList.addTask(content1);
        await toDoList.completeTask(0);
        const [, isCompleted] = await toDoList.getTask(0);
        expect(isCompleted).to.equal(true);
    });

    /**
     * @dev Test case to retrieve the total number of tasks.
     */
    it("Should retrieve the total number of tasks", async function() {
        await toDoList.addTask(content1);
        await toDoList.addTask(content2);
        const taskCount = await toDoList.getTaskCount();
        expect(taskCount).to.equal(2);
    });

    /**
     * @dev Test case to retrieve the details of a specific task.
     */
    it("Should retrieve the details of a specific task", async function() {
        await toDoList.addTask(content1);
        const [taskContent, isCompleted] = await toDoList.getTask(0);
        expect(taskContent).to.equal(content1);
        expect(isCompleted).to.equal(false);
    });

    /**
     * @dev Test case to handle invalid task ID when marking a task as completed.
     */
    it("Should revert when marking a task as completed with an invalid task ID", async function() {
        await expect(toDoList.completeTask(1)).to.be.revertedWith("Invalid task ID");
    });
});
