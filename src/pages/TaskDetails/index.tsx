import {
  Link,
  LoaderFunction,
  useLoaderData,
  useParams,
  useRouteLoaderData,
} from "react-router-dom";
import { apiGetTodos } from "../../api/todoApi";

const TaskDetails = () => {
  // const { task } = useParams();
  // const data = useLoaderData();
  const parentLoaderData = useRouteLoaderData("todo-task-details") as any;

  return (
    <div
      style={{ display: "flex", flexDirection: "column", textAlign: "center" }}
    >
      <h1>{parentLoaderData}</h1>
      <div>
        <Link to="edit">Edit</Link> |{" "}
        <Link to=".." relative="path">
          Back
        </Link>
      </div>
    </div>
  );
};

export default TaskDetails;

export const taskDetailsLoader: LoaderFunction = async ({
  request,
  params,
}) => {
  return params.task;
};
