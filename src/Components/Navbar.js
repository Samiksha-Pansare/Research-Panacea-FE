import React, { Component, useState } from 'react';
import '../Css/Navbar.css';
import {Link} from "react-router-dom";

export default class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = { navColor: false};
        this.handlescrollbar = this.handlescrollbar.bind(this);
      }
    
     handlescrollbar() {
      if(window.scrollY >= 80){
        this.setState({ navColor: true });
        console.log("Function working");
      }
      else{
        this.setState({ navColor: false });
      }
     };
  render() {
    const { scrollstatus } = this.state;
    // const Navbar = () => {
    //     const [colorChange, setColorchange] = useState(false);
    //     const changeNavbarColor = () =>{
    //        if(window.scrollY >= 80){
    //          setColorchange(true);
    //        }
    //        else{
    //          setColorchange(false);
    //        }
    //     };
    //     window.addEventListener('scroll', changeNavbarColor);
    // } 
    return (
      <>
       <nav id="mynav" className="navbar fixed-top navbar-expand-lg navbar-light ">
        <div className="container-fluid">
            <a className="navbar-brand" to="#">Research Portal</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to={'/'}>Home</Link>
                </li>
                <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Profile
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><Link className="dropdown-item" to={'/feed'}>Feed</Link></li>
                    <li><Link className="dropdown-item" to={'/chat'}>Chat</Link></li>
                    <li><Link className="dropdown-item" to={'/recommend'}>Recommend</Link></li>
                </ul>
                </li>
                <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Events
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                     <li><Link className="dropdown-item" to={'/academiceve'}>Academic Events</Link></li>
                     <li><Link className="dropdown-item" to={'/upcomingconf'}>Upcoming Conferences</Link></li>
                     
                </ul>
                </li>
                <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Research
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><Link className="dropdown-item" to='/research'>Research Papers</Link></li>
                    <li><Link className="dropdown-item" to='/collaborators'>Collaborate</Link></li>
                    <li><Link className="dropdown-item" to='/collabreq'>Collab Requests</Link></li>
                </ul>
                </li>
            </ul>
            <form className="d-flex">
              <button type="button" className="btn btn-outline-dark navbar-btn">Log Out</button>
            </form>
            </div>
        </div>
        </nav>
      </>
    )
  }
}