import React, { Component } from "react";
import Table from '../../component/Table'


class Dashboard extends Component {
  state = {
    users: [
      {
        id: 1,
        title: "Buka Bersama",
        location: "Kuningan",
        date: "25/04/2021",
        participant: 5,
        note: "kumpul jam 5"
      },
      {
        id: 2,
        title: "Reuni SMK",
        location: "Kuningan",
        date: "10/05/2021",
        participant: 30,
        note: "Reuni"
      },
      {
        id: 3,
        title: "Traveling",
        location: "Bandung",
        date: "11/05/2021",
        participant: 5,
        note: "Traveling"
      }
    ]
  };

    render() {
        return (
           <div>
             <Table users={this.state.users} />
           </div>
        )
    }
}

export default Dashboard