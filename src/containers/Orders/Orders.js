import React, { Component } from 'react';

import axios from '../../axios-orders';
import errorHandler from '../../hoc/ErrorHandler/ErrorHandler';
import Order from '../../components/Order/Order';
// import {storage} from '../../firebase/firebase';

class Orders extends Component {
    constructor() {
        super();
        this.state = {
            orders: [],
            loading: true,
            url:[]
        }
        //this.handleDownload();
    }
    

    componentDidMount(){
        axios.get('/orders.json')
            .then(res => {
                const fetchOrders = [];
                for (let key in res.data) {
                    fetchOrders.push({
                        ...res.data[key],
                        id: key
                    });
                }
                this.setState({loading: false, orders: fetchOrders});
            })
            .catch(err => {
                this.setState({loading: false});
            })  
    }


    // handleDownload() {
        // the function to retrive the data from firebase
    //     const downloadURL = storage.ref('images');
    //     downloadURL.listAll().then(res => {
    //         res.items.forEach(image => {
    //             const imageRef = image.name;
    //             downloadURL.child(imageRef).getDownloadURL().then(url => {
    //                 this.setState({url: [...this.state.url, url]})
    //             })
    //         })
    //     });
    // }

    render(){
        // const Photo = this.state.url.map(url => {
        //     return (
        //         <img src={url} key={url} alt='firebaseImage'></img>
        //     )
        // })
        // to retrieve all the photos from storage in firebase

        return(
            <div>
                {this.state.orders.map(order => (
                    <Order 
                        key={order.id} 
                        ingredients={order.ingredients}
                        price={order.price}
                        />
                ))}
                {/* {Photo} */}
            </div>
        );
    }
}

export default errorHandler(Orders, axios);