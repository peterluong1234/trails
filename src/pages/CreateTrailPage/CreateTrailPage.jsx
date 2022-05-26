import React, { useState, useEffect } from 'react'
import PageHeader from '../../components/Header/Header'
import AddTrailForm from '../../components/AddTrailForm/AddTrailForm' 
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Loading from "../../components/Loader/Loader";
import * as trailApi from "../../utils/trailApi"

export default function CreateTrailPage({user, handleLogout}){
    const [trail, setTrail] = useState({
        name: "",
        start: "",
        end: "",
        type: "",
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("")
    
    async function handleAddTrail(trail) {

      const data = await trailApi.create(trail);
      console.log(data);
        try {
            // setLoading(true);
            const data = await trailApi.create(trail);
            console.log(data);
        } catch (err) {
            console.log(err);
            setError(err.message)
        }
    }

    if (error) {
        return (
          <>
            <PageHeader handleLogout={handleLogout} user={user}/>
            <ErrorMessage error={error} />;
          </>
        );
      }
    
      // if (loading) {
      //   return (
      //     <>
      //       <PageHeader handleLogout={handleLogout} user={user}/>
      //       <Loading />
      //     </>
      //   );
      // } 
    

    return (
        <>
        <PageHeader handleLogout={handleLogout} user={user}/>
        <AddTrailForm handleAddTrail={handleAddTrail}/>

        </>
    )
}