import { PersonCardWrapper, PersonImage } from "./styles";

interface IPersonCard {
  name: string;
  onClick?: () => void;
}

export const PersonCard: React.FC<IPersonCard> = ({ name, onClick }) => {
  return (
    <PersonCardWrapper onClick={onClick}>
      <PersonImage src="/user.png" />
      <p>{name}</p>
    </PersonCardWrapper>
  );
};
