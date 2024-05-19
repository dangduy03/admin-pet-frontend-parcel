import apiService from "../services/apiService";
const putApiHook = async (setData, apiCall, data) => {
    try {
        const response = await apiService.put(apiCall,data)
        if (response.status >= 200 && response.status <= 299) {
            setData(response.data);
        }
    } catch (error) {
        console.log(error)

    }

}
export default putApiHook