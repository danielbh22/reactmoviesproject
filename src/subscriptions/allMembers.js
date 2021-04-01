import {useState, useEffect} from 'react'
import utils from '../membersUtils'
import MemberComp from './member'

import React from 'react';

function AllMembersComp()
{

    const [members, setMembers] = useState([]);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(async () =>
    {
      let resp = await utils.getMembers();
      setMembers(resp.data);
    }, [])

    return(
     <div className="App">
        <h3>Members List</h3> 
 
        {
            members.map(item =>
            {
                return(
                <div>
                    
                <MemberComp key={item.id} memberData={item} /><br/>
                </div>)
            })
        }
        <br/>


  </div>
  );
}

export default AllMembersComp;