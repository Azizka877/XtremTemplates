import { Feeds } from "components/Feeds"
import Header from "components/Header"
import TableProjListing from "components/TableProjListing"
import React from "react"

function HomePage() {
  return (
    <div>
      <Header/>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-7"></div>
          <div className="col-sm-5">
            <Feeds/>
          </div>
        </div>
      </div>
      <TableProjListing/>
    </div>
  )
}

export default HomePage