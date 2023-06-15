import React, { useState, useCallback, useEffect } from 'react';
import useFetchMessage from '../../hooks/useFetchMessage';

const FormMessage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isAdding, setIsAdding] = useState(false);
  const [error, setError] = useState(false);
  const [isValidatedEmail, setIsValidatedEmail] = useState(false);
  const [isValidatedName, setIsValidatedName] = useState(false);
  const [isEntered, setIsEntered] = useState(false);

  const resetInputs = () => {
    setEmail('');
    setName('');
    setMessage('');
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsAdding(true);
    setError(false);

    const newPost = {
      name: name,
      email: email,
      message: message,
      time: Date().toString(),
    };
    const res = await useFetchMessage(newPost);
    if (!res) setError(true);

    resetInputs();
    setIsAdding(false);
    setIsEntered(false);
  };

  const handleNameChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setName(e.target.value);
      setIsEntered(true);
    },
    []
  );

  const handleEmailChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(e.target.value);
      setIsEntered(true);
    },
    []
  );

  const handleMessageChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const maxLength = 500;
      e.target.value.length <= maxLength && setMessage(e.target.value);
    },
    []
  );

  useEffect(() => {
    const regexEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]{2,}$/;
    const delay = setInterval(() => {
      isEntered && email.match(regexEmail)
        ? setIsValidatedEmail(true)
        : setIsValidatedEmail(false);
    }, 250);
    return () => clearInterval(delay);
  }, [email, isEntered]);

  useEffect(() => {
    const regexName = /^[a-zA-Z\s]+$/;
    const delay = setInterval(() => {
      isEntered && name.match(regexName)
        ? setIsValidatedName(true)
        : setIsValidatedName(false);
    }, 250);
    return () => clearInterval(delay);
  }, [name, isEntered]);

  const validated = isEntered ? 'border-green-500 border-2' : '';
  const notValidated = isEntered ? 'border-red-500 border-2' : '';

  return (
    <>
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
          disabled={!isValidatedEmail || !isValidatedName || isAdding}
        >
          {error
            ? 'Oops! Something went wrong. Please try again later.'
            : isAdding
            ? 'Loading...'
            : 'Send Message'}
        </button>
      </form>
    </>
  );
};

export default FormMessage;
