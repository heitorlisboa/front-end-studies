import React, { useState } from "react";
import "./index.scss";
import moment from "moment";
import { indexOfSameAtt, valueInObjectInList } from "../../utilities";
import TaskSection from "../TaskSection";

function ToDoList() {
  let localList = localStorage.getItem("tasks");
  setLocalList(localList ? JSON.parse(localList) : []);
  // The localStorage.getItem() returns null when it can't find the item
  // When it finds the item it's return as a string, so it's necessary to parse to object

  function setLocalList(newLocalList) {
    localStorage.setItem("tasks", JSON.stringify(newLocalList));
    localList = newLocalList;
  }

  const [list, setList] = useState(localList);
  const [content, setContent] = useState("");
  const [date, setDate] = useState("");

  function handleTextInputChange(event) {
    event.preventDefault();
    setContent(event.target.value);
  }

  function handleDateInputChange(event) {
    event.preventDefault();
    setDate(event.target.value);
  }

  function handleNewTask(event) {
    event.preventDefault();

    if (content.trim() && date) {
      const formattedDate = moment(date).format("DDD YYYY");
      // The date is formated using the day of the year to make it easier to sort
      const dateRegistered = valueInObjectInList(formattedDate, list, "date");

      console.log(localList);

      let newList;

      if (!dateRegistered) {
        newList = [
          ...localList,
          {
            date: formattedDate,
            list: [{ content: content, finished: false }],
          },
        ].sort((a, b) => parseFloat(a["date"]) - parseFloat(b["date"]));
        // The list is sorted by date in ascending order
      } else {
        newList = [...localList];
        const sectionIndex = indexOfSameAtt(dateRegistered, newList);
        // Array.indexOf doesn't work here because the objects don't have the same reference
        newList[sectionIndex]["list"].push({
          content: content,
          finished: false,
        });
      }

      console.log(newList);

      setLocalList([...newList]);
      setList([...localList]);
      setContent("");
    }
  }

  function handleDeleteTask(taskIndex, taskDate) {
    const newList = localList;
    const taskSection = valueInObjectInList(taskDate, list, "date");
    const sectionIndex = list.indexOf(taskSection);
    const taskList = newList[sectionIndex]["list"];
    taskList.splice(taskIndex, 1);

    if (taskList.length === 0) {
      newList.splice(sectionIndex, 1);
    }

    setLocalList([...newList]);
    setList([...localList]);
  }

  function handleFinishTask(taskIndex, taskDate) {
    console.log("executou");
    const taskSection = valueInObjectInList(taskDate, list, "date");
    const sectionIndex = list.indexOf(taskSection);
    const newList = localList;
    const task = newList[sectionIndex]["list"][taskIndex];
    task.finished = !task.finished;

    setLocalList([...newList]);
    setList([...localList]);
  }

  return (
    <div className="todo-list" onSubmit={handleNewTask}>
      <h1 className="title">Ceep</h1>
      <form className="form">
        <input
          className="form__input"
          type="text"
          value={content}
          placeholder="Sua nota"
          onChange={handleTextInputChange}
        />
        <input type="date" value={date} onChange={handleDateInputChange} />
        <input className="form__button" type="submit" value="Novo Item" />
      </form>

      <ul className="list">
        {list.map((element, index) => {
          return (
            <TaskSection
              key={index}
              date={element["date"]}
              list={element["list"]}
              handleFinishTask={handleFinishTask}
              handleDeleteTask={handleDeleteTask}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default ToDoList;
