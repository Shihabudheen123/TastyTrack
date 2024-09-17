import React from "react";



// class component


class User extends React.Component {

    constructor(props){
        super(props)
        this.state = ({
         userInfo: {  name:"dummy",
            location:"Default",
}
        }
)

    }
    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/akshaymarch7")
        const json = await data.json()
        this.setState({
            userInfo:json,
        })

    }
    componentDidUpdate(){

    }
    componentWillUnmount(){

    }
    render(){

        const { name, location } = this.state.userInfo;
     
        return (
            
        <div className="user-card">
        

       <h2>Name : {name}</h2>
         <h3>Location : {location}</h3>
        <h4>Contact:@yahoo.com</h4>
       </div>
)


  }
}









export default User