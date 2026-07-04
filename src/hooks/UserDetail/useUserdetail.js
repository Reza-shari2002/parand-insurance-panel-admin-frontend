    
import {getuserdetail}  from '../../services/UserDetailservice'
import { useEffect  , useState } from 'react';
import {  useParams } from "react-router-dom";
    function useUserdetail(id){

            
    const [data , set_data] = useState({})
    const [loading , set_loading] = useState(true)
    useEffect(()=>{
        async function get_data() {
                 try{
            const data = await getuserdetail(id)
            console.log(data)
            set_data(data);
            set_loading(false)
        }
        catch(err){
            alert(err.response.data.message)
        }
        }
        get_data()
        
    },[])

    return ({data : data  , set_data : set_data, loading : loading , set_loading : set_loading});


    }


    export default useUserdetail;
    
