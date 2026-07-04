import axiosInstance from "../utils/axiosInstance";


export async function getuserdetail(id) {
    try{
        const response = await axiosInstance.get(`/forms/${id}`);
        
        return response.data.data
    }
    catch(err){
        console.log(err.response.data.message);
        throw err;
    }
}


