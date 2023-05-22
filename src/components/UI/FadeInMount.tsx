import React, { useEffect, useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';

type Props = {
    children: React.ReactNode
}

const FadeInOnMount = ({children}: Props) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const nodeRef = useRef<HTMLDivElement>(null);

  return (
    <CSSTransition
      classNames="fade"
      timeout={2000}
      nodeRef={nodeRef}
      in={mounted}
      unmountOnExit
      mountOnEnter
    >
      <div ref={nodeRef}>
        {children}
      </div>
    </CSSTransition>
  );
};

export default FadeInOnMount;
