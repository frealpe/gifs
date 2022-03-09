import React from 'react'
import { useFetchGifs } from '../helpers/useFetchGifs'
import { GifGridItem } from './GifGridItem'; 

export const GifGrid = ({ category }) => {

        const {data:images,loading} = useFetchGifs(category);

     return ( 
        <>
            <h3>{category}</h3>

            {loading && <p className="animate__animated animate__flash">'Cargando...'</p>}
             <div className="card-grid">
                {
                    images.map(img => (                                                                            //Se saco el id y el titulo    
                        <GifGridItem
                            key={img.id}
                            {...img}
                        />
                    ))
                }

            </div> 
        </>
    )
}
