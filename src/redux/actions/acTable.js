export const fetchData = () => dispatch => {
    dispatch(setLoad(true));
    const checkForError = response => {
        if (!response.ok) throw Error(response.statusText);
        return response.json();
    };
    fetch("https://randomuser.me/api/?results=100")
        .then(checkForError)
        .then(data => {
            dispatch(setData(data))
            dispatch(setPaginationData(data))
        })
        .catch(error => {
            console.log("error", error);
            dispatch(setError(true))
        })
        .finally(() => {
            dispatch(setLoad(false))
        });
}


export const setPaginationData = (data) => {
    return{
        type: "SET_PAGINATION_DATA",
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