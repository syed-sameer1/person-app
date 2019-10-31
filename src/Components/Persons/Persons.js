// import React from "react";
// import Person from "./Person/Person";
// import "./Persons.css";
// const Persons = () => {
//   const PersonsData = [
//     {
//       name: "Sameer",
//       age: 18,
//       tital: "Youtuber",
//       isEdit: true
//     },
//     {
//       name: "Usaid",
//       age: 20,
//       tital: "Programmer",
//       isEdit: true
//     },
//     {
//       name: "Saad",
//       age: 19,
//       tital: "Designer",
//       isEdit: true
//     }
//   ];

//   return (
//     <div className="Persons">
//       <h2>Persons Component</h2>
//       {PersonsData.map(person => (
//         <Person person={person} />
//       ))}
//     </div>
//   );
// };

// export default Persons;

import React, { Component } from "react";
import Person from "./Person/Person";
import "./Persons.css";

class Persons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      PersonsData: [
        {
          name: "Sameer",
          age: 18,
          title: "Youtuber",
          isEdit: false
        },
        {
          name: "Usaid",
          age: 20,
          title: "Programmer",
          isEdit: false
        },
        {
          name: "Saad",
          age: 19,
          title: "Designer",
          isEdit: false
        }
      ]
    };
  }

  editMode = personindex => {
    console.log(this.state.PersonsData[personindex].name);

    // const change = this.state.PersonsData[personindex].isEdit;

    const getPerson = {
      ...this.state.PersonsData[personindex]
    };

    if (getPerson.isEdit) {
      getPerson.isEdit = false;
    } else {
      getPerson.isEdit = true;
    }

    const PersonsData = [...this.state.PersonsData];

    PersonsData[personindex] = getPerson;

    this.setState({
      PersonsData: PersonsData
    });
    console.log(getPerson.name);
  };

  cancle = () => {
    this.setState({
      PersonsData: [
        {
          name: "Sameer",
          age: 18,
          title: "Youtuber",
          isEdit: false
        },
        {
          name: "Usaid",
          age: 20,
          title: "Programmer",
          isEdit: false
        },
        {
          name: "Saad",
          age: 19,
          title: "Designer",
          isEdit: false
        }
      ]
    });
  };

  // isEditOff = personindex => {
  //   console.log(this.state.PersonsData[personindex].name);

  //   // const change = this.state.PersonsData[personindex].isEdit;

  //   const getPerson = {
  //     ...this.state.PersonsData[personindex]
  //   };

  //   getPerson.isEdit = false;

  //   const PersonsData = [...this.state.PersonsData];

  //   PersonsData[personindex] = getPerson;

  //   this.setState({
  //     PersonsData: PersonsData
  //   });
  //   console.log(getPerson.name);
  // };

  deletePerson = personindex => {
    const PersonsData = [...this.state.PersonsData];
    PersonsData.splice(personindex, 1);
    this.setState({ PersonsData: PersonsData });
  };

  updateName = (event, personindex) => {
    console.log(this.state.PersonsData[personindex].name);

    // const change = this.state.PersonsData[personindex].isEdit;

    const getPerson = {
      ...this.state.PersonsData[personindex]
    };

    getPerson.name = event.target.value;

    const PersonsData = [...this.state.PersonsData];

    PersonsData[personindex] = getPerson;

    this.setState({
      PersonsData: PersonsData
    });
    console.log(getPerson.name);
  };
  updateAge = (event, personindex) => {
    console.log(this.state.PersonsData[personindex].name);

    // const change = this.state.PersonsData[personindex].isEdit;

    const getPerson = {
      ...this.state.PersonsData[personindex]
    };

    getPerson.age = event.target.value;

    const PersonsData = [...this.state.PersonsData];

    PersonsData[personindex] = getPerson;

    this.setState({
      PersonsData: PersonsData
    });
    console.log(getPerson.name);
  };
  updateTitle = (event, personindex) => {
    console.log(this.state.PersonsData[personindex].name);

    // const change = this.state.PersonsData[personindex].isEdit;

    const getPerson = {
      ...this.state.PersonsData[personindex]
    };

    getPerson.title = event.target.value;

    const PersonsData = [...this.state.PersonsData];

    PersonsData[personindex] = getPerson;

    this.setState({
      PersonsData: PersonsData
    });
    console.log(getPerson.name);
  };

  render() {
    return (
      <div className="Persons">
        <h2>Persons App</h2>
        {this.state.PersonsData.map((person, index) => (
          <Person
            person={person}
            clickEdit={() => this.editMode(index)}
            clickCross={() => this.cancle()}
            clickCheck={() => this.editMode(index)}
            clickDelete={() => this.deletePerson(index)}
            updateName={event => this.updateName(event, index)}
            updateAge={event => this.updateAge(event, index)}
            updateTitle={event => this.updateTitle(event, index)}
          />
        ))}
      </div>
    );
  }
}

export default Persons;
