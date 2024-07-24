import React ,{useState}from "react";
import { Icon } from "@iconify/react";
import styles from "./navbar.module.scss";
import Input from "../../atoms/inputs";


function Navbar(){
    const[searchText,setSearchText]=useState("");
    return(
        <header className={styles.header}>
            <article className={styles['search-bar']}>
                <Icon icon={"material-symbols:search"}/>
                <Input type="text" placeholder="Search Notes"
                className={styles.field}
                value={searchText} onChange={e=> setSearchText(e.target.value)}/>

                {/* searchbar */}

            </article>
            <div className={styles.theme}>
                <Icon icon={"vaadin:sun-down"}/>

            </div>
        </header>
    );

}
export default Navbar;
