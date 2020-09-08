import React, { useState, useRef } from 'react';
import { useSpring, animated } from 'react-spring';

import circle1 from '../../images/interstellar/circle-1.svg';
import circle2 from '../../images/interstellar/circle-2.svg';
import circle3 from '../../images/interstellar/circle-3.svg';
import circle4 from '../../images/interstellar/circle-4.svg';
import circle5 from '../../images/interstellar/circle-5.svg';
import circle6 from '../../images/interstellar/circle-6.svg';
import circle7 from '../../images/interstellar/circle-7.svg';
import circle8 from '../../images/interstellar/circle-8.svg';
import circle9 from '../../images/interstellar/circle-9.svg';
import circle10 from '../../images/interstellar/circle-10.svg';

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];

const trans0 = (x, y) => `translate3d(${x / 90}px, ${y / 90}px, 0)`;
const trans1 = (x, y) => `translate3d(${x / 40}px, ${y / 40}px, 0)`;
const trans2 = (x, y) => `translate3d(${x / 20}px,${y / 20}px, 0)`;
const trans3 = (x, y) => `translate3d(${x / 15}px,${y / 15}px, 0)`;
const trans4 = (x, y) => `translate3d(${x / 10}px,${y / 10}px, 0)`;

const Interstellar = () => {
  const [isPopUp1, setIsPopUp1] = useState(true);
  const [isPopUp2, setIsPopUp2] = useState(true);
  const [isPopUp3, setIsPopUp3] = useState(true);
  const [isPopUp4, setIsPopUp4] = useState(true);

  const planet1Ref = useRef(null);
  const planet2Ref = useRef(null);
  const planet3Ref = useRef(null);
  const planet4Ref = useRef(null);

  const popUpRef = useRef(null);
  const popUpSubRef = useRef(null);
  const popUp2Ref = useRef(null);
  const popUpSubRef2 = useRef(null);

  const [mouseMove, setMouseMove] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 20, tension: 550, friction: 140 },
  }));

  return (
    <>
      <div
        className="hero"
        onMouseLeave={() => {
          setMouseMove({ xy: [0, 0] });
        }}
        onMouseMove={({ clientX: x, clientY: y }) =>
          setMouseMove({ xy: calc(x, y) })
        }
      >
        <div className="landing-child">
          <div
            className="circles"
            style={{ transform: mouseMove.xy.interpolate(trans0) }}
          >
            <animated.div
              className="line-container pop-up-opacity"
              style={{
                opacity: `${isPopUp1 ? '1' : '0'}`,
                transform: mouseMove.xy.interpolate(trans4),
              }}
            >
              <div className="line1"></div>
              <div className="line2"></div>
              <div className="line3"></div>
            </animated.div>

            <animated.div
              className="line-container2 pop-up-opacity"
              style={{
                opacity: `${isPopUp2 ? '1' : '0'}`,
                transform: mouseMove.xy.interpolate(trans1),
              }}
            >
              <div className="line2-1"></div>
              <div className="line2-2"></div>
              <div className="line2-3"></div>
            </animated.div>

            <animated.div
              className="line-container3 pop-up-opacity"
              style={{
                opacity: `${isPopUp3 ? '1' : '0'}`,
                transform: mouseMove.xy.interpolate(trans2),
              }}
            >
              <div className="line3-1"></div>
              <div className="line3-2"></div>
              <div className="line3-3"></div>
            </animated.div>

            <animated.div
              className="line-container4 pop-up-opacity"
              style={{
                opacity: `${isPopUp4 ? '1' : '0'}`,
                transform: mouseMove.xy.interpolate(trans3),
              }}
            >
              <div className="line4-1"></div>
              <div className="line4-2"></div>
              <div className="line4-3"></div>
            </animated.div>

            <animated.div
              className="circle"
              style={{
                // transition: props.transition && 'transform 2s',
                transform: mouseMove.xy.interpolate(trans1),
                // : setMouseMove({ xy: [0, 0] }),
              }}
            >
              <img className="rotating-30" src={circle1} alt="circle" />
            </animated.div>
            <animated.div
              className="circle"
              style={{
                // transition: props.transition && 'transform 2s',
                transform: mouseMove.xy.interpolate(trans0),
                // : setMouseMove({ xy: [0, 0] }),
              }}
            >
              <img className="rotating-50" src={circle2} alt="circle" />
            </animated.div>
            <animated.div
              className="circle2"
              style={{
                // transition: props.transition && 'transform 2s',
                transform: mouseMove.xy.interpolate(trans2),
                // : setMouseMove({ xy: [0, 0] }),
              }}
            >
              <img className="rotating-70" src={circle3} alt="circle" />
            </animated.div>
            <animated.div
              className="circle2"
              style={{
                // transition: props.transition && 'transform 2s',
                transform: mouseMove.xy.interpolate(trans2),
                // : setMouseMove({ xy: [0, 0] }),
              }}
            >
              <img className="rotating-40" src={circle4} alt="circle" />
            </animated.div>
            <animated.div
              className="circle3"
              style={{
                // transition: props.transition && 'transform 2s',
                transform: mouseMove.xy.interpolate(trans3),
                // : setMouseMove({ xy: [0, 0] }),
              }}
            >
              <img className="rotating-70" src={circle5} alt="circle" />
            </animated.div>
            <animated.div
              className="circle3"
              style={{
                // transition: props.transition && 'transform 2s',
                transform: mouseMove.xy.interpolate(trans3),
                // : setMouseMove({ xy: [0, 0] }),
              }}
            >
              <img className="rotating-30" src={circle6} alt="circle" />
            </animated.div>
            <animated.div
              className="circle4"
              style={{
                // transition: props.transition && 'transform 2s',
                transform: mouseMove.xy.interpolate(trans3),
                // : setMouseMove({ xy: [0, 0] }),
              }}
            >
              <img className="rotating-50" src={circle7} alt="circle" />
            </animated.div>
            <animated.div
              className="circle4"
              style={{
                // transition: props.transition && 'transform 2s',
                transform: mouseMove.xy.interpolate(trans3),
                // : setMouseMove({ xy: [0, 0] }),
              }}
            >
              <img className="rotating-40" src={circle8} alt="circle" />
            </animated.div>
            <animated.div
              className="circle5"
              style={{
                // transition: props.transition && 'transform 2s',
                transform: mouseMove.xy.interpolate(trans4),
                // : setMouseMove({ xy: [0, 0] }),
              }}
            >
              <img className="rotating-100" src={circle9} alt="circle" />
            </animated.div>
            <animated.div
              className="circle5"
              style={{
                // transition: props.transition && 'transform 2s',
                transform: mouseMove.xy.interpolate(trans4),
                // : setMouseMove({ xy: [0, 0] }),
              }}
            >
              <img className="rotating-70" src={circle10} alt="circle" />
            </animated.div>

            <ul className="planet-ul">
              <animated.li
                ref={planet1Ref}
                className="planet planet1"
                style={{ transform: mouseMove.xy.interpolate(trans4) }}
              ></animated.li>
              <animated.li
                ref={planet2Ref}
                className={`planet planet2`}
                style={{ transform: mouseMove.xy.interpolate(trans1) }}
              ></animated.li>
              <animated.li
                ref={planet3Ref}
                className={`planet planet3`}
                style={{ transform: mouseMove.xy.interpolate(trans2) }}
              ></animated.li>
              <animated.li
                ref={planet4Ref}
                className={`planet planet4`}
                style={{ transform: mouseMove.xy.interpolate(trans3) }}
              ></animated.li>
            </ul>

            <animated.div
              ref={popUpRef}
              className="pop-up"
              style={{
                opacity: `${!isPopUp3 ? '0' : '1'}`,
                transform: mouseMove.xy.interpolate(trans2),
              }}
            >
              <div
                className="pop-up-opacity"
                // style={{ opacity: `${isPulsing3 ? '1' : '0'}` }}
              >
                <div className="pop-up_header-container">
                  <h4 className="pop-up_h3">Powerful Design Tools</h4>
                </div>
                <p className="pop-up_p">
                  Bring your brand image to life using Platformpro’s powerful
                  and easy-to-use design tools. Customize everything from text
                  to colour in the same space. Use our pre-built themes to
                  jumpstart your design and create a beautiful site in minutes.
                </p>
              </div>
            </animated.div>
            <animated.div
              ref={popUpSubRef}
              className="pop-up_sub"
              style={{
                opacity: `${!isPopUp4 ? '0' : '1'}`,
                transform: mouseMove.xy.interpolate(trans3),
              }}
            >
              <div
                className="pop-up-opacity"
                style={
                  {
                    // opacity: `${isPulsing4 ? '1' : '0'}`,
                  }
                }
              >
                <div className="pop-up_header-container">
                  <h4 className="pop-up_h3_sub">Work on Desktop and Mobile</h4>
                </div>
                <p className="pop-up_p_sub">
                  Everyone from your audience is watching on a different device,
                  from phones, to Tv’s to desktop computers. Websites you build
                  on Platformpro will look stunning anywhere your audience is,
                  automatically.
                </p>
              </div>
            </animated.div>
            <animated.div
              ref={popUp2Ref}
              className="pop-up2"
              style={{
                opacity: `${!isPopUp1 ? '0' : '1'}`,
                transform: mouseMove.xy.interpolate(trans4),
              }}
            >
              <div
                className="pop-up-opacity"
                // style={{ opacity: `${isPulsing1 ? '1' : '0'}` }}
              >
                <div className="pop-up_header-container">
                  <h4 className="pop-up_h3">Powerful Analytics</h4>
                </div>
                <p className="pop-up_p2">
                  Learn about your audience with in-depth analytics, from watch
                  time to page views, all in one place. Optimize your content
                  with data from every member of your audience, from Twitter to
                  Twitch.
                </p>
              </div>
            </animated.div>
            <animated.div
              ref={popUpSubRef2}
              className="pop-up_sub2"
              style={{
                opacity: `${!isPopUp2 ? '0' : '1'}`,
                transform: mouseMove.xy.interpolate(trans1),
              }}
            >
              <div
                className="pop-up-opacity"
                // style={{ opacity: `${isPulsing2 ? '1' : '0'}` }}
              >
                <div className="pop-up_header-container">
                  <h4 className="pop-up_h3_sub">Everything and More</h4>
                </div>
                <p className="pop-up_p_sub2">
                  Use Platformpro to help jumpstart your career. Look
                  professional whether you’re getting your first follower or
                  your first million. Platformpro sets you up for success with
                  tools that scale to any size.
                </p>
              </div>
            </animated.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Interstellar;
