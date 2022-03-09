import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

//////////////SE CREA UN COMPONENTE GifExpertApp//////////////
export const GifExpertApp = () => {

    const lista = ['Dragon Ball', 'Vegeta'];                //Lista es un vector 
    const [categories, setCategories] = useState(lista);                    //Se hace un usestate con el fin de modificar los datos estáticos
 
    return (
        <>
            <h2>Aplicación con Gift</h2>
            <AddCategory setCategories={setCategories}/>                            {/* Se establece como el prop */}
            <hr />      
            <ol>                                                                    {/* Crea una linea debajo de la referencia */}
                  {                                                                  /* Se crea una lista de elementos */
                    categories.map(category =>(                                     //Se recorre la lista
                         <GifGrid                                                   //Se llama al componente y se le pasa el valor del useState
                         key={category}                                             //La key simpre la pide reac
                         category={category}                                        //category es la misma que se pasa al componente GifGrid
                         />   
                        ))
                    } 
            </ol>
        </>
    )
}
/////////////////////////////////////////////////////////////
