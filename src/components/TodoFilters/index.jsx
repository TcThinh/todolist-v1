import React, { useContext } from 'react'
import "./TodoFilters.scss";
import Filters from "../../constans/filters.js";
import FilterButton from './Button';
import { TodoListContext } from '../../Contexts/TodoList';

const TodoFilters = () => {
    const { todoList,
        onTodoClearCompleted,
        onFilterButtonClick,
        filtersStatus } = useContext(TodoListContext);
    const filtersBtn = [
        {
            title: "All",
            link: "all",
            isActived: filtersStatus === Filters.ALL,
            onButtonClick: (status) => onFilterButtonClick(status)
        },
        {
            title: "Active",
            link: "active",
            isActived: filtersStatus === Filters.ACTIVE,
            onButtonClick: (status) => onFilterButtonClick(status)
        },
        {
            title: "Completed",
            link: "completed",
            isActived: filtersStatus === Filters.Completed,
            onButtonClick: (status) => onFilterButtonClick(status)
        },
    ];


    return (
        <div className="todo__filters">
            <label className="todo__filters--count-items">{`${todoList.length} việc`}</label>
            <div className="todo__filters--wapper-btn">
                {
                    filtersBtn.map((btn, key) => (
                        <FilterButton key={`btn${key}`} {...btn}></FilterButton>
                    ))
                }
            </div>
            <button className="todo__filters--button-clear-completed" onClick={onTodoClearCompleted}>Clear completed</button>
        </div>
    )
}

TodoFilters.propTypes = {

}

export default TodoFilters

