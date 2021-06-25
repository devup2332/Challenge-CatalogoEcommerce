import React from 'react';
import {Card,Icon,Image} from 'semantic-ui-react'



const Item = ({item}) => {
   return (
      <Card>
      <Image src={item.pictureUrl} wrapped ui={true} size='medium'/>
      <Card.Content>
         <Card.Header>{item.title}</Card.Header>
         <Card.Description>{item.description}</Card.Description>
      </Card.Content>
      <Card.Content extra>
         <Icon name='dollar sign' />
            {item.price}
      </Card.Content>
      </Card>
   )
}

export default Item
