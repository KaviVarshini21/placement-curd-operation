import React from "react";
import image from "./assests/pt.jpg"
class Home extends React.Component{
    render(){
        return(
            
            <img src={image} style={{height:'100%',width:'100%'}}/>
        )
    }
}
export default Home;