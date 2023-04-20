import React from 'react';
import {Container, Col, Image, Row, Card, Button} from "react-bootstrap";
//import bigStar from '../assets/bigStar.png'
//import {useParams} from 'react-router-dom'
//import {fetchOneDevice} from "../http/deviceAPI";

const WorkPage = () => {
    //const [device, setDevice] = useState({info: []})
    //const {id} = useParams()
    //useEffect(() => {
      //  fetchOneDevice(id).then(data => setDevice(data))
    //}, [])
    const work = {id:1, name:'Wed-developer', salary: 2000, img: "https://thumbs.dreamstime.com/b/%D0%BF%D1%83%D1%81%D1%82%D0%B0%D1%8F-frame-%D1%84%D0%BE%D1%82%D0%BE%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D0%B8-%D0%BD%D0%B0-%D0%BF%D1%80%D0%BE%D0%B7%D1%80%D0%B0%D1%87%D0%BD%D0%BE%D0%BC-%D1%84%D0%BE%D0%BD%D0%B5-%D1%80%D0%B0%D0%BC%D0%BA%D0%B0-%D0%B4%D0%BB%D1%8F-%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D0%B0-%D0%B8%D0%BB%D0%BB%D1%8E%D1%81%D1%82%D1%80%D0%B0%D1%86%D0%B8%D1%8F-198209029.jpg"}
    const description =[
        {id:1, title: 'Обязанности', description: 'Обслуживание техники,'},
        {id:1, title: 'Требования:', description: 'ghlhjkljhgjkljhkkljhk'},
        {id:1, title: 'Условия:', description: 'njhjklkjhgjhkkljh'},
        
    ]
    return (
    
        <Container className="mt-3">
            <Row>
            <Col>
                <Image width = {300} height={300} src={work.img}/>
            </Col>
            <Col>
                  {/* <Row><h2>{work.name}</h2></Row> */}
            </Col>

            <Col>
                <Card
                         className="d-flex flex-column align-items-center justify-content-around"
                         style={{width: 900, height: 300, fontSize: 32, border: '5px solid lightgray'}}
                
                >
                    <Row>
                    <h2>{work.name}</h2>

                     </Row>
                    <h3>от: {work.salary}</h3>
                    <Button>Добавить в избранное</Button>
                </Card>
            
            </Col>
            </Row>

            <Row className='d-flex flex-column m2'>
                <h2>Обязанности</h2>
                {description.map(info =>
                    <Row key={info.id}>
                        {info.title}: {info.description}
                    </Row>
                    
                    )}

            </Row>
        </Container>
    );
};

export default WorkPage;