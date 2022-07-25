export const getHomeData = (data) => {
    return {
        type: 'GET_HOME_DATA',
        payload: data
    }
}

export const pushIncredible = (items) => {
    return {
        type: 'PUSH_INCREDIBLE',
        payload: items
    }
}


export const pushMobile = (items) => {
    return {
        type: 'PUSH_MOBILE',
        payload: items
    }
}

export const pushLaptop = (items) => {
    return {
        type: 'PUSH_LAPTOP',
        payload: items
    }
}