import React from "react";
import "../App.css"

function Contact() {
    return (
        <div id="contact">
          <h2>Contact.</h2>
          <hr />
          <p>These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided.</p>
          <form>
            <label for="name">
              Name
            </label>
            <input type="text" placeholder="Name" id="name" />
            <br />
            <label for="email">
              Email
            </label>
            <input type="email" placeholder="Email" id="email" />
            <br />
            <label for="comment">
              Message
            </label>
            <input type="text" placeholder="Message" id="comment" />
            <br />
          </form>
          <button>Send Message</button>
        </div>
    )
}

export default Contact