import React, { useState } from 'react';

import SectionTitle from '../components/UI/SectionTitle';
import ContactMethod from '../components/UI/ContactMethod';

import MailImg from '../assets/Mail.svg';
import PhoneImg from '../assets/Phone.svg';
import LocationImg from '../assets/location.svg';

const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted!');
  };

  return (
    <div className="text-center p-6">
      <SectionTitle title="Contact Page" />
      <p>Do you have any questions? Please contact:</p>
      <div className="mt-6 flex flex-col md:flex-row md:flex-wrap gap-6 justify-center items-center">
        <ContactMethod
          img={MailImg}
          text="Email:"
          link="mailto:sebastian.laskowski15@gmail.com"
          info="sebastian.laskowski15@gmail.com"
        />
        <ContactMethod
          img={PhoneImg}
          text="Phone:"
          link="tel:697782857"
          info="697-782-857"
        />
        <ContactMethod
          img={LocationImg}
          text="Location:"
          link="https://goo.gl/maps/17jV5q1J2uQJ1bZPA?coh=178571&entry=tt"
          info="Radom, Poland"
        />
      </div>

      <form onSubmit={handleSubmit} className="mt-8 mx-auto max-w-md">
        <label className="block mb-2 font-bold text-green-500" htmlFor="name">
          Name:
        </label>
        <input
          className="w-full px-3 py-2 mb-4 leading-tight border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
          id="name"
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <label className="block mb-2 font-bold text-green-500" htmlFor="email">
          Email:
        </label>
        <input
          className="w-full px-3 py-2 mb-4 leading-tight border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
          id="email"
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <label
          className="block mb-2 font-bold text-green-500"
          htmlFor="message"
        >
          Message:
        </label>
        <textarea
          className="w-full px-3 py-2 mb-4 leading-tight border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
          id="message"
          rows={5}
          placeholder="Enter your message"
          value={message}
          onChange={e => setMessage(e.target.value)}
        ></textarea>
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          disabled
          type="submit"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactPage;
