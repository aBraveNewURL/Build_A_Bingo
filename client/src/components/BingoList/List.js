import React, { useState } from "react";
import Auth from '../../utils/auth';
import { useQuery, useMutation } from '@apollo/client';
import { GET_LIST } from '../../utils/queries';
import { CREATE_CARD } from '../../utils/mutations';
import { Link } from 'react-router-dom';


const List = (props) => {
  let listId = window.location.pathname.split('/').pop();
  const user = Auth.getProfile();
  const userId = user.data._id;
  const [createCard] = useMutation(CREATE_CARD)
  const { data } = useQuery(GET_LIST, {
    variables: { listId },
  });
  
  async function handleClick(e) {
    e.preventDefault();
    const user = e.target.dataset.userid;
    const parentList = e.target.dataset.listid

    const newCard = await createCard({
      variables: {
        ownerId: user,
        parentListId: parentList
      }
    });
  } 

  
  if (!data) {
      return <h3>No bingo list data. Create one to get started!</h3>;
    } 
    const {name, list, owner, _id } = data.list;
    
  return (
      <div className="container flex flex-col flex-wrap">
          <div>
              <h2 className='p-4 font-bold'>{name}</h2>
          </div>
      <ol>
          {list &&
            list.map((item, index) => (
                <li key={item}>
                <p dataindex={index}>{item}</p>
             </li>
            ))
            }
      </ol>
        {Auth.loggedIn() ? <button data-userid={userId} data-listid={_id} onClick={handleClick}>Create a Card</button> : ''}
    </div>
    
  );
};

export default List;
