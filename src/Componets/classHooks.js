import React,{Component} from 'react'


class ClassCounter extends Component{
    constructor(props){
        super(props);
        this.state = {
            count: 0
        }
        this.handleClickEvent = this.handleClickEvent.bind(this);
    } 
    handleClickEvent(){
        this.setState({
            count: this.state.count + 1
        })
    }
    componentDidUpdate(){
        console.log("from componentDidUpdate");
    }
    render(){
        return(
            <div>
                <button onClick ={this.handleClickEvent}>Count {this.state.count}</button>
            </div>
        )
    }
}

export default ClassCounter;