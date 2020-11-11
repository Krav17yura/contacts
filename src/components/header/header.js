import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import ReplayRoundedIcon from "@material-ui/icons/ReplayRounded";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import AppsIcon from "@material-ui/icons/Apps";
import FormatAlignJustifyIcon from "@material-ui/icons/FormatAlignJustify";
import Container from "@material-ui/core/Container";
import {makeStyles} from "@material-ui/core/styles";

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
    return(
        <Grid container item xs={12} alignItems="baseline">
            <Grid className={classes.test} >
                <Typography variant={"h4"} className={classes.headerTitle}>
                    Contacts
                </Typography>
            </Grid>

            <Grid >
                <IconButton aria-label="delete"  className={classes.headerButton} >
                    <ReplayRoundedIcon />
                </IconButton>

                <ButtonGroup  size='small'   >
                    <Button>
                        <AppsIcon/>
                    </Button>
                    <Button>
                        <FormatAlignJustifyIcon />
                    </Button>
                </ButtonGroup>
            </Grid>
        </Grid>
    )
}

export default Header;