import React from 'react'
import MenuItem from './MenuItem'
import './index.css'

export default function Menu({menu }) {


  return (
    <div className='section-center'>
        {
            menu.map(item => {
                return(
                    <MenuItem {...item} key={item.id}></MenuItem>
                )
            })
        }
    </div>
  )
}
