import axios,{ type AxiosRequestConfig } from "axios";

const authConfig = (): string | undefined => {
    const token = "your_token_logic_here"; // Replace with actual token retrieval logic
    return token ? `Bearer ${token}` : undefined;
  };
  
  // Base API configuration
  const apiBaseURL = import.meta.env.VITE_URL_API as string;
  
  // Generic GET request
  const get = async <T>(
    url: string,
    auth: boolean = true,
    resType: 'blob' | 'json' = 'json'
  ): Promise<T> => {
    const config: AxiosRequestConfig = {
      headers: auth ? { Authorization: authConfig() } : {},
      responseType: resType,
    };
    const response = await axios.get<T>(`${apiBaseURL}${url}`, config);
    return response.data;
  };
  
  // Generic POST request
  const post = async <T>(
    url: string,
    data: any,
    auth: boolean = true,
    contentType: 'json' | 'formData' = 'json'
  ): Promise<T> => {
    const config: AxiosRequestConfig = {
      headers: {
        Authorization: auth ? authConfig() : undefined,
        'Content-Type': contentType === 'formData' ? 'multipart/form-data' : 'application/json',
      },
    };
    const response = await axios.post<T>(`${apiBaseURL}${url}`, data, config);
    return response.data;
  };
  
  // Generic PUT request
  const put = async <T>(
    url: string,
    data: any,
    auth: boolean = true,
    contentType: 'json' | 'formData' = 'json'
  ): Promise<T> => {
    const config: AxiosRequestConfig = {
      headers: {
        Authorization: auth ? authConfig() : undefined,
        'Content-Type': contentType === 'formData' ? 'multipart/form-data' : 'application/json',
      },
    };
    const response = await axios.put<T>(`${apiBaseURL}${url}`, data, config);
    return response.data;
  };
  
  // Generic DELETE request
  const del = async <T>(
    url: string,
    auth: boolean = true
  ): Promise<T> => {
    const config: AxiosRequestConfig = {
      headers: auth ? { Authorization: authConfig() } : {},
    };
    const response = await axios.delete<T>(`${apiBaseURL}${url}`, config);
    return response.data;
  };
  
  const api = {
    get,
    post,
    put,
    del,
  };
  
  export default api;