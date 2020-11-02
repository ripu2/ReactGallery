import React from 'react'
class Header extends React.Component{   
    onClickInput = ()=>{
        console.log("click")
       
    }
    render(){
        return (
            <div Name="ui three item menu">
                <a Name="item" onClick={this.onClickInput} href="/">Editorials</a>
                <a Name="active item" onClick={this.onClickInput} href="/">Reviews</a>
                <a Name="item" onClick={this.onClickInput} href="/" >Upcoming Events</a>
            </div>
        )
    }
}

export default Header