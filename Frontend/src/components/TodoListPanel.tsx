import React from "react";
import {Button, Table} from "react-bootstrap";
import {TodoItem} from "../models/todoItems";

interface TodoListPanelProps {
  items: TodoItem[]
  getItems: () => void
  onComplete: (item: TodoItem) => void
}

export const TodoListPanel = ({ items, getItems, onComplete }: TodoListPanelProps) => {
  return (
      <>
        <h1>
          Showing {items.length} Item(s){" "}
          <Button variant="primary" className="pull-right" onClick={() => getItems()}>
            Refresh
          </Button>
        </h1>

        <Table striped bordered hover>
          <thead>
          <tr>
            <th>Id</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
          </thead>
          <tbody>
          {items.map((item) => (
              <tr key={item.id} style={{ textDecoration: item.isCompleted ? "line-through" : "none" }}>
                <td>{item.id}</td>
                <td>{item.description}</td>
                <td>
                  <Button style={{ minWidth: "160px" }} variant={item.isCompleted ? "dark" : "warning"} size="sm" onClick={() => onComplete(item)} disabled={item.isCompleted}>
                      {item.isCompleted ? "Completed" : "Mark as completed"}
                  </Button>
                </td>
              </tr>
          ))}
          </tbody>
        </Table>
      </>
  )
}