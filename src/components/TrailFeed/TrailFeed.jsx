import React from 'react';
import { Card, Dimmer, Segment, Image } from 'semantic-ui-react'
import TrailCard from '../TrailCard/TrailCard';

export default function TrailFeed({trails, user, deleteTrail}){

    return (
    //    <div>THIS IS THE TRAIL FEED THAT WILL RENDER OUT EACH POST AS A CARD</div>
       <Card.Group itemsPerRow={1} stackable> 
       { trails.map((trail)=> {
           return (
               <TrailCard
               key={trail._id}
               trail = {trail} 
               user = {user}
               deleteTrail = {deleteTrail}
               />
           )
       })}
       </Card.Group>
    )
}