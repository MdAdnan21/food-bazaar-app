import User from "../components/User";
import UserClass from "../components/UserClass";
import { Component } from "react";

class About extends Component {
  constructor(props){
    super(props);
    // console.log('Constructor did called')
  }
  componentDidMount(){
    // console.log('Parent Componet Did mount')
  }
  render(){
      // console.log('Render called')
      return (
        <div className="mt-[3%] mb-[5%] mx-[5%]">
          <h1>Hear About us!</h1>
          <div>
            LoggedIn User
          </div>
          <UserClass
            name={'Deepanshu Sahu (class)'}
            location={'Amla'}
            contact={'dee777'}
          />
        </div>
      )
    }
}

export default About;