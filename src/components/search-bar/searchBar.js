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



const useStyle = makeStyles((theme) => ({
    main:{
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
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <Container className={classes.root}>
            <Box className={classes.insideBlock}>
                <Grid container item xs={12} alignItems={"center"}>
                    <Grid className={classes.main}>
                        <FormControl   variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-password">Search by full name</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password"
                                type={'text'}
                                value=''
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            edge="end"
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
                                value={age}
                                onChange={handleChange}
                            >
                                <option aria-label="None" value="" />
                                <option value={1}>Ten</option>
                                <option value={2}>Twenty</option>
                                <option value={1}>Thirty</option>
                            </Select>
                        </FormControl>
                        <TextField id="outlined-basic" label="Nationality" variant="outlined" className={classes.formControl} />
                    </Grid>

                    <Grid>
                        <Button
                            className={classes.button}
                            startIcon={<ClearIcon />}
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