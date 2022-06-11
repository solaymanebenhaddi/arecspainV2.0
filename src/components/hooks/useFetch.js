import {useState,useEffect} from 'react'
import axios from 'axios'


const useFetch = (url)=>{
    const [data,setData]= useState([]);
    const [loading,setLoading]= useState(false);
    const [error,setError]= useState([]);
    useEffect(() => {
        const fetchData= async()=>{
           setLoading(true)
        try {
            const res = await axios.get((url),{
                // headers: {
                //     'Content-Type': 'application/json; charset=UTF-8',
                //     'Host': 'https://arecspain.herokuapp.com/',
                //     'Accept': 'application/json',
                //     'mode': 'cors'
                // }
            });
            setData(res.data)
        } catch (error) {
            setError(error)
        } 
        setLoading(false)
        };
        fetchData();
        
    }, []);

    const reFetch= async()=>{ 
        setLoading(true)
     try {
        const res = await axios.get((url),{
            // headers: {
            //     'Content-Type': 'application/json; charset=UTF-8',
            //     'Host': 'https://arecspain.herokuapp.com/',
            //     'Accept': 'application/json',
            //     'mode': 'cors',
            //     "Access-Control-Allow-Origin": "*",
            // }
        });
         setData(res.data)
     } catch (error) {
         setError(error)
     } 
     setLoading(false)
     };
    
    return {data,loading,error,reFetch}
}

export default useFetch