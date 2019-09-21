import React from 'react'
import './Posts.css'

export default function Posts(props){
    let image,title

    if(props.type !== 'link'){
        image = <img src={props.image} className="img-thumbnail" alt="post_image"/>
    }
    else{
        image = <h2>No Preview Available</h2>
    }

    title =  props.type.charAt(0).toUpperCase() + props.type.substring(1,props.type.length).toLowerCase() + ' Post'
    
    if(props.type === 'video' && props.attachments !== undefined){
        let additionalPart = props.attachments.data[0].title.split(' ').map(Element => {return Element.charAt(0).toUpperCase() + Element.substring(1,Element.length).toLowerCase()}).join(' ') 
        title += ' - ' + additionalPart
    }
        return(
            <div className="posts col-md-6">
                <div className="card">
                    <div className="card-header">
                    {title}
                    </div>
                    <div className="card-body">
                    <a href={props.link} target="_blank" rel="noopener noreferrer">{image}</a>
                        <h5 className="card-title">{props.name}</h5>
                        <p className="card-text">{props.description}</p>
                        <p>{props.shares !== undefined ? props.shares.count + ' shared' : '0 shared'}</p>
                        <a href={props.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Go to Original Post</a>
                    </div>
                </div>
            </div>
        )
    // }
}