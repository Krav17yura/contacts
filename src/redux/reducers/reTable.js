

const reTable = (state = {
    data: [],
    tableItemsStatus: {
        load: false,
        error: false
    },
    paginationData: {
        currentPage: 1,
        contactsPerPage: 10,
        currentPosts: [],
        pageNumber: []
    }
}, action) => {
    switch (action.type) {
        case 'SET_DATA': {
            return {
                ...state,
                data: action.payload
            }
        }
        case 'SET_PAGINATION_DATA': {
            const pageNumber = []
            const data = action.payload
            const indexOfLastPost = state.paginationData.currentPage * state.paginationData.contactsPerPage;
            const indexOfFirstPost = indexOfLastPost - state.paginationData.contactsPerPage;
            const currentPosts = data.results.slice(indexOfFirstPost, indexOfLastPost)

            for(let i = 1; i <= Math.ceil(data.results.length / state.paginationData.contactsPerPage); i++){
                pageNumber.push(i)
            }

            return {
                ...state,
                paginationData: {
                    ...state.paginationData,
                    currentPosts,
                    pageNumber
                }
            }
        }
        case 'SET_LOAD': {
            return {
                ...state,
                tableItemsStatus: {
                    ...state.tableItemsStatus,
                    load: action.payload
                }
            }
        }
        case 'SET_ERROR': {
            return {
                ...state,
                tableItemsStatus: {
                    ...state.tableItemsStatus,
                    error: action.payload
                }
            }
        }
        default:
            return state
    }
}
export default reTable;