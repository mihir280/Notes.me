import React ,{useState} from "react";

import BrandLogo from '../../../../components/shared/brand';
import {useNavigate} from 'react-router-dom';
import styles from "./form.module.scss";

import Input from "../../../../components/atoms/inputs";
import Button from "../../../../components/atoms/buttons";


function Form(){
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const navigate=useNavigate();

    return(
        <section className={styles["form-container"]}>
           
            <BrandLogo />
            <div className={styles.form}>
               
                <Button
                text="Join with Google"
                className={styles.google}
                />
             <div className={styles.option}>
               <span>or join with email address</span> 
            </div> 
            <article className={styles.details}>
                <Input type="text" placeholder={'Email Address'}value={email} onChange={(e)=>setEmail(e.target.value)}  />

                <Input type="password" placeholder={'Password'}value={password} onChange={(e)=>setPassword(e.target.value)}  />
                <Button
                text="Join with Email"
                className={styles.emailbtn}
                handlClick={()=>navigate("/notes")}
        
                />
            </article>
            </div>

        </section>
    );
    
}
export default Form;