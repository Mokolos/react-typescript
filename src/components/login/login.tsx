import './login.css';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import LoginSchema from '../../validator/loginSchema';
import FormLogin from '../../types/formLogin';

const Login = () => {
    const { register, handleSubmit, formState : {errors} } = useForm <FormLogin> ({
        resolver : yupResolver(LoginSchema)
    });

    const onSubmit = (data: FormLogin) => console.log(data);
    
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="email" {...register("email")} />
                <p>{errors.email?.message}</p>

                <input type="password" {...register("password")}/>
                <p>{errors.password?.message}</p>

                <input type="submit" />
            </form>
        </>
    );
}

export default Login;
