import React from 'react';
import PropTypes from 'prop-types';

import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const QUERY = gql`
  query users {
    users {
      firstName
      lastName,
      profileImageLink,
      videoLink
    }
  }
`;

const HeroAndFriends = () => (
  <Query query={QUERY}>
    {({ data, error, loading }) => {
      
      if (error) return '💩 Oops!';
      if (loading) return 'Patience young grasshopper...';

      return (
        <React.Fragment>
          <h1>User: {"Manish"}</h1>
          <h2>His/her friends:</h2>
          
          <ul>
            {data.users.map(friend => (
              friend.profileImageLink && 
             <li key={friend.lastName}>{friend.firstName}
              <img width= "200" height ="200" src={friend.profileImageLink}/>
              <video width= "200" height ="200" controls autoplay
              source src={friend.videoLink} />
             </li>
            ))}
          </ul>
        </React.Fragment>
      );
    }}
  </Query>
);
HeroAndFriends.propTypes = { episode: PropTypes.string };
// HeroAndFriends.defaultProps = { episode: 'NEWHOPE' };

const App = () => <HeroAndFriends/>;

export default App;