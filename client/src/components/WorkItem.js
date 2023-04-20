
import React from 'react';
import {Card, Col} from "react-bootstrap";
import Image from "react-bootstrap/Image";
import {useNavigate} from "react-router-dom"
import { WORK_ROUTE } from '../utils/consts';


const WorkItem = ({works}) => {
    const navigate = useNavigate()
    return (
        <Col md={10} onClick={() => navigate(WORK_ROUTE + '/' + works.id)}>
             <Card style={{width: 150, cursor: 'pointer'}} border={"light"}>
                <Image width={150} height={150} src={works.img}/>
                <div className="text-black-50"> 
                    <div>Developers...</div>
                    <div>
                        <div>{works.salary}</div>
                    </div>
                
                </div>
                <div>{works.name}</div>
            </Card>
        </Col>
    );
};

export default WorkItem;