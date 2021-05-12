import React from 'react';
import { useHistory, useLocation } from "react-router-dom";
import {connect,useSelector,useDispatch} from 'react-redux';
import './others.css';

function Contact()  {

    const history = useHistory();
    const id = 7;
    const name = "Contact Page";

    const location = useLocation();

    const goBack =()=> {
        history.goBack();
    }

    return (
        <div className="osahan-contact">
            <div className="bg-primary border-bottom px-3 pt-3 pb-5">
                <a className="toggle togglew toggle-2" href="#"><span></span></a>
                <a className="text-white font-weight-bold" href="#" onClick={goBack}><i className="feather-chevron-left"></i> Back</a>
                <h2 className="font-weight-bold m-0 text-white pt-3">Contact Us</h2>
            </div>
            <div className="bg-light mb-4 p-3 osahan-cart-item">
                <div className="osahan-cart-item-profile bg-white rounded shadow p-3 mt-n5">
                    <div className="flex-column">
                    <h6 className="font-weight-bold">Tell us about yourself</h6>
                    <p className="text-muted">Whether you have questions or you would just like to say hello, contact us.</p>
                    <form>
                        <div className="form-group">
                            <label htmlFor="exampleFormControlInput1" className="small font-weight-bold">Your Name</label>
                            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Gurdeep Osahan" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleFormControlInput2" className="small font-weight-bold">Email Address</label>
                            <input type="email" className="form-control" id="exampleFormControlInput2" placeholder="iamosahan@gmail.com" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleFormControlInput3" className="small font-weight-bold">Phone Number</label>
                            <input type="number" className="form-control" id="exampleFormControlInput3" placeholder="1-800-643-4500" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleFormControlTextarea1" className="small font-weight-bold">HOW CAN WE HELP YOU?</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Hi there, I would like to ..." rows="3"></textarea>
                        </div>
                        <a className="btn btn-primary btn-block" href="#">SUBMIT</a>
                    </form>
                    <div className="mapouter pt-3">
                            <div className="gmap_canvas">
                                <iframe width="100%" height="100%" id="gmap_canvas" src="https://maps.google.com/maps?q=hostings%20house&t=&z=16&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                            </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;