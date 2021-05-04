import React, { useState, useEffect } from 'react';
//import the components we will need
import { profileCard } from './ProfileCard';

export const ProfileList = () => {
  // The initial state is an empty array
  const [user, setUsers] = useState([]);

  const getUsers = () => {
    // After the data comes back from the API, we
    //  use the setAnimals function to update state
    return getUsers().then(usersFromAPI => {
      setUsers(userFromAPI)
    });
  };

  const handleDeleteUser = id => {
    deleteAnimal(id)
      .then(() => getAllUsers().then(setUser));
  };

  // got the animals from the API on the component's first render
  useEffect(() => {
    getUsers();
  }, []);

  // Finally we use .map() to "loop over" the animals array to show a list of animal cards
  return (
    <div className="container-cards">
      {users.map(user=> <ProfileCard key={user.id} user={user} handleDeleteUser={handleDeleteUser} />)}
    </div>
  );
};