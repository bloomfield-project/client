export const logIn = (data) => {
    return ({
        type:'login',
        data
    })
}

export const logout = () => {
    return ({
        type:'logout'
    })
}
