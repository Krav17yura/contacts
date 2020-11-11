import React from "react";
import Container from '@material-ui/core/Container';
import {makeStyles} from "@material-ui/core/styles";
import Header from "../../components/header";
import SearchBar from "../../components/search-bar";
import ContactTable from "../../components/contact-table";
import Statistic from "../../components/statistic";
import Pagination from "../../components/pagination";

const useStyles = makeStyles((theme) => ({
    root: {
        padding: "20px 20px 0 20px ",
        margin: "0 auto"
    }
}))

const Contacts = () => {
    const classes = useStyles();
    return (
        <Container className={classes.root} maxWidth={"lg"}>
         <Header/>
         <SearchBar/>
         <ContactTable/>
         <Statistic/>
         <Pagination/>
        </Container>
    )
};

export default Contacts;