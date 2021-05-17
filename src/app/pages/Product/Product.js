import React, {useState, Component} from 'react';
import './product.css';
import {connect,useSelector,useDispatch} from 'react-redux';
import PropTypes from "prop-types";
import * as mredux from '../_redux/menuRedux';
import {API_URL} from "../../Constants";
import axios from 'axios';

class Product extends Component {

    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
      };
    
      constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = { 
            counter: 1,
            counter2:2,
            error: null,
            isLoaded: false,
            items: [],
            categories:[],
            final_items:[],
            loader: true

        };
      }
      
      componentDidMount() {
        const fd = new FormData();
		fd.append("branch_id", "327");
        const bid = {"branch_id": 327}
        axios.post(API_URL + 'api/items/getBrnachItems', bid)
          .then(
            (data) => {
              this.setState({
                isLoaded: true,
                items: data.data,
                categories: data.data.categories,
                final_items: data.data.final_items,
                loader:false
              });
              console.log(data.data)
              document.getElementsByClassName('tab-buttons')[0].firstChild.className = "active"
            },
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
      }

  render(){

        const { match, location, history } = this.props;

        const goToHome =()=> {
            history.push('home')
        }

        const goToCart = (e) => {
            var id = e.target.dataset.id;
            history.push({
                pathname: '/cart',
                state: {
                  id: id
                }
            });
        }
    
        const gotoContact = () => {
            history.push('contact')
        }

        const { error, isLoaded, items } = this.state;
        

    return(
        <div className="osahan-restaurant">
            {
                this.state.loader == true ? 
                <div className="loading" id="loading"><div className="loader"></div></div>
                :<span></span>
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
                        <a href="#" onClick={gotoContact} className="btn btn-sm btn-outline-light ml-auto">Contact</a>
                    </div>
                </div>
            </div>
            
            <div className="tabs">
                <Tabs>  
                {/* {JSON.stringify(this.state.categories)} */}
                    {this.state.categories.map(option => (
                        <Tab key={option.id} id={option.id} label={option.name}>
                            <div className="row px-3">
                                <h6 className="mb-3 mt-4 col-md-12">{option.name} <small className="text-black-50">3 ITEMS</small></h6>
                                <div className="col-md-12 px-0 border-top">
                                    <div className="bg-white mb-30">
                                        {this.state.final_items.map(menu => (
                                            <div key={menu.item.id} className="p-3 border-bottom menu-list">
                                                <span className="float-right mt-2">
                                                    <a onClick={goToCart} data-id={menu.item.id} href="#" className="btn btn-outline-secondary btn-sm">ADD</a>
                                                </span>
                                                <div className="media">
                                                    <img src={menu.item.image} alt="" class="mr-3 rounded-pill " />
                                                    <div className="media-body">
                                                        <h6 className="mb-1 mt-2">{menu.item.title} </h6>
                                                        <p className="text-muted mb-0">${menu.item.sale_price}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </Tab>
                    ))}
                </Tabs>
            </div>
            
        </div>
    )
  }
}

class Tabs extends React.Component{
  state ={
    //activeTab: this.props.children[0].props.label
    activeTab: this.props.children.props
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