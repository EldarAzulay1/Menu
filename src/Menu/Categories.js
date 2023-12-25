import React  from 'react'
import './index.css'

export default function Categories({ Categories , changeCat }) {
   
    return (
        <div className='btn-cat' >
            {
                Categories.map(category => {
                    return (
                        <button type='button' className='btn' key={category} onClick={() => changeCat(category)}>
                            {category}
                        </button>
                    )
                })
            }
        </div>
    )
}
