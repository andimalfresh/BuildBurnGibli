import React from "react";
import { Message } from "semantic-ui-react";

const MovieCard = props => {
  return (
    <Message onClick={props.handleOtherClick}>
      <Message.Header>{props.movieData.title}</Message.Header>
      <Message.List>
        <Message.Item>{"Director: " + props.movieData.director}</Message.Item>
        <Message.Item>{props.movieData.description}</Message.Item>
      </Message.List>
    </Message>
  );
};

export default MovieCard;
