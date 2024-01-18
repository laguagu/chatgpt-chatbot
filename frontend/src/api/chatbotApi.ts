import axios from "axios";
const baseUrl = "http://localhost:3000/api/chat";

const chatbotApi = async (userMessage: string) => {
   try {
    const response = await axios.post(baseUrl, { input: userMessage })

    return response.data
   } catch (error) {
    throw new Error("Chatbot API-pyynnön käsittely failasi")
   } 
}

export default chatbotApi