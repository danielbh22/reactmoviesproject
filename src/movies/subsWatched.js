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



    

    useEffect(async () =>
    {
      let resp = await utils.getSubscriptions();
      setSubs(resp.data);

      let resp2 = await membersUtil.getMembers();
      setMembers(resp2.data);



    }, [])




    return(
     <div className="App">
        <h3>Subscriptions Watched</h3> 

   

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
                              return ( <Link to= {"/allMembers/" + x.name} >{x.name}</Link> )
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