import React from 'react';
import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div className="not-found">
      <h2>Oops..</h2>
      <article>Sidan du försökte nå verkar inte finnas.</article>
        <br/>
      <Link to="/" >Tillbaka till startsidan</Link>
    </div>
  );
}
 
export default NotFound;