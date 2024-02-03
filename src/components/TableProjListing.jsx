import React from "react";
import img1 from "../asset/2.jpg";
import "./TableProjListing.css"
import "bootstrap/dist/css/bootstrap.min.css";
import img2 from "../asset/3.png";
import img3 from "../asset/5.png";
import img4 from "../asset/i9.webp";


function TableProjListing() {
  return (
    <div className="bg-white">
        <span className="fs-3 text-dark">Projects of the Month</span> <br />
        <span>Overview of Latest Month</span>
        <table className='table table-responsive vertical-align: middle table-sm table-white bordered '>
            <thead>
                <tr>
                    <th>Team Lead</th>
                    <th>PROJECT</th>
                    <th>Statut</th>
                    <th>Weeks</th>
                    <th>Budget</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <img src={img1} alt="" className="img img-fluid" />
                        <span>jean louis</span>
                    </td>
                    <td>Mysql/Node js</td>
                    <td>
                        <div className='cercle1'></div>
                    </td>
                    <td>35</td>
                    <td>95k</td>
                </tr>
                <tr>
                    <td>
                        <img src={img2} alt="" className="img img-fluid" />
                        <span>ANNE COREA</span>
                    </td>
                    <td>React</td>
                    <td>
                        <div className='cercle2'></div>
                    </td>
                    <td>35</td>
                    <td>95k</td>
                </tr>
                <tr>
                    <td>
                        <img src={img3} alt="" className="img img-fluid" />
                        <span>ANNE COREA</span>
                    </td>
                    <td>Next js</td>
                    <td>
                        <div className='cercle3'></div>
                    </td>
                    <td>35</td>
                    <td>95k</td>
                </tr>
                <tr>
                    <td>
                        <img src={img4} alt="" className="img img-fluid" />
                        <span>ANNE COREA</span>
                    </td>
                    <td>Vue js</td>
                    <td>
                        <div className='cercle4'></div>
                    </td>
                    <td>35</td>
                    <td>95k</td>
                </tr>
                <tr>
                    <td>
                        <img src={img1} alt="" className="img img-fluid" />
                        <span>Mamadou</span>
                    </td>
                    <td>TypeScrypt</td>
                    <td>
                        <div className='cercle5'></div>
                    </td>
                    <td>35</td>
                    <td>95k</td>
                </tr>
                <tr>
                    <td>
                        <img src={img2} alt="" className="img img-fluid" />
                        <span>lamine</span>
                    </td>
                    <td>Mysql/Node js</td>
                    <td>
                        <div className='cercle6'></div>
                    </td>
                    <td>35</td>
                    <td>95k</td>
                </tr>
                <tr>
                    <td>
                        <img src={img3} alt="" className="img img-fluid" />
                        <span></span>
                    </td>
                    <td>Mysql/Node js</td>
                    <td>
                        <div className='cercle7'></div>
                    </td>
                    <td>35</td>
                    <td>95k</td>
                </tr>
                <tr>
                    <td>
                        <img src={img4} alt="" className="img img-fluid" />
                        <span>ANNE COREA</span>
                    </td>
                    <td>Mysql/Node js</td>
                    <td>
                        <div className='cercle8'></div>
                    </td>
                    <td>35</td>
                    <td>95k</td>
                </tr>
                <tr>
                    <td>
                        <img src={img2} alt="" className="img img-fluid" />
                        <span>ANNE COREA</span>
                    </td>
                    <td>Mysql/Node js</td>
                    <td>
                        <div className='cercle9'></div>
                    </td>
                    <td>35</td>
                    <td>95k</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default TableProjListing