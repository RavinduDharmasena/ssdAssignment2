import React, { useState } from 'react'
import Posts from './Posts';
import Axios from 'axios'
import Header from './Header'

export default function PostViewer(props) {
    const [posts, setPosts] = useState(null)

    if (posts === null) {
        Axios.get('https://graph.facebook.com/v4.0/me/posts?fields=attachments{title},message,full_picture,icon,shares,properties,permalink_url,description,name,type',
            { headers: { 'Authorization': 'Bearer ' + props.accessToken } }).then((result) => {
                console.log(result)
                setPosts(result.data.data)
                console.log(posts)
            }).catch(error => {
                console.log(error)
            })
    }

    let postItems
    if (posts === null) {
        postItems = <div style={{ height: '100vh', textAlign: 'center', paddingTop: '40vh' }}>Retrieving posts</div>
    }
    else {
        postItems = posts.map(element => {
            if (element.type !== 'status') {
                return (<Posts image={element.full_picture} description={element.description}
                    link={element.permalink_url} name={element.name} key={element.id} type={element.type}
                    attachments={element.attachments} shares={element.shares} />)
            }
            return null
        });
    }
    
    return (
        <div>
            <Header userData={props.userData} />
            {postItems}
        </div>
    )
}