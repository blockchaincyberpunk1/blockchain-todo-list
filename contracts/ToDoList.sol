// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

/**
 * @title ToDoList
 * @dev A simple smart contract for managing a to-do list.
 */
contract ToDoList {
    struct Task {
        string content; // Content of the task
        bool isCompleted; // Flag indicating whether the task is completed or not
    }

    Task[] public tasks; // Array to store tasks

    event TaskAdded(uint256 taskId, string content); // Event emitted when a new task is added
    event TaskCompleted(uint256 taskId); // Event emitted when a task is completed

    /**
     * @dev Adds a new task to the to-do list.
     * @param _content The content of the task to be added.
     */
    function addTask(string memory _content) public {
        tasks.push(Task(_content, false)); // Adds a new task to the list with the provided content and default completion status
        uint256 taskId = tasks.length - 1; // Calculates the ID of the newly added task
        emit TaskAdded(taskId, _content); // Emits an event to notify listeners about the addition of a new task
    }

    /**
     * @dev Marks a task as completed.
     * @param _taskId The ID of the task to be marked as completed.
     */
    function completeTask(uint256 _taskId) public {
        require(_taskId < tasks.length, "Invalid task ID"); // Ensures that the provided task ID is valid
        tasks[_taskId].isCompleted = true; // Marks the task with the provided ID as completed
        emit TaskCompleted(_taskId); // Emits an event to notify listeners about the completion of the task
    }

    /**
     * @dev Retrieves the total number of tasks in the to-do list.
     * @return The total number of tasks.
     */
    function getTaskCount() public view returns (uint256) {
        return tasks.length; // Returns the total number of tasks in the list
    }

    /**
     * @dev Retrieves the details of a specific task.
     * @param _taskId The ID of the task.
     * @return The content and completion status of the task.
     */
    function getTask(uint256 _taskId) public view returns (string memory, bool) {
        require(_taskId < tasks.length, "Invalid task ID"); // Ensures that the provided task ID is valid
        return (tasks[_taskId].content, tasks[_taskId].isCompleted); // Returns the content and completion status of the task with the provided ID
    }
}
