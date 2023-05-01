import { useMutation } from "@tanstack/react-query";
import { PersonData } from "../interfaces/person-data";
import axios from "axios";

const postData = (data: PersonData) => {
    return axios.post("http://localhost:3200/send", data);
}

export function useIdentityMutation(){
    const { mutate, isLoading, isSuccess, isError } = useMutation({
        mutationFn: (data: PersonData) => postData(data)
    })

    return {
        mutate,
        isLoading,
        isSuccess,
        isError
    }
}