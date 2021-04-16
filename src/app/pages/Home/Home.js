import React ,{useState,useEffect} from "react";
import { useHistory, useLocation } from "react-router-dom";
import {connect,useSelector} from 'react-redux';
import * as mredux from '../_redux/menuRedux';
import './home.css';

function Home(props){

    const history = useHistory();
    const id = 1;
    const name= "Home Page";

    const location = useLocation();
    //console.log(id, name)

    const goToProduct =()=> {
        history.push({
            pathname: '/product',
            state: {
              id: id,
              name:name
            }
        });
    }
    const globalState  = useSelector(state=>state.menu)
    const [branchItems, setdata] = useState([]);

    useEffect( ()=>{
        console.log(branchItems);
        setdata(globalState.branches_data)
    });

    useEffect( ()=>{
        props.getBranchItems(325)
    } , []);

    const [state, setState] = React.useState({
        all_caters:branchItems.categories
    });    

  
    return (
        <div>
            <div class="osahan-home-page">
                <div class="bg-primary p-3">
                    <div class="text-white">
                        <div class="title d-flex align-items-center">
                            <a class="toggle" href="#">
                            <span></span>
                            </a>
                            <h4 class="font-weight-bold m-0 pl-5">Browse</h4>
                            <a class="text-white font-weight-bold ml-auto" data-toggle="modal" data-target="#exampleModal" href="#">Filter</a>
                        </div>
                    </div>
                    <div class="input-group mt-3 rounded shadow-sm overflow-hidden">
                        <div class="input-group-prepend">
                            <button class="border-0 btn btn-outline-secondary text-dark bg-white btn-block"><i class="feather-search"></i></button>
                        </div>
                        <input type="text" class="shadow-none border-0 form-control" placeholder="Search for restaurants or dishes" aria-label="" aria-describedby="basic-addon1" />
                    </div>
                </div>
                <div class="bg-light">
                    <div class="cat-slider border-bottom">
                        <div class="cat-item px-1 py-3">
                            <a class="bg-white rounded d-block p-2 text-center shadow" href="trending.html">
                                <img src="img/icons/Fries.png" class="img-fluid mb-2" />
                                <p class="m-0 small">Fries</p>
                            </a>
                        </div>
                        <div class="cat-item px-1 py-3">
                            <a class="bg-white rounded d-block p-2 text-center shadow" href="trending.html">
                                <img src="img/icons/Pizza.png" class="img-fluid mb-2" />
                                <p class="m-0 small">Pizza</p>
                            </a>
                        </div>
                        <div class="cat-item px-1 py-3">
                            <a class="bg-white rounded d-block p-2 text-center shadow" href="trending.html">
                                <img src="img/icons/Burger.png" class="img-fluid mb-2" />
                                <p class="m-0 small">Burger</p>
                            </a>
                        </div>
                        <div class="cat-item px-1 py-3">
                            <a class="bg-white rounded d-block p-2 text-center shadow" href="trending.html">
                                <img src="img/icons/Sandwich.png" class="img-fluid mb-2" />
                                <p class="m-0 small">Sandwich</p>
                            </a>
                        </div>
                        <div class="cat-item px-1 py-3">
                            <a class="bg-white rounded d-block p-2 text-center shadow" href="trending.html">
                                <img src="img/icons/Coffee.png" class="img-fluid mb-2" />
                                <p class="m-0 small">Coffee</p>
                            </a>
                        </div>
                        <div class="cat-item px-1 py-3">
                            <a class="bg-white rounded d-block p-2 text-center shadow" href="trending.html">
                                <img src="img/icons/Steak.png" class="img-fluid mb-2" />
                                <p class="m-0 small">Steak</p>
                            </a>
                        </div>
                        <div class="cat-item px-1 py-3">
                            <a class="bg-white rounded d-block p-2 text-center shadow" href="trending.html">
                                <img src="img/icons/ColaCan.png" class="img-fluid mb-2" />
                                <p class="m-0 small">ColaCan</p>
                            </a>
                        </div>
                        <div class="cat-item px-1 py-3">
                            <a class="bg-white rounded d-block p-2 text-center shadow" href="trending.html">
                                <img src="img/icons/Breakfast.png" class="img-fluid mb-2" />
                                <p class="m-0 small">Breakfast</p>
                            </a>
                        </div>
                        <div class="cat-item px-1 py-3">
                            <a class="bg-white rounded d-block p-2 text-center shadow" href="trending.html">
                                <img src="img/icons/Salad.png" class="img-fluid mb-2" />
                                <p class="m-0 small">Salad</p>
                            </a>
                        </div>
                    </div>
                    <div class="px-3 pt-3 title d-flex align-items-center">
                    <h5 class="m-0">Trending this week</h5>
                    <a class="font-weight-bold ml-auto" href="trending.html">View all <i class="feather-chevrons-right"></i></a>
                    </div>
                    <div class="trending-slider">
                    <div class="osahan-slider-item py-3 px-1">
                        <div class="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                            <div class="list-card-image">
                                <div class="star position-absolute"><span class="badge badge-success"><i class="feather-star"></i> 3.1 (300+)</span></div>
                                <div class="favourite-heart text-danger position-absolute"><a href="#"><i class="feather-heart"></i></a></div>
                                <div class="member-plan position-absolute"><span class="badge badge-dark">Promoted</span></div>
                                <a href="restaurant.html">
                                <img src="img/trending1.png" class="img-fluid item-img w-100" />
                                </a>
                            </div>
                            <div class="p-3 position-relative">
                                <div class="list-card-body">
                                <h6 class="mb-1"><a href="restaurant.html" class="text-black">Famous Dave's Bar-B-Que
                                    </a>
                                </h6>
                                <p class="text-gray mb-3">Vegetarian • Indian • Pure veg</p>
                                <p class="text-gray mb-3 time"><span class="bg-light text-dark rounded-sm pl-2 pb-1 pt-1 pr-2"><i class="feather-clock"></i> 15–30 min</span> <span class="float-right text-black-50"> $350 FOR TWO</span></p>
                                </div>
                                <div class="list-card-badge">
                                <span class="badge badge-danger">OFFER</span> <small> Use Coupon OSAHAN50</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="osahan-slider-item py-3 px-1">
                        <div class="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                            <div class="list-card-image">
                                <div class="star position-absolute"><span class="badge badge-success"><i class="feather-star"></i> 3.1 (300+)</span></div>
                                <div class="favourite-heart text-danger position-absolute"><a href="#"><i class="feather-heart"></i></a></div>
                                <div class="member-plan position-absolute"><span class="badge badge-dark">Promoted</span></div>
                                <a href="restaurant.html">
                                <img src="img/trending2.png" class="img-fluid item-img w-100" />
                                </a>
                            </div>
                            <div class="p-3 position-relative">
                                <div class="list-card-body">
                                <h6 class="mb-1"><a href="restaurant.html" class="text-black">Thai Famous Cuisine</a></h6>
                                <p class="text-gray mb-3">North Indian • Indian • Pure veg</p>
                                <p class="text-gray mb-3 time"><span class="bg-light text-dark rounded-sm pl-2 pb-1 pt-1 pr-2"><i class="feather-clock"></i> 30–35 min</span> <span class="float-right text-black-50"> $250 FOR TWO</span></p>
                                </div>
                                <div class="list-card-badge">
                                <span class="badge badge-success">OFFER</span> <small>65% off</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="osahan-slider-item py-3 px-1">
                        <div class="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                            <div class="list-card-image">
                                <div class="star position-absolute"><span class="badge badge-success"><i class="feather-star"></i> 3.1 (300+)</span></div>
                                <div class="favourite-heart text-danger position-absolute"><a href="#"><i class="feather-heart"></i></a></div>
                                <div class="member-plan position-absolute"><span class="badge badge-dark">Promoted</span></div>
                                <a href="restaurant.html">
                                <img src="img/trending3.png" class="img-fluid item-img w-100" />
                                </a>
                            </div>
                            <div class="p-3 position-relative">
                                <div class="list-card-body">
                                <h6 class="mb-1"><a href="restaurant.html" class="text-black">The osahan Restaurant
                                    </a>
                                </h6>
                                <p class="text-gray mb-3">North • Hamburgers • Pure veg</p>
                                <p class="text-gray mb-3 time"><span class="bg-light text-dark rounded-sm pl-2 pb-1 pt-1 pr-2"><i class="feather-clock"></i> 15–25 min</span> <span class="float-right text-black-50"> $500 FOR TWO</span></p>
                                </div>
                                <div class="list-card-badge">
                                <span class="badge badge-danger">OFFER</span> <small>65% OSAHAN50</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div class="offer-slider bg-white border-top border-bottom">
                    <div class="cat-item px-1 py-3">
                        <a class="bg-white d-block text-center shadow" href="trending.html">
                        <img src="img/pro1.jpg" class="img-fluid rounded" />
                        </a>
                    </div>
                    <div class="cat-item px-1 py-3">
                        <a class="bg-white d-block text-center shadow" href="trending.html">
                        <img src="img/pro2.jpg" class="img-fluid rounded" />
                        </a>
                    </div>
                    <div class="cat-item px-1 py-3">
                        <a class="bg-white d-block text-center shadow" href="trending.html">
                        <img src="img/pro3.jpg" class="img-fluid rounded" />
                        </a>
                    </div>
                    <div class="cat-item px-1 py-3">
                        <a class="bg-white d-block text-center shadow" href="trending.html">
                        <img src="img/pro4.jpg" class="img-fluid rounded" />
                        </a>
                    </div>
                    </div>
                    <div class="px-3 pb-3 title d-flex align-items-center">
                    <h5 class="m-0 pt-3">Most popular</h5>
                    <a class="pt-3 font-weight-bold ml-auto" href="most_popular.html">26 places <i class="feather-chevrons-right"></i></a>
                    </div>
                    <div class="most_popular px-3">
                    <div class="row">
                        <div class="col-6 pr-2">
                            <div class="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                                <div class="list-card-image">
                                <div class="star position-absolute"><span class="badge badge-success"><i class="feather-star"></i> 3.1 (300+)</span></div>
                                <div class="favourite-heart text-danger position-absolute"><a href="#"><i class="feather-heart"></i></a></div>
                                <div class="member-plan position-absolute"><span class="badge badge-dark">Promoted</span></div>
                                <a href="restaurant.html">
                                <img src="img/popular1.png" class="img-fluid item-img w-100" />
                                </a>
                                </div>
                                <div class="p-3 position-relative">
                                <div class="list-card-body">
                                    <h6 class="mb-1"><a href="restaurant.html" class="text-black">The osahan Restaurant
                                        </a>
                                    </h6>
                                    <p class="text-gray mb-1 small">• North • Hamburgers</p>
                                    <p class="text-gray mb-1 rating">
                                    <ul class="rating-stars list-unstyled">
                                        <li>
                                            <i class="feather-star star_active"></i>
                                            <i class="feather-star star_active"></i>
                                            <i class="feather-star star_active"></i>
                                            <i class="feather-star star_active"></i>
                                            <i class="feather-star"></i>
                                        </li>
                                    </ul>
                                    </p>
                                </div>
                                <div class="list-card-badge">
                                    <span class="badge badge-danger">OFFER</span> <small>65% OSAHAN50</small>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-6 pl-2">
                            <div class="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                                <div class="list-card-image">
                                <div class="star position-absolute"><span class="badge badge-success"><i class="feather-star"></i> 3.1 (300+)</span></div>
                                <div class="favourite-heart text-danger position-absolute"><a href="#"><i class="feather-heart"></i></a></div>
                                <div class="member-plan position-absolute"><span class="badge badge-dark">Promoted</span></div>
                                <a href="restaurant.html">
                                <img src="img/popular2.png" class="img-fluid item-img w-100" />
                                </a>
                                </div>
                                <div class="p-3 position-relative">
                                <div class="list-card-body">
                                    <h6 class="mb-1"><a href="restaurant.html" class="text-black">Thai Famous Indian Cuisine</a></h6>
                                    <p class="text-gray mb-1 small">• Indian • Pure veg</p>
                                    <p class="text-gray mb-1 rating">
                                    <ul class="rating-stars list-unstyled">
                                        <li>
                                            <i class="feather-star star_active"></i>
                                            <i class="feather-star star_active"></i>
                                            <i class="feather-star star_active"></i>
                                            <i class="feather-star star_active"></i>
                                            <i class="feather-star"></i>
                                        </li>
                                    </ul>
                                    </p>
                                </div>
                                <div class="list-card-badge">
                                    <span class="badge badge-success">OFFER</span> <small>65% off</small>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row pt-3">
                        <div class="col-6 pr-2">
                            <div class="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                                <div class="list-card-image">
                                <div class="star position-absolute"><span class="badge badge-success"><i class="feather-star"></i> 3.1 (300+)</span></div>
                                <div class="favourite-heart text-danger position-absolute"><a href="#"><i class="feather-heart"></i></a></div>
                                <div class="member-plan position-absolute"><span class="badge badge-dark">Promoted</span></div>
                                <a href="restaurant.html">
                                <img src="img/popular3.png" class="img-fluid item-img w-100" />
                                </a>
                                </div>
                                <div class="p-3 position-relative">
                                <div class="list-card-body">
                                    <h6 class="mb-1"><a href="restaurant.html" class="text-black">The osahan Restaurant
                                        </a>
                                    </h6>
                                    <p class="text-gray mb-1 small">• Hamburgers • Pure veg</p>
                                    <p class="text-gray mb-1 rating">
                                    <ul class="rating-stars list-unstyled">
                                        <li>
                                            <i class="feather-star star_active"></i>
                                            <i class="feather-star star_active"></i>
                                            <i class="feather-star star_active"></i>
                                            <i class="feather-star star_active"></i>
                                            <i class="feather-star"></i>
                                        </li>
                                    </ul>
                                    </p>
                                </div>
                                <div class="list-card-badge">
                                    <span class="badge badge-danger">OFFER</span> <small>65% OSAHAN50</small>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-6 pl-2">
                            <div class="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                                <div class="list-card-image">
                                <div class="star position-absolute"><span class="badge badge-success"><i class="feather-star"></i> 3.1 (300+)</span></div>
                                <div class="favourite-heart text-danger position-absolute"><a href="#"><i class="feather-heart"></i></a></div>
                                <div class="member-plan position-absolute"><span class="badge badge-dark">Promoted</span></div>
                                <a href="restaurant.html">
                                <img src="img/popular4.png" class="img-fluid item-img w-100" />
                                </a>
                                </div>
                                <div class="p-3 position-relative">
                                <div class="list-card-body">
                                    <h6 class="mb-1"><a href="restaurant.html" class="text-black">Bite Me Now Sandwiches</a></h6>
                                    <p class="text-gray mb-1 small">American • Pure veg</p>
                                    <p class="text-gray mb-1 rating">
                                    <ul class="rating-stars list-unstyled">
                                        <li>
                                            <i class="feather-star star_active"></i>
                                            <i class="feather-star star_active"></i>
                                            <i class="feather-star star_active"></i>
                                            <i class="feather-star star_active"></i>
                                            <i class="feather-star"></i>
                                        </li>
                                    </ul>
                                    </p>
                                </div>
                                <div class="list-card-badge">
                                    <span class="badge badge-success">OFFER</span> <small>65% off</small>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div class="p-3 title d-flex align-items-center">
                    <h5 class="m-0 pt-3">Most sales</h5>
                    <a class="pt-3 font-weight-bold ml-auto" href="#">26 places <i class="feather-chevrons-right"></i></a>
                    </div>
                    <div class="most_sale px-3 pb-3">
                    <div class="row">
                        <div class="col-12">
                            <div class="d-flex align-items-center list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                                <div class="list-card-image">
                                <div class="star position-absolute"><span class="badge badge-success"><i class="feather-star"></i> 3.1 (300+)</span></div>
                                <div class="favourite-heart text-danger position-absolute"><a href="#"><i class="feather-heart"></i></a></div>
                                <div class="member-plan position-absolute"><span class="badge badge-dark">Promoted</span></div>
                                <a href="restaurant.html">
                                <img src="img/sales1.png" class="img-fluid item-img w-100" />
                                </a>
                                </div>
                                <div class="p-3 position-relative">
                                <div class="list-card-body">
                                    <h6 class="mb-1"><a href="restaurant.html" class="text-black">The osahan Restaurant
                                        </a>
                                    </h6>
                                    <p class="text-gray mb-3">North • Hamburgers • Pure veg</p>
                                    <p class="text-gray mb-3 time"><span class="bg-light text-dark rounded-sm pl-2 pb-1 pt-1 pr-2"><i class="feather-clock"></i> 15–25 min</span> <span class="float-right text-black-50"> $500 FOR TWO</span></p>
                                </div>
                                <div class="list-card-badge">
                                    <span class="badge badge-danger">OFFER</span> <small>65% OSAHAN50</small>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 pt-2">
                            <div class="d-flex align-items-center list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                                <div class="list-card-image">
                                <div class="star position-absolute"><span class="badge badge-success"><i class="feather-star"></i> 3.1 (300+)</span></div>
                                <div class="favourite-heart text-danger position-absolute"><a href="#"><i class="feather-heart"></i></a></div>
                                <div class="member-plan position-absolute"><span class="badge badge-dark">Promoted</span></div>
                                <a href="restaurant.html">
                                <img src="img/sales2.png" class="img-fluid item-img w-100" />
                                </a>
                                </div>
                                <div class="p-3 position-relative">
                                <div class="list-card-body">
                                    <h6 class="mb-1"><a href="restaurant.html" class="text-black">Thai Famous Cuisine</a></h6>
                                    <p class="text-gray mb-3">North Indian • Indian • Pure veg</p>
                                    <p class="text-gray mb-3 time"><span class="bg-light text-dark rounded-sm pl-2 pb-1 pt-1 pr-2"><i class="feather-clock"></i> 30–35 min</span> <span class="float-right text-black-50"> $250 FOR TWO</span></p>
                                </div>
                                <div class="list-card-badge">
                                    <span class="badge badge-success">OFFER</span> <small>65% off</small>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 pt-2">
                            <div class="d-flex align-items-center list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                                <div class="list-card-image">
                                <div class="star position-absolute"><span class="badge badge-success"><i class="feather-star"></i> 3.1 (300+)</span></div>
                                <div class="favourite-heart text-danger position-absolute"><a href="#"><i class="feather-heart"></i></a></div>
                                <div class="member-plan position-absolute"><span class="badge badge-dark">Promoted</span></div>
                                <a href="restaurant.html">
                                <img src="img/sales3.png" class="img-fluid item-img w-100" />
                                </a>
                                </div>
                                <div class="p-3 position-relative">
                                <div class="list-card-body">
                                    <h6 class="mb-1"><a href="restaurant.html" class="text-black">The osahan Restaurant
                                        </a>
                                    </h6>
                                    <p class="text-gray mb-3">North • Hamburgers • Pure veg</p>
                                    <p class="text-gray mb-3 time"><span class="bg-light text-dark rounded-sm pl-2 pb-1 pt-1 pr-2"><i class="feather-clock"></i> 15–25 min</span> <span class="float-right text-black-50"> $500 FOR TWO</span></p>
                                </div>
                                <div class="list-card-badge">
                                    <span class="badge badge-danger">OFFER</span> <small>65% OSAHAN50</small>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="osahan-menu-fotter fixed-bottom bg-white px-3 py-2 text-center">
                    <div class="row">
                    <div class="col selected">
                        <a href="home.html" class="text-danger small font-weight-bold text-decoration-none">
                            <p class="h4 m-0"><i class="feather-home text-danger"></i></p>
                            Home
                        </a>
                    </div>
                    <div class="col">
                        <a href="most_popular.html" class="text-dark small font-weight-bold text-decoration-none">
                            <p class="h4 m-0"><i class="feather-map-pin"></i></p>
                            Trending
                        </a>
                    </div>
                    <div class="col bg-white rounded-circle mt-n4 px-3 py-2">
                        <div class="bg-danger rounded-circle mt-n0 shadow">
                            <a href="checkout.html" class="text-white small font-weight-bold text-decoration-none">
                            <i class="feather-shopping-cart"></i>
                            </a>
                        </div>
                    </div>
                    <div class="col">
                        <a href="favorites.html" class="text-dark small font-weight-bold text-decoration-none">
                            <p class="h4 m-0"><i class="feather-heart"></i></p>
                            Favorites
                        </a>
                    </div>
                    <div class="col">
                        <a href="profile.html" class="text-dark small font-weight-bold text-decoration-none">
                            <p class="h4 m-0"><i class="feather-user"></i></p>
                            Profile
                        </a>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default connect(null, mredux.actions)(Home);