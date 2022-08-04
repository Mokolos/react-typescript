import loginApi from "./loginApi";

export async function loginPost (email: string, password: string){
    return loginApi.post('/api/login',{
        email: email,
        password: password
    })
    .then(response => {
        return response; 
    })
    .catch(error => {
        return error;   
    })
};
