import axios from 'axios';
import { configureStore, applyMiddleware } from 'redux';
import loggerMiddleware from 'redux-logger';

const ADD_CAMPUS = 'ADD_CAMPUS';
const CREATE_CAMPUS = 'CREATE_CAMPUS';
const MODIFY_CAMPUS = 'MODIFY_CAMPUS';
const DELETE_CAMPUS = 'DELETE_CAMPUS';

export const setCampus = (campus) => ({
    type: SET_CAMPUS,
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

//https://redux.js.org/usage/writing-logic-thunks
export const getCampus = () => async dispatch => {
    return async (dispatch) => {
        const {data: response } = await axios.post("/api/campuses");
        dispatch(setCampus(response));
        }
}



export const _createCampus = (student, campus) => {
    return async (dispatch) => {
        const {data: response} = await axios.post('api/campuses', {
            student: student,
            campus: campus
        })
        dispatch(createCampus(response));
    }
}

export const _modifyCampus = (campus) => {
    return async (dispatch) => {
        const { data: response } = await axios.put(`/api/campuses/${campus.id}`,
            campus
        );
      dispatch(modifyCampus(response));
    };
  };

export const _deleteStudent = (campus) => {
    return async (dispatch) => {
        const {data: response} = await axios.delete(`api/campuses/${campus.id}`);
        dispatch(deleteStudent(response));
    }
}

const campusReducer = (state = [], action) => {
    switch(action.type){
        case SET_CAMPUS:
            return action.campus;
        case CREATE_CAMPUS:
            return [...state, action.campus];
        case MODIFY_CAMPUS:
            return [...state, action.campus];
        case DELETE_CAMPUS:
            return state.filter(campus => campus.id !== action.campus.id)
        default:
            return state;
    }
}


export default campusReducer;