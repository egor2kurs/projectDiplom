/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */
import WorkItem from './WorkItem'
import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { Context } from '..'
import { Row } from 'react-bootstrap'

const  WorkList = observer(()=> {
    const {works} = useContext(Context)

    return(

        <Row className="d-flex">
                {works.works.map(works =>
                    <WorkItem key={works.id} works={works}/>
                    )}

        </Row>

    )


})
    

export default WorkList
