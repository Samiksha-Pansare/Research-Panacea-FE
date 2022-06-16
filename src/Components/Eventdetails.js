import React, { Component } from 'react';
import '../Css/eventdetails.css';

export default class Eventdetails extends Component {
  render() {
    return (
     <>
     {/* <!-- Main Content goes here -->
        <!-- Page Content -->  */}
                <div className="container event-details">
                     {/* <!-- Portfolio Item Heading -->  */}
                    <h1 className="my-4">Event Heading
                    <small>Organizer</small>
                    </h1>
                    <div className="row">
                
                    <div className="col-md-8">
                        <img className="img-fluid" src='../static/images/techfest.png' alt=""/>
                        <div className="button-link">Link</div>
                    </div>
                
                    <div className="col-md-4">                        
                        <h3 className="my-3">Event Details</h3>
                        <ul>
                        <li>Date:</li>
                        <li>Time:</li>
                        <li>Venue:</li>
                        <li>Mode:</li>
                        </ul>
                        <h3 className="my-3">Event Description</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae. Sed dui lorem, adipiscing in adipiscing et, interdum nec metus. Mauris ultricies, justo eu convallis placerat, felis enim.</p>
                    </div>
                
                    </div>
                             {/* <!-- /.row -->
                        
                            <!-- Related Projects Row -->  */}
                            <h3 className="my-4">Related Projects</h3>
                        
                            <div className="row">
                        
                            <div className="col-md-3 col-sm-6 mb-4">
                                <a href="#">
                                    <img className="img-fluid" src="https://via.placeholder.com/500x300" alt=""/>
                                    </a>
                            </div>
                        
                            <div className="col-md-3 col-sm-6 mb-4">
                                <a href="#">
                                    <img className="img-fluid" src="https://via.placeholder.com/500x300" alt=""/>
                                    </a>
                            </div>
                        
                            <div className="col-md-3 col-sm-6 mb-4">
                                <a href="#">
                                    <img className="img-fluid" src="https://via.placeholder.com/500x300" alt=""/>
                                    </a>
                            </div>
                        
                            <div className="col-md-3 col-sm-6 mb-4">
                                <a href="#">
                                    <img className="img-fluid" src="https://via.placeholder.com/500x300" alt=""/>
                                    </a>
                            </div>
                        
                            </div>
                         {/* <!-- /.row -->  */}
                        
                        </div>
                         {/* <!-- /.container -->  */}
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
