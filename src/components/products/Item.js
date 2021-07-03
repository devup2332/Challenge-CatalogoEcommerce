import React from 'react';
import {Card,Icon,Image} from 'semantic-ui-react';
import ItemCount from '../contador/itemCount'



const Item = ({item}) => {
   return (
      <Card style={{height: 600}} key={item.id}>
         <Image style={{ height: 300 }}src={item.pictureUrl}/>
      <Card.Content>
         <Card.Header>{item.title}</Card.Header>
         <Card.Description>{item.description}</Card.Description>
      </Card.Content>
      <Card.Content  >
         <Icon name='dollar sign' color='green'/>
         {item.price}
      </Card.Content>
         <ItemCount maxStock={10}/>
      </Card>
   )
}

export default Item
