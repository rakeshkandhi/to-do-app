import React, { useState } from 'react';
export default function Note({ index, noteItem, deleteFun, updateFun }) {
    const [editFlag, setEditflag] = useState(false);
    const [title, setTitle] = useState(noteItem.title);
    const [content, setContent] = useState(noteItem.content);
    function Viewnote() {
        return (
            <div className="card" key={index} style={{ width: '18rem' }} >
                <div className="card-body">
                    <h5 className='card-title'>{noteItem.title}</h5>
                    <p className='card-text'>{noteItem.content}</p>
                </div>
                <div className="col-md-12">
                    <button type="button" className="btn btn-danger"
                        onClick={() => {
                            setEditflag(true);
                        }} id={index}>Edit</button>
                    <button type="button" className="btn btn-dark"
                        onClick={() => {
                            deleteFun(noteItem.id);
                        }} id={index}>Delete</button>
                </ div></div>
        )
    }
    function Editnote() {

        return (
            <>
                <div className="card" key={index} style={{ width: '18rem' }} >
                    <div className="card-body">
                        <input type="text"
                            className="form-control"
                            id="floatingInput"
                            placeholder="Enter the title"
                            onChange={(event) => {
                                setTitle(event.currentTarget.value);
                            }}
                            value={title}
                        />
                        <textarea className="form-control"
                            rows="3"
                            placeholder="Enter the note"
                            onChange={(event) => {
                                setContent(event.currentTarget.value);
                            }}
                            value={content}
                        >
                        </textarea>
                    </div>
                    <button className="btn btn-dark"
                        onClick={() => {
                            updateFun(noteItem.id, { title, content });
                            setEditflag(false);
                        }}
                    >update</button>
                </div >
            </>
        );
    }


    return (editFlag === true ? Editnote() : Viewnote());


}
