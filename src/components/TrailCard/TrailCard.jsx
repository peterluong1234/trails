import React from 'react';
import { Card, Icon, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";

function TrailCard({trail, user}) { 

  return (
    <Card key={trail._id} raised>
        <Card.Content textAlign="left">
            <Card.Header>
            <Link to={`/${trail.user.username}`}>
                <Image 
                    size="large"
                    avatar
                    src={
                        trail.user.photoUrl
                        ? trail.user.photoUrl
                        : "https://react.semantic-ui.com/images/wireframe/square-image.png"
                    }
                />
                {trail.user.username} 
            </Link>
            <h3> {trail.name} </h3>
            </Card.Header>
        </Card.Content>

        <Image src={`${trail.photoUrl}`} wrapped ui={false} />
      <Card.Content>
        <Card.Description>{trail.start}</Card.Description>
      </Card.Content>
    </Card>

  );
}

export default TrailCard;