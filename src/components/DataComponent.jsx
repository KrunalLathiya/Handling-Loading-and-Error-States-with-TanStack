// src/components/DataComponent.js

import useFetchTodos from "../hooks/useFetchTodos";
import Loading from "./Loading";
import Error from "./Error";
import TodosList from "./TodosList";

const DataComponent = () => {
  const { data, error, isLoading, isError } = useFetchTodos();

  if (isLoading) return <Loading />;
  if (isError) return <Error message={error.message} />;
  if (data) return <TodosList todos={data} />;

  return null;
};

export default DataComponent;
