import React, { Component } from 'react';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age: this.props.age
        }
    }
    render() {
        let clickHandler = ()=>{
            this.setState({age: {age}+1})
        }
        const { firstName, lastName, age, hairColor } = this.props;
        return <div>
            <h1>{firstName}, {lastName}</h1>
            <h3>Age: {this.state.age}</h3>
            <h3>Hair Color: {hairColor}</h3>
            <button onClick={ () => {this.setState({ age: this.state.age+1})}}>Birthday for {firstName} {lastName}</button>
        </div>
    }
}

export default Profile;