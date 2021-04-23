import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import {connect,useSelector,useDispatch} from 'react-redux';
import './Complete.css';

function Complete(){

    const history = useHistory();
    const id = 5;
    const name = "Complete Page";

    const location = useLocation();
    console.log(id, name)

    const goToHome =()=> {
        history.push({
            pathname: '/home',
            state: {
              id: id,
              name:name
            }
        });
    }

    const goToProduct =()=> {
        history.push({
            pathname: '/product',
            state: {
              id: id,
              name:name
            }
        });
    }

    const goToCart =()=> {
        history.push({
            pathname: '/cart',
            state: {
              id: id,
              name:name
            }
        });
    }

    const goToCheckout =()=> {
        history.push({
            pathname: '/checkout',
            state: {
              id: id,
              name:name
            }
        });
    }

    const goToThanks =()=> {
        history.push({
            pathname: '/thanks',
            state: {
              id: id,
              name:name
            }
        });
    }
  
    return (
        <div class="osahan-profile">
            <div class="bg-primary border-bottom px-3 pt-3 pb-5 d-flex align-items-center">
                <a class="toggle togglew toggle-2" href="#"><span></span></a>
                <h4 class="font-weight-bold m-0 text-white">Profile</h4>
            </div>
            <div class="p-3 osahan-profile">
                <div class="bg-white rounded shadow mt-n5">
                <div class="d-flex align-items-center border-bottom p-3">
                    <div class="left mr-3">
                        <img src="img/user1.jpg" class="rounded-circle" />
                    </div>
                    <div class="right">
                        <h6 class="mb-1 font-weight-bold">Gurdeep Singh <i class="feather-check-circle text-success"></i></h6>
                        <p class="text-muted m-0 small">iamosahan@gmail.com</p>
                    </div>
                </div>
                <div class="osahan-credits d-flex align-items-center p-3">
                    <p class="m-0">Accounts Credits</p>
                    <h5 class="m-0 ml-auto text-primary">$52.25</h5>
                </div>
                </div>
                <div class="bg-white rounded shadow mt-3 profile-details">
                <a data-toggle="modal" data-target="#paycard" class="d-flex w-100 align-items-center border-bottom p-3">
                    <div class="left mr-3">
                        <h6 class="font-weight-bold mb-1 text-dark">Payment Cards</h6>
                        <p class="small text-muted m-0">Add a credit or debit card</p>
                    </div>
                    <div class="right ml-auto">
                        <h6 class="font-weight-bold m-0"><i class="feather-chevron-right"></i></h6>
                    </div>
                </a>
                <a data-toggle="modal" data-target="#exampleModal" class="d-flex w-100 align-items-center border-bottom p-3">
                    <div class="left mr-3">
                        <h6 class="font-weight-bold mb-1 text-dark">Address</h6>
                        <p class="small text-muted m-0">Add or remove a delivery address</p>
                    </div>
                    <div class="right ml-auto">
                        <h6 class="font-weight-bold m-0"><i class="feather-chevron-right"></i></h6>
                    </div>
                </a>
                <div class="d-flex align-items-center border-bottom p-3">
                    <div class="left mr-3">
                        <h6 class="font-weight-bold mb-1">Refer Friends</h6>
                        <p class="small text-primary m-0">Get $10.00 FREE</p>
                    </div>
                    <div class="right ml-auto">
                        <h6 class="font-weight-bold m-0"><i class="feather-chevron-right"></i></h6>
                    </div>
                </div>
                <a href="faq.html" class="d-flex w-100 align-items-center border-bottom px-3 py-4">
                    <div class="left mr-3">
                        <h6 class="font-weight-bold m-0 text-dark"><i class="feather-truck bg-danger text-white p-2 rounded-circle mr-2"></i> Delivery Support</h6>
                    </div>
                    <div class="right ml-auto">
                        <h6 class="font-weight-bold m-0"><i class="feather-chevron-right"></i></h6>
                    </div>
                </a>
                <a href="contact-us.html" class="d-flex w-100 align-items-center border-bottom px-3 py-4">
                    <div class="left mr-3">
                        <h6 class="font-weight-bold m-0 text-dark"><i class="feather-phone bg-primary text-white p-2 rounded-circle mr-2"></i> Contact</h6>
                    </div>
                    <div class="right ml-auto">
                        <h6 class="font-weight-bold m-0"><i class="feather-chevron-right"></i></h6>
                    </div>
                </a>
                <a href="terms.html" class="d-flex w-100 align-items-center border-bottom px-3 py-4">
                    <div class="left mr-3">
                        <h6 class="font-weight-bold m-0 text-dark"><i class="feather-info bg-success text-white p-2 rounded-circle mr-2"></i> Term of use</h6>
                    </div>
                    <div class="right ml-auto">
                        <h6 class="font-weight-bold m-0"><i class="feather-chevron-right"></i></h6>
                    </div>
                </a>
                <a href="privacy.html" class="d-flex w-100 align-items-center px-3 py-4">
                    <div class="left mr-3">
                        <h6 class="font-weight-bold m-0 text-dark"><i class="feather-lock bg-warning text-white p-2 rounded-circle mr-2"></i> Privacy policy</h6>
                    </div>
                    <div class="right ml-auto">
                        <h6 class="font-weight-bold m-0"><i class="feather-chevron-right"></i></h6>
                    </div>
                </a>
                </div>
            </div>
            <div className="osahan-menu-fotter fixed-bottom bg-white px-3 py-2 text-center">
                <div className="row">
                    <div className="col selected">
                        <a onClick={goToHome} href="#" className="text-danger small font-weight-bold text-decoration-none">
                            <p className="h4 m-0"><i className="feather-home text-danger"></i></p>
                            Menu
                        </a>
                    </div>
                    <div className="col">
                        <a onClick={goToProduct} href="#" className="text-dark small font-weight-bold text-decoration-none">
                            <p className="h4 m-0"><i className="feather-map-pin"></i></p>
                            Product
                        </a>
                    </div>
                    <div className="col bg-white rounded-circle mt-n4 px-3 py-2">
                        <div className="bg-danger rounded-circle mt-n0 shadow">
                            <a onClick={goToCart} href="#" className="text-white small font-weight-bold text-decoration-none">
                            <i className="feather-shopping-cart"></i>
                            </a>
                        </div>
                    </div>
                    <div className="col">
                        <a onClick={goToCheckout} href="#" className="text-dark small font-weight-bold text-decoration-none">
                            <p className="h4 m-0"><i className="feather-heart"></i></p>
                            Checkout
                        </a>
                    </div>
                    <div className="col">
                        <a onClick={goToThanks} href="#" className="text-dark small font-weight-bold text-decoration-none">
                            <p className="h4 m-0"><i className="feather-user"></i></p>
                            Finish
                        </a>
                        </div>    </div>
            </div>
        </div>
    )
}

export default Complete;