import React from 'react';

export default function Note({ index, title, content }) {
    return (
        <div className="card" key={index} style={{ width: '18rem' }} >
            <div className="card-body">
                <h5 className='card-title'>{title}</h5>
                <p className='card-text'>{content}</p>
            </div>
        </ div>
            )
}
