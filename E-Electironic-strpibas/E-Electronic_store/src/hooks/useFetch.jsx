import { useEffect,useState } from "react";
import {fetchDataFromApi} from "../utils/api"

const useFetch=(endpoint)=>{
    const[data,setdata] = useState()

    useEffect(()=>{
        makeApiCall()
    },[endpoint])

    const makeApiCall = async ()=>{
        const res = await fetchDataFromApi(endpoint)
        setdata(res)
    }
    return {data};
};
export default useFetch;