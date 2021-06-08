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
            pathname: '/product-new',
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

    const faqs =()=> {
        history.push({
            pathname: '/faq',
            state: {
              id: id,
              name:name
            }
        });
    }

    const contact =()=> {
        history.push({
            pathname: '/contact',
            state: {
              id: id,
              name:name
            }
        });
    }

    const terms =()=> {
        history.push({
            pathname: '/terms',
            state: {
              id: id,
              name:name
            }
        });
    }

    const privacy =()=> {
        history.push({
            pathname: '/privacy',
            state: {
              id: id,
              name:name
            }
        });
    }
  
    return (
        <div className="osahan-profile">
            <div className="bg-primary border-bottom px-3 pt-3 pb-5 d-flex align-items-center">
                <a className="toggle togglew toggle-2" href="#"><span></span></a>
                <h4 className="font-weight-bold m-0 text-white">Profile</h4>
            </div>
            <div className="p-3 osahan-profile">
                <div className="bg-white rounded shadow mt-n5">
                <div className="d-flex align-items-center border-bottom p-3">
                    <div className="left mr-3">
                        <img src="img/wasif.jpg" className="rounded-circle profile-image" />
                    </div>
                    <div className="right">
                        <h6 className="mb-1 font-weight-bold">Wasif Ahmed <i className="feather-check-circle text-success"></i></h6>
                        <p className="text-muted m-0 small">wasif.ahmed@gmail.com</p>
                    </div>
                </div>
                <div className="osahan-credits d-flex align-items-center p-3">
                    <p className="m-0">Accounts Credits</p>
                    <h5 className="m-0 ml-auto text-success">Rs: 4200/-</h5>
                </div>
                </div>
                <div className="bg-white rounded shadow mt-3 profile-details">
                <a data-toggle="modal" data-target="#paycard" className="d-flex w-100 align-items-center border-bottom p-3">
                    <div className="left mr-3">
                        <h6 className="font-weight-bold mb-1 text-dark">Payment Cards</h6>
                        <p className="small text-muted m-0">Add a credit or debit card</p>
                    </div>
                    <div className="right ml-auto">
                        <h6 className="font-weight-bold m-0"><i className="feather-chevron-right"></i></h6>
                    </div>
                </a>
                <a data-toggle="modal" data-target="#exampleModal" className="d-flex w-100 align-items-center border-bottom p-3">
                    <div className="left mr-3">
                        <h6 className="font-weight-bold mb-1 text-dark">Address</h6>
                        <p className="small text-muted m-0">Add or remove a delivery address</p>
                    </div>
                    <div className="right ml-auto">
                        <h6 className="font-weight-bold m-0"><i className="feather-chevron-right"></i></h6>
                    </div>
                </a>
                <div className="d-flex align-items-center border-bottom p-3">
                    <div className="left mr-3">
                        <h6 className="font-weight-bold mb-1">Refer Friends</h6>
                        <p className="small text-primary m-0">Get 100/- FREE</p>
                    </div>
                    <div className="right ml-auto">
                        <h6 className="font-weight-bold m-0"><i className="feather-chevron-right"></i></h6>
                    </div>
                </div>
                <a href="#" className="d-flex w-100 align-items-center border-bottom px-3 py-4" onClick={faqs}>
                    <div className="left mr-3">
                        <h6 className="font-weight-bold m-0 text-dark"><i className="feather-truck bg-danger text-white p-2 rounded-circle mr-2"></i> Delivery Support</h6>
                    </div>
                    <div className="right ml-auto">
                        <h6 className="font-weight-bold m-0"><i className="feather-chevron-right"></i></h6>
                    </div>
                </a>
                <a href="#" className="d-flex w-100 align-items-center border-bottom px-3 py-4" onClick={contact}>
                    <div className="left mr-3">
                        <h6 className="font-weight-bold m-0 text-dark"><i className="feather-phone bg-primary text-white p-2 rounded-circle mr-2"></i> Contact</h6>
                    </div>
                    <div className="right ml-auto">
                        <h6 className="font-weight-bold m-0"><i className="feather-chevron-right"></i></h6>
                    </div>
                </a>
                <a href="#" className="d-flex w-100 align-items-center border-bottom px-3 py-4" onClick={terms}>
                    <div className="left mr-3">
                        <h6 className="font-weight-bold m-0 text-dark"><i className="feather-info bg-success text-white p-2 rounded-circle mr-2"></i> Term of use</h6>
                    </div>
                    <div className="right ml-auto">
                        <h6 className="font-weight-bold m-0"><i className="feather-chevron-right"></i></h6>
                    </div>
                </a>
                <a href="#" className="d-flex w-100 align-items-center px-3 py-4" onClick={privacy}>
                    <div className="left mr-3">
                        <h6 className="font-weight-bold m-0 text-dark"><i className="feather-lock bg-warning text-white p-2 rounded-circle mr-2"></i> Privacy policy</h6>
                    </div>
                    <div className="right ml-auto">
                        <h6 className="font-weight-bold m-0"><i className="feather-chevron-right"></i></h6>
                    </div>
                </a>
                </div>
            </div>
            <div className="osahan-menu-fotter fixed-bottom bg-white px-3 py-2 text-center">
                <div className="row">
                    <div className="col">
                        <a onClick={goToHome} href="#" className="text-dark small font-weight-bold text-decoration-none">
                            <p className="h4 m-0"><i className="feather-home"></i></p>
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
                        <div className="bg-success rounded-circle mt-n0 shadow">
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
                    <div className="col selected">
                        <a onClick={goToThanks} href="#" className="text-success small font-weight-bold text-decoration-none">
                            <p className="h4 m-0"><i className="feather-user text-success"></i></p>
                            Finish
                        </a>
                    </div>    
                </div>
            </div>

            <div className="modal fade" id="paycard" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Add Credit/Debit Card</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <h6 className="m-0">Add new card</h6>
                            <p className="small">WE ACCEPT <span className="osahan-card ml-2 font-weight-bold">( Master Card / Visa Card / Rupay )</span></p>
                            <form>
                                <div className="form-row">
                                    <div className="col-md-12 form-group">
                                        <label className="form-label font-weight-bold small">Card number</label>
                                        <div className="input-group">
                                            <input placeholder="Card number" type="number" className="form-control" />
                                            <div className="input-group-append"><button id="button-addon2" type="button" className="btn btn-outline-secondary"><i className="feather-credit-card"></i></button></div>
                                        </div>
                                    </div>
                                    <div className="col-md-8 form-group"><label className="form-label font-weight-bold small">Valid through(MM/YY)</label><input placeholder="Enter Valid through(MM/YY)" type="number" className="form-control" /></div>
                                    <div className="col-md-4 form-group"><label className="form-label font-weight-bold small">CVV</label><input placeholder="Enter CVV Number" type="number" className="form-control" /></div>
                                    <div className="col-md-12 form-group"><label className="form-label font-weight-bold small">Name on card</label><input placeholder="Enter Card number" type="text" className="form-control" /></div>
                                    <div className="col-md-12 form-group mb-0">
                                        <div className="custom-control custom-checkbox"><input type="checkbox" id="custom-checkbox1" className="custom-control-input" /><label title="" type="checkbox" htmlFor="custom-checkbox1" className="custom-control-label small pt-1">Securely save this card for a faster checkout next time.</label></div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer p-0 border-0">
                            <div className="col-6 m-0 p-0">                 
                                <button type="button" className="btn border-top btn-lg btn-block" data-dismiss="modal">Close</button>
                            </div>
                            <div className="col-6 m-0 p-0">     
                                <button type="button" className="btn btn-primary btn-lg btn-block">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Add Delivery Address</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form className="">
                                <div className="form-row">
                                    <div className="col-md-12 form-group">
                                        <label className="form-label">Delivery Area</label>
                                        <div className="input-group">
                                            <input placeholder="Delivery Area" type="text" className="form-control" />
                                            <div className="input-group-append"><button id="button-addon2" type="button" className="btn btn-outline-secondary"><i className="feather-map-pin"></i></button></div>
                                        </div>
                                    </div>
                                    <div className="col-md-12 form-group"><label className="form-label">Complete Address</label><input placeholder="Complete Address e.g. house number, street name, landmark" type="text" className="form-control" /></div>
                                    <div className="col-md-12 form-group"><label className="form-label">Delivery Instructions</label><input placeholder="Delivery Instructions e.g. Opposite Gold Souk Mall" type="text" className="form-control" /></div>
                                    <div className="mb-0 col-md-12 form-group">
                                        <label className="form-label">Nickname</label>
                                        <div className="btn-group btn-group-toggle w-100" data-toggle="buttons">
                                            <label className="btn btn-outline-secondary active">
                                                <input type="radio" name="options" id="option1" checked /> Home
                                            </label>
                                            <label className="btn btn-outline-secondary">
                                                <input type="radio" name="options" id="option2" /> Work
                                            </label>
                                            <label className="btn btn-outline-secondary">
                                                <input type="radio" name="options" id="option3" /> Other
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer p-0 border-0">
                            <div className="col-6 m-0 p-0">                 
                                <button type="button" className="btn border-top btn-lg btn-block" data-dismiss="modal">Close</button>
                            </div>
                            <div className="col-6 m-0 p-0">     
                                <button type="button" className="btn btn-primary btn-lg btn-block">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Complete;