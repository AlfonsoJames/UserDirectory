import React, { Component } from "react";
import API from "../../utils/API";
import "./style.css";

function Card() {
  state = {
    image: "",
    title: "",
    lastName: ""
  };

  componentDidMount = () => {
    const newState = { ...state };
    setState(newState);
    loadEmployee();
  }

  loadEmployee = () => {
    API.getRandomEmployee()
      .then(res =>
        setState({
          image: res.data.picture,
          title: res.data.name.title,
          lastName: res.data.name.last
        })
      )
      .catch(err => console.log(err));
  };


  return (
    <div
      className="card"
      image={state.image}
    >
      <p>{state.title}{state.lastName}</p>
    </div>
  );
}


export default Card;
