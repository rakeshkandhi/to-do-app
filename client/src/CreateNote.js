import { useState } from "react";
export default function Addnote({saveNoteFun}) {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    return (
        <div className="card">
            <div className="card-body">
                <h5 className='card-title'>Add a note</h5>
                <div className='form-group'>
                    <div className="form-floating mb-3">
                        <input type="text"
                            className="form-control"
                            id="floatingInput"
                            placeholder="Enter the title"
                            onChange={(event) => {
                                setTitle(event.currentTarget.value);
                            }} />
                        <label htmlFor="floatingInput">Title</label>
                    </div>
                    <textarea className="form-control"
                        rows="3"
                        placeholder="Enter the note"
                        onChange={(event) => {
                            setContent(event.currentTarget.value);
                        }} >

                    </textarea>
                </div>
                <button type="button" className="btn btn-dark" id='addBtn'
                    onClick={() => {
                        saveNoteFun({title,content});
                    }}>Add Note</button>

            </div>
        </div>
    )

}