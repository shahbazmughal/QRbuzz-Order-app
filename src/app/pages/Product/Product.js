import React, {useState, Component} from 'react';
import './product.css';
import {connect,useSelector,useDispatch} from 'react-redux';
import PropTypes from "prop-types";
import * as mredux from '../_redux/menuRedux';

class Product extends Component {

    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
      };
    

  render(){

        const { match, location, history } = this.props;

        const goToHome =()=> {
            history.push('home')
        }

        const goToCart = () => {
            history.push('cart')
        }
    
        const gotoContact = () => {
            history.push('contact')
        }

    return(
        <div className="osahan-restaurant">
            <div className="osahan-restaurant-detail">
                <div className="recepie-header">
                    <div className="position-absolute px-3 py-4 d-flex align-items-center w-100">
                        <a className="toggle hc-nav-trigger hc-nav-1" href="#" role="button" aria-controls="hc-nav-1"><span></span></a>
                        <div className="d-flex ml-auto">
                            <p className="m-0 ml-auto mr-1 recepie-feather"><a href="restaurant.html#ratings-and-reviews"><i className="feather-upload shadow bg-light rounded-circle p-2"></i></a></p>
                            <p className="m-0 ml-auto"><a href="restaurant.html#ratings-and-reviews"><i className="feather-star shadow bg-light text-danger rounded-circle p-2"></i></a></p>
                        </div>
                    </div>
                    <img src="img/trending1.png" className="img-fluid w-100" alt="Responsive image" />
                </div>
                <div className="p-3">
                    <div className="forgot-page">
                        <a className="toggle toggle-2" href="#"><span></span></a>
                        <a className="text-primary font-weight-bold" href="#" onClick={goToHome}><i className="feather-chevron-left"></i> Back</a>
                    </div>
                    <div className="pt-3">
                        <h2 className="font-weight-bold">Conrad Chicago Restaurant</h2>
                        <p className="font-weight-light text-dark m-0">963 Madyson Drive Suite 679</p>
                        <div className="rating-wrap d-flex align-items-center mt-2">
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
                                <p className="text-muted m-0">8:00 AM</p>
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
                        <a href="#" className="btn btn-sm btn-outline-light ml-auto">Contact</a>
                    </div>
                </div>
            </div>
            
            <div className="tabs">
                <Tabs>
                    <Tab label="Quick Bites">
                        <div className="row px-3">
                            <h6 className="mb-3 mt-4 col-md-12">Quick Bites <small className="text-black-50">3 ITEMS</small></h6>
                            <div className="col-md-12 px-0 border-top">
                                <div className="bg-white mb-30">
                                    <div className="p-3 border-bottom gold-members">
                                        <span className="float-right">
                                            <a onClick={goToCart} href="#" className="btn btn-outline-secondary btn-sm">ADD</a>
                                        </span>
                                        <div className="media">
                                            <div className="mr-3 font-weight-bold text-danger non_veg">.</div>
                                            <div className="media-body">
                                                <h6 className="mb-1">Chicken Tikka Sub </h6>
                                                <p className="text-muted mb-0">$250</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-3 border-bottom gold-members">
                                        <div className="count-number float-right">
                                            <button type="button" className="btn-sm left dec btn btn-outline-secondary">
                                                <i className="feather-minus"></i>
                                            </button>
                                            <input className="count-number-input" type="text" defaultValue="1" />
                                            <button type="button" className="btn-sm right inc btn btn-outline-secondary">
                                                <i className="feather-plus"></i>
                                            </button>
                                        </div>
                                        <div className="media">
                                            <div className="mr-3 font-weight-bold text-danger non_veg">.</div>
                                            <div className="media-body">
                                                <h6 className="mb-1">Cheese corn Roll <span className="badge badge-danger">BEST SELLER</span></h6>
                                                <p className="text-muted mb-0">$600</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-3 border-bottom gold-members">
                                        <span className="count-number float-right">
                                            <button type="button" className="btn-sm left dec btn btn-outline-secondary">
                                                <i className="feather-minus"></i>
                                            </button>
                                            <input className="count-number-input" type="text" defaultValue="2" />
                                            <button type="button" className="btn-sm right inc btn btn-outline-secondary" >
                                                <i className="feather-plus"></i>
                                            </button>
                                        </span>
                                        <div className="media">
                                            <div className="mr-3 font-weight-bold text-danger non_veg">.</div>
                                            <div className="media-body">
                                                <h6 className="mb-1">Chicken Tikka Sub <span className="badge badge-danger text-white">Non veg</span></h6>
                                                <p className="text-muted mb-0">$250</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Tab>
                    <Tab label="Starters">
                        <div className="row px-3">
                            <h6 className="mb-3 mt-4 col-md-12">Starters <small className="text-black-50">3 ITEMS</small></h6>
                            <div className="col-md-12 px-0 border-top">
                                <div className="bg-white mb-30">
                                    <div className="p-3 border-bottom menu-list">
                                        <span className="float-right"><a onClick={goToCart} href="#" className="btn btn-outline-secondary btn-sm">ADD</a></span>
                                        <div className="media">
                                            <img src="img/starter1.jpg" alt="" className="mr-3 rounded-pill " />
                                            <div className="media-body">
                                                <h6 className="mb-1">Chicken Tikka Sub </h6>
                                                <p className="text-muted mb-0">$250</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-3 border-bottom menu-list">
                                        <span className="count-number float-right"><button type="button" className="btn-sm left dec btn btn-outline-secondary"> <i className="feather-minus"></i> </button>
                                            <input className="count-number-input" type="text" defaultValue="1" /><button type="button" className="btn-sm right inc btn btn-outline-secondary"> <i className="feather-plus"></i> </button>
                                        </span>
                                        <div className="media">
                                            <img src="img/starter2.jpg" alt="" className="mr-3 rounded-pill " />
                                            <div className="media-body">
                                                <h6 className="mb-1">Cheese corn Roll <span className="badge badge-danger">BEST SELLER</span></h6>
                                                <p className="text-muted mb-0">$600</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-3 border-bottom menu-list">
                                        <span className="float-right"><a onClick={goToCart} href="#" className="btn btn-outline-secondary btn-sm">ADD</a></span>
                                        <div className="media">
                                            <img src="img/starter3.jpg" alt="" className="mr-3 rounded-pill " />
                                            <div className="media-body">
                                                <h6 className="mb-1">Chicken Tikka Sub <span className="badge badge-success">Pure Veg</span></h6>
                                                <p className="text-muted mb-0">$250</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Tab>
                    <Tab label="Soups">
                        <div className="row px-3">
                            <h6 className="mb-3 mt-4 col-md-12">Soups <small className="text-black-50">8 ITEMS</small></h6>
                            <div className="col-md-12 px-0 border-top">
                                <div className="bg-white mb-30">
                                    <div className="p-3 border-bottom gold-members">
                                        <span className="float-right"><a onClick={goToCart} href="#" className="btn btn-outline-secondary btn-sm">ADD</a></span>
                                        <div className="media">
                                            <div className="mr-3 font-weight-bold text-danger non_veg">.</div>
                                            <div className="media-body">
                                                <h6 className="mb-1">Chicken Tikka Sub </h6>
                                                <p className="text-muted mb-0">$250</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-3 border-bottom gold-members">
                                        <span className="count-number float-right"><button type="button" className="btn-sm left dec btn btn-outline-secondary"> <i className="feather-minus"></i> </button>
                                            <input className="count-number-input" type="text" defaultValue="1" /><button type="button" className="btn-sm right inc btn btn-outline-secondary"> <i className="feather-plus"></i> </button></span>
                                        <div className="media">
                                            <div className="mr-3 font-weight-bold text-danger non_veg">.</div>
                                            <div className="media-body">
                                                <h6 className="mb-1">Cheese corn Roll <span className="badge badge-danger">BEST SELLER</span></h6>
                                                <p className="text-muted mb-0">$600</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-3 border-bottom gold-members">
                                        <span className="float-right"><a onClick={goToCart} href="#" className="btn btn-outline-secondary btn-sm">ADD</a></span>
                                        <div className="media">
                                            <div className="mr-3 font-weight-bold text-success veg">.</div>
                                            <div className="media-body">
                                                <h6 className="mb-1">Chicken Tikka Sub <span className="badge badge-success">Pure Veg</span></h6>
                                                <p className="text-muted mb-0">$250</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-3 border-bottom gold-members">
                                        <span className="float-right"><a onClick={goToCart} href="#" className="btn btn-outline-secondary btn-sm">ADD</a></span>
                                        <div className="media">
                                            <div className="mr-3 font-weight-bold text-success veg">.</div>
                                            <div className="media-body">
                                                <h6 className="mb-1">Chicken Tikka Sub </h6>
                                                <p className="text-muted mb-0">$250</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-3 border-bottom gold-members">
                                        <span className="float-right"><a onClick={goToCart} href="#" className="btn btn-outline-secondary btn-sm">ADD</a></span>
                                        <div className="media">
                                            <div className="mr-3 font-weight-bold text-danger non_veg">.</div>
                                            <div className="media-body">
                                                <h6 className="mb-1">Cheese corn Roll <span className="badge badge-danger">BEST SELLER</span></h6>
                                                <p className="text-muted mb-0">$600</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-3 border-bottom gold-members">
                                        <span className="float-right"><a onClick={goToCart} href="#" className="btn btn-outline-secondary btn-sm">ADD</a></span>
                                        <div className="media">
                                            <div className="mr-3 font-weight-bold text-success veg">.</div>
                                            <div className="media-body">
                                                <h6 className="mb-1">Chicken Tikka Sub <span className="badge badge-success">Pure Veg</span></h6>
                                                <p className="text-muted mb-0">$250</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Tab>
                    <Tab label="Drinks">
                        <div className="row px-3">
                            <h6 className="mb-3 mt-4 col-md-12">Drinks <small className="text-black-50">6 ITEMS</small></h6>
                            <div className="col-md-12 px-0 border-top">
                                <div className="bg-white mb-30">
                                <div className="p-3 border-bottom gold-members">
                                        <span className="float-right">
                                            <a onClick={goToCart} href="#" className="btn btn-outline-secondary btn-sm">ADD</a>
                                        </span>
                                        <div className="media">
                                            <div className="mr-3 font-weight-bold text-danger non_veg">.</div>
                                            <div className="media-body">
                                                <h6 className="mb-1">Chicken Tikka Sub </h6>
                                                <p className="text-muted mb-0">$250</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-3 border-bottom gold-members">
                                        <div className="count-number float-right">
                                            <button type="button" className="btn-sm left dec btn btn-outline-secondary">
                                                <i className="feather-minus"></i>
                                            </button>
                                            <input className="count-number-input" type="text" defaultValue="1" />
                                            <button type="button" className="btn-sm right inc btn btn-outline-secondary">
                                                <i className="feather-plus"></i>
                                            </button>
                                        </div>
                                        <div className="media">
                                            <div className="mr-3 font-weight-bold text-danger non_veg">.</div>
                                            <div className="media-body">
                                                <h6 className="mb-1">Cheese corn Roll <span className="badge badge-danger">BEST SELLER</span></h6>
                                                <p className="text-muted mb-0">$600</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-3 border-bottom gold-members">
                                        <span className="count-number float-right">
                                            <button type="button" className="btn-sm left dec btn btn-outline-secondary">
                                                <i className="feather-minus"></i>
                                            </button>
                                            <input className="count-number-input" type="text" defaultValue="2" />
                                            <button type="button" className="btn-sm right inc btn btn-outline-secondary" >
                                                <i className="feather-plus"></i>
                                            </button>
                                        </span>
                                        <div className="media">
                                            <div className="mr-3 font-weight-bold text-danger non_veg">.</div>
                                            <div className="media-body">
                                                <h6 className="mb-1">Chicken Tikka Sub <span className="badge badge-danger text-white">Non veg</span></h6>
                                                <p className="text-muted mb-0">$250</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Tab>
                    <Tab label="Desserts">
                        <div className="row px-3">
                            <h6 className="mb-3 mt-4 col-md-12">Desserts <small className="text-black-50">3 ITEMS</small></h6>
                            <div className="col-md-12 px-0 border-top">
                                <div className="bg-white mb-30">
                                <div className="p-3 border-bottom menu-list">
                                        <span className="float-right"><a onClick={goToCart} href="#" className="btn btn-outline-secondary btn-sm">ADD</a></span>
                                        <div className="media">
                                            <img src="img/starter1.jpg" alt="" className="mr-3 rounded-pill " />
                                            <div className="media-body">
                                                <h6 className="mb-1">Chicken Tikka Sub </h6>
                                                <p className="text-muted mb-0">$250</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-3 border-bottom menu-list">
                                        <span className="count-number float-right"><button type="button" className="btn-sm left dec btn btn-outline-secondary"> <i className="feather-minus"></i> </button>
                                            <input className="count-number-input" type="text" defaultValue="1" /><button type="button" className="btn-sm right inc btn btn-outline-secondary"> <i className="feather-plus"></i> </button>
                                        </span>
                                        <div className="media">
                                            <img src="img/starter2.jpg" alt="" className="mr-3 rounded-pill " />
                                            <div className="media-body">
                                                <h6 className="mb-1">Cheese corn Roll <span className="badge badge-danger">BEST SELLER</span></h6>
                                                <p className="text-muted mb-0">$600</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-3 border-bottom menu-list">
                                        <span className="float-right"><a onClick={goToCart} href="#" className="btn btn-outline-secondary btn-sm">ADD</a></span>
                                        <div className="media">
                                            <img src="img/starter3.jpg" alt="" className="mr-3 rounded-pill " />
                                            <div className="media-body">
                                                <h6 className="mb-1">Chicken Tikka Sub <span className="badge badge-success">Pure Veg</span></h6>
                                                <p className="text-muted mb-0">$250</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Tab>
                </Tabs>
            </div>
            
        </div>
    )
  }
}

class Tabs extends React.Component{
  state ={
    activeTab: this.props.children[0].props.label
  }
  changeTab = (tab) => {
    this.setState({ activeTab: tab });
  };
  render(){
    
    let content;
    let buttons = [];
    return (
      <div>
        {React.Children.map(this.props.children, child =>{
          buttons.push(child.props.label)
          if (child.props.label === this.state.activeTab) content = child.props.children
        })}
         
        <TabButtons activeTab={this.state.activeTab} buttons={buttons} changeTab={this.changeTab}/>
        <div className="tab-content">{content}</div>
      </div>
    );
  }
}

const TabButtons = ({buttons, changeTab, activeTab}) =>{
   
  return(
    <div className="tab-buttons">
    {buttons.map((button, index) =>{
       return <button key={index} className={button === activeTab? 'active': ''} onClick={()=>changeTab(button)}>{button}</button>
    })}
    </div>
  )
}

const Tab = props =>{
  return(
    <React.Fragment>
      {props.children}
    </React.Fragment>
  )
}

export default Product;