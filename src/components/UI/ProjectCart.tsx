import { lazy, Suspense } from 'react';
import ChainImg from './../../assets/attach.svg';
import GithubImg from './../../assets/github-mark-white.svg';
import Button from '../elements/Button';
import LoadingAnim from '../elements/LoadingAnim';

const LazyImage = lazy(() => import('../elements/Img'));

type Props = {
  title: string;
  description: string;
  imagePath: string;
  altImage: string;
  linkCode: string;
  linkLivePreview: string;
  techStack: string[];
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
    <li className="basis-2/5 rounded-2xl bg-neutral-600 shadow-2xl flex flex-col justify-between hover:scale-105 transition-all">
      <div className="h-[15rem] overflow-hidden">
        <a href={linkLivePreview} className="flex items-center justify-center">
          <Suspense fallback={<LoadingAnim/>}>
            <LazyImage
              src={imagePath}
              alt={altImage}
              style="rounded-t-2xl h-100"
            />
          </Suspense>
        </a>
      </div>
      <h3 className="text-bold text-xl pt-4">{title}</h3>
      <p className="text-sm text-justify p-4">{description}</p>
      <div className="p-2  text-sm flex justify-center gap-2 flex-wrap">
        {techStack.map(tech => (
          <Button size='medium' border={true} key={tech}>
            {tech}
          </Button>
        ))}
      </div>
      <ul className="flex flex-row [&>li]:basis-1/2 [&>li>a]:underline p-4 text-sm gap-6 ">
        <li className="flex items-center justify-center">
          <a
            href={linkCode}
            className="flex items-center justify-center underline"
          >
            <img src={GithubImg} className="w-5 h-5 mr-2" alt="GitHub icon" />
            View Code
          </a>
        </li>
        <li className="flex items-center justify-center">
          <a
            href={linkLivePreview}
            className="flex items-center justify-center underline"
          >
            <img src={ChainImg} className="w-6 h-6 mr-2" alt="Chain icon" />
            Live Preview
          </a>
        </li>
      </ul>
    </li>
  );
};

export default ProjectCart;
