import { lazy, Suspense } from 'react';

import ChainImg from './../../assets/chain.svg';
import GithubImg from './../../assets/github-black.png';

const LazyImage = lazy(async () => {
  const { default: module } = await import('./Img');
  return { default: module };
});

type Props = {
  title: string;
  description: string;
  imagePath: string;
  altImage: string;
  linkCode: string;
  linkLivePreview: string;
  techStack: string;
};

const ProjectCart: React.FC<Props> = ({
  title,
  description,
  imagePath,
  altImage,
  linkCode,
  linkLivePreview,
  techStack,
}) => {
  return (
    <li className=" basis-2/5 rounded-2xl bg-neutral-600 shadow-2xl relative">
      <div className="h-[15rem] overflow-hidden">
        <Suspense fallback={<div>Loading...</div>}>
          <LazyImage
            src={imagePath}
            alt={altImage}
            style=" rounded-t-2xl h-100"
          />
        </Suspense>
      </div>
      <h3 className="text-bold text-xl pt-4">{title}</h3>
      <p className=" text-sm text-justify p-4">{description}</p>
      <p className="p-4 text-sm">Tech Stack: {techStack}</p>
      <ul className="flex flex-row [&>li]:basis-1/2 [&>li>a]:underline p-4 text-sm gap-6">
        <li>
          <a href={linkCode} className="flex items-center justify-center">
            <img src={ChainImg} />
            &nbsp;View Code
          </a>
        </li>{' '}
        <li>
          <a
            href={linkLivePreview}
            className="flex items-center justify-center"
          >
            <img src={GithubImg} className="w-5 h-5" />
            &nbsp;Live Preview
          </a>
        </li>
      </ul>
    </li>
  );
};

export default ProjectCart;
