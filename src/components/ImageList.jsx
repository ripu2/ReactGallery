import React from 'react'

import ImageCard  from "./imageCard"
import "./styles/app.css"
class ImageList extends React.Component {
    
    render(){
        
        const images = this.props.images.map(({description,id,urls})=>{
            return (<div class="ui special cards">
            <div class="card">
              <div class="blurring dimmable image">
                <div class="ui dimmer">
                  <div class="content">
                    <div class="center">
                      <div class="ui inverted button">Add Friend</div>
                    </div>
                  </div>
                </div>
                <img alt = {description} key={id} src={urls.regular}/>
              </div>
              <div class="content">
                <a class="header">Team Fu</a>
                <div class="meta">
                  <span class="date">Created in Sep 2014</span>
                </div>
              </div>
              <div class="extra content">
                <a>
                  <i class="users icon"></i>
                  2 Members
                </a>
              </div>
            </div>
        </div>
            )
        })  
                
        return( 
         <div  className="image-list">{images}</div> 
        
         );
        
        
        
    }
}

export default ImageList;