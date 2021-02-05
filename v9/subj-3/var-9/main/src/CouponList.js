import React from 'react';
import AddCoupon from './AddCoupon'

export class CouponList extends React.Component {
    constructor(){
        super();
        this.state = {
            coupons: []
        };
    }

    addCoupon=(coupon)=>{
        let coupons=this.state.data;
        coupons.push(coupon);
        this.setState({
            data: tasks
        })
    }
    render(){
        return(
            <div>
                <AddCoupon addCoupon={this.addCoupon}/>
            </div>
        )
    }
}