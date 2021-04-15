/* eslint-disable react-hooks/exhaustive-deps */
import {useState, useEffect} from 'react'
import utils from '../subscriptionsUtils'
import membersUtil from '../membersUtils';

import 'date-fns';

import {Link} from 'react-router-dom'


import React from 'react';



function SubsWatchedComp(props)
{
    const [members, setMembers] = useState([]);
    const [subs, setSubs] = useState([]);

    const [error, setError] = useState("");

    useEffect(async () =>
    {
      const fetchPrivateDate = async () => {
        const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        };

      try{
        let resp = await utils.getSubscriptions(config);
        setSubs(resp.data);

        let resp2 = await membersUtil.getMembers(config);
        setMembers(resp2.data);
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
     <div className ="border border-3 rounded">
        <h5>Subscriptions Watched:</h5> 

   

        <ul>
        {
        
        subs.map(item =>
                {
                  
                    if(item.movieid === props.movieData)
                    {
                        return (
                          
                         <li key={item._id}>  Member: {members.map(x =>
                          { 
                              if(x._id === item.memberid)
                            {
                              return ( <Link key={x._id} to= {"/allMembers/" + x.name} >{x.name}</Link> )
                            }
                            else{
                              return null
                            }
                            
                            
                          })} , Date : {item.date.split("T00:00:00.000Z")}</li>
                     )
                    }
                    else{
                        return null
                    }
                     
                }
               

           )

        }
        </ul>
    
        <br/>


  </div>
  );
}

export default SubsWatchedComp;