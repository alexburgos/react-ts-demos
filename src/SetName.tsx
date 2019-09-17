import React, { useEffect, useState, FC, FormEvent } from 'react';

const SetName: FC = () => {
  const [name, setName] = useState('Alex');

  useEffect(() => {
    document.title = `Hello ${name}`;
  }, [name]);

  const handleChange = (e: FormEvent<HTMLInputElement>): void => {
    setName(e.currentTarget.value);
  };

  return (
    <input
      value={name}
      // onChange={e => setName(e.target.value)}
      onChange={handleChange}
    />
  );
};

export default SetName;
