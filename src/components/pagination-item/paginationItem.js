import React from "react";
import IconButton from "@material-ui/core/IconButton";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import Box from "@material-ui/core/Box";



const PaginationItem = ({item}) => {
    console.log(item)
    return(
        <IconButton aria-label="delete" size="small">
            {item}
        </IconButton>
    )
}

export default PaginationItem;