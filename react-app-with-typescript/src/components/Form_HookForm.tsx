import {useForm, SubmitHandler} from "react-hook-form";


interface IFormInput{
    nick: string,
    subMonths: number,
    avatar: string,
    description: string
}

const Form_HookForm = () => {

    const { register, handleSubmit } = useForm<IFormInput>();
    const onSubmit: SubmitHandler<IFormInput> = data => console.log(data);


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