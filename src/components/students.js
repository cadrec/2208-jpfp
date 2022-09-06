import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStudents } from "../store/studentReducer";
import { Link, NavLink } from "react-router-dom";

const DisplayStudents = () => {
    const dispatch = useDispatch()
    const student = useSelector(state => state.students);
    const visibilityFilter = useSelector(state => state.studentVisibility);
}

const AllStudents = () => {
    const student = useSelector(getStudents);
    return (
        <div>
    
        </div>
    )
}