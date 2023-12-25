import React, { useState } from 'react'
import items from './data';
import './index.css'
import Menu from './Menu';
import Categories from './Categories';

export default function AppMenu() {
    const allCategories = ['all' , ...new Set(items.map(item => item.category))]
    const [OurMenu , setMenu] = useState(items);
    const [Catgories , setCatgories] = useState(allCategories);

    const changeCat = (cat) => {
        if(cat == "all"){
            setMenu(items)
            return;
          
        }
        const tamp = items.filter(item => {
            return item.category == cat
        })
        setMenu(tamp);
    }

  return (
    <div>
        <h2 className='title'>Our Menu</h2>
        <hr className='hr'></hr>
        <Categories Categories={Catgories} changeCat={changeCat}></Categories>
        <Menu menu={OurMenu}></Menu>
    </div>
  )
}
