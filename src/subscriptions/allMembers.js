import {useState, useEffect} from 'react'
import utils from '../membersUtils'
import MemberComp from './member'

import React from 'react';

function AllMembersComp()
{

    const [members, setMembers] = useState([]);
    const [error, setError] = useState("");


    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(async () =>
    {
      const fetchPrivateDate = async () => {
        const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        };

        try 
        {
          let resp = await utils.getMembers(config);
          setMembers(resp.data);
        }
        catch (error)
        {
          localStorage.removeItem("authToken");
          setError("You are not authorized please login");
        }
     };
      fetchPrivateDate();
    }, [])

    return error ? (
      <span className="error-message">{error}</span>
    ) :(
     <div className="App">
        <h3>Members List</h3> 
 
        {
            members.map(item =>
            {
                return(
                <div key={item._id}>
                    
                <MemberComp key={item._id} memberData={item} /><br/>
                </div>)
            })
        }
        <br/>


  </div>
  );
}

export default AllMembersComp;