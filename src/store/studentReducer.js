import axios from 'axios';
import { configureStore, applyMiddleware } from 'redux';
import loggerMiddleware from 'redux-logger';

const SET_STUDENT = 'SET_STUDENT';
const CREATE_STUDENT = 'CREATE_STUDENT';
const MODIFY_STUDENT = 'MODIFY_STUDENT';
const DELETE_STUDENT = 'DELETE_STUDENT';

export const setStudent = (student) => ({
    type: SET_STUDENT,
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


export const getStudent = () => async dispatch => {
    return async (dispatch) => {
    const {data: response } = await axios.post('/api/students');
    dispatch(setStudent(response));
    }
}

export const _createStudent = (student, campus) => {
    return async (dispatch) => {
        const {data: response} = await axios.post('api/students', {
            student: student,
            campus: campus
        })
        dispatch(createStudent(response));
    }
}

export const _modifyStudent = (student) => {
    return async (dispatch) => {
        const { data: response } = await axios.put(`/api/students/${student.id}`,
            student
        );
      dispatch(modifyStudent(response));
    };
  };

export const _deleteStudent = (campus) => {
    return async (dispatch) => {
        const {data: response} = await axios.delete(`api/students/${student.id}`);
        dispatch(deleteStudent(response));
    }
}

const studentReducer = (state = [], action) => {
    switch(action.type){
        case SET_STUDENT:
            return action.student;
        case CREATE_STUDENT:
            return [...state, action.student];
        case MODIFY_STUDENT:
            return [...state, action.student];
        case DELETE_STUDENT:
            return state.filter(student => student.id !== action.student.id)
        default:
            return state;
    }
}

export default studentReducer;