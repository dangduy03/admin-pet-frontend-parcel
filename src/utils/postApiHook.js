import apiService from "../services/apiService";
const postApiHook = async (setData, apiCall, data) => {
    try {
        const response = await apiService.post(apicall,data)
        if (response.status >= 200 && response.status <= 299) {
            setData(response.data);
        }
    } catch (error) {
        console.log(error)

    }

}
export default postApiHook