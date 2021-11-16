import React, { useContext } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import TodoItem from '../TodoItem';
import "./TodoList.scss";
import { TodoListContext } from '../../Contexts/TodoList';

const TodoList = () => {
    const { todoList,
        onTodoCheckItemClick,
        onTodoRemoveItemClick,
        onValueUpdated } = useContext(TodoListContext);

    return (
        <ListGroup className="todo__list">
            {
                todoList.map((todo, key) => {
                    return <ListGroupItem key={key}>
                        <TodoItem
                            itemData={todo}
                            onTodoCheckItemClick={onTodoCheckItemClick}
                            onTodoRemoveItemClick={onTodoRemoveItemClick}
                            onValueUpdated={onValueUpdated}
                        >
                        </TodoItem>
                    </ListGroupItem>
                })
            }
        </ListGroup>
    )
}

export default TodoList;

