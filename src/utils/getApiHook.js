
import apiService from "../services/apiService";
const getApiHooks = async (setData, apiCall) => {
    try {
        const response = await apiService.get(apiCall)
        if (response.status >= 200 && response.status <= 299) {
            setData(response.data);
        }
    } catch (error) {
        console.log(error)
    }
}



export default getApiHooks