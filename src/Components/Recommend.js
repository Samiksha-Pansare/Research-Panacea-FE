import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../Css/recommendtion.css';
import paper1 from '../Images/research-paper.jpeg'
import paper2 from '../Images/research-paper2.jpeg'
import paper3 from '../Images/research-paper3.jpeg'
import maths from '../Images/maths.jpeg'

export default class Recommend extends Component {
  render() {
    return (
      <>
      {/* <!-- Main Content goes here --> */}
        <div className="container" style="margin-top: 85px;">
          <h3  className=" text-170 text-600  letter-spacing" style="text-align: center;">Collabs you might like</h3>
            <div className="mt-0">
                  <div className="d-style btn btn-brc-tp border-2 bgc-white btn-outline-blue btn-h-outline-blue btn-a-outline-blue w-100 my-2 py-3 shadow-sm">
                    {/* <!-- Basic Plan --> */}
                    <div className="row align-items-center">
                      <div className="col-12 col-md-4">
                        <h4 className=" text-170 text-600 text-primary-d1 letter-spacing">
                          Design Project
                        </h4>
            
                        <div className="text-secondary-d1 text-120">
                            <span className="ml-n15 align-text-bottom">Sahil Naik</span><br/> Designer
                        </div>
                      </div>
            
                      <ul className="skill-list list-unstyled pt-3 mb-0 col-12 col-md-4 text-dark-l1 text-90 text-left my-4 my-md-0">
                        <li>
                          <p>
                              
                                The hiring for this job will be online and the company will provide work from home/ deferred joining till current COVID-19 situation improves
                          </p>

                        </li>
            
                        <li className="mt-25 skilllist" style="margin-bottom: 12px;">
                          <span className="text-110 skillspan">
                            Creativity
                        </span>
                        <span className="text-110 skillspan">
                            UI/UX 
                        </span>
                        </li>
            
                      </ul>
            
                      <div className="col-12 col-md-4 text-center">
                        <a href="#" className="f-n-hover btn btn-view btn-raised px-4 py-25 w-75 text-600">View</a>
                      </div>
                    </div>
            
                  </div>
            
            
            
                  <div className="d-style btn btn-brc-tp border-2 bgc-white btn-outline-blue btn-h-outline-blue btn-a-outline-blue w-100 my-2 py-3 shadow-sm">
                    {/* <!-- Basic Plan --> */}
                    
                    <div className="row align-items-center">
                      <div className="col-12 col-md-4">
                        <h4 className=" text-170 text-600 text-primary-d1 letter-spacing">
                          Design Project
                        </h4>
            
                        <div className="text-secondary-d1 text-120">
                            <span className="ml-n15 align-text-bottom">Sahil Naik</span><br/> Designer
                        </div>
                      </div>
            
                      <ul className="skill-list list-unstyled pt-3 mb-0 col-12 col-md-4 text-dark-l1 text-90 text-left my-4 my-md-0">
                        <li>
                          <p>
                              
                                The hiring for this job will be online and the company will provide work from home/ deferred joining till current COVID-19 situation improves
                          </p>

                        </li>
            
                        <li className="mt-25 skilllist" style="margin-bottom: 12px;">
                          <span className="text-110 skillspan">
                            Creativity
                        </span>
                        <span className="text-110 skillspan">
                            UI/UX 
                        </span>
                        </li>
            
                      </ul>
            
                      <div className="col-12 col-md-4 text-center">
                        <a href="#" className="f-n-hover btn btn-view btn-raised px-4 py-25 w-75 text-600">View</a>
                      </div>
                    </div>
            
                  </div>
            
            
            
                  <div className="d-style btn btn-brc-tp border-2 bgc-white btn-outline-blue btn-h-outline-blue btn-a-outline-blue w-100 my-2 py-3 shadow-sm">
                    {/* <!-- Basic Plan --> */}
                    <div className="row align-items-center">
                      <div className="col-12 col-md-4">
                        <h4 className=" text-170 text-600 text-primary-d1 letter-spacing">
                          Design Project
                        </h4>
            
                        <div className="text-secondary-d1 text-120">
                            <span className="ml-n15 align-text-bottom">Sahil Naik</span><br/> Designer
                        </div>
                      </div>
            
                      <ul className="skill-list list-unstyled pt-3 mb-0 col-12 col-md-4 text-dark-l1 text-90 text-left my-4 my-md-0">
                        <li>
                          <p>
                              
                                The hiring for this job will be online and the company will provide work from home/ deferred joining till current COVID-19 situation improves
                          </p>

                        </li>
            
                        <li className="mt-25 skilllist" style="margin-bottom: 12px;">
                          <span className="text-110 skillspan">
                            Creativity
                        </span>
                        <span className="text-110 skillspan">
                            UI/UX 
                        </span>
                        </li>
            
                      </ul>
            
                      <div className="col-12 col-md-4 text-center">
                        <a href="#" className="f-n-hover btn btn-view btn-raised px-4 py-25 w-75 text-600">View</a>
                      </div>
                    </div>
            
                  </div>
                </div>
            </div>
            <div id="show-more">SHOW MORE</div>
            <hr/>
            <div className="container mt-5">
              <h3  className=" text-170 text-600  letter-spacing" style="text-align: center;">Research Papers you might like</h3>
              <div className="row">
                  <div className="col-md-4" style="margin-top: 27px">
                      <div className="card p-3 bgc-white">
                          <div className="d-flex flex-row mb-3"><img src={paper1} width="70"/>
                              <div className="d-flex flex-column ml-2"><span>Publication Name</span><span className="text-black-50">Domain: Block Chain</span>  </div>
                          </div>
                          <h6>Research Paper Name</h6>
                          <div className="d-flex justify-content-between install mt-3"><span>Saved 172 times</span><span className="text-primary">View&nbsp;<i className="fa fa-angle-right"></i></span></div>
                      </div>
                  </div>
                  <div className="col-md-4" style="margin-top: 27px">
                      <div className="card p-3 bgc-white">
                          <div className="d-flex flex-row mb-3"><img src={paper2} width="70"/>
                              <div className="d-flex flex-column ml-2"><span>Mailchimp</span><span className="text-black-50">Project Management</span>  </div>
                          </div>
                          <h6>Capture and sync subscribers from your mailchimp platform to ours with ease.</h6>
                          <div className="d-flex justify-content-between install mt-3"><span>Saved 1234 times</span><span className="text-primary">View&nbsp;<i className="fa fa-angle-right"></i></span></div>
                      </div>
                  </div>
                  <div className="col-md-4" style="margin-top: 27px">
                      <div className="card p-3 bgc-white">
                          <div className="d-flex flex-row mb-3"><img src={paper3} width="70"/>
                              <div className="d-flex flex-column ml-2"><span>Dropbox</span><span className="text-black-50">File Management</span>  </div>
                          </div>
                          <h6>Use dropbox to sync your photos to our platform and share it with others.</h6>
                          <div className="d-flex justify-content-between install mt-3"><span>Saved 1234 times</span><span className="text-primary">View&nbsp;<i className="fa fa-angle-right"></i></span></div>
                      </div>
                  </div>
                  <div className="col-md-4" style="margin-top: 27px">
                      <div className="card p-3 bgc-white">
                          <div className="d-flex flex-row mb-3"><img src={paper1} width="70"/>
                              <div className="d-flex flex-column ml-2"><span>Shopify</span><span className="text-black-50">Ecommerce</span>  </div>
                          </div>
                          <h6>Sell you items with ease with having any website with our free platform</h6>
                          <div className="d-flex justify-content-between install mt-3"><span>Saved 1234 times</span><span className="text-primary">View&nbsp;<i className="fa fa-angle-right"></i></span></div>
                      </div>
                  </div>
                  <div className="col-md-4" style="margin-top: 27px">
                      <div className="card p-3 bgc-white">
                          <div className="d-flex flex-row mb-3"><img src="../static/images/research-paper2.jpeg" width="70"/>
                              <div className="d-flex flex-column ml-2"><span>Atlassian</span><span className="text-black-50">Project management</span>  </div>
                          </div>
                          <h6>Developing products for developers,project managers and architects.</h6>
                          <div className="d-flex justify-content-between install mt-3"><span>Saved 345 times</span><span className="text-primary">View&nbsp;<i className="fa fa-angle-right"></i></span></div>
                      </div>
                  </div>
                  <div className="col-md-4" style="margin-top: 27px">
                      <div className="card p-3 bgc-white">
                          <div className="d-flex flex-row mb-3"><img src="../static/images/research-paper3.jpeg" width="70"/>
                              <div className="d-flex flex-column ml-2"><span>Salesforce</span><span className="text-black-50">Project management</span>  </div>
                          </div>
                          <h6>Developing products for developers,project managers and architects.</h6>
                          <div className="d-flex justify-content-between install mt-3"><span>Saved 345 times</span><span className="text-primary">View&nbsp;<i className="fa fa-angle-right"></i></span></div>
                      </div>
                  </div>
              </div>
          </div>
          <div id="show-more">SHOW MORE</div>
            <hr/>
           
            <section className="container py-5">
              <div className="row pt-3">
                <h3  className=" text-170 text-600  letter-spacing" style="text-align: center;">People you may know</h3>
                  {/* <!--   Profile Card--> */}
                  <div className="col-lg-3 col-sm-6 mb-30 pb-2">
                    <div className="team-card-style-3 mx-auto  bgc-white">
                        <div className="team-thumb"><img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="Author Picture"/>
                        </div>
                        <h4 className="team-name">William Smith</h4><a className="team-contact-link" href="#">Domain</a><a className="team-contact-link" href="#">Projects: 30</a>
                        <br/>
                        <button className="btn " style="background-color: #AB72F3; color: white;">Connect</button>
                    </div>
                </div>
                  {/* <!--   Profile Card--> */}
                  <div className="col-lg-3 col-sm-6 mb-30 pb-2">
                    <div className="team-card-style-3 mx-auto  bgc-white">
                        <div className="team-thumb"><img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="Author Picture"/>
                        </div>
                        <h4 className="team-name">William Smith</h4><a className="team-contact-link" href="#">Domain</a><a className="team-contact-link" href="#">Projects: 30</a>
                        <br/>
                        <button className="btn " style="background-color: #AB72F3; color: white;">Connect</button>
                    </div>
                </div>
                  {/* <!--   Profile Card--> */}
                  <div className="col-lg-3 col-sm-6 mb-30 pb-2">
                    <div className="team-card-style-3 mx-auto  bgc-white">
                        <div className="team-thumb"><img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="Author Picture"/>
                        </div>
                        <h4 className="team-name">William Smith</h4><a className="team-contact-link" href="#">Domain</a><a className="team-contact-link" href="#">Projects: 30</a>
                        <br/>
                        <button className="btn " style="background-color: #AB72F3; color: white;">Connect</button>
                    </div>
                </div>
                  {/* <!--   Profile Card--> */}
                  <div className="col-lg-3 col-sm-6 mb-30 pb-2">
                      <div className="team-card-style-3 mx-auto bgc-white">
                          <div className="team-thumb"><img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="Author Picture"/>
                          </div>
                          <h4 className="team-name">William Smith</h4><a className="team-contact-link" href="#">Domain</a><a className="team-contact-link" href="#">Projects: 30</a>
                          <br/>
                          <button className="btn " style="background-color: #AB72F3; color: white;">Connect</button>
                      </div>
                  </div>
              </div>
          </section>
          <div id="show-more" style="margin-bottom:10px;">SHOW MORE</div>
          
<footer className="footer-07">
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-md-12 text-center">
                <h2 className="footer-heading"><a href="#" className="logo">Research Panachea</a></h2>
                <p className="menu">
                  <a href="#">Home</a>
                  <a href="#">Research Paper</a>
                  <a href="#">Collaborators</a>
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
