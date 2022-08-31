import { createStore, applyMiddleware } from 'redux';
import loggerMiddleware from 'redux-logger';

const ADD_CAMPUS = 'ADD_CAMPUS';
const CREATE_CAMPUS = 'CREATE_CAMPUS';
const MODIFY_CAMPUS = 'MODIFY_CAMPUS';
const DELETE_CAMPUS = 'DELETE_CAMPUS';

export const addCampus = (campus) => ({
    type: ADD_CAMPUS,
    campus,
});

let nextId = 0;

export const createCampus = (campus) => ({
    type: CREATE_CAMPUS,
    id: nextId++,
    campus,
});

export const modifyCampus = (campus) => ({
    type: MODIFY_CAMPUS,
    campus,
});

export const deleteCampus = (campus) => ({
    type: DELETE_CAMPUS,
    campus,
});


export default campusReducer;