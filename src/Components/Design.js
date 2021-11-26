import React from "react";
import "../App.css"
import Team2 from "../img/team2.jpg"
import Team1 from "../img/team1.jpg"
import Team3 from "../img/team3.jpg"

function Design() {
    return (
        <div id="desing">
          <h2>Designers.</h2>
          <hr />
          <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.</p>
          <p className="bold">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>
          <div className="member">
            <img src={Team2} />
            <div className="description">
              <h3>John Doe</h3>
              <p className="position">CEO & Founder</p>
              <p>In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided.</p>
            </div>
          </div>
          <div className="member">
            <img src={Team1} />
            <div className="description">
              <h3>Jane Doe</h3>
              <p className="position">Designer</p>
              <p>In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided.</p>
            </div>
          </div>
          <div className="member">
            <img src={Team3} />
            <div className="description">
              <h3>Mike Ross</h3>
              <p className="position">Architect</p>
              <p>In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided.</p>
            </div>
          </div>
        </div>
    )
}

export default Design