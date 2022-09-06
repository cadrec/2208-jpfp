import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { _createStudent } from "../store/studentReducer"

const NewStudent = () => {
    const dispatch = useDispatch();

    const defaultForm = {
        firstName: '',
        lastName: '',
        imageUrl: '',
        email: '',
        gpa: '0.0'
    }

}