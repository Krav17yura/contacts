import React from 'react'
import {Container} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import {useSelector} from "react-redux";
import Loader from "../loading/loading";
import AppError from "../app-error";

const useStyle = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(4),
        backgroundColor: "white",
        padding: 20
    },
    statisticTitle: {
        marginBottom: theme.spacing(1)
    },
    statisticNameBlock: {
        marginRight: theme.spacing(3)
    },
    statisticName: {
        color: '#9b9a9a'
    },
    dominate: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
        backgroundColor: '#dede7f'
    },
    nationalityItem: {
        marginRight: theme.spacing(3),
        marginBottom: theme.spacing(1)
    }
}))

const Statistic = () => {
    const {males, females, collectionSize, predominate, nationalities} = useSelector(({reTable}) => reTable.static)
    const {load, error} = useSelector(({reTable}) => reTable.tableItemsStatus)
    const classes = useStyle();
    return (
        <Container className={classes.root}>
            <Grid>
                <Typography variant='h4' className={classes.statisticTitle}>Statistic</Typography>
                {error? <>
                {load? <>
                <Grid container>
                    <Grid className={classes.statisticNameBlock}>
                        <Typography variant='subtitle1' className={classes.statisticName}>
                            Collection size
                        </Typography>
                        <Typography variant='h4'>
                            {collectionSize}
                        </Typography>
                    </Grid>
                    <Grid className={classes.statisticNameBlock}>
                        <Typography variant='subtitle1' className={classes.statisticName}>
                            Males
                        </Typography>
                        <Typography variant='h4'>
                            {males}
                        </Typography>
                    </Grid>
                    <Grid className={classes.statisticNameBlock}>
                        <Typography variant='subtitle1' className={classes.statisticName}>
                            Females
                        </Typography>
                        <Typography variant='h4'>
                            {females}
                        </Typography>
                    </Grid>
                    <Grid className={classes.statisticNameBlock}>
                        <Typography variant='subtitle1' className={classes.statisticName}>
                            Indeterminate
                        </Typography>
                        <Typography variant='h4'>
                            0
                        </Typography>
                    </Grid>

                </Grid>
                <Grid item container xs={4} justify={"center"}>
                    <Box className={classes.dominate}>
                        <Typography>
                            {predominate} predominate
                        </Typography>
                    </Box>
                </Grid>
                <Typography variant='h6' className={classes.statisticName}>Nationalities</Typography>
                <Grid container>
                    {nationalities && nationalities.map(item =>
                        <Box className={classes.nationalityItem} key={item+item}>
                            <Typography>
                                <b>{item[0]}:</b> {item[1]} contact
                            </Typography>
                        </Box>
                        )
                    }
                </Grid>
                </>:<Loader/> }
                </>:
                  <>
                      <AppError/>
                      <Typography variant='h5' >
                          Something going wrong, let`s try this again
                      </Typography>
                  </> }
            </Grid>
        </Container>
    )
}


export default Statistic;