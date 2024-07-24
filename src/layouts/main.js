// import { Suspense } from "react";
import React, {Suspense} from "react";

import Loader from "../components/shared/loader";
import styles from "./layout.module.scss";
import Sidebar from "../components/shared/sidebar";
import {Outlet} from "react-router-dom";
import Navbar from "../components/shared/navbar";


function Main(){
    return(
        <main className={styles.container}>
        <Suspense fallback={<Loader/>}>
            
            {/* sidebar */}
            <Sidebar/>
            <div className={styles.main}>
                {/* Navbar */}
                <Navbar/>
                <section className={styles.content}>
                    <Outlet/>
                </section>
            </div>

        </Suspense>
        </main>

    );
}
export default Main;