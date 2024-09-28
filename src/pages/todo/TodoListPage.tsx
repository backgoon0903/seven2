import {Outlet} from "react-router-dom";

function TodoListPage() {
    return (
        <>
            <div>Todo List Page</div>

            <div>
                <Outlet></Outlet>
            </div>
        </>
    );
}

export default TodoListPage;