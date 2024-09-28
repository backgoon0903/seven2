import {useSearchParams} from "react-router-dom";
import PageComponent from "./common/PageComponent.tsx";
import {useEffect, useState} from "react";
import {IPageResponse} from "../types/todo.ts";
import {getTodoList} from "../api/todoAPI.tsx";
import LoadingComponent from "./common/LoadingComponent.tsx";

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

    const [refresh, setRefresh] = useState<boolean>(false)
    const [loading,setLoading]=useState<boolean>(false)
    const [pageResponse, setPageResponse] = useState<IPageResponse>(initialState)

    useEffect(() => {
        console.log("-------------")
        setLoading(true)
        getTodoList(page,size).then(data =>{
            setPageResponse(data)
            setLoading(false)
        })

    },[query,refresh])

    const changePage = (pageNum: number) => {
        console.log("click " +  pageNum)
        query.set("page",String(pageNum))
        setRefresh(!refresh)
        setQuery(query)
    }

    return (

        <div>
            {loading && <LoadingComponent></LoadingComponent>}
            <div>
            TodoListComponent
            </div>
            <button onClick={() => changePage(1)}>1PAGE</button>
            <PageComponent pageResponse={pageResponse} changePage={changePage}/>
        </div>
    );
}

export default TodoListComponent;