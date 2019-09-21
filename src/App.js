import React from 'react'
import FacebookLogin from 'react-facebook-login'
import './App.css'

function App(props) {
  function responseFacebook(response){
    if(response.picture !== undefined && response.picture !== localStorage.getItem('picture')){
      localStorage.setItem('picture',response.picture.data.url)
    }

    if(response.name !== undefined && response.name !== localStorage.getItem('name')){
      localStorage.setItem('name',response.name)
    }

    localStorage.setItem('token',response.accessToken)
    localStorage.setItem('access',true)
    props.setAccessToken(response.accessToken)
  }

  return (
    <div className="loginBackground">
      <div className="col-12 loginBody">
        <h2>Lets see latest 25 posts shared by you</h2>
        <FacebookLogin appId="2381033075454838" autoLoad={false} fields="name,email,picture" scope="user_posts"
              callback={responseFacebook} cssClass="btn btn-primary" icon="fa-facebook" textButton=" View Posts"/>
        {/* <input type="button" value="Get Facebook Posts" onClick={getFacebookPosts} className="btn btn-primary"/> */}
      </div>
    </div>
  );
}

export default App;
