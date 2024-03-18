import axios from "axios";
const baseUrl = "http://localhost:3000";

export const getDomains = async() => {
    let results = await axios.get(`http://localhost:3000/api/domain/`);
    return results?.data;
};

export const addClub = async(body) =>{
    let results = await axios.post(`http://localhost:3000/api/domain/add`,body)
    console.log(results?.data,"ress");
    return results?.data
 };