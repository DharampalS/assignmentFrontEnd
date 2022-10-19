import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function signUpSuccess(data) {
  return {
    type: "SIGN_UP_SUCCESS",
    payload: data,
  };
}

function signUpStart() {
  return {
    type: "SIGN_UP_START",
  };
}

function signUpError(error) {
  return {
    type: "SIGN_UP_ERROR",
    payload: error,
  };
}

export const signUpUsers = (email,password,navigate) => {
  return async (dispatch) => {
    try {
      dispatch(signUpStart());
      const response = await axios.post(
       'http://localhost:3001/api/userSignUp',
        { email : email, password:password}
      );
      if(response.status === 200){
        dispatch(signUpSuccess(response));
        navigate("/login");
      }else{
        dispatch(signUpError(response.status));
        toast.error("Error")
      }
    } catch (error) {
      dispatch(signUpError(error));
    }
  };
};

function loginSuccess(data) {
    return {
      type: "LOGIN_SUCCESS",
      payload: data,
    };
  }
  
  function loginStart() {
    return {
      type: "LOGIN_START",
    };
  }
  
  function loginError(error) {
    return {
      type: "LOGIN_ERROR",
      payload: error,
    };
  }
  
  export const loginUsers = (email,password,navigate) => {
    return async (dispatch) => {
      try {
        dispatch(loginStart());
        const response = await axios.post('http://localhost:3001/api/userLogin', { email:email, password:password});
        if (response.data.status === 200) {       
          dispatch(loginSuccess(response));
          localStorage.setItem('email', email)
          navigate("/home");
        } else {
          dispatch(loginError(response.data.message));
          toast.error(response.data.message)
        }
      } catch (error) {
        dispatch(loginError(error));
      }
    };
  };
  