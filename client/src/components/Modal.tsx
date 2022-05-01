import React, { Dispatch, SetStateAction } from 'react';
import { createPortal } from 'react-dom';
import { StyledModal } from './styled/Modal.styled';
import { Button } from './Button';

interface IModal {
  text: string;
  isOpen: boolean;
  handleOpen: Dispatch<SetStateAction<boolean>>;
}

export const Modal = ({ text, isOpen, handleOpen }: IModal) => {
  return createPortal(
    <StyledModal>
      <div>
        <p>{text}</p>
        <div>
          <Button type='button'>Submit</Button>
          <Button type='button'>Cancel</Button>
        </div>
      </div>
    </StyledModal>,
    document.querySelector('#root') as Element,
  );
};
