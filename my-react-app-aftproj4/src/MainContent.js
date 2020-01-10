import React, {Component} from 'react'
import {data} from './data'

class MainContent extends Component{
    constructor(){
        super()
        this.state = {
            data: data,
            index: 0,
        }
    }
    previous = ()=>{
        this.setState({index: this.state.index -1})
        if(this.state.index === 0){
            this.setState({index: 24})
        }
    }

    next = ()=> {
        this.setState({index: this.state.index + 1})
        if(this.state.index === 24){
            this.setState({index: 0})
        }
    }

    render(){
        console.log(this.state.index)
        return(
          <div className='thebox'>
           <div className='main-content'>
               <div className='left'>

               <p className='name'>{this.state.data[this.state.index].name.first} {this.state.data[this.state.index].name.last}</p>
               <p>From: {this.state.data[this.state.index].city}, {this.state.data[this.state.index].country}</p>
               <p>Job Title: {this.state.data[this.state.index].title}</p>
               <p>Employer: {this.state.data[this.state.index].employer}</p>
               <ul className='movie' >Favorite Movies:
                   <div className='list'>
                       <ul>1. {this.state.data[this.state.index].favoriteMovies[0]}</ul>
                       <ul>2. {this.state.data[this.state.index].favoriteMovies[1]}</ul>
                       <ul>3. {this.state.data[this.state.index].favoriteMovies[2]}</ul>
                   </div>
               </ul>
               </div>
               <div className='right'>
               <p>{this.state.data[this.state.index].id}/25</p>
               </div>
           </div>
           <nav className='navbar'>
             <button className='next' onClick={this.previous} > {`<Previous`} </button>
             <div className='midbuttons'>
               <button className='butt'>Edit</button>
               <button className='butt'>Delete</button>
               <button className='butt'>Now</button>
            </div>
            <button className='next' onClick={this.next}>Next></button>
           </nav>
          </div>
        )
    }
}

export default MainContent