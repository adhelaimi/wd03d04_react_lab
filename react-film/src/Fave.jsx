import React,{Component} from 'react'
//nside the Fave component, define a function called handleClick.
//The function should accept an event (e) as an argument
//. Simply log out a message like "handling Fave click!" for now.

var handleClick = (e)=>(console.log((e)))
export default class Fave extends Component{
 render()
 {
   return(
     <div className="film-row-fave add_to_queue">
     <p onClick={handleClick} className="material-icons">add_to_queue</p>
     </div>
     
   )
 }
}