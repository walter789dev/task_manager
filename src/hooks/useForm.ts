import { ChangeEvent, useState } from "react";

export const useForm = <T>(initial: T) => {
    const [dataForm, setDataForm] = useState<T>(initial);

    const handlerDataForm = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setDataForm((state) => ({
            ...state,
            [name]: value
        }))
    }

    return {
        dataForm,
        setDataForm,
        handlerDataForm
    }
}