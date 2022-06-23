import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext';
import { useState, useEffect } from 'react';
import React from 'react';

//pages and components 
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Navbar from './components/Navbar';
import Map from './components/Map';
//import Loader from './components/Loader';

function App() {
  const { authIsReady, user } = useAuthContext();
  const [eventData, setEventData, events] = useState(false);
  
  //loader function
  const [loading, setLoading] = useState(false);

  //event render function
  //const [setRenderEvent] = useState([]);

  /*useEffect(() => {
    const fetchEvents = async () => {
      
      setLoading(true);
      
      const res = await fetch("http://eonet.sci.gsfc.nasa.gov/api/v3/events/",  {
        method: 'GET',
        redirect: 'follow'
      })
      //extract events field from eonet api
      const events = await res.json()
      
      //render map with markers
      setEventData(events)
      //setRenderEvent(events);
      setLoading(false)
    } 
    fetchEvents();
requestOptions
}, [])*/

useEffect(()=>{
    var fetchEvents = {
      method: 'GET',
      redirect: 'follow'
    };

    setLoading(true);
    
    fetch("http://eonet.gsfc.nasa.gov/api/v3/events/", fetchEvents)
      .then(response => response.text(events))
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
    
      //extract events field from eonet api
      //const events = response.txt()
      
      //render map with markers;
      setEventData(eventData);
      //setRenderEvent(events);
      setLoading(false)
  
},[])

  return (
    <div className="App">
      {authIsReady && (
        <BrowserRouter>
          <Navbar/>
          <Map />
          <Switch>
            <Route exact path="/">
              {!user && <Redirect to = "/login" />}
              {user && <Home />}
            </Route>
            <Route path="/login">
              {user && <Redirect to ="/" />}
              {!user && <Login />}
            </Route>
            <Route path="/signup">
              {user && user.displayName && <Redirect to ="/" />}
              {!user && <Signup />}
            </Route>
          </Switch>

        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
