import React, {useState} from "react";
import { useHistory, useLocation } from "react-router-dom";
import {connect,useSelector,useDispatch} from 'react-redux';
import './Cart.css';

function Cart(){

    const history = useHistory();
    const id = 3;
    const name = "Cart Page"

    const location = useLocation();
    //console.log(id, name)
    //console.log(location.state.id, location.state.name, location.state.img, location.state.price)

    const goHome =()=> {
        history.push("home");
    }

   const gotoCheckout =(e)=> {
      var iid = e.target.dataset.id;
      var price = e.target.dataset.price;
      var name = e.target.dataset.name;
      history.push({
         pathname: '/checkout',
         state: {
           id: iid,
           name: name,
           price:price
         }
     });
   }

   const [state, setState] = React.useState({
      data: location.state ? location.state: {},
      dlv: 10,
      dlv_charges: location.state ? location.state.price + 10 : "160"
    });

   const [count, setCount] = useState(1);
   const [count2, setCount2] = useState(2);
   const [data, setData] = useState(location.state);
   
   console.log(state.data)
  
    return (
        <div className="osahan-checkout">
         <div className="bg-primary border-bottom px-3 pt-3 pb-5 d-flex align-items-center">
            <h4 className="font-weight-bold text-white m-0">QRbuzz</h4>
            <a className="text-white font-weight-bold ml-auto" href="#" onClick={goHome}> Close</a>
         </div>
         <div className="p-3 osahan-cart-item">
            <div className="d-flex mb-3 osahan-cart-item-profile bg-white shadow rounded p-3 mt-n5">
               <img alt="osahan" src={data ? data.img : "img/starter1.jpg"} className="mr-3 rounded-circle img-fluid item-image" />
               <div className="d-flex flex-column mt-3">
                  <h6 className="mb-1 font-weight-bold">{data ? data.name  : "Spice Hut Indian Restaurant"}</h6>
                  <p className="mb-0 small text-muted"><i className="feather-map-pin"></i> 2036 2ND AVE, NEW YORK, NY 10029</p>
               </div>
            </div>
            <div className="bg-white rounded shadow mb-3 py-2">
               <div className="gold-members d-flex align-items-center justify-content-between px-3 py-2 border-bottom">
                  <div className="media align-items-center">
                     <div className="mr-2 text-danger">&middot;</div>
                     <div className="media-body">
                        <p className="m-0">Chicken Tikka Sub</p>
                     </div>
                  </div>
                  <div className="d-flex align-items-center">
                  <span className="count-number float-right">
                     <button type="button" className="btn-sm left dec btn btn-outline-secondary" onClick={() => setCount(count-1)}> 
                        <i className="feather-minus"></i> 
                     </button>
                     <input className="count-number-input" type="text" value={count} />
                     <button type="button" className="btn-sm right inc btn btn-outline-secondary" onClick={() => setCount(count+1)}> 
                        <i className="feather-plus"></i> 
                     </button>
                     </span>
                  <p className="text-gray mb-0 float-right ml-2 text-muted small">628</p>
                  </div>
               </div>
               <div className="gold-members d-flex align-items-center justify-content-between px-3 py-2 border-bottom">
                  <div className="media align-items-center">
                     <div className="mr-2 text-danger">&middot;</div>
                     <div className="media-body">
                        <p className="m-0">Methi Chicken Dry
                        </p>
                     </div>
                  </div>
                  <div className="d-flex align-items-center">
                  <span className="count-number float-right">
                     <button type="button" className="btn-sm left dec btn btn-outline-secondary" onClick={() => setCount2(count2-1)}> 
                        <i className="feather-minus"></i> 
                     </button>
                     <input className="count-number-input" type="text" value={count2} />
                     <button type="button" className="btn-sm right inc btn btn-outline-secondary" onClick={() => setCount2(count2+1)}> 
                        <i className="feather-plus"></i> 
                     </button>
                  </span>
                  <p className="text-gray mb-0 float-right ml-2 text-muted small">628</p>
                  </div>
               </div>
               <div className="gold-members d-flex align-items-center justify-content-between px-3 py-2 border-bottom">
                  <div className="media align-items-center">
                     <div className="mr-2 text-danger">&middot;</div>
                     <div className="media-body">
                        <p className="m-0">Reshmi Kebab
                        </p>
                     </div>
                  </div>
                  <div className="d-flex align-items-center">
                  <span className="count-number float-right"><button type="button" className="btn-sm left dec btn btn-outline-secondary"> <i className="feather-minus"></i> </button><input className="count-number-input" type="text" value="2" /><button type="button" className="btn-sm right inc btn btn-outline-secondary"> <i className="feather-plus"></i> </button></span>
                  <p className="text-gray mb-0 float-right ml-2 text-muted small">628</p>
                  </div>
               </div>
               <div className="gold-members d-flex align-items-center justify-content-between px-3 py-2 border-bottom">
                  <div className="media align-items-center">
                     <div className="mr-2 text-success">&middot;</div>
                     <div className="media-body">
                        <p className="m-0">Lemon Cheese Dry
                        </p>
                     </div>
                  </div>
                  <div className="d-flex align-items-center">
                  <span className="count-number float-right"><button type="button" className="btn-sm left dec btn btn-outline-secondary"> <i className="feather-minus"></i> </button><input className="count-number-input" type="text" value="2" /><button type="button" className="btn-sm right inc btn btn-outline-secondary"> <i className="feather-plus"></i> </button></span>
                  <p className="text-gray mb-0 float-right ml-2 text-muted small">628</p>
                  </div>
               </div>
               <div className="gold-members d-flex align-items-center justify-content-between px-3 py-2 border-bottom">
                  <div className="media align-items-center">
                     <div className="mr-2 text-success">&middot;</div>
                     <div className="media-body">
                        <p className="m-0">Rara Paneer</p>
                     </div>
                  </div>
                  <div className="d-flex align-items-center">
                  <span className="count-number float-right"><button type="button" className="btn-sm left dec btn btn-outline-secondary"> <i className="feather-minus"></i> </button><input className="count-number-input" type="text" value="2" /><button type="button" className="btn-sm right inc btn btn-outline-secondary"> <i className="feather-plus"></i> </button></span>
                  <p className="text-gray mb-0 float-right ml-2 text-muted small">628</p>
                  </div>
               </div>
               <div className="gold-members d-flex align-items-center justify-content-between px-3 py-2 border-bottom">
                  <div className="media align-items-center">
                     <div className="mr-2 text-success">&middot;</div>
                     <div className="media-body">
                        <p className="m-0">Special Lemon Cheese
                        </p>
                     </div>
                  </div>
                  <div className="d-flex align-items-center">
                  <span className="count-number float-right"><button type="button" className="btn-sm left dec btn btn-outline-secondary"> <i className="feather-minus"></i> </button><input className="count-number-input" type="text" value="2" /><button type="button" className="btn-sm right inc btn btn-outline-secondary"> <i className="feather-plus"></i> </button></span>
                  <p className="text-gray mb-0 float-right ml-2 text-muted small">628</p>
                  </div>
               </div>
               <div className="gold-members d-flex align-items-center justify-content-between px-3 py-2">
                  <div className="media align-items-center">
                     <div className="mr-2 text-danger">&middot;</div>
                     <div className="media-body">
                        <p className="m-0">Tandoori Chicken
                        </p>
                     </div>
                  </div>
                  <div className="d-flex align-items-center">
                  <span className="count-number float-right"><button type="button" className="btn-sm left dec btn btn-outline-secondary"> <i className="feather-minus"></i> </button><input className="count-number-input" type="text" value="2" /><button type="button" className="btn-sm right inc btn btn-outline-secondary"> <i className="feather-plus"></i> </button></span>
                  <p className="text-gray mb-0 float-right ml-2 text-muted small">628</p>
                  </div>
               </div>
            </div>
            <div className="mb-3 shadow bg-white rounded p-3 py-3 mt-3 clearfix">
               <div className="input-group-sm mb-2 input-group">
                  <input placeholder="Enter promo code" type="text" className="form-control" />
                  <div className="input-group-append"><button id="button-addon2" type="button" className="btn btn-success">APPLY</button></div>
               </div>
               <div className="mb-0 input-group">
                  <div className="input-group-prepend"><span className="input-group-text"><i className="feather-message-square"></i></span></div>
                  <textarea placeholder="Any suggestions? We will pass it on..." aria-label="With textarea" className="form-control"></textarea>
               </div>
            </div>
            <div className="shadow bg-white rounded p-3 clearfix">
               <p className="mb-1">Item Total <span className="float-right text-dark">{data ? data.price : "150"}</span></p>
               <p className="mb-1">Restaurant Charges <span className="float-right text-dark">0</span></p>
               <p className="mb-1">Delivery Fee<span className="text-info ml-1"><i className="icofont-info-circle"></i></span><span className="float-right text-dark">0</span></p>
               <p className="mb-1 text-success">Total Discount<span className="float-right text-success">{data ? data.price : "150"}</span></p>
               <hr />
               <h6 className="font-weight-bold mb-0">TO PAY  <span className="float-right">Rs: {data ? data.price : "150"}</span></h6>
            </div>
            <a className="btn btn-success btn-block btn-lg fixed-bottom" href="#" data-id={data ? data.id : 0} data-name={data ? data.name : ""} data-price={data ? data.price : 0} onClick={gotoCheckout}>PAY {data ? data.price : "150"}/- <i className="icofont-long-arrow-right"></i></a>
         </div>
      </div>
    )
}

export default Cart;