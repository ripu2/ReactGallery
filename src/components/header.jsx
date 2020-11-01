import React from 'react'
class Header extends React.Component{   
    onClickInput = ()=>{
        console.log("click")
       
    }
    render(){
        return (
            <div className="ui three item menu">
                <a className="item" onClick={this.onClickInput} href="/">Editorials</a>
                <a className="active item" onClick={this.onClickInput} href="/">Reviews</a>
                <a className="item" onClick={this.onClickInput} href="/" >Upcoming Events</a>
            </div>
        )
    }
}

export default Header