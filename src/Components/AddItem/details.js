import React from 'react';
import './details.css';

const details = (props) => {
    return (
        <div className="Details">
            <form className="">
                <div className="form-group">
                    <input type="text" id="name" className="" placeholder="Product Name" />
                </div>
                <div className="form-group">
                    <input type="text" id="category" className="" placeholder="Product Category" />
                </div>
                <div className="form-group ">
                    <input type="text" id="price" className="" placeholder="Product Cost Price" />
                </div>
                <div className="form-group ">
                    <input type="text" id="selling_price" className="" placeholder="Product Selling Price" />
                </div>
                <div className="form-group ">
                    <input type="text" id="quantity" className="" placeholder="Product Quantity" />
                </div>
                <div className="form-group ">
                    <input type="text" id="limit" className="" placeholder="Product Limit" />
                </div>
                <div className="form-group ">
                    <input type="text" id="limit" className="" placeholder="Product Expiry Date" />
                </div>
                <div className="form-group text-right mt-5">
                    <button type="submit" className="btn btn-secondary px-4 py-3">Continue <i className="fa fa-long-arrow-right ml-5"></i></button>
                </div>
            </form>
        </div>
    )
}
export default details;