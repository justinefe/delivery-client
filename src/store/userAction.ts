import Cookies from 'js-cookie';
import axiosInstance from '../helpers';
// import { BASE_URL } from 'controllers/config';
// import axiosCall from 'helpers/axiosCall';
export const loading = () => async (dispatch:any) => {
  dispatch({
    type: 'AUTH_LOADING',
    payload: true,
  });
};

export const doneloading = () => async (dispatch:any) => {
  dispatch({
    type: 'AUTH_LOADING',
    payload: false,
  });
};

export const setUser = (response:any)=> async (dispatch:any) => {
  try {
    dispatch({
      type: 'setUpUser',
      payload: response,
    });
    Cookies.set('accessToken', response?.token, { expires: 365 });
  } catch (err) {
    throw err;
  }
  return response;
};

export const log_out = () => async (dispatch:any) => {
  //document.cookie = 'accessToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC';
  Cookies.remove('accessToken');
 // axiosInstance.defaults.headers.Authorization = null;
  dispatch({
    type: 'Log_out',
  });

};
interface IUserAccount {
    email: string;
    firstName: string;
    lastName: string;
    password: string;
    phoneNumber: string;
  }

export const loginApi = async ({
    email,
    password,
  }: Omit<IUserAccount, ' firstName' | 'lastName' | 'phoneNumber'>) => {
    try {
      const result = await axiosInstance ({
        url: `${import.meta.env.VITE_APP_BASE_URL}/user/login`,
        method: 'POST',
        data: {
          email,
          password,
        },
      });
      if (result?.data?.status === 200) {
        return {
          success: true,
          message: 'Login Successful',
          data: result?.data,
        };
      }
   
      return {
        success: false,
        message: result?.data.message,
        data: result?.data,
      };
    } catch (err) {
      const error: any = err;
      const errorData = error?.response?.data?.error;
      const errorMessage = Array.isArray(errorData)
        ? errorData?.join(', ')
        : errorData;
      return {
        success: false,
        message: errorMessage,
      };
    }
  };


export const createAccountApi = async (
    { email, firstName, lastName, password}: IUserAccount,
  ) => {
    try {
      const result = await axiosInstance({
        url: `${import.meta.env.VITE_APP_BASE_URL}/user/signup`,
        method: 'POST',
        data: {
          firstName,
          lastName,
          password,
          email,
        },
      });
      if (result?.data?.status === 201) {
        return {
          success: true,
          message: 'Sign up successful',
          data: result?.data,
        };
      }
      return {
        success: false,
        message: result?.data.message,
        data: result?.data,
      };
    } catch (error) {
      const err: any = error;
      const errorData = err?.response?.data?.error;
      const errorMessage = Array.isArray(errorData)
        ? errorData?.join(', ')
        : errorData;
      return {
        success: false,
        message: errorMessage,
      };
    }
  };
  
  