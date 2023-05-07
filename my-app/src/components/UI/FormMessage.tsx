import React, { useState, useCallback, useEffect } from 'react';

const FormMessage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isAdding, setIsAdding] = useState(false);
  const [error, setError] = useState(false);
  const [isValidatedEmail, setIsValidatedEmail] = useState(false);
  const [isValidatedName, setIsValidatedName] = useState(false);
  const [isEntered, setisEntered] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsAdding(true);
    setError(false);
    try {
      const newPost = {
        name: name,
        email: email,
        message: message,
      };
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newPost),
      };
      const response = await fetch(
        'https://portfolio-d3c60-default-rtdb.europe-west1.firebasedatabase.app/post.json',
        requestOptions
      );
      const data = await response.json();
      setEmail('');
      setName('');
      setMessage('');
      setIsAdding(false);
      setisEntered(false);
      setisEntered(false);
    } catch (e) {
      setError(true);
    }
  };

  const handleNameChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setName(e.target.value);
      setisEntered(true);
    },
    []
  );

  const handleEmailChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(e.target.value);
      setisEntered(true);
    },
    []
  );

  const handleMessageChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const maxLength = 500;
      if (e.target.value.length <= maxLength) {
        setMessage(e.target.value);
      }
    },
    []
  );

  useEffect(() => {
    const regexEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]{2,}$/;
    if (isEntered && email.match(regexEmail)) {
      setIsValidatedEmail(true);
    } else {
      setIsValidatedEmail(false);
    }
  }, [email, isEntered]);

  useEffect(() => {
    const regexName = /^[a-zA-Z\s]+$/;
    if (isEntered && name.match(regexName)) {
      setIsValidatedName(true);
    } else {
      setIsValidatedName(false);
    }
  }, [name, isEntered]);

  const validated = `${
    isEntered || isEntered ? `border-green-500 border-2` : ``
  }`;
  const notValidated = `${
    isEntered || isEntered ? `border-red-500 border-2` : ``
  }`;

  return (
    <form onSubmit={handleSubmit} className="mt-2 mx-auto max-w-md">
      <label className="block mb-2 font-bold" htmlFor="name">
        Name:
      </label>
      <input
        className={`${
          isValidatedName ? validated : notValidated
        } w-full px-3 py-2 mb-4 leading-tight border-2 rounded shadow appearance-none focus:outline-none focus:shadow-outline`}
        id="name"
        type="text"
        placeholder="Enter your name"
        name="name"
        value={name}
        onChange={handleNameChange}
      />
      <label className="block mb-2 font-bold" htmlFor="email">
        Email:
      </label>
      <input
        className={`${
          isValidatedEmail ? validated : notValidated
        } w-full px-3 py-2 mb-4 leading-tight border-2 rounded shadow appearance-none focus:outline-none focus:shadow-outline`}
        id="email"
        type="email"
        placeholder="Enter your email address"
        name="email"
        value={email}
        onChange={handleEmailChange}
      />
      <label className="block mb-2 font-bold" htmlFor="message">
        Message:
      </label>
      <textarea
        className="w-full px-3 py-2 mb-4 leading-tight border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
        id="message"
        rows={5}
        placeholder="Enter your message. Max 500 characters."
        value={message}
        onChange={handleMessageChange}
      ></textarea>
      <button
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="submit"
        disabled={!isValidatedEmail && !isValidatedName}
      >
        {isAdding ? 'Loading...' : 'Send Message'}
        {error && 'Oops! Something went wrong. Please try again later.'}
      </button>
    </form>
  );
};

export default FormMessage;
