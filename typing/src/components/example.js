import React from 'react';


function Example() {

  let input = 'hey there';

  const sentence = input.split("");

  return (
    <div>{sentence[0]}</div>
  );
}

export default Example;