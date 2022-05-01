import React from 'react';
import { StyledPlaygroundPage, StyledUsersList } from './styled/PlaygroundPage.styled';
import { Button } from '../../components/Button';
import { UsersState } from '../../state/usersState';
import { TiTick } from 'react-icons/ti';
import { ImCross } from 'react-icons/im';

export const PlaygroundPage = () => {
  const { users, setUsers } = UsersState();

  return (
    <StyledPlaygroundPage>
      <div>
        <Button type='button' primary>
          Refresh list
        </Button>
        <StyledUsersList>
          <thead>
            <tr>
              <th>id</th>
              <th>Name</th>
              <th>Surname</th>
              <th>e-mail</th>
              <th>newsletter</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            {users?.map(user => {
              return (
                <tr key={user.id}>
                  <th>{user.id}</th>
                  <th>{user.firstName}</th>
                  <th>{user.lastName}</th>
                  <th>{user.email}</th>
                  <th>{user.newsletter ? <TiTick /> : <ImCross size={8} />}</th>
                </tr>
              );
            })}
          </tbody>
        </StyledUsersList>
      </div>
    </StyledPlaygroundPage>
  );
};
