import {Container} from "react-bootstrap";
import {TodoHeader} from "./TodoHeader";
import {TodoInputPanel} from "./TodoInputPanel";
import React, {ChangeEvent} from "react";

interface TodoAddPanelProps {
    value: string
    onChange: (event: ChangeEvent) => void
    onClear: () => void
    onAdd: () => void
}

export const TodoAddPanel = ({value, onChange, onClear, onAdd}: TodoAddPanelProps) => {
    return (
        <Container>
            <TodoHeader title="Add Item" />
            {/* todo: It is much easier to use a central state management such as Redux. So we don"t need to pass the value and actions over and over again. */}
            <TodoInputPanel value={value} onChange={onChange} onClear={onClear} onAdd={onAdd} />
        </Container>
    )
}