import React, { useState, useEffect } from 'react'
import PageHeader from '../../components/Header/Header'
import AddTrailForm from '../../components/AddTrailForm/AddTrailForm' 
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

export default function CreateTrailPage({user, handleLogout}){
    const [trail, setTrail] = useState({});
    const [error, setError] = useState("")
    
    if (error) {
        return (
          <>
            <PageHeader handleLogout={handleLogout} user={user}/>
            <ErrorMessage error={error} />;
          </>
        );
      }
    
      if (loading) {
        return (
          <>
            <PageHeader handleLogout={handleLogout} user={user}/>
            <Loading />
          </>
        );
      } 
    

    return (
        <>
        <PageHeader handleLogout={handleLogout} user={user}/>
        <AddTrailForm />

        </>
    )
}