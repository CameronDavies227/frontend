import React, { useState } from 'react';
import './App.css';
import ScheduleComponent from "./components/ScheduleComponent";
import Dashboards from './Dashboard';
import Login from './components/Login/Login';
import useUID from './useUID';
import loader from "./images/loading-cargando.gif";

function App() {
  const { UID, setUID } = useUID();

  //window.addEventListener("load", function() {
  //  const loader = document.querySelector(".loader");
  //  loader.className += " hidden";
  //})
  if(!UID) {
    return <Login setUID={setUID} />
  }

  //<Spinner animation="border" role="status">
  //  <span className={loading}>Loading...</span>
  //</Spinner>

  //<div clasName="loader">
  //  <img src={loader} alt="earching..."/>
  //</div>


  return (
    <div className="wrapper" >

      <h1>Application</h1>
      <Dashboards/>
      <div className="columns">
        <div className="column is-half is-offset-one-quarter"> Bootstrap stuff needed!
          <ScheduleComponent/>
        </div>
      </div>
    </div>
  );

}
 
export default App;

