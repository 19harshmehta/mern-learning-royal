import React from 'react'
import {useFetchUserData} from './UserService'

export const UserQuery = () => {

    const { isLoading , isError , data , refetch} = useFetchUserData();
    console.log("Loading",isLoading);
    console.log("isError",isError);
    console.log("data",data);


  return (
    <div>
        <h1>Query</h1>
        {isLoading && <div>Loading...</div>}
        <button onClick={refetch}>Refetch</button>
    </div>
  )
}
