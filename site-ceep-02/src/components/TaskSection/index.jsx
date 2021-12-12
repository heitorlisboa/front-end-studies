import React from "react";
import "./index.scss";
import moment from "moment";
import Task from "../Task";

function TaskSection({ date, list, handleFinishTask, handleDeleteTask }) {
  const formattedDate = moment(date, "DDD YYYY").format("ddd[.] DD [de] MMMM");

  return (
    <section className="task-section">
      <h2 className="task-section__date">{formattedDate}</h2>
      {list.map(({ content, finished }, index) => {
        return (
          <Task
            key={index}
            finished={finished}
            handleFinishTask={handleFinishTask.bind(null, index, date)}
            handleDeleteTask={handleDeleteTask.bind(null, index, date)}
          >
            {content}
          </Task>
        );
      })}
    </section>
  );
}

export default TaskSection;
