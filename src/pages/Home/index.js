import React, { Component } from "react";
import CardIcon from '../../assets/party.jpg'

class Home extends Component {
    render() {
        return(
            <div className="card" style={{width: "18rem"}}>
              <img src={CardIcon} className="card-img-top" alt="card"/>
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">An item</li>
                <li class="list-group-item">A second item</li>
                <li class="list-group-item">A third item</li>
              </ul>
              <div class="card-body">
                {/* <a href="#" class="card-link">Card link</a>
                <a href="#" class="card-link">Another link</a> */}
              </div>
            </div>
        )
    }
}

export default Home