import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './TodoItem.scss';
import checkCompleted from "../../images/check-completed.png";
import checkTodo from "../../images/circle-outline.png";
import { Button } from 'reactstrap';

function TodoItem(props) {
    const {
        itemData,
        onTodoCheckItemClick,
        onTodoRemoveItemClick,
        onValueUpdated } = props;
    const [itemValue, setItemValue] = useState(itemData);

    const onValueChange = (e) => {
        console.log(e.target.value);
        if (e.target.value !== itemValue.title) {
            const newItem = { ...itemValue, title: e.target.value, isCompleted: false }
            setItemValue(newItem);
        }
    }

    const onBlurEditTodo = (e) => {
        if (e.target.value !== itemValue.title) {
            console.log(e.target.value, "onBlur", itemValue.title);
            return onValueUpdated({ ...itemValue, title: e.target.value, isCompleted: false });

        }
    }
    console.log("render item todo")
    return (
        <div className="todo__item">
            <img className="todo__item--icon"
                src={itemData.isCompleted ? checkCompleted : checkTodo}
                onClick={() => onTodoCheckItemClick(itemData)}
                alt="icon check"
            />
            <input className={`todo__item--title ${itemData.isCompleted ? "todo__item--completed" : ""}`}
                onChange={onValueChange}
                onBlur={onBlurEditTodo}
                value={itemValue.title}
            />
            <Button className="todo__item--btn-remove"
                color="danger"
                onClick={() => onTodoRemoveItemClick(itemData)}
            >X</Button>
        </div>
    )
}

TodoItem.propTypes = {
    itemData: PropTypes.shape({
        id: PropTypes.string,
        title: PropTypes.string,
        isCompleted: PropTypes.bool
    }),
    onTodoCheckItemClick: PropTypes.func,
    onTodoRemoveItemClick: PropTypes.func,
    onValueUpdated: PropTypes.func
};

TodoItem.defaultProps = {
    itemData: {},
    onTodoCheckItemClick: null,
    onTodoRemoveItemClick: null,
    onValueUpdated: null
};

export default TodoItem;

