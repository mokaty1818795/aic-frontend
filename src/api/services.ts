import axios, {AxiosError} from 'axios';
import instance from './instance';




const getUserByID = async (userId: string) => {
    const url = `findpersonbyid.asp?idnr=${userId}`;
    const results = instance
      .get(url)
      .then(response => {
        if (response.data) {
          console.log(response.data);
          return response.data;
        }
      })
      .catch((error: Error | AxiosError) => {
        if (axios.isAxiosError(error) && error.response) {
          console.log(error.response.data);
          return error.request.data;
        }
      });
    return results;
  };

  export  {getUserByID};