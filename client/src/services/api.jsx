import axios from "axios";
const baseUrl = "http://localhost:3000";

export const getDomains = async() => {
    let results = await axios.get(`http://localhost:3000/api/domain/`);
    return results?.data;
};

