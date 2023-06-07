import React from "react";
import { useRouteLoaderData } from "react-router-dom";

const TaskDetailsEdit = () => {
  const data = useRouteLoaderData("todo-task-details") as any;
  return (
    <div>
      <h1>Edit Task</h1>
      <input name="task" value={data} />
    </div>
  );
};

export default TaskDetailsEdit;
