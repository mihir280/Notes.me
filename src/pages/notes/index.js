import React, {useEffect,useState} from "react";
import Greeting from "../../components/atoms/greeting"; 
import Wrapper from "../../components/hoc/wrapper";
import utils from "../../utils/localstorage";
import types from "../../config/types";
import Note from "../../components/cards/note";
import notesData from "../../data/notes.json";
import styles from "./notes.module.scss";


function Notes(){
    const [notescoll, setNotesColl]=useState([]);
    const data=utils.getFromLocalStorage(types.NOTES_DATA);

        useEffect(()=>{
            const data=utils.getFromLocalStorage(types.NOTES_DATA);
            if(data && data.length){
                setNotesColl(data);
                return;
            }
            utils.addToLocalStorage(types.NOTES_DATA,notesData);
            setNotesColl(notesData);
        },[data]);

    return(
        <section className={styles.container}>
            
            <Greeting/>
            <main>
                
                {notescoll.map((note,i)=>(<Note key={note.id} text={note.text} color={note.color} date={note.createdAt}/>))}
            </main>
        </section>
    );
}
export default Wrapper (Notes);