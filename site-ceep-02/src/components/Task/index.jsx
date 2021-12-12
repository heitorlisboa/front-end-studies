import React from "react";
import "./index.scss";
import Button from "../Button";

function Task({ children, finished, handleFinishTask, handleDeleteTask }) {
  return (
    <li className={`task ${finished ? "finished" : ""}`}>
      <p className="task__content">{children}</p>
      <div className="task__buttons">
        <Button
          onClick={handleFinishTask}
          finished={finished ? "finished" : ""}
        >
          Concluir
        </Button>
        <Button onClick={handleDeleteTask}>Deletar</Button>
      </div>
    </li>
  );
}

export default Task;
