import React, { useState } from 'react';
import { StyledPlaygroundPage, StyledUsersList, StyledNavLink } from './styled/PlaygroundPage.styled';
import { UsersState } from '../../state/usersState';
import { TiTick } from 'react-icons/ti';
import { ImCross } from 'react-icons/im';
import { RiDeleteBin5Line, RiEdit2Line } from 'react-icons/ri';
import { IoChevronBackCircle } from 'react-icons/io5';
import { theme } from '../../styles/theme';
import { Button } from '../../components/Button';
import { getAllUsers, deleteUserById } from '../../services/usersService';
import { Modal } from '../../components/Modal';

export const PlaygroundPage = () => {
  const { users, setUsers } = UsersState();
  const [isOpen, setIsOpen] = useState(false);

  const handleUpdate = async (id: number) => {
    console.log('handling update');
  };

  const handleDelete = async (id: number) => {
    await deleteUserById(id);
    const res = await getAllUsers();
    setUsers(res);
  };

  return (
    <StyledPlaygroundPage>
      <StyledNavLink to={'/'}>
        <IoChevronBackCircle size={30} color={theme.color.primary} />
      </StyledNavLink>
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
                <th>{user.newsletter ? <TiTick color={theme.color.green} /> : <ImCross size={8} color={theme.color.error} />}</th>
                <th>
                  <Button type='button' handleClick={() => handleUpdate(user.id)}>
                    <RiEdit2Line />
                  </Button>
                  <Button type='button' handleClick={() => handleDelete(user.id)}>
                    <RiDeleteBin5Line />
                  </Button>
                </th>
              </tr>
            );
          })}
        </tbody>
      </StyledUsersList>
      <Modal isOpen={isOpen} handleOpen={setIsOpen} text='Please write a new email address' />
    </StyledPlaygroundPage>
  );
};
