import React, { Component } from "react";
import CardIcon1 from '../../assets/bukber.jpg'
import CardIcon2 from '../../assets/Reuni-Teman-SMK.jpg'
import CardIcon3 from '../../assets/5e47fc8178458.jpg'

class Home extends Component {
    render() {
        return(
          <div className="container">
            <div className="row mt-4">
              <div className="col">
                <div className="card" style={{width: "18rem"}}>
                  <img src={CardIcon1} className="card-img-top" alt="card"/>
                  <div class="card-body">
                    <h5 class="card-title">Buka Bersama</h5>
                    <p class="card-text">Kumpul Jam 5</p>
                  </div>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">25/04/2021</li>
                    <li class="list-group-item">Kuningan</li>
                  </ul>
                </div>
              </div>
              <div className="col">
                <div className="card" style={{width: "18rem"}}>
                  <img src={CardIcon2} className="card-img-top" alt="card"/>
                  <div class="card-body">
                    <h5 class="card-title">Reuni SMK</h5>
                    <p class="card-text">Reuni</p>
                  </div>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">10/05/2021</li>
                    <li class="list-group-item">Kuningan</li>
                  </ul>
                </div>
              </div>
              <div className="col">
                <div className="card" style={{width: "18rem"}}>
                  <img src={CardIcon3} className="card-img-top" alt="card"/>
                  <div class="card-body">
                    <h5 class="card-title">Traveling</h5>
                    <p class="card-text">Traveling</p>
                  </div>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">11/05/2021</li>
                    <li class="list-group-item">Bandung</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )
    }
}

export default Home