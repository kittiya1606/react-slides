import React, { Component } from 'react'
import { Button, Jumbotron } from 'reactstrap';
import Slides from './slides';

export default class Home extends Component {
    render() {
        return (
            <div>
                <Slides/>
                <Jumbotron>
                    ยินดีเข้าสู่เว็บไซต์ <br/>
                    <Button>เข้าสู่ระบบ</Button>
                    </Jumbotron> 
                
                
            </div>
        )
    }
}
