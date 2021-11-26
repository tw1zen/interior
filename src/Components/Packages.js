import React from "react";
import "../App.css"

function Packages() {
    return (
        <div id="packages">
        <h2>Packages.</h2>
        <hr />
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
        <div className="tarif1">
          <ul>
            <li className="tarifname">
              Basic
            </li>
            <li>
              Floorplanning
            </li>
            <li>
              10 hours support
            </li>
            <li>
              Photography
            </li>
            <li>
              20% furniture discount
            </li>
            <li>
              Good deals
            </li>
            <li>
              <p className="price">50 рублей</p>
              <p className="period">в день</p>
            </li>
            <li>
              <button>Sign up</button>
            </li>
          </ul>
        </div>
        <div className="tarif2">
          <ul>
            <li className="tarifname">
              Pro
            </li>
            <li>
              Floorplanning
            </li>
            <li>
              50 hours support
            </li>
            <li>
              Photography
            </li>
            <li>
              50% furniture discount
            </li>
            <li>
              GREAT deals
            </li>
            <li>
              <p className="price">50 рублей</p>
              <p className="period">в день</p>
            </li>
            <li>
              <button>Sign up</button>
            </li>
          </ul>
        </div>
      </div>
    )
}

export default Packages