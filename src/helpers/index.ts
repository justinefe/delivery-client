import Cookies from 'js-cookie';
import axios from 'axios';


let axiosInstance =  axios.create({
})
axiosInstance.interceptors.request.use( (config) =>{
  let token = Cookies.get('accessToken');

  if(token){
  config.headers["Authorization"] = "Bearer " + token;
  }
  return config},
  (error) => {
    return Promise.reject(error);
}
);
export const capitalizeFirstLetter = (str: string) => {
  let newStr = str?.split(' ');
  newStr = newStr.map(el => el[0]?.toUpperCase() + el?.slice(1));

  return newStr?.join(' ');
};
export default axiosInstance;

export const getYear = () => {
  const date = new Date();
  return date.getFullYear();
};
