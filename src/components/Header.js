import React from 'react';

// Our Alert function accepts on argument of `props`.
// This will be an object containing all of the props or properties that were passed to this component from the parent.
// We can expect to see "message" and "type" properties inside our "props" object.
function Header(props) {
  console.log(props);

  return (
    <div className="container-fluid header">
      <div class="center">
      <h1>James Uebele</h1>
      <h2>Full-Stack Web Developer Using the Latest Technologies</h2>
      </div>
    </div>
  );
}

export default Header;
