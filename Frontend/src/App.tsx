import "./App.css"
import {Alert, Col, Container, Image, Row} from "react-bootstrap"
import React, {ChangeEvent, useEffect, useState} from "react"
import {addTodo, getAllTodo, updateTodo} from "./services/TodoService";
import {TodoItem} from "./models/todoItems";
import {TodoAddPanel} from "./components/TodoAddPanel";
import {TodoListPanel} from "./components/TodoListPanel";
import {Notification, TodoNotification} from "./components/TodoNotification";

const App = () => {
  const [description, setDescription] = useState("")
  const [items, setItems] = useState<TodoItem[]>([])
  const [notification, setNotification] = useState<Notification>({ message: "", variant: "success" })

  useEffect(() => {
    getItems().catch((error) => {
      notify({ message: `Failed to load todo items - ${error.message}`, variant: "danger" })
    })
  }, [])

  const notify = (notification: Notification) => {
    setNotification(notification)
  }

  const closeNotification = () => {
    setNotification({ message: "", variant: "success" })
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
      // we can manually edit the list in the UI, but the easiest solution is get all todo from server again.
      // unless there is a performance requirement.
      await getItems()
      notify({ message: "Todo is added successfully", variant: "success" })
    } catch (error) {
      notify({ message: `Failed to add todo - ${error.message}`, variant: "danger" })
    } finally {
      handleClear()
    }
  }

  const handleClear = () => {
    setDescription("")
  }

  const handleMarkAsComplete = async (item: TodoItem) => {
    try {
      await updateTodo(item)
      // we can manually edit the list in the UI, but the easiest solution is get all todo from server again.
      // unless there is a performance requirement.
      await getItems()
      notify({ message: "Todo is updated successfully", variant: "success" })
    } catch (error) {
      notify({ message: `Failed to update todo - ${error.message}`, variant: "danger" })
    }
  }

  const getItems = async() => {
    try {
      const todoItems = await getAllTodo()
      setItems(todoItems)
      notify({ message: "Todo is loaded successfully", variant: "success" })
    } catch (error) {
      notify({ message: `Failed to load todo list - ${error.message}`, variant: "danger" })
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
          <Col>
            <TodoListPanel items={items} getItems={getItems} onComplete={handleMarkAsComplete} />
          </Col>
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
      <TodoNotification notification={notification} onClose={closeNotification} />
    </div>
  )
}

export default App
