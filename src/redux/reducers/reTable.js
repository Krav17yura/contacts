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
    },
    sortBar:{
        searchInput: '',
        genderSelectValue: "",
        nationalityValue: '',
        sortedData: []
    }

}, action) => {
    switch (action.type) {
        case 'SET_DATA': {
            const data = action.payload

            return {
                ...state,
                data: data.results,
                sortBar: {
                    ...state.sortBar,
                    sortedData: data.results
                }
            }
        }
        case 'SET_PAGINATION_DATA': {
            const pageNumber = []
            const data = state.sortBar.sortedData
            const indexOfLastPost = state.paginationData.currentPage * state.paginationData.contactsPerPage;
            const indexOfFirstPost = indexOfLastPost - state.paginationData.contactsPerPage;
            const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost)

            for (let i = 1; i <= Math.ceil(data.length / state.paginationData.contactsPerPage); i++) {
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

        case 'SORT_DATA':{
            const data = state.data
            const searchInput = state.sortBar.searchInput;

            const filterSearch = data.filter((item) => {
                return Object.values(item.name).join(' ').toLowerCase().indexOf(searchInput.toLowerCase().trim()) > -1
            })

            return {
                ...state,
                sortBar: {
                    ...state.sortBar,
                    sortedData: filterSearch
                }
            }
        }

        case 'CLEAR_SORT_BAR_INPUT_VALUE':{
            return{
                ...state,
                sortBar: {
                    ...state.sortBar,
                    searchInput: '',
                    genderSelectValue: '',
                    nationalityValue: ''
                }
            }
        }

        case 'SET_SEARCH_BY_NAME_INPUT_VALUE':{
            return {
                ...state,
                sortBar: {
                    ...state.sortBar,
                    searchInput: action.payload
                }
            }
        }
        case 'SET_GENDER_SELECT_VALUE':{
            return {
                ...state,
                sortBar: {
                    ...state.sortBar,
                    genderSelectValue: action.payload
                }
            }
        }
        case 'SET_NATIONALITY_INPUT_VALUE':{
            return {
                ...state,
                sortBar: {
                    ...state.sortBar,
                    nationalityValue: action.payload
                }
            }
        }

        case 'CHANGE_PAGINATION_PAGE': {
            const indexOfLastPost = action.payload * state.paginationData.contactsPerPage;
            const indexOfFirstPost = indexOfLastPost - state.paginationData.contactsPerPage;
            const currentPosts = state.sortBar.sortedData.slice(indexOfFirstPost, indexOfLastPost)

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
            const data = state.sortBar.sortedData
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