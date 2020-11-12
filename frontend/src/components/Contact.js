import React, { Fragment, useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [subject, setSubject] = useState('');
  const [email, setEmail] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = async () => {
    try {
      await axios.post(`/email`, { subject, email, body });
    } catch (err) {}
  };
  return (
    <Fragment>
      <form className='messagebox' onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Subject'
          onChange={(e) => setSubject(e.target.value)}
        />
        <input
          type='text'
          placeholder='Email'
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          placeholder='Content'
          onChange={(e) => setBody(e.target.value)}
        />
        <button type='submit'>Submit</button>
      </form>
    </Fragment>
  );
};

export default Contact;
