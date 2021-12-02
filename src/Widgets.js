import React from 'react'
import './Widgets.css'

function Widgets() {
    return (
        <div className='widgets'>
           <iframe
             width="340" 
             height="100%" 
             src="https://www.youtube.com/watch?v=B-kxUMHBxNo&t=11134s " 
             title="YouTube video player" 
             frameborder="0" 
             allowTransparency='true'
             style={{border:'none', overflow:'hidden'}}
             allow='encrypted-media'
             scrollig='no'
             allowfullscreen></iframe> 
            {/*  <iframe
              width="560" 
              height="315" 
              src="https://www.youtube.com/embed/dbsejWwqBSs" 
              title="YouTube video player"
               frameborder="0"
                allowfullscreen></iframe>
 */}
             
        </div>
    )
}

export default Widgets
