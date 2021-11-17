import React, { useState } from 'react'
import Filters from "../constans/filters.js";

export const TodoListContext = React.createContext();

export const TodoListProvider = ({ children }) => {
  const [todoList, setTodoList] = useState(
    [
      { id: "1", title: "play video game", isCompleted: true },
      { id: "2", title: "go to school", isCompleted: false },
      { id: "3", title: "listening to music", isCompleted: true },
      { id: "4", title: "go shopping", isCompleted: false }
    ]
  );

  const [todoListShow, setTodoListShow] = useState(todoList);

  const [filtersStatus, setFiltersStatus] = useState(Filters.ALL);

  const onSubmitForm = (value) => {
    if (value === '') return;
    const newTodoList = [...todoList, { id: "", title: value, isCompleted: false }];
    console.log("onSubmitForm")
    setTodoList(newTodoList);
    setTodoListShow(newTodoList);
  }

  const onIconCheckAllClick = () => {
    const newTodoList = [...todoList];
    let flag = true;
    for (let i = 0; i < newTodoList.length; i++) {
      if (!newTodoList[i].isCompleted) {
        flag = false;
        break;
      }
    }
    newTodoList.forEach(todo => {
      todo.isCompleted = !flag;
    });
    console.log("onIconCheckAllClick")
    setTodoList(newTodoList);
    setTodoListShow(newTodoList);
  }

  const onTodoCheckItemClick = (item) => {
    const index = todoList.indexOf(item);
    if (index < 0) return;
    const newTodoList = [...todoList];
    newTodoList[index].isCompleted = !item.isCompleted;
    console.log("onTodoCheckItemClick")
    setTodoList(newTodoList);
    setTodoListShow(newTodoList);
  }

  const onTodoRemoveItemClick = (todo) => {
    const index = todoList.indexOf(todo);
    if (index < 0) return;
    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    console.log("onTodoRemoveItemClick")
    setTodoList(newTodoList);
     setTodoListShow(newTodoList);
  }

  const onValueUpdated = (todo) => {
    const index = todoList.indexOf(todo);
    if (index < 0) return;
    const newTodoList = [...todoList];
    newTodoList[index].isCompleted = false;
    console.log("onValueUpdated")
    setTodoList(newTodoList);
  }

  const onTodoClearCompleted = () => {
    const newTodoList = todoList.filter(todo => todo.isCompleted === false)

    setTodoList(newTodoList);
    setTodoListShow(newTodoList);
  }

  const onFilterButtonClick = (status) => {
    let newTodosFilter = [];
    switch (status) {
      case Filters.ALL:
        newTodosFilter = [...todoList]
        break;
      case Filters.ACTIVE:
        newTodosFilter = todoList.filter(todo => !todo.isCompleted)
        break;
      case Filters.COMPLETED:
        newTodosFilter = todoList.filter(todo => todo.isCompleted)
        break;
      default: newTodosFilter = [...todoList];
    }

    console.log(`app ${status}`)
    console.log(newTodosFilter)
    setTodoListShow(newTodosFilter);
    setFiltersStatus(status);
  }
  console.log("render todolistContext");

  return (
    <TodoListContext.Provider value={{
      todoList: todoListShow,
      setTodoList,
      filtersStatus,
      onSubmitForm,
      onIconCheckAllClick: onIconCheckAllClick,
      onValueUpdated,
      onTodoCheckItemClick,
      onTodoRemoveItemClick,
      onTodoClearCompleted,
      onFilterButtonClick
    }}>
      {children}
    </TodoListContext.Provider>
  )
}
