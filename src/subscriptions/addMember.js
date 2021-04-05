import {useState} from 'react'

import React from 'react';
import utils from '../membersUtils';

import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";




function AddMemberComp(props)
{
    const history = useHistory()
    const [member,setMember] = useState({});

    const save = async (e) =>
    {
      e.preventDefault();
    
      let  resp  = await utils.addMember(member);
      alert(resp.data);
      history.push("/allMembers");
    
    }

    return <div>
        <h3>Add New Member</h3>
        
        <form onSubmit={e => save(e)}>  
            Name: <input type="text" value={member.name} onChange={e => setMember({...member, name : e.target.value } ) } /> <br/>
            Email: <input type="text" value={member.email} onChange={e => setMember({...member, email : e.target.value } ) }/> <br/>
            City: <input type="text" value={member.city} onChange={e => setMember({...member, city : e.target.value } ) }/> <br/>
            <input type="submit" value="Save" />
            <Link to= "/allMembers" >Cancel</Link>
        </form>


    </div>
}

export default AddMemberComp