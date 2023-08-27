import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Note from './Note';
import Addnote from '../CreateNote';
// import axios from 'axios';


// code for fetching data from endpoint using async and await
export default function Notes() {
    const [notes, setNotes] = useState([]);
    async function getAllNotes() {
        const res = await fetch('/todo');
        const data = await res.json();
        setNotes(data);
    }
    useEffect(() => {
        getAllNotes();
    }, []);

    async function saveNote(payload) {
        const res = await fetch('/todo', {
            method: "POST",
            body: JSON.stringify(payload),
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            }
        });
        getAllNotes();
    }


    async function deleteNote(id) {
        const res = await fetch(`/todo/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            }
        })
    }

    // code for fetching data from endpoint using only useEffect
    // useEffect(() => {
    //     fetch('/todo')
    //         .then(res => res.json())
    //         .then(data => setNotes(data)).catch(error => console.log(error));
    // },[])

    // code for fetching data from endpoint using axios() and async and await)
    // useEffect(() => {
    //     const getAllNotes = async () => {
    //         try{
    //             const res = await axios.get('/todo');
    //             setNotes(res.data);
    //         }
    //         catch(error){
    //             console.log(error);
    //         }   

    //     }
    //     getAllNotes();
    // },[])


    return (
        <div className='container my-3'>
            <h1>Take your notes</h1>
            <Addnote saveNoteFun={saveNote} />


            <hr />
            <h1>Your Notes</h1>
            <hr />


            <div id='notes' className='row conitainer-fluid'>
                {notes.length === 0 ? (
                    <span className='d-block p-2 text-bg-dark'>No saved notes</span>
                ) : (
                    notes.map((note, index) => {
                        return <Note title={note.title} content={note.content} index={index} />
                    }
                    ))}
            </div>
        </div>
    );
};