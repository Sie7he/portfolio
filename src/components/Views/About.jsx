import React  from 'react';
import { Cards } from '../shareds/Cards';
import { projects } from '../../data/projects';


export const About = () => {


    return (
        <div  className='w-full py-28'>
            <div>
                <h2 className='text-arsenic p-14 text-5xl text-center mb-7'>Proyectos</h2>

                <div className="grid grid-cols-1 gap-4 w-full justify-center sxl:grid-cols-2">
                    {projects.map(card => (
                        <div className='flex justify-center ' key={card.id} >
                            <Cards  {...card} />
                        </div>

                    ))}

                </div>
            </div>

        </div>
    )
}
