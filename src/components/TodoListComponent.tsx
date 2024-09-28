import {useSearchParams} from "react-router-dom";
import PageComponent from "./common/PageComponent.tsx";
import {useState} from "react";
import {IPageResponse} from "../types/todo.ts";

const initialState = {
    content : [],
    first : false,
    last: false,
    number : 0,
    size: 0,
    totalElements: 0,
    totalPages: 0
}

function TodoListComponent() {


    const[query,setQuery]=useSearchParams()
    const page : number = Number(query.get("page"))|| 1
    const size : number = Number(query.get("size"))|| 10

    const [pageResponse, setPageResponse] = useState<IPageResponse>(initialState)

    const changePage = (pageNum: number) => {
        console.log("click " +  pageNum)
    }

    return (

        <div>
            <div>
            TodoListComponent
            </div>
            <PageComponent pageResponse={pageResponse} changePage={changePage}/>
        </div>
    );
}

export default TodoListComponent;