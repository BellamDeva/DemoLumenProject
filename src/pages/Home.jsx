import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';

const Home = () => {
  const comp = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline();
      t1.from(["h1", "p"], {
        opacity: 0,
        y: "+=30",
        stagger: 0.2,
      });
    }, comp);

    return () => ctx.revert();
  }, []);

  return (
    <div style={{ padding: '2rem' }} ref={comp}>
      <h1>Welcome to the Home Page</h1>
      <p>This is the main landing page of our application. From here, you can navigate to other sections.</p>
      <p>This is the Demo Line that i have added to check my commit!!</p>
      <p>This is other line.</p>
    </div>
  );
};

export default Home;
