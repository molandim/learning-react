/*import React from 'react';
import Button from './bootstrap/button.jsx';
import Jumbotron from './bootstrap/jumbotron.jsx';
import ReactCssTransitionGroup from 'react-addons-css-transition-group';

export default class App extends React.Component{
    constructor(props){
        super(props);
        console.log(this);
        this.state = {click:0};
        this.onClick = this.onClick.bind(this);
    }
    onClick(e){
        this.setState({click:this.state.click+1});
        console.log(this.state.click);
    }
    render(){
        return <ReactCssTransitionGroup transitionName='app' transitionAppear={true}
        transitionAppearTimeout={500}>
        <Jumbotron className="-fluid text-center" 
        style={{'backgroundImage':'url(img/bg.jpg)'}} containerFluid={true}>
            <h1>Bulding react user interfaces</h1>
            <p><Button onClick={this.onClick} className="-primary -lg" label="Get a Quote"></Button></p>
            <p><Button className="-danger" label={this.state.click}></Button></p>
        </Jumbotron></ReactCssTransitionGroup>;
    }
};*/