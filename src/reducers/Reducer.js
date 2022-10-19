import { ADD_TODO ,REGISTER, SIGNIN} from '../actions/actionTypes';

const initialState = {
  todos: [],
  register: false,
  login:false,
  email:""
};

const addTodo = (state, action) => {
  return { ...state, todos: state.todos.concat(action.todo) }
}

const Reducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_TODO: return addTodo(state, action);
    case REGISTER : return{
      ...state, register:true,
    }
     case SIGNIN : return{
      ...state, login:true,
      email:action.payload
    }
    default: return state;
  }
};

export default Reducer;