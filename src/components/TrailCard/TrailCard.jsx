import React from 'react';
import { Card, Segment, Icon, Image, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

function TrailCard({trail, user, deleteTrail}) { 
    // console.log(user._id)
    // console.log(trail.user._id)
    let owner;
    // if(trail.user._id == user._id)

    const clickHandler = () => {
        deleteTrail(trail._id)
        // console.log(trail._id)
    }
  return (
    <Card key={trail._id} raised>
        <Card.Content textAlign="left">
            <Card.Header>
            {/* <Link to={`/${trail.user.username}`}> */}
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

            {/* </Link> */}
            <Card.Content extra textAlign={"right"}>
                {trail.user._id == user._id ? owner = true : owner = false }
                {owner ? <Icon 
                        color={'red'}
                        name={"delete"}
                        onClick={clickHandler} /> : console.log('not owner')}
            </Card.Content>
            </Card.Header>
            
        </Card.Content>

        <Image src={`${trail.photoUrl}`} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{trail.name}</Card.Header>
        <Card.Description><b>Start: </b>{trail.start}</Card.Description>
        <Card.Description><b>End: </b>{trail.end}</Card.Description>
        <Card.Description><b>Type: </b>{trail.type}</Card.Description>
      </Card.Content>
      
    </Card>

  );
}

export default TrailCard;