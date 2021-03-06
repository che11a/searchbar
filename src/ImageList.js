import React from 'react';


const ImageList = (props) => {
  console.log(props.images);
  const images = props.images.map(image => {
    return <img key={image.id} src={image.urls.regular} />;
  });
  return <div className="ui small images">{images}</div>;
};

export default ImageList;
