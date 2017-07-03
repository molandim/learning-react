import React from 'react';
import { classify } from './utils';
import Container from './container.jsx';

export default class Jumbotron extends React.Component{
    render(){
        const CSS_NAME = 'jumbotron';
        const props = Object.assign({}, this.props);
        props.className = classify(CSS_NAME, props.className);
        const containerFluid = props.containerFluid;
        delete props.containerFluid;
        const body = props.className.includes(`${CSS_NAME}-fluid`)?
        <Container fluid={containerFluid}>
            {props.children};
        </Container>:props.children;
        return <div {...props}>{body}</div>;
    }
}