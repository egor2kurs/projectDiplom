
import React,  {useState} from 'react'
import { Container, Button } from 'react-bootstrap'
import CreatedCategory from '../components/modals/CreatedCategory'
import CreatedWork from '../components/modals/CreatedWork'

function Admin() {



    const [categoryVisible, setCategoryVisible] = useState(false)
    const [workVisible, setWorkVisible] = useState(false)

    return (


        
        <Container lassName="d-flex flex-column">

            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setCategoryVisible(true)}
               
            >
                Добавить категорию
            </Button>
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setWorkVisible(true)}
                
            >
                Добавить работу
            </Button>
            <CreatedWork show ={workVisible} onHide={()=> setWorkVisible(false) }/>
           <CreatedCategory show ={categoryVisible} onHide={()=> setCategoryVisible(false)}/> // с кнопками что-то
           
        </Container>
    )
}

export default Admin
