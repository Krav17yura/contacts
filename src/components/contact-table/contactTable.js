import React, {useEffect} from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import {makeStyles} from "@material-ui/core/styles";
import {useDispatch, useSelector} from "react-redux";
import {fetchData} from "../../redux/actions/acTable";
import TableRowItem from "../table-row-item";
import Loader from "../loading/loading";
import AppError from "../app-error";
import Typography from "@material-ui/core/Typography";

const useStyle = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(3)
    },
    tableHead: {
        background: '#e3eaea'
    }
}))

const ContactTable = () => {
    const dispatch = useDispatch();
    const paginationItems = useSelector((state) => state.reTable.paginationData.currentPosts)
    const {load, error} = useSelector(({reTable}) => reTable.tableItemsStatus)


    useEffect(() => {
        dispatch(fetchData())
    }, [])

    const classes = useStyle();
    return (
        <TableContainer component={Paper} className={classes.root}>
            {error ? <>
                {load ? <>
                    <Table aria-label="contacts table">

                        <TableHead className={classes.tableHead}>
                            <TableRow>
                                <TableCell>Avatar</TableCell>
                                <TableCell>Full name</TableCell>
                                <TableCell>Birthday</TableCell>
                                <TableCell>Email</TableCell>
                                <TableCell>Phone</TableCell>
                                <TableCell>Location</TableCell>
                                <TableCell>Nationality</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {paginationItems && paginationItems.map(item =>
                                <TableRowItem
                                    key={item.login.uuid}
                                    {...item}
                                />
                            )
                            }
                        </TableBody>
                    </Table>
                </> : <Loader/>}
            </> : <>
                <AppError/>
                <Typography variant='h5' >
                    Something going wrong, let`s try this again
                </Typography>
            </> }
        </TableContainer>
    )
}

export default ContactTable;