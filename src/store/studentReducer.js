import { createStore, applyMiddleware } from 'redux';
import loggerMiddleware from 'redux-logger';

const ADD_STUDENT = 'ADD_STUDENT';
const CREATE_STUDENT = 'CREATE_STUDENT';
const MODIFY_STUDENT = 'MODIFY_STUDENT';
const DELETE_STUDENT = 'DELETE_STUDENT';

export const addStudent = (student) => ({
    type: ADD_STUDENT,
    student,
});

let nextId = 0;

export const createStudent = (student) => ({
    type: CREATE_STUDENT,
    id: nextId++,
    student,
});

export const modifyStudent = (student) => ({
    type: MODIFY_STUDENT,
    student,
});

export const deleteStudent = (student) => ({
    type: DELETE_STUDENT,
    student,
});


export default studentReducer;