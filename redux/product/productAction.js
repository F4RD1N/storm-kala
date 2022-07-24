export const getProduct = (product) => {
    return {
        type: 'GET_PRODUCT',
        payload: product
    }
}