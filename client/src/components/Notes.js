import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Note from './Note';
// import axios from 'axios';


// code for fetching data from endpoint using async and await
export default function Notes() {
    const [notes, setNotes] = useState([]);
    async function getAllNotes() {
        const res = await fetch('/todo');
        console.log(res);
        const data = await res.json();
        setNotes(data);
    }
    useEffect(() => {
        getAllNotes();
    }, []);

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
            <div className="card">
                <div className="card-body">
                    <h5 className='card-title'>Add a note</h5>
                    <div className='form-group'>
                        <textarea className="card-body" rows="3" ></textarea>
                    </div>
                    <button className="btn btn-primary" id='addBtn'>Add Note</button>
                </div>
            </div>
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