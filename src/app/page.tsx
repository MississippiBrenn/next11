import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';

//same as setting cache to no store
export const revalidate = 0;

export default function Home() {
  return (
    <>
      <AddTodo />
      {/* @ts-expect-error Server Component */}
      <TodoList />
    </>
  );
}
