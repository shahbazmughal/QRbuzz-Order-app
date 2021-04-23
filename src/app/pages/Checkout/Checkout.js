import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import {connect,useSelector,useDispatch} from 'react-redux';
import './Checkout.css';

function Checkout(){

    const history = useHistory();
    const id = 4;
    const name = "Checkout Page";

    const location = useLocation();
    console.log(id, name)

    const goToHome =()=> {
        history.push({
            pathname: '/thanks',
            state: {
              id: id,
              name:name
            }
        });
    }

    const goBack =()=> {
        history.push("/cart");
    } 
  
    return (
        <div class="osahan-payment">
            <div class="bg-primary border-bottom px-3 pt-3 pb-5">
                <a class="toggle togglew toggle-2" href="#"><span></span></a>
                <a class="text-white font-weight-bold" href="javascript:;" onClick={goBack}><i class="feather-chevron-left"></i> Back</a>
                <h2 class="font-weight-bold m-0 text-white pt-3">Checkout</h2>
            </div>
            <div class="p-3 osahan-cart-item">
                <div class="osahan-cart-item-profile bg-white rounded shadow p-3 mt-n5">
                <div class="d-flex flex-column">
                    <h6 class="mb-2 font-weight-bold">DELIVERY ADDRESS</h6>
                    <div class="custom-control custom-radio mb-2 px-0">
                        <input type="radio" id="customRadio1" name="customRadio" class="custom-control-input" checked="checked" />
                        <label class="custom-control-label border osahan-check p-3 w-100 rounded border-primary" for="customRadio1">
                            <b><i class="feather-home mr-2"></i> Home</b> <br />
                            <p class="small mb-0 pl-4">4904 Goldner Ranch, Jawaddi kalan, punjab, 141013</p>
                        </label>
                    </div>
                    <div class="custom-control custom-radio mb-2 px-0">
                        <input type="radio" id="customRadio2" name="customRadio" class="custom-control-input" />
                        <label class="custom-control-label border osahan-check p-3 w-100 rounded bg-light" for="customRadio2">
                            <b><i class="feather-briefcase mr-2"></i> Work</b> <br />
                            <p class="small mb-0 pl-4">Model Town, Ludhiana, Punjab 141002, India</p>
                        </label>
                    </div>
                    <a class="btn btn-primary" href="#" data-toggle="modal" data-target="#exampleModal"> ADD NEW ADDRESS </a>
                </div>
                </div>
            </div>
            <div class="accordion px-3 pb-3" id="accordionExample">
                <div class="osahan-card bg-white overflow-hidden shadow rounded mb-2">
                <div class="osahan-card-header" id="headingOne">
                    <h2 class="mb-0">
                        <button class="d-flex p-3 align-items-center btn btn-link w-100" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        <i class="feather-credit-card mr-3"></i> Credit/Debit Card
                        <i class="feather-chevron-down ml-auto"></i>
                        </button>
                    </h2>
                </div>
                <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                    <div class="osahan-card-body border-top p-3">
                        <h6 class="m-0">Add new card</h6>
                        <p class="small">WE ACCEPT <span class="osahan-card ml-2 font-weight-bold">( Master Card / Visa Card / Rupay )</span></p>
                        <form>
                            <div class="form-row">
                            <div class="col-md-12 form-group">
                                <label class="form-label font-weight-bold small">Card number</label>
                                <div class="input-group">
                                    <input placeholder="Card number" type="number" class="form-control" />
                                    <div class="input-group-append"><button id="button-addon2" type="button" class="btn btn-outline-secondary"><i class="feather-credit-card"></i></button></div>
                                </div>
                            </div>
                            <div class="col-md-8 form-group"><label class="form-label font-weight-bold small">Valid through(MM/YY)</label><input placeholder="Enter Valid through(MM/YY)" type="number" class="form-control" /></div>
                            <div class="col-md-4 form-group"><label class="form-label font-weight-bold small">CVV</label><input placeholder="Enter CVV Number" type="number" class="form-control" /></div>
                            <div class="col-md-12 form-group"><label class="form-label font-weight-bold small">Name on card</label><input placeholder="Enter Card number" type="text" class="form-control" /></div>
                            <div class="col-md-12 form-group mb-0">
                                <div class="custom-control custom-checkbox"><input type="checkbox" id="custom-checkbox1" class="custom-control-input" /><label title="" type="checkbox" for="custom-checkbox1" class="custom-control-label small pt-1">Securely save this card for a faster checkout next time.</label></div>
                            </div>
                            </div>
                        </form>
                    </div>
                </div>
                </div>
                <div class="osahan-card bg-white overflow-hidden shadow rounded mb-2">
                <div class="osahan-card-header" id="headingTwo">
                    <h2 class="mb-0">
                        <button class="d-flex p-3 align-items-center btn btn-link w-100" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        <i class="feather-globe mr-3"></i> Net Banking
                        <i class="feather-chevron-down ml-auto"></i>
                        </button>
                    </h2>
                </div>
                <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                    <div class="osahan-card-body border-top p-3">
                        <form>

                            <div class="btn-group btn-group-toggle w-100" data-toggle="buttons">
                            <label class="btn btn-outline-secondary active">
                                <input type="radio" name="options" id="option1" checked /> HDFC
                            </label>
                            <label class="btn btn-outline-secondary">
                                <input type="radio" name="options" id="option2" /> ICICI
                            </label>
                            <label class="btn btn-outline-secondary">
                                <input type="radio" name="options" id="option3" /> AXIS
                            </label>
                            </div>
                        
                            <hr />
                            <div class="form-row">
                            <div class="col-md-12 form-group mb-0">
                                <label class="form-label small font-weight-bold">Select Bank</label><br />
                                <select class="custom-select form-control">
                                    <option>Bank</option>
                                    <option>KOTAK</option>
                                    <option>SBI</option>
                                    <option>UCO</option>
                                </select>
                            </div>
                            </div>
                        </form>
                    </div>
                </div>
                </div>
                <div class="osahan-card bg-white overflow-hidden shadow rounded">
                <div class="osahan-card-header" id="headingThree">
                    <h2 class="mb-0">
                        <button class="d-flex p-3 align-items-center btn btn-link w-100" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        <i class="feather-dollar-sign mr-3"></i> Cash on Delivery
                        <i class="feather-chevron-down ml-auto"></i>
                        </button>
                    </h2>
                </div>
                <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                    <div class="card-body border-top">
                        <h6 class="mb-3 mt-0 mb-3 font-weight-bold">Cash</h6>
                        <p class="m-0">Please keep exact change handy to help us serve you better</p>
                    </div>
                </div>
                </div>
            </div>
            <div class="fixed-bottom"><a class="btn btn-success btn-lg btn-block" href="profile.html">PAY $1329<i class="feather-arrow-right"></i></a></div>
            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Add Delivery Address</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form class="">
                            <div class="form-row">
                            <div class="col-md-12 form-group">
                                <label class="form-label">Delivery Area</label>
                                <div class="input-group">
                                    <input placeholder="Delivery Area" type="text" class="form-control" />
                                    <div class="input-group-append"><button id="button-addon2" type="button" class="btn btn-outline-secondary"><i class="feather-map-pin"></i></button></div>
                                </div>
                            </div>
                            <div class="col-md-12 form-group"><label class="form-label">Complete Address</label><input placeholder="Complete Address e.g. house number, street name, landmark" type="text" class="form-control" /></div>
                            <div class="col-md-12 form-group"><label class="form-label">Delivery Instructions</label><input placeholder="Delivery Instructions e.g. Opposite Gold Souk Mall" type="text" class="form-control" /></div>
                            <div class="mb-0 col-md-12 form-group">
                                <label class="form-label">Nickname</label>


                                <div class="btn-group btn-group-toggle w-100" data-toggle="buttons">
                                    <label class="btn btn-outline-secondary active">
                                    <input type="radio" name="options" id="option1" checked /> Home
                                    </label>
                                    <label class="btn btn-outline-secondary">
                                    <input type="radio" name="options" id="option2" /> Work
                                    </label>
                                    <label class="btn btn-outline-secondary">
                                    <input type="radio" name="options" id="option3" /> Other
                                    </label>
                                </div>

                                
                            </div>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer p-0 border-0">
                        <div class="col-6 m-0 p-0">                 
                            <button type="button" class="btn border-top btn-lg btn-block" data-dismiss="modal">Close</button>
                        </div>
                        <div class="col-6 m-0 p-0">     
                            <button type="button" class="btn btn-primary btn-lg btn-block">Save changes</button>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout;