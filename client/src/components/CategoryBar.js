import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { Context } from '../index'
import ListGroup from 'react-bootstrap/ListGroup';

const CategoryBar = observer(() => {

    const {works} = useContext(Context)
    return (
        
        <ListGroup>
            {works.categories.map(category => 
             <ListGroup.Item 
                
                active={category.id === works.selectedCategory.id}
                onClick={() => works.setSelectedCategory(category)}
                border={category.id === works.selectedCategory.id ? 'danger' : 'light'}
                key ={category.id}>
                    {category.name}


             </ListGroup.Item>
            )}

        </ListGroup>
        
    )
})

export default CategoryBar 

