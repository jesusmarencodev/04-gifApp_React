import React,{useState} from 'react'
import { AddCategory } from './components/AddCategory';
import GifGrid from './components/GifGrid';

export const GifExpertApp = () => {

  //const categories = ['One Punch', 'Samurai X', 'Dragon Ball']
  const [categories, setCategories] = useState(['One Punch']);


/*   const handledAdd = (e) =>{
    //setCategories([...categories, 'Inuyasha']) forma 1
    //setCategories(anime => [...categories, 'Inuyasha']); //forma 2
    setCategories(['Inuyasha', ...categories ])
  }  */
  return (
      <>
        <h2>GifExperfApp</h2>
        <AddCategory setCategories={setCategories}/>
        <hr/>
        <ol>
          {
            categories.map(category =>{
              return <GifGrid category={category} key={category}/>
            })
          }
        </ol>
      </>
  )
}
