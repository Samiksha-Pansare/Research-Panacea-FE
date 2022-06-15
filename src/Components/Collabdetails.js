import React, { Component } from 'react'
import '../Css/collabdetails.css';
import {Link} from "react-router-dom";

export default class Collabdetails extends Component {
  render() {
    return (
      <>
      <div className="container">
            <div className="blog-container">        
            <div className="blog-header">
                <div className="blog-author--no-cover">
                    <h3>Russ Beye</h3>
                </div>
            </div>
            <div className="blog-body">
                <div className="blog-title">
                <h1><a href="#">Looking for a UI/UX Enthusiast</a></h1>
                </div>
                <div className="blog-summary">
                <p>Here is an example of a post without a cover image. You don't always have to have a cover image. In fact, leaving them out from time to time and disrupt the predictive flow and make the overall design more interesting. Something to think about.</p>
                </div>
                <div className="blog-tags">
                <ul>
                    <li><a href="#">design</a></li>
                    <li><a href="#">web dev</a></li>
                    <li><a href="#">css</a></li>
                </ul>
                </div>
            </div>
            
            <div className="blog-footer">
                <p></p>
                <ul>
                <li className="published-date">12 days ago</li>
                {/* <!-- <li className="comments"><a href="#"><svg className="icon-bubble"><i className='fa-fa-heart'></i></svg><span className="numero">8</span></a></li> --> */}
                <li className="shares">
                    
                </li>
                </ul>
                <div className="container">
                    <h3 className="about-rp">About My Research/Project</h3>
                    <div className="blog-summary">
                        <p>Here is an example of a post without a cover image. You don't always have to have a cover image. In fact, leaving them out from time to time and disrupt the predictive flow and make the overall design more interesting. Something to think about.</p>
                    </div>
                    <h3 className="about-rp">Job Description</h3>
                    <div className="blog-summary">
                            <ol className="number-circle-list">
                                <li className="number-circle-list--list-item">Remote</li>
                                <li className="number-circle-list--list-item">Full Time</li>
                                <li className="number-circle-list--list-item">Something Elses</li>
                            </ol>
                    </div>
                    <div className="d-flex justify-content-center">
                        <Link to={'/collabdet'}><button type="button" className=" btn btn-con" data-bs-toggle="modal" data-bs-target="#exampleModal">Apply</button></Link>
                        
                    {/* <!-- Button trigger modal --> */}
                    </div>
                    
                    
                    
                    {/* <!-- Modal --> */}
                    <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-scrollable">
                        <div className="modal-content">
                            <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Application</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div className="row ">
                                    <div className="col-lg-12 mx-auto">
                                        <div className="card mt-2 mx-auto p-4 bg-light">
                                            <div className="card-body bg-light">
                                                <div className="container">
                                                    <form id="contact-form" role="form">
                                                        <div className="controls">
                                                            <div className="row">
                                                                <div className="col-md-12">
                                                                    <div className="form-group">
                                                                        <label for="CV" className="form-label">CV</label>
                                                                        <input className="form-control" type="file" id="CV"/>
                                                                      </div>
                                                                </div>
                                                                <div className="col-md-12">
                                                                    <div className="form-group">                               
                                                                            <label for="CL" className="form-label">Cover Letter</label>
                                                                            <input className="form-control" type="file" id="CL"/>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-md-12">
                                                                    <div className="form-group"> <label for="form_email">Email *</label> <input id="form_email" type="email" name="email" className="form-control" placeholder="email *" required="required" data-error="Valid email is required."/> </div>
                                                                </div>                                                            
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-md-12">
                                                                    <div className="form-group"> <label for="form_proposal">Proposal *</label> <textarea id="form_proposal" name="Proposal" className="form-control" placeholder="Write your proposal here." rows="4" required="required" data-error="Please, leave us a message."></textarea> </div>                                                               
                                                                </div>
                                                                
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div> 
                                        {/* <!-- /.8 --> */}
                                    </div> 
                                    {/* <!-- /.row--> */}
                                </div>
                            </div>
                            <div className="modal-footer">                            
                            <button type="button" className="btn btn-primary">Send</button>
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                        </div>
                    </div>
                   {/* </Modal> */}
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
                  <Link href="#">Home</Link>
                  <Link href="#">Research Paper</Link>
                  <Link href="#">Collaborators</Link>
                  <Link href="#">Profile</Link>
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
