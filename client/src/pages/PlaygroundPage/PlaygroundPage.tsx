import React from 'react';
import { StyledPlaygroundPage } from './styled/PlaygroundPage.styled';
import { Button } from '../../components/Button';

export const PlaygroundPage = () => {
  return (
    <StyledPlaygroundPage>
      <div>
        <Button type='button' primary>
          Show me users
        </Button>
      </div>
    </StyledPlaygroundPage>
  );
};
