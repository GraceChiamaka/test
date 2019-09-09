import React from 'react';
import './Barcode.css';

const barcode = (props) => {
    return (
        <div className="Barcode">
            <div className="">
                <input type="text" className="barcode__input" placeholder="Enter barcode digits" />
            </div>
            <h3 className="text-center my-5">Or </h3>

            <div className="barcode__input-scan">
                <label htmlFor="barcode" className="display__input"></label>
                <input type="file" name="barcode" id="barcode" className="barcode__input" />
            </div>
            <div className="text-center">
                <button className="btn font-weight-bold px-5 py-2 scan-btn mb-5">SCAN BARCODE</button>
            </div>
        </div>
    )
}

export default barcode;