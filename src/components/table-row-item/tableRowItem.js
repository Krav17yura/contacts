import React from "react";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import moment from "moment";
import ClickCopy from "../click-copy";


const TableRowItem = ({picture, name, dob, phone, email, location, nat}) => {

    return (
        <TableRow>
            <TableCell>
                <Avatar src={picture.thumbnail} alt=""/>
            </TableCell>
            <TableCell>
                <Typography color="primary">
                    {name.title}. {name.first} {name.last}
                </Typography>
            </TableCell>
            <TableCell>
                <Typography>
                    {moment(dob.date).format('dddd')}, {moment(dob.date).add(10, 'days').calendar()}, {moment(dob.date).format('LTS')}
                </Typography>
                <Typography>{dob.age}</Typography>
            </TableCell>
            <TableCell>
                <ClickCopy text={email}/>
            </TableCell>
            <TableCell>
                <ClickCopy text={phone}/>
            </TableCell>
            <TableCell>
                <Typography>/{location.country}/</Typography>
                <Typography>
                    {location.city}, {location.street.name} {location.street.number}
                </Typography>
            </TableCell>
            <TableCell>{nat}</TableCell>
        </TableRow>
    )
}

export default TableRowItem