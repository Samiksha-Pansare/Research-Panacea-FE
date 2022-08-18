import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../Css/collaborator.css';

export default class Collaborators extends Component {
  render() {
    return (
      <>
      
        <div class="container collab-container">
            <div class="row">
                <div class="row justify-content-center padding">
                    <div class="col-md-8 ftco-animate fadeInUp ftco-animated">
                        <form action="#" class="domain-form">
                            <div class="form-group d-md-flex"> <input type="text" class="form-control px-4" placeholder="Enter name here..."/> <input type="submit" class="search-domain btn btn-primary px-5" value=" Search User"/> </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
            
        {/* <!-- For demo purpose --> */}
<div class="container py-5">
   
</div>
{/* <!-- End --> */}


<div class="container">
    <div class="row text-center">

        {/* <!-- Team item --> */}
        <div class="col-md-3 mb-5">
            <div class="bg-white rounded shadow-sm py-5 px-4"><img src="https://bootstrapious.com/i/snippets/sn-team/teacher-4.jpg" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
                <h5 class="mb-0">Manuella Nevoresky</h5><span class="small text-uppercase text-muted">CEO - Founder</span>
                <ul class="social mb-0 list-inline mt-3">
                    <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-github"></i></a></li>
                    <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-twitter"></i></a></li>
                    <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-google"></i></a></li>
                    <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-linkedin"></i></a></li>
                    <button class=" btn btn-con">Connect</button>
                    <button type="button" class=" btn btn-con" data-bs-toggle="modal" data-bs-target="#exampleModal">See Proposal</button>
                    {/* <!-- Button trigger modal -->
                    
                    
                    <!-- Modal --> */}
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-scrollable">
                        <div class="modal-content">
                            <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                This is some placeholder content to show the scrolling behavior for modals. We use repeated line breaks to demonstrate how content can exceed minimum inner height, thereby showing inner scrolling. When content becomes longer than the prefedined max-height of modal, content will be cropped and scrollable within the modal.<br/><br/><br/><br/>
                                This is some placeholder content to show the scrolling behavior for modals. We use repeated line breaks to demonstrate how content can exceed minimum inner height, thereby showing inner scrolling. When content becomes longer than the prefedined max-height of modal, content will be cropped and scrollable within the modal.
                                This is some placeholder content to show the scrolling behavior for modals. We use repeated line breaks to demonstrate how content can exceed minimum inner height, thereby showing inner scrolling. When content becomes longer than the prefedined max-height of modal, content will be cropped and scrollable within the modal.
                            </div>
                            <div class="modal-footer">                            
                            <button type="button" class="btn btn-primary">Accept</button>
                            <button type="button" class="btn btn-danger">Reject</button>
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                        </div>
                    </div>
                </ul>
            </div>
        </div>
        {/* <!-- End -->

        <!-- Team item --> */}
        <div class="col-md-3 mb-5">
            <div class="bg-white rounded shadow-sm py-5 px-4"><img src="https://bootstrapious.com/i/snippets/sn-team/teacher-2.jpg" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
                <h5 class="mb-0">Samuel Hardy</h5><span class="small text-uppercase text-muted">CEO - Founder</span>
                <ul class="social mb-0 list-inline mt-3">
                    <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-facebook-f"></i></a></li>
                    <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-twitter"></i></a></li>
                    <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-instagram"></i></a></li>
                    <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-linkedin"></i></a></li>
                </ul>
                <button class=" btn btn-con">Connect</button>
                    <button type="button" class=" btn btn-con" data-bs-toggle="modal" data-bs-target="#exampleModal">See Proposal</button>
            </div>
        </div>
        {/* <!-- End -->

        <!-- Team item --> */}
        <div class="col-md-3 mb-5">
            <div class="bg-white rounded shadow-sm py-5 px-4"><img src="https://bootstrapious.com/i/snippets/sn-team/teacher-1.jpg" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
                <h5 class="mb-0">Tom Sunderland</h5><span class="small text-uppercase text-muted">CEO - Founder</span>
                <ul class="social mb-0 list-inline mt-3">
                    <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-facebook-f"></i></a></li>
                    <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-twitter"></i></a></li>
                    <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-instagram"></i></a></li>
                    <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-linkedin"></i></a></li>
                </ul>
                <button class=" btn btn-con">Connect</button>
                <button type="button" class=" btn btn-con" data-bs-toggle="modal" data-bs-target="#exampleModal">See Proposal</button>
            </div>
        </div>
        {/* <!-- End -->

        <!-- Team item --> */}
        <div class="col-md-3 mb-5">
            <div class="bg-white rounded shadow-sm py-5 px-4"><img src="https://bootstrapious.com/i/snippets/sn-team/teacher-7.jpg" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
                <h5 class="mb-0">John Tarly</h5><span class="small text-uppercase text-muted">CEO - Founder</span>
                <ul class="social mb-0 list-inline mt-3">
                    <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-facebook-f"></i></a></li>
                    <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-twitter"></i></a></li>
                    <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-instagram"></i></a></li>
                    <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-linkedin"></i></a></li>
                </ul>
                <button class=" btn btn-con">Connect</button>
                <button type="button" class=" btn btn-con" data-bs-toggle="modal" data-bs-target="#exampleModal">See Proposal</button>
            </div> 
        </div>
        {/* <!-- End --> */}
    </div>
</div>
<footer class="footer-07">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-12 text-center">
                <h2 class="footer-heading"><a href="#" class="logo">Research Panachea</a></h2>
                <p class="menu">
                  <a href="#">Home</a>
                  <a href="#">Research Paper</a>
                  <a href="/collaborators">Collaborators</a>
                  <a href="#">Profile</a>
                </p>
                <ul class="ftco-footer-social p-0">
      <li class="ftco-animate"><a href="#" data-toggle="tooltip" data-placement="top" title="Twitter"><span class="fab fa-twitter"></span></a></li>
      <li class="ftco-animate"><a href="#" data-toggle="tooltip" data-placement="top" title="Facebook"><span class="ion-logo-facebook"><i class="fab fa-facebook"></i></span></a></li>
      <li class="ftco-animate"><a href="#" data-toggle="tooltip" data-placement="top" title="Instagram"><span class="fab fa-instagram"></span></a></li>
    </ul>
            </div>
        </div>
        <div class="row mt-5">
            <div class="col-md-12 text-center">
                <p class="copyright">
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
