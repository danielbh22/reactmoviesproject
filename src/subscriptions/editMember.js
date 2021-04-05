import {useEffect, useState} from 'react'
import utils from '../membersUtils';

import {Link} from 'react-router-dom'
import { useHistory } from "react-router-dom";



import React from 'react';

function EditMemberComp(props)
{
    const history = useHistory()

    const [member,setMember] = useState({});
    const [id,setId] = useState("");

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(async () =>
    {
      setId(props.match.params.id)

      let resp = await utils.getMember(id);
      setMember(resp.data);
    }, [id, props.match.params.id])

   
    
    const update = async (e) =>
    {
      e.preventDefault();
    
      let  resp  = await utils.updateMember(id,member);
      alert(resp.data);
      history.push("/allMembers");
    
    }

    

    return (<div>
        <h3>Edit Member</h3>{member.name}
        
        <form onSubmit={e => update(e)}> 
            Name: <input type="text" value={member.name} onChange={e => setMember({...member, name : e.target.value } ) } /> <br/>
            Email: <input type="text" value={member.email} onChange={e => setMember({...member, email : e.target.value } ) }/> <br/>
            City: <input type="text" value={member.city} onChange={e => setMember({...member, city : e.target.value } ) }/> <br/>
            <input type="submit" value="Update" />
            <Link to= "/allMembers" >Cancel</Link>

        </form>


    </div>)
}

export default EditMemberComp