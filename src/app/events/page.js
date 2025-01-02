/* eslint-disable no-unused-vars */
/* eslint-disable lines-around-directive */
/* eslint-disable import/order */
'use client';

import React, { useState } from 'react';
import getJokes from '../../api/jokesData';
import { Button } from 'react-bootstrap';
import Joker from '../../components/jokeContainer';

export default function Events() {
  const [eventText, setEventText] = useState('Joke Generator');
  const [btnText, setBtnText] = useState('Get A Joke');
  const [joke, setJoke] = useState({});

  const setButton = (text) => {
    setBtnText(text);
  };

  const getAJoke = () => {
    if (btnText === 'Get A Joke' || btnText === 'Get A New Joke') {
      getJokes().then((obj) => {
        setJoke({
          setup: obj.setup,
          punchline: obj.delivery,
        });
        setButton('Get Punchline');
      });
    } else if (btnText === 'Get Punchline') {
      setButton('Get A New Joke');
    }
  };

  const handleClick = () => {
    setEventText();
  };

  return (
    <>
      <h1>Events</h1>
      <h3 className="watch-event">{eventText || 'Welcome to events!'}</h3>

      <Joker joke={joke} btnText={btnText} />
      <Button className="btn btn-success" type="button" onClick={getAJoke}>
        {btnText}
      </Button>
    </>
  );
}