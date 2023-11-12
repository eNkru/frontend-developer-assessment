/**
 * This just a simple service layer for UI to handle the API calls. Can be refactored to more class based typescript.
 * Or use Redux.
 */
import {BaseTodoItem, TodoItem, TodoItems} from "../models/todoItems";
import axios from "axios"

// set the const for the service base url, in real project need to get from the environment or a vault.
const API_BASE_URL = "/api"
export const addTodo = async (todo: string) => {
    try {
        const url = `${API_BASE_URL}/todoItems`
        const payload: BaseTodoItem = {
            description: todo,
            isCompleted: false
        }
        await axios.post(url, payload)
    } catch (error) {
        // todo: shouldn"t use console.log for error log, this just a quick way to show error for tests.
        console.error("Failed to add todo", error)
        throw new Error("Failed to add todo")
    }
}

export const getAllTodo = async (): Promise<TodoItem[]> => {
    try {
        const url = `${API_BASE_URL}/todoItems`
        const response = await axios.get(url)
        return response.data
    } catch (error) {
        console.error("Failed to get all todo", error)
        throw new Error("Failed to get todos")
    }
}