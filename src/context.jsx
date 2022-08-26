import React from 'react'
const CardContext = React.createContext({})
export const CardProvider = CardContext.Provider
export default Card

export function Card(props){
    return(
        
        <div className='card text-center'>
            <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light"></div>
            <div className="card-header">{props.header}</div>
            <div className="card-body"> {props.body} </div>
        </div>
    );
}

export function CardWide(props){
    return(
        <div className='card text-center'>
                 <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                <img src={props.cardimage} width="400" align="center" className="img-fluid" alt="..."/>
                
            </div>
            <div className="card-header">{props.header}</div>
            <div className="card-body">
                {props.title && (<h5 className="card-title">{props.title}</h5>)}
                {props.text && (<p className="card-text">{props.text}</p>)}
                {props.body}
                {props.status && (<div id='createStatus'>{props.status}</div>)}
            </div>
        </div>
    );
}