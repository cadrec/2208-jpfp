import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCampus } from "../store/campusReducer";
import { Link, NavLink } from "react-router-dom";

const DisplayCampus = () => {
    const dispatch = useDispatch()
    const student = useSelector(state => state.students);
    const visibilityFilter = useSelector(state => state.studentVisibility);
}

const AllStudents = () => {
    const campus = useSelector(getCampus);
    return (
        <div>
    
        </div>
    )
}