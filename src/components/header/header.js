import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import ReplayRoundedIcon from "@material-ui/icons/ReplayRounded";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import AppsIcon from "@material-ui/icons/Apps";
import FormatAlignJustifyIcon from "@material-ui/icons/FormatAlignJustify";
import {makeStyles} from "@material-ui/core/styles";
import {useDispatch} from "react-redux";
import {clearSortBarInputValue, fetchData} from "../../redux/actions/acTable";

const useStyles = makeStyles((theme) => ({
    headerTitle: {
        margin: theme.spacing(1),
    },
    headerButton:{
        bottom: 8
    },
    test: {
        flex: 1
    }
}))


const Header = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const onContactsReload = () => {
        dispatch(fetchData())
        dispatch(clearSortBarInputValue())
    }

    return(
        <Grid container item xs={12} alignItems="baseline">
            <Grid className={classes.test} >
                <Typography variant={"h4"} className={classes.headerTitle}>
                    Contacts
                </Typography>
            </Grid>

            <Grid >
                <IconButton aria-label="delete"  className={classes.headerButton} onClick={() => onContactsReload()} >
                    <ReplayRoundedIcon />
                </IconButton>


            </Grid>
        </Grid>
    )
}

export default Header;