import {Button, Col, Form, Row, Stack} from "react-bootstrap";
import React, {ChangeEvent} from "react";

interface TodoAddPanelProps {
    value: string
    onChange: (event: ChangeEvent) => void
    onClear: () => void
    onAdd: () => void
}

export const TodoInputPanel = ({value, onChange, onClear, onAdd}: TodoAddPanelProps) => {
    return (
        <>
            <Form.Group as={Row} className="mb-3" controlId="formAddTodoItem">
                <Form.Label column sm="2">
                    Description
                </Form.Label>
                <Col md="6">
                    <Form.Control
                        type="text"
                        placeholder="Enter description..."
                        value={value}
                        onChange={onChange}
                    />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3 offset-md-2" controlId="formAddTodoItem">
                <Stack direction="horizontal" gap={2}>
                    <Button variant="primary" onClick={onAdd}>
                        Add Item
                    </Button>
                    <Button variant="secondary" onClick={onClear}>
                        Clear
                    </Button>
                </Stack>
            </Form.Group>
        </>
    )
}