import React from 'react';


function Example() {

  

  let input = 'hey there how are you doing today i am doing quite well';

  const sentence = input.split("");
  let curr = 0;


  return (
    <div >
      {sentence.slice(curr, curr + 15)}
    </div>
  );
}

export default Example;