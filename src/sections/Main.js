import AddTodo from "../containers/AddTodo";
import ActiveTodos from "../containers/ActiveTodos";
import CompletedTodos from "../containers/CompletedTodos";

const Main = () => {
    return (
        <main>
            <AddTodo/>
            <h3>Active Todos List</h3>
            <ActiveTodos/>
            <h3>Completed Todos List</h3>
            <CompletedTodos/>
        </main>
    );
};

export default Main;