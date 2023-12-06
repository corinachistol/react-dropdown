import {useState} from 'react';
import './checkout.css';

export default function Checkout() {
    const [coupons,setCoupons] = useState([])
    console.log(coupons)

    function handleNewCoupon(coupon){
        setCoupons(coupons=>[...coupons, coupon])
    }

    function handleDeleteCoupon(id){
        const filtered = coupons.filter(coupon=>coupon.id === id)
        setCoupons(filtered)
    }

    return(
        <>
            <Total coupons={coupons}/>
            <Promotions 
                coupons={coupons} 
                onAddCoupon={handleNewCoupon}
                onDeleteCoupon={handleDeleteCoupon} />
        </>
    )
}

function Total({coupons}) {
    return(
        <div className="total">
            <p>Total:</p>
            <h1>30.98Euro</h1>
            <p style={{textDecoration:"line-through"}}>75.00euro</p>
            <p>discount 82% off {coupons}</p>
            <button className="total-checkout">Checkout</button>
        </div>
    )
}

function Promotions({coupons,onAddCoupon, onDeleteCoupon}) {
    const [promotions, setPromotions] = useState([])

    function handlePromotion(e) {
        onAddCoupon(promotions)
        setPromotions("")
    }

    return(
        <div className="promotions">
            <p>Promotions</p>
            <div>
                <button onClick={onDeleteCoupon}>&times;</button>
                <span>Coupon: {coupons} is applied</span>
            </div>
            <input 
                type="text" 
                placeholder="Enter Coupon" 
                onChange={e=>setPromotions(e.target.value)}
                value={promotions} />
            <button onClick={handlePromotion}>Apply</button>
        </div>
    )
}