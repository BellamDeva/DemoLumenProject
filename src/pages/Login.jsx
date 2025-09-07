import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';

// Helper function to generate stars
const generateStars = (numStars) => {
  const stars = [];
  for (let i = 0; i < numStars; i++) {
    stars.push({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 2 + 1}px`, // Stars of 1 to 3px
      delay: `${Math.random() * 5}` // Random delay for staggered blinking
    });
  }
  return stars;
};

const Login = () => {
  const root = useRef(null);
  const formRef = useRef(null);
  const buttonRef = useRef(null);
  const stars = generateStars(100);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // --- STARRY NIGHT ANIMATION ---
      stars.forEach(star => {
        gsap.to(`.star-${star.id}`, {
          opacity: 0.2,
          duration: `random(1, 3)`,
          ease: "power1.inOut",
          repeat: -1,
          yoyo: true,
          delay: star.delay
        });
      });

      // --- FORM ENTRANCE ANIMATION ---
      gsap.from(formRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
        delay: 0.5
      });

      // --- INPUT FOCUS ANIMATION ---
      const inputs = gsap.utils.toArray("input");
      inputs.forEach(input => {
        input.addEventListener('focus', () => {
          gsap.to(input, { borderColor: '#3b82f6', duration: 0.3 });
        });
        input.addEventListener('blur', () => {
          gsap.to(input, { borderColor: '#d1d5db', duration: 0.3 });
        });
      });

      // --- BUTTON HOVER ANIMATION ---
      const buttonAnim = gsap.to(buttonRef.current, { scale: 1.05, duration: 0.2, paused: true, ease: "power1.inOut" });
      buttonRef.current.addEventListener('mouseenter', () => buttonAnim.play());
      buttonRef.current.addEventListener('mouseleave', () => buttonAnim.reverse());

    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black" ref={root}>
      {/* Background Stars */}
      {stars.map(star => (
        <div
          key={star.id}
          className={`star-${star.id} absolute bg-white rounded-full`}
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            opacity: `random(0.5, 1)`
          }}
        ></div>
      ))}

      <div ref={formRef} className="relative z-20 bg-gray-900/50 backdrop-blur-sm border border-gray-700 p-8 rounded-lg shadow-2xl w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-white">Login</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-300 text-sm font-bold mb-2">Email</label>
            <input
              type="email"
              id="email"
              className="shadow appearance-none border border-gray-700 rounded w-full py-2 px-3 bg-gray-800 text-gray-200 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your email"
              style={{ borderColor: '#4a5568' }}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-300 text-sm font-bold mb-2">Password</label>
            <input
              type="password"
              id="password"
              className="shadow appearance-none border border-gray-700 rounded w-full py-2 px-3 bg-gray-800 text-gray-200 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="******************"
              style={{ borderColor: '#4a5568' }}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              ref={buttonRef}
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-colors duration-300"
            >
              Sign In
            </button>
            <a href="#" className="inline-block align-baseline font-bold text-sm text-blue-400 hover:text-blue-500">
              Forgot Password?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
