import {useQuery} from 'react-query'
import {IAxiosRequestConfig, axiosInstance} from 'shared/api/hooks/index'


export const useRequest = (name:string, config:IAxiosRequestConfig) => {

    const result = useQuery(
            name,
        () => axiosInstance.request(config)
    )

    console.log(result.isSuccess ? result.data.data : 'Wait...')

    return result
}