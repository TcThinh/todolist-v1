import React, { useState, useContext } from 'react';
import { Form, FormGroup, Input, Button } from 'reactstrap';
import checkAllImage from "../../images/down.png";
import "./TodoForm.scss";
import { TodoListContext } from '../../Contexts/TodoList';

const TodoForm = () => {
    const { onSubmitForm, onIconCheckAllClick } = useContext(TodoListContext);
    const [value, setValue] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        if (onSubmitForm) {
            onSubmitForm(value);
            setValue('');
        }
    }

    const onValueChange = (e) => {
        setValue(e.target.value);
    }

    return (
        <Form className="todo__form" onSubmit={onSubmit} >
            <FormGroup className="todo__form--icon">
                <img className="todo__form--icon-check-all"
                    src={checkAllImage} alt="check all"
                    onClick={onIconCheckAllClick}
                />
            </FormGroup>
            <FormGroup className="todo__form--input">
                <Input onChange={onValueChange} value={value} type="text" placeholder="Bạn cần làm gì ... ?" />
            </FormGroup>
            <FormGroup className="todo__form--button">
                <Button color="primary" type="submit">
                    +
                </Button>
            </FormGroup>
        </Form>
    )
}

export default TodoForm;

