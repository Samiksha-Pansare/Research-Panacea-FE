import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../Css/academicevents.css';
import philosophy from '../Images/philosophy.jpeg'
import maths from '../Images/maths.jpeg'

export default class AcademicEvents extends Component {
  render() {
    return (
      <>
      
       <div className="container conf-container">
            <form id="search-form">
                <div className="row search-container  ">
                    <div className="col-12">
                        <div className="row no-gutters">
                            <div className="col-3 p-0 d-flex justify-content-center">                              
                                <div className="dropdown">
                                    <button className="btn dropdown-toggle domain-btn" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                      Sort By
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                      <li><a className="dropdown-item" href="#">Time</a></li>
                                      <li><a className="dropdown-item" href="#">Date</a></li>
                                      <li><a className="dropdown-item" href="#">Venue</a></li>
                                    </ul>
                                  </div>
                            </div>
                            <div className="col-8  p-0">
                                <div className="search__container">
                                    <input className="search__input" type="text" placeholder="Search"/>
                                </div>
                            </div>
                            <div className="col-lg-1 col-md-3 col-sm-12 p-0">
                              
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            <div className="row">
                <div className="col-lg-4">
                    <div className="card card-margin">
                        <img src={philosophy} className="card-img-top" alt="..."/>
                        <div className="middle">
                            <div className="text">Saves: 9</div>
                        </div>
                        <div className="card-header no-border">
                            <h5 className="card-title">Event Name</h5>
                        </div>
                        <div className="card-body pt-0">
                            <div className="widget-49">
                                <div className="widget-49-title-wrapper">
                                    <div className="widget-49-date-primary">
                                        <span className="widget-49-date-day">09</span>
                                        <span className="widget-49-date-month">apr</span>
                                    </div>
                                    <div className="widget-49-meeting-info">
                                        <span className="widget-49-pro-title">Venue: Mumbai</span>
                                        <span className="widget-49-meeting-time">12:00 to 13.30 Hrs</span>
                                    </div>
                                </div>
                                {/* <!-- <ul className="widget-49-meeting-points">
                                    <li className="widget-49-meeting-item"><span>Expand module is removed</span></li>
                                    <li className="widget-49-meeting-item"><span>Data migration is in scope</span></li>
                                    <li className="widget-49-meeting-item"><span>Session timeout increase to 30 minutes</span></li>
                                </ul> --> */}
                                <div className="widget-49-meeting-action">
                                    <a href="#" className="btn btn-sm btn-flash-border-primary">Details</a>
                                </div>
                            </div>
                        </div>
                      </div>
                </div>
                <div className="col-lg-4">
                    <div className="card card-margin">
                        <img src={maths} className="card-img-top" alt="..."/>
                        <div className="card-header no-border">
                            <h5 className="card-title">Event Name</h5>
                        </div>
                        <div className="card-body pt-0">
                            <div className="widget-49">
                                <div className="widget-49-title-wrapper">
                                    <div className="widget-49-date-primary">
                                        <span className="widget-49-date-day">09</span>
                                        <span className="widget-49-date-month">apr</span>
                                    </div>
                                    <div className="widget-49-meeting-info">
                                        <span className="widget-49-pro-title">Venue: Mumbai</span>
                                        <span className="widget-49-meeting-time">12:00 to 13.30 Hrs</span>
                                    </div>
                                </div>
                                
                                <div className="widget-49-meeting-action">
                                    <a href="#" className="btn btn-sm btn-flash-border-primary">Details</a>
                                </div>
                            </div>
                        </div>
                      </div>
                </div>
                <div className="col-lg-4">
                    <div className="card card-margin">
                        <img src={philosophy} className="card-img-top" alt="..."/>
                        <div className="card-header no-border">
                            <h5 className="card-title">Event Name</h5>
                        </div>
                        <div className="card-body pt-0">
                            <div className="widget-49">
                                <div className="widget-49-title-wrapper">
                                    <div className="widget-49-date-primary">
                                        <span className="widget-49-date-day">09</span>
                                        <span className="widget-49-date-month">apr</span>
                                    </div>
                                    <div className="widget-49-meeting-info">
                                        <span className="widget-49-pro-title">Venue: Mumbai</span>
                                        <span className="widget-49-meeting-time">12:00 to 13.30 Hrs</span>
                                    </div>
                                </div>
                                
                                <div className="widget-49-meeting-action">
                                    <a href="#" className="btn btn-sm btn-flash-border-primary">Details</a>
                                </div>
                            </div>
                        </div>
                      </div>
                </div>
            </div>
            </div>
<footer className="footer-07">
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-md-12 text-center">
                <h2 className="footer-heading"><a href="#" className="logo">Research Panachea</a></h2>
                <p className="menu">
                  <a href="#">Home</a>
                  <a href="#">Research Paper</a>
                  <a href="/collaborators">Collaborators</a>
                  <a href="#">Profile</a>
                </p>
                <ul className="ftco-footer-social p-0">
      <li className="ftco-animate"><a href="#" data-toggle="tooltip" data-placement="top" title="Twitter"><span className="fab fa-twitter"></span></a></li>
      <li className="ftco-animate"><a href="#" data-toggle="tooltip" data-placement="top" title="Facebook"><span className="ion-logo-facebook"><i className="fab fa-facebook"></i></span></a></li>
      <li className="ftco-animate"><a href="#" data-toggle="tooltip" data-placement="top" title="Instagram"><span className="fab fa-instagram"></span></a></li>
    </ul>
            </div>
        </div>
        <div className="row mt-5">
            <div className="col-md-12 text-center">
                <p className="copyright">
                  Copyright &copy; Research Panachea
              </p>
            </div>
        </div>
    </div>
</footer>   
      </>
    )
  }
}
