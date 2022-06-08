import React from 'react';
import { Card, Icon, Image, Button } from 'semantic-ui-react';


function MovieCard({movie}) {
  return (
    <Card>
    <Image src={movie.cover} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{movie.title}</Card.Header>
      <Card.Meta>
        <span className='date'>Unknown</span>
      </Card.Meta>
      <Card.Description>
            {movie.desc}
            <br/>
            <br/>
            <Button > 
          View
      </Button>
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        Unknown
      </a>
      
    </Card.Content>
  </Card>
  )
}


export default MovieCard;


