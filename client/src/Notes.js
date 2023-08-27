import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

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
                        return (
                            <div className="card" key={index}>
                                <div className="card-body">
                                    <h5 className='card-title'>{note.title}</h5>
                                    <p className='card-text'>{note.content}</p>
                                </div>
                            </div>
                        )
                    }
                    ))}
            </div>
        </div>
    );
};