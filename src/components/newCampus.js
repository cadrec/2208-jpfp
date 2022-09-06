import React from "react";
import { useDispatch } from "react-redux";
import { _createCampus } from "../store/campusesReducer";

const newCampus = () => {
    const dispatch = useDispatch()

    const defaultForm = {
        name: '',
        imageUrl: '',
        description: '',
        address: ''
    }
}