import {useMutation} from 'react-query'
import {IAxiosRequestConfig, axiosInstance} from 'shared/api/hooks/index'


export const useMutationRequest = (config:IAxiosRequestConfig) => {
    const mutation = useMutation(
        () => axiosInstance.request(config)
    )
    return mutation
}