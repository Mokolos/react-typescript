import './login.css';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import LoginSchema from '../../validator/loginSchema';
import FormLogin from '../../types/formLogin';

const Login = () => {
    const { register, handleSubmit, formState : {errors}, reset } = useForm <FormLogin> ({
        resolver : yupResolver(LoginSchema)
    });

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [loginUser, setLoginUser] = useState <FormLogin> ({
        email,
        password
    });

    useEffect(() => {
      reset({
        email: loginUser.email,
        password : loginUser.password
      })
    }, []);

    useEffect(() => {
        setEmail(email);
        loginUser.email = email;

        setLoginUser(loginUser);
    }, [email]);

    useEffect(() => {
        setPassword(password);
        loginUser.password = password;

        setLoginUser(loginUser);
    }, [password]);


    const onSubmit = (data: FormLogin) => console.log(data);
    
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="email" value={email} {...register("email")} />
                <p>{errors.email?.message}</p>

                <input type="password" value={password} {...register("password")}/>
                <p>{errors.password?.message}</p>

                <input type="submit" />
            </form>
        </>
    );
}

export default Login;
