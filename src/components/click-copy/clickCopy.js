import React, {useState} from "react";
import Button from "@material-ui/core/Button";
import FileCopyOutlinedIcon from "@material-ui/icons/FileCopyOutlined";
import {Tooltip} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import {CopyToClipboard} from "react-copy-to-clipboard/lib/Component";

const useStyle  = makeStyles((theme) => ({
    root:{
        cursor: "pointer",
        fontSize: 14,
        textTransform: "lowercase"
    }
}))

const STATUS_COPY = {
    COPY: "copy",
    COPIED: "copied",
};

const TITLE_BY_STATUS = {
    [STATUS_COPY.COPY]: "Copy",
    [STATUS_COPY.COPIED]: "Copied",
};


const ClickCopy = ({text}) => {
    const classes = useStyle();
    const [statusCopy, setStatusCopy] = useState(STATUS_COPY.COPY);


    const onClickCopy = () => {
        setStatusCopy(STATUS_COPY.COPIED);
    }
    const onClickAway = () => {
        setStatusCopy(STATUS_COPY.COPY);
    }

    return(
        <ClickAwayListener onClickAway={() => onClickAway()}>
        <Tooltip title={TITLE_BY_STATUS[statusCopy]} placement="top" arrow>
            <CopyToClipboard text={text} className={classes.root}>
                <Button startIcon={<FileCopyOutlinedIcon/>}  onClick={() => onClickCopy()} color={"primary"}>
                    {text}
                </Button>
            </CopyToClipboard>
        </Tooltip>
        </ClickAwayListener>
    )
}

export default ClickCopy;
