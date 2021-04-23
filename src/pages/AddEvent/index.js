import React, { Component } from "react";
import './AddEventStyle.css'

class AddEvent extends Component {
    render() {
        return(
            <div className="container box">
                <h3 className="pt-5">+Add Event</h3>
                <div class="row g-3 pb-4 mt-1">
                  <div class="col">
                    <input type="text" class="form-control" placeholder="Title" aria-label="Title"/>
                  </div>
                  <div class="col">
                    <input type="text" class="form-control" placeholder="Location" aria-label="Location"/>
                  </div>
                </div>
                <div class="row g-3 pb-2">
                  <div class="col">
                    <input type="text" class="form-control" placeholder="Participant" aria-label="Participant"/>
                  </div>
                  <div class="col">
                    <input type="date" class="form-control" placeholder="Date" aria-label="Date"/>
                  </div>
                </div>
                <div class="row g-3 p-3">
                  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Note"></textarea>
                </div>
                <div class="input-group">
                  <input type="file" class="form-control"/>
                </div>
                <div className="row justify-content-end p-3">
                    <button type="button" class="btn btn-primary">Create</button>
                </div>
            </div>
        )
    }
}

export default AddEvent;