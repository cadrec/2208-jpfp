import React from "react";
import { useEffect, useState } from "react";
import { getCampuses } from "./store/campusReducer";
import { getStudents } from "./store/studentReducer";
import { Routes, Route, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Campuses } from "./components/campuses";
import { Students } from "./components/students";


function App(){
    const dispatch = useDispatch();
    const state = useSelector((state) => state);

    useEffect(() => {
        dispatch(getCampuses());
        dispatch(getStudents());
      }, []);

    return(
        <>
            <div>
                <Link to={"/campuses"}>
                    <button>Campuses ({campuses.length})</button>
                </Link>
                
                <Link to={"/students"}>
                    <button>Students ({students.length})</button>
                </Link>
            </div>
            <Routes>
                <Route path="campuses" element={<Campuses />} />
                <Route path="students" element={<Students />} />
            </Routes>
        </>

    )
}

export default App;