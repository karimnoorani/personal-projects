import React from 'react'

function BookRender(props){
    console.log({props})
    return(
        <div className="Books">
            <img 
                src={props.Cover}
                className="BookImage"/>
            <p>{props.BookTitle}</p>
            <p>{props.Author}</p>
            <p>{props.BookStatus === 'Want' ? "Your Wish List" : "Your Library"}</p>
        </div>
    )
}

export default BookRender