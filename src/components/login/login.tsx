import './login.css';
import { useEffect, useState} from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import LoginSchema from '../../validator/loginSchema';
import { FormLogin } from '../../types/login/formLogin';
import { loginConstants } from '../../redux/constants/login/loginConstants';
import { useAppSelector, useAppDispatch } from '../../types/hooks/hooks';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch= useAppDispatch();
    const navigate = useNavigate();

    const isLoggedIn = useAppSelector(state => state.login.isLoggedIn)

    const token = useAppSelector(state => state.login.token)

    const [loginUser, setLoginUser] = useState <FormLogin> ({
        email,
        password
    });

    //managing form login
    const { register, handleSubmit, formState : {errors}, reset} = useForm <FormLogin> ({
        //function to allow us to use external validation library Yup
        resolver : yupResolver(LoginSchema),
        //initial value when the component is first rendered 
        defaultValues: loginUser
    });

    useEffect(() => {
        //Runs on the first render 
        console.log(loginUser); 
    }, []);
 
    useEffect(() => {
        //Runs on the first render and any time email changes
        setEmail(email);

        //select value email from loginUser
        loginUser.email = email;
        setLoginUser(loginUser);

        //select email and apply validation rules to react hook form
        register("email", {value: email})
    }, [email]);
        
    
    useEffect(() => {
        //Runs on the first render and any time password changes
        setPassword(password);

        //select value password from loginUser
        loginUser.password = password;

        setLoginUser(loginUser);

        //select password and apply validation rules to react hoo form
        register("password", {value: password})
    }, [password]);

    useEffect(() => {
        //Runs on the first render and any time isLoggedIn and token are true 
        //the navigation replace /login entry in the history stack instead of adding a /connected when condition is true .
        (isLoggedIn && token) && navigate('/connected', { replace:true })      
    }, [isLoggedIn, token ])
    
    //function to execute when form is submit
    const onSubmit = (data: FormLogin) => {
        console.log(data);
        //dispatch action LOGIN_SUBMIT with the payload data and do the post request for data in loginSaga
        dispatch({
            type:loginConstants.LOGIN_SUBMIT, 
            //validate data from the form 
            payload: data
        });       
    }

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
