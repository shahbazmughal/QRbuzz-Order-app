//using fixed url for now. you should make a separte file for urls and env for keys
import {API_URL} from "../../Constants";

// var api= 'https://reqres.in/api/users?page=2'
var getOfferBusinessApi= API_URL + 'api/businesses'
var getBranchItemsApi= API_URL + 'api/items/getBrnachItems'

export async function getBusinesses(user_id) {
  //console.log(user_id)
  try {
    const response = await fetch(getOfferBusinessApi,{
      method:"POST",
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify({user_id:user_id})
    });
    const data = await response.json()
    //console.log(data);
    return ({status: response.status, body:data.businesses})
    
  } catch (error) {
    console.log(error)
  }
}

export async function getBranchItems(id) {
  console.log(id)
  try {
    const response = await fetch(getBranchItemsApi,{
      method:"POST",
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify({branch_id:id})
    });
    const data = await response.json()
    console.log(data);
    return ({status: response.status, body:data})
    
  } catch (error) {
    console.log(error)
  }
}