import axios from "axios";
const baseUrl = ""


const chatbotApi = async (data: any) => {
   try {
    const response = await axios.post(baseUrl)
    return response.data
   } catch (error) {
    throw new Error("Chatbot API-pyynnön käsittely failasi")
   } 
}

export default chatbotApi