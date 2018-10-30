import React from "react";
import { Card } from "semantic-ui-react";

const CharacterCard = props => {
  return props.data.map(character => {
    return (
      <Card
        onClick={() => props.handleClick(character.films[0])}
        key={character.id}
      >
        <Card.Content header={"Name: " + character.name} />
        <Card.Content description={"Age: " + character.age} />
        <Card.Content description={"Hair Color: " + character.hair_color} />
        <Card.Content description={"Eye Color: " + character.eye_color} />
        <Card.Content description={"Gender: " + character.gender} />
        <Card.Content extra />
      </Card>
    );
  });
};

export default CharacterCard;
