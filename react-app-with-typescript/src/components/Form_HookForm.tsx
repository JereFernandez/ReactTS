import {useForm, SubmitHandler} from "react-hook-form";
import { Sub } from "../types";


interface IFormInput{
    nick: string,
    subMonths: number,
    avatar: string,
    description: string
}

interface FormProps{
    onNewSub: (newSub: Sub) => void
}

const Form_HookForm = ({ onNewSub }: FormProps) => {

    const { register, handleSubmit } = useForm<IFormInput>();
    const onSubmit: SubmitHandler<IFormInput> = data => onNewSub(data);


    return (
        <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input  {...register("nick")} type="text" name="nick" placeholder="nick" />
            <input  {...register("subMonths")} type="number" name="subMonths" placeholder="subMonths" />
            <input {...register("avatar")} type="text" name="avatar" placeholder="avatar" />
            <textarea  {...register("description")} name="description" placeholder="description" />
            <button type="submit">Save new sub!</button>
        </form>
    </div>
    )

}

export default Form_HookForm