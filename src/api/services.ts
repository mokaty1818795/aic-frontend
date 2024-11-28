import axios, {AxiosError} from 'axios';
import instance from './instance';




const getLivesProducts = async(gender:string, minimumAge:number,minimumSalary:number,maximumSalary:number)=>{
  console.log({
    gender,
    minimumAge,
    minimumSalary,
    maximumSalary
  })
  const url ="/getliveproducts";
  const results = instance
  .get(url,{ 
  params:{ 
    gender,
    minimumAge,
    minimumSalary,
    maximumSalary,
  }},)
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
}


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

  export  {getUserByID, getLivesProducts};