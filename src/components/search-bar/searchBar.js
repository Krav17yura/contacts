import React from "react";
import Container from "@material-ui/core/Container";
import {makeStyles} from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import {TextField} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import SearchIcon from '@material-ui/icons/Search';
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import Select from "@material-ui/core/Select";
import ClearIcon from '@material-ui/icons/Clear';
import {useDispatch, useSelector} from "react-redux";
import {
    setSearchByNameInputValue,
    setGenderSelectValue,
    setNationalityInputValue,
    clearSortBarInputValue, sortData, sortContacts
} from "../../redux/actions/acTable";


const useStyle = makeStyles((theme) => ({
    main: {
        flex: 1
    },
    root: {
        boxSizing: "border-box",
        padding: theme.spacing(1),
        background: '#e3eaea'
    },
    insideBlock: {
        background: "white",
        padding: theme.spacing(1),
    },
    formControl: {
        marginLeft: theme.spacing(1),
        minWidth: 200,
    },

}))

const SearchBar = () => {
    const classes = useStyle();
    const dispatch = useDispatch();
    const {searchInput, genderSelectValue, nationalityValue} = useSelector(({reTable}) => reTable.sortBar)
    const pageNumber = useSelector((state) => state.reTable.paginationData.pageNumber)
    console.log("render")

    const searchInputValueChange = (value) => {
        dispatch(setSearchByNameInputValue(value))
        dispatch(sortContacts())
    }

    const changeGenderSelectValue = (value) => {
        dispatch(setGenderSelectValue(value))
        dispatch(sortContacts())
    }

    const changeNationalityInputValue = (value) => {
        dispatch(setNationalityInputValue(value))
        dispatch(sortContacts())
    }

    const clearAllInputValue = () => {
        dispatch(clearSortBarInputValue())
        dispatch(sortContacts())
    }

    const onSortingData = () => {
        dispatch(sortContacts())
    }


    return (
        <Container className={classes.root}>
            <Box className={classes.insideBlock}>
                <Grid container item xs={12} alignItems={"center"}>
                    <Grid className={classes.main}>
                        <FormControl variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-password">Name</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password"
                                type={'text'}
                                value={searchInput}
                                onChange={event => searchInputValueChange(event.target.value)}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            edge="end"
                                            onClick={() => onSortingData()}
                                        >
                                            <SearchIcon/>
                                        </IconButton>
                                    </InputAdornment>
                                }
                                labelWidth={70}
                            />
                        </FormControl>
                        <FormControl variant="outlined" className={classes.formControl}>
                            <InputLabel htmlFor="outlined-age-native-simple">Gender</InputLabel>
                            <Select
                                native
                                label="Gender"
                                value={genderSelectValue}
                                onChange={event => changeGenderSelectValue(event.target.value)}
                            >
                                <option aria-label="None" value=""/>
                                <option value={"Male"}>Male</option>
                                <option value={"Female"}>Female</option>
                            </Select>
                        </FormControl>
                        <TextField
                            id="outlined-basic"
                            label="Nationality"
                            variant="outlined"
                            className={classes.formControl}
                            value={nationalityValue}
                            onChange={event => changeNationalityInputValue(event.target.value)}/>
                    </Grid>

                    <Grid>
                        <Button
                            className={classes.button}
                            onClick={() => clearAllInputValue()}
                            startIcon={<ClearIcon/>}
                        >
                            Clear
                        </Button>
                    </Grid>

                </Grid>


            </Box>
        </Container>
    )
};

export default SearchBar;