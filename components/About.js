import React from "react"
import UserClass from "./User"





class About extends React.Component {
   constructor(props){
    super(props)
    console.log("parent constructor")

   }
   componentDidMount(){
    console.log("parent compuntDidMount")

   }

    render(){
        console.log("parent render")
        return ( 
                  <div > 
   <h1>About</h1>
         <h2>This is my about page </h2>
           
            <UserClass name={"ashik class component"} location={"Alappy"} contact={"@yagoo"}/>
       

            
                </div>
               )
    }
}



export default About