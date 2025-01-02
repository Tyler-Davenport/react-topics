/* eslint-disable no-nested-ternary */
/* eslint-disable react/prop-types */
import React from 'react';
// import PropTypes from 'prop-types';

export default function Joker({ joke, btnText }) {
    return (
      <div>
        {btnText === 'Get Punchline' ? (
          <p>{joke.punchline}</p>
        ) : joke.setup ? (
          <p>{joke.setup}</p>
        ) : (
          <p>No joke available.</p>
        )}
      </div>
    );
  }