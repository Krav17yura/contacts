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
    },
    static: {
        collectionSize: 1,
        males: 0,
        females: 0,
        indeterminate: 0,
        predominate: '',
        nationalities: []
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

            for (let i = 1; i <= Math.ceil(data.results.length / state.paginationData.contactsPerPage); i++) {
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
        case 'CHANGE_PAGINATION_PAGE': {
            const indexOfLastPost = action.payload * state.paginationData.contactsPerPage;
            const indexOfFirstPost = indexOfLastPost - state.paginationData.contactsPerPage;
            const currentPosts = state.data.results.slice(indexOfFirstPost, indexOfLastPost)

            return {
                ...state,
                paginationData: {
                    ...state.paginationData,
                    currentPosts,
                    currentPage: action.payload
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
        case 'SET_STATISTIC': {
            const data = action.payload.results
            console.log(data)
            const collectionSize = data.length
            const males = data.filter(item => item.gender === 'male').length
            const females = collectionSize - males
            const predominate = () => (males > females) ? "Men" : "Woman"

            const nationalities = (itemsData) => {
                const newMass = []

                itemsData.forEach((item) => {
                     newMass.push(item.location.country)
                });

                const mapped = newMass.reduce((acc, item) => {
                    if (acc.hasOwnProperty(item)){
                        acc[item]++
                    } else{
                        acc[item] = 1
                    }
                    return acc
                }, {});
                return  Object.entries(mapped)
            }


            console.log(nationalities(data))
            return {
                ...state,
                static: {
                    ...state.static,
                    collectionSize,
                    males,
                    females,
                    predominate: predominate(),
                    nationalities: nationalities(data)
                }

            }
        }
        default:
            return state
    }
}
export default reTable;