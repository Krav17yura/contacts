const reTable = (state = {
    data: [],
    tableItemsStatus: {
        load: false,
        error: false
    }
}, action) => {
    switch (action.type) {
        case 'SET_DATA': {
            return {
                ...state,
                data: action.payload
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