export type FormLogin = {
  email : string
  password : string 
}

export type FormLoginSubmit ={
  type : any
  payload : FormLogin
}

export type FormLoginResponse = {
  config : any
  data : {
    token : string
  }
  headers : any
  request : any
  status : number
  statusText : any 
}
