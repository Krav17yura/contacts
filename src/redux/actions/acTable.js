export const fetchData = () => dispatch => {
    dispatch(setLoad(false));
    const checkForError = response => {
        if (!response.ok) throw Error(response.statusText);
        return response.json();
    };
    fetch("https://randomuser.me/api/?results=52")
        .then(checkForError)
        .then(data => {
            dispatch(setData(data))
            dispatch(setPaginationData())
            dispatch(setStatistic())
            dispatch(setError(true))
        })
        .catch(error => {
            console.log("error", error);
            dispatch(setError(false))
        })
        .finally(() => {
            dispatch(setLoad(true))
        });
}

export const sortContacts = () => dispatch => {
    dispatch(sortData())
    dispatch(setPaginationData())
    dispatch(setStatistic())
}

export const setSearchByNameInputValue = (value) => {

    return {
        type: 'SET_SEARCH_BY_NAME_INPUT_VALUE',
        payload: value
    }
}

export const setGenderSelectValue = (value) => {

    return {
        type: 'SET_GENDER_SELECT_VALUE',
        payload: value
    }
}

export const setNationalityInputValue = (value) => {

    return {
        type: 'SET_NATIONALITY_INPUT_VALUE',
        payload: value
    }
}

export const clearSortBarInputValue = () => {
    return{
        type: 'CLEAR_SORT_BAR_INPUT_VALUE'
    }
}



export const sortData = () => {
    return{
        type: 'SORT_DATA'
    }
}


export const setPaginationData = (data) => {
    return{
        type: "SET_PAGINATION_DATA",
        payload: data
    }
}

export const changePaginationPage = (numberOfPage) => {
    return{
        type: 'CHANGE_PAGINATION_PAGE',
        payload: numberOfPage
    }
}

export const setStatistic = (data) => {
    return{
        type: "SET_STATISTIC",
        payload: data
    }
}


export const setData = (data) => {
    return {
        type: 'SET_DATA',
        payload: data
    }
}

export const setLoad = (value) => {
    return {
        type: 'SET_LOAD',
        payload: value
    }
}

export const setError = (value) => {
    return{
        type: 'SET_ERROR',
        payload: value
    }
}
