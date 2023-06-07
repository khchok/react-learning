import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { defaultState } from "../../contexts/TodoContext";
import { apiGetTodos, apiPostTodo } from "../../api/todoApi";

export const thunkGetTodos = createAsyncThunk(
  "todo-app/get",
  async (_, thunkAPI) => {
    try {
      const resp = await apiGetTodos();
      // massage data
      //sanitize data
      // remove certain data
      return { todos: resp.data };
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error });
    }
  }
);

export const thunkPostTodos = createAsyncThunk(
  "todo-app/post",
  async (task: string, { rejectWithValue, dispatch }) => {
    try {
      const data = await apiPostTodo(task);
      dispatch(thunkGetTodos());
      return data;
    } catch (error) {
      return rejectWithValue({ error: error });
    }
  }
);

const todoThunkSlice = createSlice({
  name: "todo-slice",
  initialState: defaultState,
  reducers: {
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(thunkGetTodos.pending, (state) => {
        return {
          ...state,
          isLoading: true,
        };
      })
      .addCase(thunkGetTodos.fulfilled, (state, action) => {
        return { isLoading: false, todos: action.payload.todos ?? [] };
      })
      .addCase(thunkGetTodos.rejected, (state, action) => {
        return { isLoading: false, todos: [] };
      })
      .addCase(thunkPostTodos.pending, (state) => {
        return {
          ...state,
          isAdding: true,
        };
      })
      .addCase(thunkPostTodos.fulfilled, (state, action) => {
        return {
          ...state,
          isAdding: false,
        };
      });
  },
});

export const todoActions = todoThunkSlice.actions;
export default todoThunkSlice;
