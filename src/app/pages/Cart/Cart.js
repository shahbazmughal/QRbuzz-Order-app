import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import {connect,useSelector,useDispatch} from 'react-redux';
import './Cart.css';

function Cart(){

    const history = useHistory();
    const id = 3;
    const name = "Cart Page"

    const location = useLocation();
    console.log(id, name)

    const goToCheckout =()=> {
        history.push({
            pathname: '/checkout',
            state: {
              id: id,
              name:name
            }
        });
    }

    const goHome =()=> {
        history.push("home");
    } 
  
    return (
        <div class="osahan-checkout">
         <div class="bg-primary border-bottom px-3 pt-3 pb-5 d-flex align-items-center">
            <a class="toggle hc-nav-trigger hc-nav-1" href="#" role="button" aria-controls="hc-nav-1">
                <span></span>
            </a>
            <h4 class="font-weight-bold m-0 text-white pl-5">Order</h4>
            <a class="text-white font-weight-bold ml-auto" href="javascript:;" onClick={goHome}> Close</a>
         </div>
         <div class="p-3 osahan-cart-item">
            <div class="d-flex mb-3 osahan-cart-item-profile bg-white shadow rounded p-3 mt-n5">
               <img alt="osahan" src="img/starter1.jpg" class="mr-3 rounded-circle img-fluid" />
               <div class="d-flex flex-column">
                  <h6 class="mb-1 font-weight-bold">Spice Hut Indian Restaurant</h6>
                  <p class="mb-0 small text-muted"><i class="feather-map-pin"></i> 2036 2ND AVE, NEW YORK, NY 10029</p>
               </div>
            </div>
            <div class="bg-white rounded shadow mb-3 py-2">
               <div class="gold-members d-flex align-items-center justify-content-between px-3 py-2 border-bottom">
                  <div class="media align-items-center">
                     <div class="mr-2 text-danger">&middot;</div>
                     <div class="media-body">
                        <p class="m-0">Chicken Tikka Sub</p>
                     </div>
                  </div>
                  <div class="d-flex align-items-center">
                  <span class="count-number float-right"><button type="button" class="btn-sm left dec btn btn-outline-secondary"> <i class="feather-minus"></i> </button><input class="count-number-input" type="text" readonly="" value="2" /><button type="button" class="btn-sm right inc btn btn-outline-secondary"> <i class="feather-plus"></i> </button></span>
                  <p class="text-gray mb-0 float-right ml-2 text-muted small">$628</p>
                  </div>
               </div>
               <div class="gold-members d-flex align-items-center justify-content-between px-3 py-2 border-bottom">
                  <div class="media align-items-center">
                     <div class="mr-2 text-danger">&middot;</div>
                     <div class="media-body">
                        <p class="m-0">Methi Chicken Dry
                        </p>
                     </div>
                  </div>
                  <div class="d-flex align-items-center">
                  <span class="count-number float-right"><button type="button" class="btn-sm left dec btn btn-outline-secondary"> <i class="feather-minus"></i> </button><input class="count-number-input" type="text" readonly="" value="2" /><button type="button" class="btn-sm right inc btn btn-outline-secondary"> <i class="feather-plus"></i> </button></span>
                  <p class="text-gray mb-0 float-right ml-2 text-muted small">$628</p>
                  </div>
               </div>
               <div class="gold-members d-flex align-items-center justify-content-between px-3 py-2 border-bottom">
                  <div class="media align-items-center">
                     <div class="mr-2 text-danger">&middot;</div>
                     <div class="media-body">
                        <p class="m-0">Reshmi Kebab
                        </p>
                     </div>
                  </div>
                  <div class="d-flex align-items-center">
                  <span class="count-number float-right"><button type="button" class="btn-sm left dec btn btn-outline-secondary"> <i class="feather-minus"></i> </button><input class="count-number-input" type="text" readonly="" value="2" /><button type="button" class="btn-sm right inc btn btn-outline-secondary"> <i class="feather-plus"></i> </button></span>
                  <p class="text-gray mb-0 float-right ml-2 text-muted small">$628</p>
                  </div>
               </div>
               <div class="gold-members d-flex align-items-center justify-content-between px-3 py-2 border-bottom">
                  <div class="media align-items-center">
                     <div class="mr-2 text-success">&middot;</div>
                     <div class="media-body">
                        <p class="m-0">Lemon Cheese Dry
                        </p>
                     </div>
                  </div>
                  <div class="d-flex align-items-center">
                  <span class="count-number float-right"><button type="button" class="btn-sm left dec btn btn-outline-secondary"> <i class="feather-minus"></i> </button><input class="count-number-input" type="text" readonly="" value="2" /><button type="button" class="btn-sm right inc btn btn-outline-secondary"> <i class="feather-plus"></i> </button></span>
                  <p class="text-gray mb-0 float-right ml-2 text-muted small">$628</p>
                  </div>
               </div>
               <div class="gold-members d-flex align-items-center justify-content-between px-3 py-2 border-bottom">
                  <div class="media align-items-center">
                     <div class="mr-2 text-success">&middot;</div>
                     <div class="media-body">
                        <p class="m-0">Rara Paneer</p>
                     </div>
                  </div>
                  <div class="d-flex align-items-center">
                  <span class="count-number float-right"><button type="button" class="btn-sm left dec btn btn-outline-secondary"> <i class="feather-minus"></i> </button><input class="count-number-input" type="text" readonly="" value="2" /><button type="button" class="btn-sm right inc btn btn-outline-secondary"> <i class="feather-plus"></i> </button></span>
                  <p class="text-gray mb-0 float-right ml-2 text-muted small">$628</p>
                  </div>
               </div>
               <div class="gold-members d-flex align-items-center justify-content-between px-3 py-2 border-bottom">
                  <div class="media align-items-center">
                     <div class="mr-2 text-success">&middot;</div>
                     <div class="media-body">
                        <p class="m-0">Special Lemon Cheese
                        </p>
                     </div>
                  </div>
                  <div class="d-flex align-items-center">
                  <span class="count-number float-right"><button type="button" class="btn-sm left dec btn btn-outline-secondary"> <i class="feather-minus"></i> </button><input class="count-number-input" type="text" readonly="" value="2" /><button type="button" class="btn-sm right inc btn btn-outline-secondary"> <i class="feather-plus"></i> </button></span>
                  <p class="text-gray mb-0 float-right ml-2 text-muted small">$628</p>
                  </div>
               </div>
               <div class="gold-members d-flex align-items-center justify-content-between px-3 py-2">
                  <div class="media align-items-center">
                     <div class="mr-2 text-danger">&middot;</div>
                     <div class="media-body">
                        <p class="m-0">Tandoori Chicken
                        </p>
                     </div>
                  </div>
                  <div class="d-flex align-items-center">
                  <span class="count-number float-right"><button type="button" class="btn-sm left dec btn btn-outline-secondary"> <i class="feather-minus"></i> </button><input class="count-number-input" type="text" readonly="" value="2" /><button type="button" class="btn-sm right inc btn btn-outline-secondary"> <i class="feather-plus"></i> </button></span>
                  <p class="text-gray mb-0 float-right ml-2 text-muted small">$628</p>
                  </div>
               </div>
            </div>
            <div class="mb-3 shadow bg-white rounded p-3 py-3 mt-3 clearfix">
               <div class="input-group-sm mb-2 input-group">
                  <input placeholder="Enter promo code" type="text" class="form-control" />
                  <div class="input-group-append"><button id="button-addon2" type="button" class="btn btn-primary"><i class="feather-percent"></i> APPLY</button></div>
               </div>
               <div class="mb-0 input-group">
                  <div class="input-group-prepend"><span class="input-group-text"><i class="feather-message-square"></i></span></div>
                  <textarea placeholder="Any suggestions? We will pass it on..." aria-label="With textarea" class="form-control"></textarea>
               </div>
            </div>
            <div class="shadow bg-white rounded p-3 clearfix">
               <p class="mb-1">Item Total <span class="float-right text-dark">$3140</span></p>
               <p class="mb-1">Restaurant Charges <span class="float-right text-dark">$62.8</span></p>
               <p class="mb-1">Delivery Fee<span class="text-info ml-1"><i class="icofont-info-circle"></i></span><span class="float-right text-dark">$10</span></p>
               <p class="mb-1 text-success">Total Discount<span class="float-right text-success">$1884</span></p>
               <hr />
               <h6 class="font-weight-bold mb-0">TO PAY  <span class="float-right">$1329</span></h6>
            </div>
            <a class="btn btn-success btn-block btn-lg fixed-bottom" href="payment.html">PAY $1329<i class="icofont-long-arrow-right"></i></a>
         </div>
      </div>
    )
}

export default Cart;