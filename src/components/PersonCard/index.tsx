import { PersonCardWrapper, PersonImage } from "./styles";

export const PersonCard: React.FC<IPersonCard> = ({ name, onClick }) => {
  return (
    <PersonCardWrapper onClick={onClick}>
      <PersonImage src="/user.png" />
      <p>{name}</p>
    </PersonCardWrapper>
  );
};
