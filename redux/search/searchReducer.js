const initalState = {
    loading: false,
    results: [],
    error: null
}

const searchReducer = (state = initalState, action) => {
    switch(action.type) {
        case 'FETCH_SEARCH_REQUEST':
            return {
                ...state,
                loading: true
            }
        case 'FETCH_SEARCH_SUCCESS':
            return {
                ...state,
                loading: false,
                results: action.payload,
                error: null
            }
        case 'FETCH_SEARCH_FAILURE':
            return {
                ...state,
                loading: false,
                results: [],
                error: action.payload
            }
        case 'CLEAR_SEARCH':
            return {
                loading:false,
                results: [],
                error: null
            }
        default:
            return state
    }
}

export default searchReducer