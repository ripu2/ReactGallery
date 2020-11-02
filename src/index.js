import React from "react"
import ReactDOM from "react-dom"
import Unsplash from "./api/unSplash"
import ImageList from "./components/ImageList"
import SearchBar from "./components/SearchBar"

import "./components/styles/app.css"
class App extends React.Component{
    state = {images : [] }  ;

    onSearchSubmit = async (term)=>{
        try {
           const response = await Unsplash.get(`/search/photos`,{
            params : {
                query : term
            },                        
        })
        this.setState({images : response.data.results});     
        
        } catch (error) {
            console.log(error)  
        }
    }
    render (){
        return (
            
            <div style={{marginTop : '1em'}}>   
                
                <div  className = "ui container" >
                    <SearchBar onSubmit={this.onSearchSubmit}>

                    </SearchBar>
                   <ImageList images = {this.state.images}/>
                    
                 </div>     
                        
               
            </div>
            
        )
    }
}
ReactDOM.render(<App />,document.querySelector("#root"))