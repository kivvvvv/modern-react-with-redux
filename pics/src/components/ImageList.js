import React from "react";

export default function ImageList(props) {
  const images = props.images.map(({ description, id, urls }) => (
    <img src={urls.regular} alt={description} key={id} />
  ));

  return <div>{images}</div>;
}
