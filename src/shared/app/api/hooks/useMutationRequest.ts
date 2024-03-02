import {useMutation} from 'react-query'
import {IAxiosRequestConfig, axiosInstance} from 'shared/app/api/hooks'


export const useMutationRequest = (config:IAxiosRequestConfig) => {
    const mutation = useMutation(
        () => axiosInstance.request(config)
    )
    return mutation
}