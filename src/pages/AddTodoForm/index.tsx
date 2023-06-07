import { apiPostTodo } from "../../api/todoApi";
import { Button, Space } from "antd";
import {
  ActionFunction,
  Form,
  redirect,
  useActionData,
  useNavigate,
  useNavigation,
} from "react-router-dom";

const AddTodoForm = () => {
  const { state } = useNavigation();
  const data = useActionData() as any;

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Form method="post">
        <Space>
          <h1>Add todo</h1>
          <input type="text" name="task" />
          <Button htmlType="submit" loading={state === "submitting"}>
            Add
          </Button>
        </Space>
      </Form>
      {data && data.error && <span style={{ color: "red" }}>{data.error}</span>}
    </div>
  );
};

export default AddTodoForm;

export const addTodoAction: ActionFunction = async ({ request, params }) => {
  const formData = await request.formData();
  formData.get("task");
  const task = formData.get("task")?.toString() ?? "";

  try {
    await apiPostTodo(task);
  } catch (error) {
    throw error;
  }
  // return { error: "username already exists" };
  return redirect("/TodoAppWithLoader");
};
