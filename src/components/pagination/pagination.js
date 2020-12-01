import React from "react";
import {Grid} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {useDispatch, useSelector} from "react-redux";
import {changePaginationPage} from "../../redux/actions/acTable";
import Pagination from '@material-ui/lab/Pagination';

const useStyle = makeStyles((theme) => ({
    root:{
        marginBottom: theme.spacing(3)
    }
}))

const AppPagination = () => {
    const classes = useStyle();
    const dispatch = useDispatch()
    const numberOfPages = useSelector((state) => state.reTable.paginationData.pageNumber)
    const currentPage = useSelector((state) => state.reTable.paginationData.currentPage)
    const paginate = (event, value) => {
        dispatch(changePaginationPage(value))
    }

    return (
        <Grid container justify={"flex-end"}  className={classes.root}>
            <Box>
                <Pagination
                    count={numberOfPages}
                    page={currentPage}
                    onChange={paginate}
                    variant="outlined"
                    shape="rounded" />
            </Box>
        </Grid>
    )
};

export default AppPagination;