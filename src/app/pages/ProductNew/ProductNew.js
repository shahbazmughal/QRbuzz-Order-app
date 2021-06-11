import React, { useState, useEffect } from 'react';
import './product.css';
import { useHistory, useLocation } from "react-router-dom";
import { connect, useSelector } from 'react-redux';
import * as mredux from '../_redux/menuRedux';
import { API_URL } from "../../Constants";

function ProductNew(props) {

  const history = useHistory();
  const id = 3;
  const name = "Product New Page"

  const location = useLocation();
  //console.log(id, name)

  const goToHome = () => {
    history.push({
      pathname: '/home',
      state: {
        id: id,
        name: name
      }
    });
  }

  const goToCart = (e) => {
    var iid = e.target.dataset.id;
    var iname = e.target.dataset.title;
    var iimg = e.target.dataset.img;
    var iprice = e.target.dataset.sprice;
    var addons = e.target.dataset.addons;
    var attributes = e.target.dataset.attributes;
    var desc = e.target.dataset.desc;
    //ssconsole.log(iid, iname, iimg, iprice);
    history.push({
      pathname: '/cart',
      state: {
        id: iid,
        name: iname,
        img:iimg,
        price:iprice,
        addons:addons,
        attributes:attributes,
        desc: desc
      }
    });
  }

  const gotoContact = () => {
    history.push('contact')
  }

  const globalState = useSelector(state => state.menu)
  const [branchItems, setdata] = useState([]);

  useEffect(() => {
    //console.log(branchItems);
    setdata(globalState.branches_data)
  });

  useEffect(() => {
    props.getBranchItems(327)

    setTimeout(function () {
      setState({ ...state, loader: false });
    }, 1000);
  }, []);

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.value });
    setValues({ ...values, [name]: event.target.value });
  }

  const [values, setValues] = React.useState({
    count: 1,
    count2: 2
  });

  const [state, setState] = React.useState({
    counter: 1,
    counter2: 2,
    error: null,
    isLoaded: false,
    items: [],
    categories: [],
    final_items: [],
    loader: true
  });

  const [count, setCount] = useState(1);
  const [count2, setCount2] = useState(2);

  return (
    <div className="osahan-restaurant">
      {
        state.loader == true ?
          <div className="loading" id="loading"><div className="loader"></div></div>
          : <span></span>
      }
      <div className="osahan-restaurant-detail">
        <div className="recepie-header">
          <div className="position-absolute px-3 py-4 d-flex align-items-center w-100">
            <a className="toggle hc-nav-trigger hc-nav-1" href="#" role="button" aria-controls="hc-nav-1"><span></span></a>
            <div className="d-flex ml-auto">
              <p className="m-0 ml-auto mr-1 recepie-feather"><a href="restaurant.html#ratings-and-reviews"><i className="feather-upload shadow bg-light rounded-circle p-2"></i></a></p>
              <p className="m-0 ml-auto"><a href="restaurant.html#ratings-and-reviews"><i className="feather-star shadow bg-light text-danger rounded-circle p-2"></i></a></p>
            </div>
          </div>
          <img src="img/mega-foods.jpg" className="img-fluid w-100" alt="Responsive image" />
        </div>
        <div className="p-3">
          <div className="forgot-page">
            <a className="toggle toggle-2" href="#"><span></span></a>
            <a className="text-primary font-weight-bold" href="#" onClick={goToHome}><i className="feather-chevron-left"></i> Back</a>
          </div>
          <div className="pt-3">
            <h2 className="font-weight-bold">Mega Foods ltd</h2>
            <p className="font-weight-light text-dark m-0">171 B-1 Johar Town Lahore PK</p>
            <div className="rating-wrap d-flex align-items-center mt-2 mb">
              <ul className="rating-stars list-unstyled">
                <li>
                  <i className="feather-star text-warning"></i>
                  <i className="feather-star text-warning"></i>
                  <i className="feather-star text-warning"></i>
                  <i className="feather-star text-warning"></i>
                  <i className="feather-star"></i>
                </li>
              </ul>
              <p className="label-rating text-muted ml-2 small"> (245 Reviews)</p>
            </div>
          </div>
          <div className="pt-2">
            <div className="row">
              <div className="col-6">
                <p className="font-weight-bold m-0">Delivery</p>
                <p className="text-muted m-0">Free</p>
              </div>
              <div className="col-6">
                <p className="font-weight-bold m-0">Open time</p>
                <p className="text-muted m-0">11:00 AM to 10:00PM</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-primary p-3">
          <div className="d-flex align-items-center">
            <div className="feather_icon">
              <a href="#ratings-and-reviews" className="text-decoration-none text-dark"><i className="p-2 bg-light rounded-circle font-weight-bold  feather-upload"></i></a>
              <a href="#ratings-and-reviews" className="text-decoration-none text-dark mx-2"><i className="p-2 bg-light rounded-circle font-weight-bold  feather-star"></i></a>
              <a href="#ratings-and-reviews" className="text-decoration-none text-dark"><i className="p-2 bg-light rounded-circle font-weight-bold feather-map-pin"></i></a>
            </div>
            <a href="#" onClick={gotoContact} className="btn btn-sm btn-outline-light ml-auto">Contact</a>
          </div>
        </div>
      </div>

      <div className="px-3 pt-3">

        {
          branchItems.categories &&
          branchItems.categories.map((option, index) => {
            return(
              <div className="row" key={index}>
                <h6 className="mb-4 mt-3 col-md-12">{option.name} <small className="text-black-50">{branchItems.final_items.filter(i => i.item.category_id === option.id).length} ITEMS</small></h6>
                <div className="col-md-12 px-0 border-top">
                  <div className="bg-white mb-4"> 
                    {
                      branchItems.final_items.filter(i => i.item.category_id === option.id).length > 0 ?
                      <span>
                        {branchItems.final_items.filter(i => i.item.category_id === option.id).map(product => {
                          return(
                            <div className="p-3 border-bottom menu-list" key={product.item.id}>
                              <span className="float-right pt-2">
                                <a 
                                  onClick={goToCart} 
                                  href="#" 
                                  className="btn btn-outline-success btn-sm"
                                  data-id={product.item.id}
                                  data-title={product.item.title}
                                  data-img={product.item.image}
                                  data-cprice={product.item.cost_price}
                                  data-sprice={product.item.sale_price}
                                  data-addons={JSON.stringify(product.addons_sets)}
                                  data-attributes={JSON.stringify(product.attribnute_sets)}
                                  data-desc={product.item.description}
                                >
                                  Add to Cart
                                </a>
                              </span>
                              <div className="media">
                                {
                                  product.item.image !== null ?
                                  <img src={product.item.image} alt="" className="mr-3 rounded-pill " />
                                  :<div class="mr-3 font-weight-bold text-danger non_veg">.</div>
                                }
                                
                                <div className="media-body">
                                  <h6 className="mb-1">{product.item.title} </h6>
                                  <p className="text-muted mb-0">Rs. {product.item.sale_price}</p>
                                </div>
                              </div>
                            </div>
                          )
                        })}
                      </span>
                      :<div className="p-3 border-bottom menu-list">
                        <small className="text-black-50">No Item Found</small>
                      </div>
                    }
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>

    </div>
  )
}

export default connect(null, mredux.actions)(ProductNew);