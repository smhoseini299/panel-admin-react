import React from "react"



const Card = () => {

    return (
        <>
            <div className="col-12 col-md-6 col-lg-3 dashboard_card_parent">
                <div className="card text-dark bg-info mb-3 dashboard_card" >
                    <div className="card-body row">
                        <div className="col-9">
                            <h4>7</h4>
                            <h6 className="card-title text_truncate">سبد خرید امروز</h6>
                            <small className="card-title text_truncate">سبد های خرید مانده امروز</small>
                        </div>
                        <div className="col-3 d-flex justify-content-center align-items-center">
                            <i className="fas fa-shopping-basket card_icon"></i>
                        </div>
                    </div>
                </div>
                <div className="card text-dark bg-info mb-3 dashboard_card d-flex flex-row" >
                    <div className="card-body py-1 row">
                        <small className="m-0 d-block text_truncate">  <b>13</b> در هفته گذشته</small>
                        <small className="m-0 d-block text_truncate">  <b>18</b> در ماه گذشته</small>
                    </div>
                </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3 dashboard_card_parent">
                <div className="card text-dark bg-info mb-3 dashboard_card" >
                    <div className="card-body row">
                        <div className="col-9">
                            <h4>5</h4>
                            <h6 className="card-title text_truncate">سفارشات مانده امروز</h6>
                            <small className="card-title text_truncate">سفارشات معلق و فاقد پرداختی </small>
                        </div>
                        <div className="col-3 d-flex justify-content-center align-items-center">
                            <i className="fas fa-dolly card_icon"></i>
                        </div>
                    </div>
                </div>
                <div className="card text-dark bg-info mb-3 dashboard_card d-flex flex-row" >
                    <div className="card-body py-1 row">
                        <small className="m-0 d-block text_truncate">  <b>9</b> در هفته گذشته</small>
                        <small className="m-0 d-block text_truncate">  <b>16</b> در ماه گذشته</small>
                    </div>
                </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3 dashboard_card_parent">
                <div className="card text-dark bg-info mb-3 dashboard_card" >
                    <div className="card-body row">
                        <div className="col-9">
                            <h4>45</h4>
                            <h6 className="card-title text_truncate">سفارشات امروز</h6>
                            <small className="card-title text_truncate">سفارشات کامل و دارای پرداختی</small>
                        </div>
                        <div className="col-3 d-flex justify-content-center align-items-center">
                            <i className="fas fa-luggage-cart card_icon"></i>
                        </div>
                    </div>
                </div>
                <div className="card text-dark bg-info mb-3 dashboard_card d-flex flex-row" >
                    <div className="card-body py-1 row">
                        <small className="m-0 d-block text_truncate">  <b>263</b> در هفته گذشته</small>
                        <small className="m-0 d-block text_truncate">  <b>1038</b> در ماه گذشته</small>
                    </div>
                </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3 dashboard_card_parent">
                <div className="card text-dark bg-info mb-3 dashboard_card" >
                    <div className="card-body row">
                        <div className="col-9">
                            <h4>1,500,000</h4>
                            <h6 className="card-title text_truncate">درآمد امروز</h6>
                            <small className="card-title text_truncate">جمع مبالغ پرداختی (تومان)</small>
                        </div>
                        <div className="col-3 d-flex justify-content-center align-items-center">
                            <i className="fas fa-money-check-alt card_icon"></i>
                        </div>
                    </div>
                </div>
                <div className="card text-dark bg-info mb-3 dashboard_card d-flex flex-row" >
                    <div className="card-body py-1 row">
                        <small className="m-0 d-block text_truncate"> <b>6,380,000</b> در هفته گذشته </small>
                        <small className="m-0 d-block text_truncate"> <b>22,480,000</b> در ماه گذشته </small>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Card;

