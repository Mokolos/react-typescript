import './login.css';
import { useEffect, useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import LoginSchema from '../../validator/loginSchema';
import FormLogin from '../../types/formLogin';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const isInitialRender = useRef(true);

    const [loginUser, setLoginUser] = useState <FormLogin> ({
        email,
        password
    });

    const { register, handleSubmit, formState : {errors}, reset} = useForm <FormLogin> ({
        resolver : yupResolver(LoginSchema),
        defaultValues: loginUser
    });

    useEffect(() => {
        if (isInitialRender.current === true){
            isInitialRender.current = false;
            console.log(loginUser); 
        }
           
    //   reset({
    //     email: loginUser.email,
    //     password : loginUser.password

    //   })
    }, []);
 
    useEffect(() => {
        setEmail(email);
        loginUser.email = email;

        setLoginUser(loginUser);
        register("email", {value: email})
    }, [email]);
        
    useEffect(() => {
        setPassword(password);
        loginUser.password = password;

        setLoginUser(loginUser);
        register("password", {value: password})
    }, [password]);
    
    const onSubmit = (data: FormLogin) => console.log(data);

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="email" {...register("email")}  />
                {errors.email && <p>{errors.email?.message}</p>}

                <input type="password" {...register("password")}  />
                {errors.password && <p>{errors.password?.message}</p>}

                <input type="submit" />
            </form>
        </>
    );
}

export default Login;
