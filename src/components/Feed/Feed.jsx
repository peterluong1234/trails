import React, { useState, useEffect }from 'react';
import PageHeader from '../Header/Header';
import TrailFeed from '../TrailFeed/TrailFeed';
import TrailCard from '../TrailCard/TrailCard';
import * as trailsApi from '../../utils/trailApi';
import { Grid } from "semantic-ui-react";

export default function Feed({ user, handleLogout }){  
    console.log('feed page is rendering')
    const [trails, setTrails] = useState([]);
    console.log(trailsApi);

    async function getTrails() {
        try {
            const data = await trailsApi.getAll();
            console.log(data, '<-this is data');
            setTrails([...data.trails]);
        } catch (err) {
            console.log(err.message, '<-error');
        }
    }
    async function deleteTrail(trailId) {
        try {
            const data = await trailsApi.deleteTrail(trailId);
            console.log(data, 'what were deleting')
            getTrails();
        } catch(err) {
            console.log(err);
        }
    }
    useEffect(() => {
        getTrails();
    }, []);

    return (
        <Grid centered>
            <Grid.Row>
                <Grid.Column>
                    <PageHeader handleLogout={handleLogout} user={user}/>
                </Grid.Column>        
            </Grid.Row>
            <Grid.Row>
                <Grid.Column style={{ maxWidth: 450 }}>
                <TrailFeed 
                    trails={trails}
                    user={user}
                    deleteTrail={deleteTrail}
                />
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}