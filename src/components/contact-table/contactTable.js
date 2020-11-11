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

const useStyle = makeStyles((theme) => ({
    root:{
        marginTop: theme.spacing(3)
    },
    tableHead:{
        background: '#e3eaea'
    }
}))

const ContactTable = () => {
    const dispatch = useDispatch();
    const items = useSelector((state) => state.reTable.data.results)
    console.log(items)

    useEffect(() => {
        dispatch(fetchData())
    }, [])

    const classes = useStyle();
    return(
        <TableContainer component={Paper} className={classes.root}>
            <Table  aria-label="contacts table">
                <TableHead className={classes.tableHead} >
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
                    {items && items.map(item =>
                            <TableRowItem
                            key={item.login.uuid}
                            {...item}
                            />
                        )
                    }
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default ContactTable;