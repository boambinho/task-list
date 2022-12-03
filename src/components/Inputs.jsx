import React from 'react';

export default function Inputs({ eventSubmit }) {
  return (
    <form onSubmit={eventSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        minLength={3}
        required
      />
      <input type="date" name="date" placeholder="Date" required />
      <input
        type="text"
        name="description"
        placeholder="Description"
        notrequired
      />
      <input type="checkbox" name="state" placeholder="State" value="true" />
      <input type="submit" value="Submit" />
    </form>
  );
}