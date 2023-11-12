import "./App.css"
import { Image, Alert, Button, Container, Row, Col, Form, Table, Stack } from "react-bootstrap"
import React, {useState, useEffect, ChangeEvent} from "react"
import {TodoHeader} from "./components/TodoHeader"
import {TodoInputPanel} from "./components/TodoInputPanel"
import {addTodo, getAllTodo} from "./services/TodoService";
import {TodoItem} from "./models/todoItems";
import {TodoAddPanel} from "./components/TodoAddPanel";

const App = () => {
  const [description, setDescription] = useState("")
  const [items, setItems] = useState<TodoItem[]>([])

  useEffect(() => {
    getItems()
  }, [])

  const renderTodoItemsContent = () => {
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
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.description}</td>
                <td>
                  <Button variant="warning" size="sm" onClick={() => handleMarkAsComplete(item)}>
                    Mark as completed
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </>
    )
  }

  const handleDescriptionChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    let newValue = event.target.value
    if (newValue && newValue !== description) {
      setDescription(newValue)
    }
  }

  const handleAdd = async () => {
    try {
      await addTodo(description)
      await getItems()
    } catch (error) {
      // todo: show notification
    } finally {
      handleClear()
    }
  }

  const handleClear = () => {
    setDescription("")
  }

  const handleMarkAsComplete = async (item: any) => {
    try {
      alert("todo")
    } catch (error) {
      console.error(error)
    }
  }

  const getItems = async() => {
    try {
      const todoItems = await getAllTodo()
      setItems(todoItems)
    } catch (error) {
      // todo: notifications
    }
  }

  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
            <Image src="clearPointLogo.png" fluid rounded />
          </Col>
        </Row>
        <Row>
          <Col>
            <Alert variant="success">
              <Alert.Heading>Todo List App</Alert.Heading>
              Welcome to the ClearPoint frontend technical test. We like to keep things simple, yet clean so your
              task(s) are as follows:
              <br />
              <br />
              <ol className="list-left">
                <li>Add the ability to add (POST) a Todo Item by calling the backend API</li>
                <li>
                  Display (GET) all the current Todo Items in the below grid and display them in any order you wish
                </li>
                <li>
                  Bonus points for completing the "Mark as completed" button code for allowing users to update and mark
                  a specific Todo Item as completed and for displaying any relevant validation errors/ messages from the
                  API in the UI
                </li>
                <li>Feel free to add unit tests and refactor the component(s) as best you see fit</li>
              </ol>
            </Alert>
          </Col>
        </Row>
        <Row>
          <Col>
            <TodoAddPanel value={description} onChange={handleDescriptionChange} onClear={handleClear} onAdd={handleAdd} />
          </Col>
        </Row>
        <br />
        <Row>
          <Col>{renderTodoItemsContent()}</Col>
        </Row>
      </Container>
      <footer className="page-footer font-small teal pt-4">
        <div className="footer-copyright text-center py-3">
          © 2021 Copyright:
          <a href="https://clearpoint.digital" target="_blank" rel="noreferrer">
            clearpoint.digital
          </a>
        </div>
      </footer>
    </div>
  )
}

export default App
