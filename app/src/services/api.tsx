import axios from "axios";

const getData = async (endpoint: string) => {
  try {
    const response = await axios.get(`http://localhost:3000/${endpoint}`);
    const data = response.data;
    console.log("getData Response:", data);
    return data;
  } catch (error) {

    console.error("Error fetching data:", error);
    throw error; 
  }
};

export { getData };
