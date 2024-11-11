const LOGIN_USER = {
    REQUEST: 'LOGIN_USER_REQUEST'
}

export const loginUser = ()=>{
    return {
        type: LOGIN_USER.REQUEST,
        payload: {email: 'parokoola@gmail.com', password: '123456'}
        
    }
}