import React from "react";
import IconButton from "@material-ui/core/IconButton";


const PaginationItem = ({item, paginate}) => {
    return(
        <IconButton aria-label="delete" size="small" onClick={() => paginate(item)}>
            {item}
        </IconButton>
    )
}

export default PaginationItem;