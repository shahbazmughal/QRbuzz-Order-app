import React from 'react';
import { useHistory, useLocation } from "react-router-dom";
import {connect,useSelector,useDispatch} from 'react-redux';
import './others.css';

function Privacy()  {

    const history = useHistory();
    const id = 9;
    const name = "Privacy Page";

    const location = useLocation();

    const goBack =()=> {
        history.goBack();
    }

    const gotoContact =()=> {
        history.push({
            pathname: '/contact',
            state: {
              id: id,
              name:name
            }
        });
    }

    return (
        <div class="osahan-privacy">
            <div class="bg-primary border-bottom px-3 pt-3 pb-5">
                <a class="toggle togglew toggle-2" href="#"><span></span></a>
                <a class="text-white font-weight-bold" href="#" onClick={goBack}><i class="feather-chevron-left"></i> Back</a>
                <h2 class="font-weight-bold m-0 text-white pt-3">Privacy &amp; Policy</h2>
                <p class="mb-2 text-white-50 small">Last modified: March 27, 202 (view archived versions)
                </p>
            </div>
            <div class="bg-light mb-4 p-3 osahan-privacy-item">
                <div class="osahan-privacy bg-white rounded shadow p-4 mt-n5">
                    <div id="intro" class="mb-4">
                        <div class="mb-3">
                            <h2 class="h5 text-primary">Introduction</h2>
                        </div>
                        <p>Thanks for using our products and services ("Services"). The Services are provided by Pixeel Ltd. ("Swiggi"), located at 153 Williamson Plaza, Maggieberg, MT 09514, England, United Kingdom.
                        </p>
                        <p>By using our Services, you are agreeing to these terms. Please read them carefully.</p>
                    </div>
                    <div id="services" class="mb-4">
                        <div class="mb-3">
                            <h3 class="h5 text-primary">1. Using our services</h3>
                        </div>
                        <p>You must follow any policies made available to you within the Services.</p>
                        <p>Don't misuse our Services. For example, don't interfere with our Services or try to access them using a method other than the interface and the instructions that we provide. You may use our Services only as permitted by law, including applicable export and re-export control laws and regulations. We may suspend or stop providing our Services to you if you do not comply with our terms or policies or if we are investigating suspected misconduct.</p>
                        <div id="personal-data" class="mb-3 active">
                            <h4 class="h6 text-primary">A. Personal Data that we collect about you.</h4>
                        </div>
                        <p>Personal Data is any information that relates to an identified or identifiable individual. The Personal Data that you provide directly to us through our Sites will be apparent from the context in which you provide the data. In particular:</p>
                        <ul class="text-secondary">
                            <li class="pb-2">When you register for a Swiggi account we collect your full name, email address, and account log-in credentials.</li>
                            <li class="pb-2">When you fill-in our online form to contact our sales team, we collect your full name, work email, country, and anything else you tell us about your project, needs and timeline.</li>
                            <li class="pb-2">When you use the "Remember Me" feature of Swiggi Checkout, we collect your email address, payment card number, CVC code and expiration date.</li>
                        </ul>
                        <p>When you respond to Swiggi emails or surveys we collect your email address, name and any other information you choose to include in the body of your email or responses. If you contact us by phone, we will collect the phone number you use to call Swiggi. If you contact us by phone as a Swiggi User, we may collect additional information in order to verify your identity.</p>
                        <div id="information" class="mb-3 active">
                            <h4 class="h6 text-primary">B. Information that we collect automatically on our Sites.</h4>
                        </div>
                        <p>We also may collect information about your online activities on websites and connected devices over time and across third-party websites, devices, apps and other online features and services. We use Google Analytics on our Sites to help us analyze Your use of our Sites and diagnose technical issues.</p>
                        <p>To learn more about the cookies that may be served through our Sites and how You can control our use of cookies and third-party analytics, please see our Cookie Policy.</p>
                    </div>
                    <div id="privacy" class="mb-4">
                        <div class="mb-3">
                            <h3 class="h5 text-primary">2. Privacy and copyright protection</h3>
                        </div>
                        <p>Swiggi's privacy policies explain how we treat your personal data and protect your privacy when you use our Services. By using our Services, you agree that Swiggi can use such data in accordance with our privacy policies.</p>
                        <p>We respond to notices of alleged copyright infringement and terminate accounts of repeat infringers according to the process set out in the U.S. Digital Millennium Copyright Act.</p>
                        <p>We provide information to help copyright holders manage their intellectual property online. If you think somebody is violating your copyrights and want to notify us, you can find information about submitting notices and Swiggi's policy about responding to notices in <a href="#" onClick={gotoContact}>our Help Center</a>.</p>
                    </div>
                    <div id="yourContent" class="active">
                        <div class="mb-3">
                            <h3 class="h5 text-primary">3. Your content in our services</h3>
                        </div>
                        <p>Some of our Services allow you to upload, submit, store, send or receive content. You retain ownership of any intellectual property rights that you hold in that content. In short, what belongs to you stays yours.</p>
                        <p>When you upload, submit, store, send or receive content to or through our Services, you give Swiggi (and those we work with) a worldwide license to use, host, store, reproduce, modify, create derivative works (such as those resulting from translations, adaptations or other changes we make so that your content works better with our Services), communicate, publish, publicly perform, publicly display and distribute such content.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Privacy;