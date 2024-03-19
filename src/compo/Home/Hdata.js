import React from 'react'
import Sdata from '../../Sdata'
import Cards from '../cards'


function Hdata() {
  return (
    <div>{
 
        Sdata.map((e,index)=>{
        
          return(
        
        
          <Cards
          
          key={index}
          sname ={e.sname}
          link ={e.slink}
          blink={e.blink}
          text={e.text}
          
          />)
        })
        
        }  </div>
  )
}

export default Hdata