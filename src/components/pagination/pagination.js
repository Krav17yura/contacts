import React from "react";
import {Grid, Typography} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import IconButton from "@material-ui/core/IconButton";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyle = makeStyles((theme) => ({
    root:{
        marginBottom: theme.spacing(3)
    }
}))

const Pagination = () => {
    const classes = useStyle();
    return (
        <Grid container justify={"flex-end"}  className={classes.root}>
            <Box>
                <IconButton aria-label="delete" size="small">
                    <ArrowBackIosIcon fontSize="inherit"/>
                </IconButton>
                <IconButton aria-label="delete" size="small">
                    1
                </IconButton>
                <IconButton aria-label="delete" size="small">
                    2
                </IconButton>
                <IconButton aria-label="delete" size="small">
                    <ArrowForwardIosIcon fontSize="inherit"/>
                </IconButton>
            </Box>
        </Grid>
    )
};

export default Pagination;