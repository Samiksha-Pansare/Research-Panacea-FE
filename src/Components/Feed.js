import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Calender from '../Images/calender.svg'
import '../Css/feed.css';

export default class Feed extends Component {
  render() {
    return (
      <>
     
        <div className="container body-container">
            <div className="row">
                <div className="col-md-4">
                    <div className="container cal-cont">
                

                {/* <!--  Calender Plan  --> */}
                <div className="calender-plan">
                    <p className="title">Calender Plan</p>
                    <div className="calender-card">
                    <p>Today</p>
                    <div>
                        <p>22nd April 2018</p>
                        <img
					className=''
					src={Calender}
					alt='collab'
				/>
                    </div>
                    </div>
                </div>

                {/* <!--  Upcoming Events  --> */}
                <div className="upcoming-events">
                    <p className="title"><button className="btn event-btn">Upcoming Events</button></p>
                    <div className="event-tabs show-div">   
                        <div className="tab">
                            <p className="event-time">10:30 am</p>
                            <p className="event-detail">Monday briefing with the team.</p>
                        </div>

                        <div className="tab">
                            <p className="event-time">10:30 am</p>
                            <p className="event-detail">Monday briefing with the team.</p>
                        </div>
                    </div>
                    <p className='p-align'>
                    <button className="btn " type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                        <i className="fa fa-angle-down"></i>
                    </button>
                      </p>
                      <div className="collapse" id="collapseExample">
                        <div className="event-tabs show-div">   
                            <div className="tab">
                                <p className="event-time">10:30 am</p>
                                <p className="event-detail">Monday briefing with the team.</p>
                            </div>
    
                            <div className="tab">
                                <p className="event-time">10:30 am</p>
                                <p className="event-detail">Monday briefing with the team.</p>
                            </div>
                        </div>
                      </div>
                </div>
                </div>
        </div>
        <div className="col-md-8">
            <div className='container   '>
               
                <div className="">
                  <div className="tab-panels">
                              <div id="marzen" className="tab-panel">
                                <div className="blog-container">        
                                    <div className="write-post-container ">
                                            <div className="add-post-links">
                                                <Link to="#"><button type="button" className=" btn btn-add" data-bs-toggle="modal"><i className="fa fa-plus"></i> Event</button></Link>
                                                 <Link to="#"><button type="button" className=" btn btn-add" data-bs-toggle="modal"><i className="fa fa-plus"></i> Collaboration Request</button></Link>
                                                <Link to="#"><button type="button" className=" btn btn-add" data-bs-toggle="modal"><i className="fa fa-plus"></i> Research Paper</button></Link>
                                            </div>
                                        
                                    </div>
                                </div>
                              </div>
                      </div>
                  </div>
                  </div>
            <div className='container   '>
               
              <div className=" ">
                <div className="tab-panels">
                            <div id="marzen" className="tab-panel">
                        <div className="blog-card alt">
                            <div className="meta">
                                <div className="photo" ></div>
                                <ul className="details">
                                <li className="author"><a to="#">Collaborator Name</a></li>
                                <li className="date">July. 15, 2015</li>
                                <li className="tags">
                                    <ul>
                                    <li><a to="#">Domain</a></li>
                                    </ul>
                                </li>
                                </ul>
                            </div>
                            <div className="description">
                                <h1>Research Paper Name
                        </h1>
                                <h2>Publication Name: Sample
                    
                        </h2>
                                <p>Speaking at the launch, Head West Africa Operations, Redington, Sivadoss Vijayakumar, emphasized the importance of innovation and excellent design in creating devices.
                        </p>
                                <p className="read-more">
                                <Link to="#" className='linkpad'><button type="button" className=" btn btn-light" data-bs-toggle="modal"><i className="fa fa-bookmark"></i> Save</button></Link>
                                <Link to="#">Read More</Link>
                                </p>
                            </div>
                            </div>        
                            </div>
                    </div>
                </div>
                </div>
                
                <div className='container   '>
               
                    <div className=" ">
                      <div className="tab-panels">
                                  <div id="marzen" className="tab-panel">
                                    <div className="blog-container ">        
                                        <div className="blog-header">
                                            <div className="blog-author--no-cover">
                                                <h3>Russ Beye</h3>
                                            </div>
                                        </div>
                                        <div className="blog-body">
                                            <div className="blog-title">
                                            <h1><a to="#">Looking for a UI/UX Enthusiast</a></h1>
                                            </div>
                                            <div className="blog-summary">
                                            <p>Here is an example of a post without a cover image. You don't always have to have a cover image. In fact, leaving them out from time to time and disrupt the predictive flow and make the overall design more interesting. Something to think about.</p>
                                            </div>
                                            <div className="blog-tags">
                                            <ul>
                                                <li><a to="#">design</a></li>
                                                <li><a to="#">web dev</a></li>
                                                <li><a to="#">css</a></li>
                                            </ul>
                                            </div>
                                        </div>
                                        <div className="blog-footer">
                                            <ul>
                                            <li className="published-date">12 days ago</li>
                                            <li className="comments"><Link to="#"><button type="button" className=" btn  btn-light" data-bs-toggle="modal"><i className="fa fa-bookmark"></i> Save</button></Link></li>
                                            <li className="shares">
                                                <button type="button" className=" btn btn-con" data-bs-toggle="modal" data-bs-target="#exampleModal">View</button>
                                                {/* <!-- Button trigger modal --> */}
                                            </li>
                                            </ul>
                                        </div>
                                        </div>
                                  </div>
                          </div>
                      </div>
                      </div>
                <div className="container">
                
                    </div>
            </div>
        </div>
    </div>
        {/* <!-- Main Content goes here --> */}
<footer className="footer-07">
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-md-12 text-center">
                <h2 className="footer-heading"><Link to="#" className="logo">Research Panachea</Link></h2>
                <p className="menu">
                  <Link to="#">Home</Link>
                  <Link to="#">Research Paper</Link>
                  <Link to="#">Collaborators</Link>
                  <Link to="#">Profile</Link>
                </p>
                <ul className="ftco-footer-social p-0">
      <li className="ftco-animate"><Link to="#" data-toggle="tooltip" data-placement="top" title="Twitter"><span className="fab fa-twitter"></span></Link></li>
      <li className="ftco-animate"><Link to="#" data-toggle="tooltip" data-placement="top" title="Facebook"><span className="ion-logo-facebook"><i className="fab fa-facebook"></i></span></Link></li>
      <li className="ftco-animate"><Link to="#" data-toggle="tooltip" data-placement="top" title="Instagram"><span className="fab fa-instagram"></span></Link></li>
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
