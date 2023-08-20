import React from "react";
import "./home.css";
import Status from "../status/Status";
import User from "../User/User";
import Priority from "../Priority/Priority";


const Home = ({ ticketData, receiveData, userData }) => {

  if(receiveData.priority === "priority") {
    ticketData.sort(function(priorityA,priorityB) {
      return (priorityA.priority - priorityB.priority)
  }).reverse()
  }


  function fun(titleA,titleB) {
    if(titleA.title < titleB.title) {
      return -1;
    } 
    if(titleA.title > titleB.title){
      return 1;
    }

    return 0;
  }

  if(receiveData.priority === "title") {
    ticketData.sort(fun)
  }

  

  return (
    <>
      <div className="home">
      {receiveData.status === "status" && <Status ticketData={ticketData} userData={userData} key={ticketData.id} /> }
      {receiveData.status === "user" && <User userData={userData} ticketData={ticketData} />}
      {receiveData.status === "priority" && <Priority userData={userData} ticketData={ticketData} /> }
      </div>
    </>
  );
};

export default Home;

