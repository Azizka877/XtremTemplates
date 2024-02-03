import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./header.css"
import "bootstrap-icons/font/bootstrap-icons.min.css"

function Header() {
  return (
    <div className="container">
    <div className="row">
    <div className="col-md-4 col-xl-3">
            <div className="card bg-c-pink order-card">
                <div className="card-block d-flex">
                    <div className="text-left icone3"><i className="bi bi-folder2 text-success"></i></div>
                    <div className="ms-2">
                    <div className="m-b-0 fw-bold fs-5 text-start">204
                    </div><span className="f-right">  Weekly Sales</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-md-4 col-xl-3">
            <div className="card bg-c-pink order-card">
                <div className="card-block d-flex">
                    <div className="text-left icone2"><i className="bi bi-currency-dollar text-red"></i></div>
                    <div className="ms-2">
                    <div className="m-b-0 fs-5 fw-bold text-start">204$
                    </div>
                    <span className="f-right">  Weekly Sales</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-md-4 col-xl-3">
            <div className="card bg-c-pink order-card">
                <div className="card-block d-flex">
                    <div className="text-left icone1"><i className="bi bi-basket3 text-dark"></i></div>
                    <div className="ms-2">
                    <div className="m-b-0 fw-bold fs-5 text-start">204 $
                    </div>
                    <span className="f-right">  Weekly Sales</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-md-4 col-xl-3">
            <div className="card bg-c-pink order-card">
                <div className="card-block d-flex">
                    <div className="text-left icone"><i className="bi bi-basket3 text-dark"></i></div>
                    <div className="ms-2">
                    <div className="m-b-0 fw-bold fs-5 text-start">204 $
                    </div><span className="f-right">  Weekly Sales</span>
                    </div>
                </div>
            </div>
        </div>
	</div>
</div>
  )
}

export default Header