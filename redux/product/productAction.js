export const getProduct = (product) => {
    return {
        type: 'GET_PRODUCT',
        payload: product
    }
}

export const pushComments = (comment) => {
    return {
        type: 'PUSH_COMMENTS',
        payload: comment
    }
}