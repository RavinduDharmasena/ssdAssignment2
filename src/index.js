import React,{useState,useEffect} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import App from './App';
import PostViewer from './PostViewer'
import * as serviceWorker from './serviceWorker';

export default function MainComponent(){
  const [accessToken,setAccessToken] = useState(null)
  const [userData,setUserData] = useState('')
  
  useEffect(() => {
      if(localStorage.getItem('access'))
        setAccessToken(localStorage.getItem('token'))
      else{
        localStorage.removeItem('token')
      }
  },[accessToken])

    return(
        <Router>
            <Route path='/' exact strict render = {() => (accessToken === null  ? <App setAccessToken={setAccessToken} setUserData={setUserData}/> : <PostViewer userData={userData} setAccessToken={setAccessToken} accessToken={accessToken}/>)}/>
        </Router>
    )
}

ReactDOM.render(<MainComponent />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
