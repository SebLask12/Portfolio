interface ContactProps {
  img: string;
  text: string;
  link: string;
  info: string;
}

const ContactMethod: React.FC<ContactProps> = ({ img, text, link, info }) => {
  return (
    <div className="flex flex-col sm:flex-row items-center">
      <div className="flex items-center justify-around bg-neutral-600 rounded-full w-16 h-16">
        <img src={img} className="h-6 w-auto" alt="Contact Icon" />
      </div>
      <div className="flex flex-row sm:flex-col gap-1 sm:gap-0 mt-4 sm:mt-0 text-left sm:ml-4 my-auto">
        {text}
        <a
          href={link}
          className="text-green-400 active:text-green-700 inline-block hover:scale-110 transition-all hover:bg-neutral-700 hover:rotate-3"
        >
          {info}
        </a>
      </div>
    </div>
  );
};

export default ContactMethod;
