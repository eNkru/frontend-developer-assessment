/**
 * I am adding some level of unit testing for this assignment. Not going to write a complete unit testing for this component.
 */
import { renderHook } from "@testing-library/react"
import {useTodo} from "./useTodo";
import {TodoItem} from "../models/todoItems";

describe("useTodo", () => {
  test("sortTodo should sort completed todo to bottom", () => {
    const { result } = renderHook(useTodo)
    const testTodos: TodoItem[] = [
      {id: "1", description: "a", isCompleted: true},
      {id: "2", description: "b", isCompleted: false},
      {id: "3", description: "c", isCompleted: false}
    ]
    result.current.sortTodo(testTodos)
    expect(testTodos[0].id).toBe("2")
    expect(testTodos[1].id).toBe("3")
    expect(testTodos[2].id).toBe("1")
  })
  test("sortTodo should not sort the order if both todo completed", () => {
    const { result } = renderHook(useTodo)
    const testTodos: TodoItem[] = [
      {id: "1", description: "a", isCompleted: false},
      {id: "2", description: "b", isCompleted: true},
      {id: "3", description: "b", isCompleted: false},
      {id: "4", description: "b", isCompleted: true},
      {id: "5", description: "c", isCompleted: false}
    ]
    result.current.sortTodo(testTodos)
    expect(testTodos[0].id).toBe("1")
    expect(testTodos[1].id).toBe("3")
    expect(testTodos[2].id).toBe("5")
    expect(testTodos[3].id).toBe("4")
    expect(testTodos[4].id).toBe("2")
  })
})