import React from "react";
import { useEffect } from "react";
import { getCampuses } from "./store/campusReducer";
import { getStudents } from "./store/studentReducer";
import { Routes, Route, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";


function App(){
    const dispatch = useDispatch();
    const state = useSelector((state) => state);

    return(
        <>
            <div></div>
        </>

    )
}

export default App;