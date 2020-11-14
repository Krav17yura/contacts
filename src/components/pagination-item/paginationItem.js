import React from "react";
import IconButton from "@material-ui/core/IconButton";
import {makeStyles} from "@material-ui/core/styles";

// const useStyle = makeStyles(theme => ({
//     root:{
//         backgroundColor: 'rgba(153,186,214, 0.5)'
//     }
// }))

const PaginationItem = ({item, paginate}) => {
    // const classes = useStyle();
    return(
        <IconButton aria-label="delete" /*className={classes.root}*/ size="small" onClick={() => paginate(item)}>
            {item}
        </IconButton>
    )
}

export default PaginationItem;