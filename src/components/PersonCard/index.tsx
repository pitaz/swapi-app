import React from 'react';
import { IPersonCard } from './interface';
import { PersonCardWrapper, PersonImage } from './styles';

export const PersonCard: React.FC<IPersonCard> = ({ name, onClick }) => (
  <PersonCardWrapper onClick={onClick}>
    <PersonImage src="/user.png" />
    <p>{name}</p>
  </PersonCardWrapper>
);
