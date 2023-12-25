import React from 'react'
import './index.css'

export default function MenuItem({ title , price , img , desc }) {

    return (
        <article className='MenuItem'>
            <img className='img' src={img}></img>
            <div className='info'>
                <header>
                <h5>{title}</h5>
                <div className='price'>${price}</div> 
                </header>
                <p className='text'>{desc}</p>
            </div>
        </article>
    )
}
