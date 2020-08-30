import React, { Component } from 'react'
import data from '../data';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button,Row,Col
  } from 'reactstrap';

export default class Product extends Component {
    render() {
        return (
            <div>
                <h2>สินค้า </h2>
                 <Row>
                     {                   
                    data.products.map(item => 
                        <Col md={4}> 
                            <Card>
                                <CardImg src={item.pic}/>
                                <CardBody>    
                               <CardTitle> {item.name}</CardTitle>
                               <CardSubtitle>ราคา{item.price}บาท</CardSubtitle> 
                                <CardSubtitle>จำนวน{item.stock}</CardSubtitle>
                        </CardBody>
                        </Card>
                        </Col>
                        )
                }
                </Row>
            </div>
        )
    }
}
