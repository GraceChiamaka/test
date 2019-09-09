import React from 'react';
import Aux from '../../hoc/hoc';
import './MoreDetails.css';

const moreDetails = (props) => {
    return (
        <Aux className="Moredetails">
            <form className="moredetail__form">
                <div className="form-group">
                    <input type="text" id="discount" className="detail__input" placeholder="Product Discounts" />
                </div>
                <div className="form-group">
                    <input type="text" id="tax" className="detail__input" placeholder="Product Tax" />
                </div>
                <div className="form-group ">
                    <input type="text" id="weight" className="detail__input" placeholder="Product Weight" />
                </div>
                <div className="form-group">
                    <textarea type="text" id="description" className="detail__input" placeholder="Product Description">

                    </textarea>
                </div>
                
                <div className="mt-5 color__section pt-3 pb-2 px-2 mb-3">
                    <div className="row justify-content-between">
                        <div className="col-6">
                            <p className="font-weight-bold">ADD COLORS</p>
                        </div>
                        <div className="col-3">
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                                    <label className="form-check-label font-weight-bold" for="inlineRadio1">ON</label>
                                </div>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <input type="text" className="detail__input color-input" placeholder="Red" />
                </div>
                <div className="form-group">
                    <input className="detail__input color-input" placeholder="5" />
                </div>
                <div className="form-group">
                    <input className="detail__input color-input" placeholder="2" />
                </div>
                <div className="form-group">
                    <button />
                </div>
                <div className="form-group text-right">
                    <button className="btn done-btn px-5 mb-3 font-weight-bold py-3"><i className="fa fa-check mr-5"></i> DONE</button>
                    <br />
                    <button className="btn btn-continue px-5 py-3 font-weight-bold">CONTINUE <i className="fa fa-long-arrow-right ml-5"></i></button>
                </div>
            </form>
        </Aux>
    )
}

export default moreDetails;