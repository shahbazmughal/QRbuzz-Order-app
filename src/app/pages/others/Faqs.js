import React from 'react';
import { useHistory, useLocation } from "react-router-dom";
import {connect,useSelector,useDispatch} from 'react-redux';
import './others.css';

function Faqs()  {

    const history = useHistory();
    const id = 6;
    const name = "Faqs Page";

    const location = useLocation();

    const goBack =()=> {
        history.goBack();
    }

    return (
        <div className="osahan-faq">
            <div className="bg-primary border-bottom px-3 pt-3 pb-5">
                <a className="toggle togglew toggle-2" href="#"><span></span></a>
                <a className="text-white font-weight-bold" href="#" onClick={goBack}><i className="feather-chevron-left"></i> Back</a>
                <h2 className="font-weight-bold m-0 text-white pt-3">FAQ</h2>
            </div>
            <div className="bg-light mb-4 p-3 osahan-faq-item">
                <div className="osahan-cart-item-profile mt-n5">
                    <div className="box shadow-sm rounded bg-white mb-3">
                        <div className="p-3 d-flex align-items-center">
                            <i className="feather-message-circle display-4"></i>
                            <div className="ml-4">
                                <h6 className="text-dark mb-2 mt-0">Help Forum</h6>
                                <p className="mb-0 text-muted">Find the answer to any question, from the basics
                                    ...
                                </p>
                            </div>
                        </div>
                        <div className="overflow-hidden border-top d-flex align-items-center p-3">
                            <a className="font-weight-bold d-block" href="#"> Swiggi Help Forum. </a>
                            <i className="feather-arrow-right-circle ml-auto text-primary"></i>
                        </div>
                    </div>
                    <div className="box shadow-sm rounded bg-white mb-3">
                        <div className="p-3 d-flex align-items-center">
                            <i className="feather-lock display-4"></i>
                            <div className="ml-4">
                                <h6 className="text-dark mb-2 mt-0">Safety Center</h6>
                                <p className="mb-0 text-muted">Want to learn more about setting up and managing
                                    ...
                                </p>
                            </div>
                        </div>
                        <div className="overflow-hidden border-top d-flex align-items-center p-3">
                            <a className="font-weight-bold d-block" href="#"> Swiggi Safety Center. </a>
                            <i className="feather-arrow-right-circle ml-auto text-primary"></i>
                        </div>
                    </div>
                    <div id="basics">
                        <div className="mb-2 mt-0">
                            <h4 className="font-weight-semi-bold">Basics</h4>
                        </div>
                        <div id="basicsAccordion">
                            <div className="box shadow-sm rounded bg-white mb-2">
                                <div id="basicsHeadingOne">
                                    <h5 className="mb-0">
                                    <button className="shadow-none btn btn-block d-flex justify-content-between card-btn p-3 collapsed" data-toggle="collapse" data-target="#basicsCollapseOne" aria-expanded="false" aria-controls="basicsCollapseOne">
                                    Do you have any built-in caching?
                                    <span className="card-btn-arrow">
                                    <span className="feather-chevron-down"></span>
                                    </span>
                                    </button>
                                    </h5>
                                </div>
                                <div id="basicsCollapseOne" className="collapse" aria-labelledby="basicsHeadingOne" data-parent="#basicsAccordion">
                                    <div className="card-body border-top p-3 text-muted">
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid ...
                                    </div>
                                </div>
                            </div>
                            <div className="box shadow-sm rounded bg-white mb-2">
                                <div id="basicsHeadingTwo">
                                    <h5 className="mb-0">
                                    <button className="shadow-none btn btn-block d-flex justify-content-between card-btn p-3 collapsed" data-toggle="collapse" data-target="#basicsCollapseTwo" aria-expanded="false" aria-controls="basicsCollapseTwo">
                                    Can I add/upgrade my plan at any time?
                                    <span className="card-btn-arrow">
                                    <span className="feather-chevron-down"></span>
                                    </span>
                                    </button>
                                    </h5>
                                </div>
                                <div id="basicsCollapseTwo" className="collapse" aria-labelledby="basicsHeadingTwo" data-parent="#basicsAccordion">
                                    <div className="card-body border-top p-3 text-muted">
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid ...
                                    </div>
                                </div>
                            </div>
                            <div className="box shadow-sm rounded bg-white mb-2">
                                <div id="basicsHeadingThree">
                                    <h5 className="mb-0">
                                    <button className="shadow-none btn btn-block d-flex justify-content-between card-btn p-3 collapsed" data-toggle="collapse" data-target="#basicsCollapseThree" aria-expanded="false" aria-controls="basicsCollapseThree">
                                    What access comes with hosting plan?
                                    <span className="card-btn-arrow">
                                    <span className="feather-chevron-down"></span>
                                    </span>
                                    </button>
                                    </h5>
                                </div>
                                <div id="basicsCollapseThree" className="collapse" aria-labelledby="basicsHeadingThree" data-parent="#basicsAccordion">
                                    <div className="card-body border-top p-3 text-muted">
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid ...
                                    </div>
                                </div>
                            </div>
                            <div className="box shadow-sm rounded bg-white mb-2">
                                <div id="basicsHeadingFour">
                                    <h5 className="mb-0">
                                    <button className="shadow-none btn btn-block d-flex justify-content-between card-btn collapsed p-3" data-toggle="collapse" data-target="#basicsCollapseFour" aria-expanded="false" aria-controls="basicsCollapseFour">
                                    How do I change my password?
                                    <span className="card-btn-arrow">
                                    <span className="feather-chevron-down"></span>
                                    </span>
                                    </button>
                                    </h5>
                                </div>
                                <div id="basicsCollapseFour" className="collapse" aria-labelledby="basicsHeadingFour" data-parent="#basicsAccordion">
                                    <div className="card-body border-top p-3 text-muted">
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid ...
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="account">
                        <div className="mb-3 mt-4">
                            <h4 className="font-weight-semi-bold">Account</h4>
                        </div>
                        <div id="accountAccordion">
                            <div className="box shadow-sm rounded bg-white mb-2">
                                <div id="accountHeadingOne">
                                    <h5 className="mb-0">
                                    <button className="shadow-none btn btn-block d-flex justify-content-between card-btn p-3" data-toggle="collapse" data-target="#accountCollapseOne" aria-expanded="false" aria-controls="accountCollapseOne">
                                    How do I change my password?
                                    <span className="card-btn-arrow">
                                    <span className="feather-chevron-down"></span>
                                    </span>
                                    </button>
                                    </h5>
                                </div>
                                <div id="accountCollapseOne" className="collapse show" aria-labelledby="accountHeadingOne" data-parent="#accountAccordion">
                                    <div className="card-body border-top p-3 text-muted">
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid ...
                                    </div>
                                </div>
                            </div>
                            <div className="box shadow-sm rounded bg-white mb-2">
                                <div id="accountHeadingTwo">
                                    <h5 className="mb-0">
                                    <button className="shadow-none btn btn-block d-flex justify-content-between card-btn collapsed p-3" data-toggle="collapse" data-target="#accountCollapseTwo" aria-expanded="false" aria-controls="accountCollapseTwo">
                                    How do I delete my account?
                                    <span className="card-btn-arrow">
                                    <span className="feather-chevron-down"></span>
                                    </span>
                                    </button>
                                    </h5>
                                </div>
                                <div id="accountCollapseTwo" className="collapse" aria-labelledby="accountHeadingTwo" data-parent="#accountAccordion">
                                    <div className="card-body border-top p-3 text-muted">
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid ...
                                    </div>
                                </div>
                            </div>
                            <div className="box shadow-sm rounded bg-white mb-2">
                                <div id="accountHeadingThree">
                                    <h5 className="mb-0">
                                    <button className="shadow-none btn btn-block d-flex justify-content-between card-btn collapsed p-3" data-toggle="collapse" data-target="#accountCollapseThree" aria-expanded="false" aria-controls="accountCollapseThree">
                                    How do I change my account settings?
                                    <span className="card-btn-arrow">
                                    <span className="feather-chevron-down"></span>
                                    </span>
                                    </button>
                                    </h5>
                                </div>
                                <div id="accountCollapseThree" className="collapse" aria-labelledby="accountHeadingThree" data-parent="#accountAccordion">
                                    <div className="card-body border-top p-3 text-muted">
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid ...
                                    </div>
                                </div>
                            </div>
                            <div className="box shadow-sm rounded bg-white mb-2">
                                <div id="accountHeadingFour">
                                    <h5 className="mb-0">
                                    <button className="shadow-none btn btn-block d-flex justify-content-between card-btn collapsed p-3" data-toggle="collapse" data-target="#accountCollapseFour" aria-expanded="false" aria-controls="accountCollapseFour">
                                    I forgot my password. How do I reset it?
                                    <span className="card-btn-arrow">
                                    <span className="feather-chevron-down"></span>
                                    </span>
                                    </button>
                                    </h5>
                                </div>
                                <div id="accountCollapseFour" className="collapse" aria-labelledby="accountHeadingFour" data-parent="#accountAccordion">
                                    <div className="card-body border-top p-3 text-muted">
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid ...
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Faqs;