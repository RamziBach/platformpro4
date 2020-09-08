import React, { useState, useContext } from 'react';
import Collapsible from 'react-collapsible';
import { Section } from 'react-scroll-section';
import { themeContext } from '../context/ThemeContextProvider';

const dark = '#101820';
const white = '#eef2f6';

const CollapsibleComponent = props => {
  const { light } = useContext(themeContext);

  const [isOpen1, setIsOpen1] = useState(true);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);

  return (
    <Section id="features">
      <div className="sm-container sm_section-spacing">
        <h1 className="features-title md_section-spacing">features</h1>
        <div className="features-parent">
          <div className="features-child1">
            <div className="features-child1_column">
              <div
                style={{
                  borderBottom: light
                    ? `1px solid ${dark}`
                    : `1px solid ${white}`,
                }}
                className="features-child1_container"
              >
                <div>
                  <Collapsible
                    open={isOpen1}
                    onOpening={() => {
                      setIsOpen1(true);
                      setIsOpen2(false);
                      setIsOpen3(false);
                      setIsOpen4(false);
                    }}
                    triggerDisabled={isOpen1}
                    triggerOpenedClassName={
                      isOpen1
                        ? 'Collapsible__trigger isOpen'
                        : 'Collapsible__trigger'
                    }
                    trigger="Powerful Design Tools"
                  >
                    <p className="features-child1_p">
                      Bring your brand image to life using Platformpro’s
                      powerful and easy-to-use design tools. Customize
                      everything from text to colour in the same space. Use our
                      pre-built themes to jumpstart your design and create a
                      beautiful site in minutes.
                    </p>
                    <button
                      className={`${
                        light ? 'btn-bg_dark' : 'btn-bg'
                      } features-cta`}
                    >
                      start now
                    </button>
                  </Collapsible>
                </div>
              </div>
              <div
                style={{
                  borderBottom: light
                    ? `1px solid ${dark}`
                    : `1px solid ${white}`,
                }}
                className="features-child1_container"
              >
                <div>
                  <Collapsible
                    open={isOpen2}
                    onOpening={() => {
                      setIsOpen1(false);
                      setIsOpen2(true);
                      setIsOpen3(false);
                      setIsOpen4(false);
                    }}
                    triggerDisabled={isOpen2}
                    triggerOpenedClassName={
                      isOpen2
                        ? 'Collapsible__trigger isOpen'
                        : 'Collapsible__trigger'
                    }
                    trigger="Work on Desktop and Mobile"
                  >
                    <p className="features-child1_p">
                      Everyone from your audience is watching on a different
                      device, from phones, to Tv’s to desktop computers.
                      Websites you build on Platformpro will look stunning
                      anywhere your audience is, automatically.
                    </p>
                    <button
                      className={`${
                        light ? 'btn-bg_dark' : 'btn-bg'
                      } features-cta`}
                    >
                      start now
                    </button>
                  </Collapsible>
                </div>
              </div>
              <div
                style={{
                  borderBottom: light
                    ? `1px solid ${dark}`
                    : `1px solid ${white}`,
                }}
                className="features-child1_container"
              >
                <div>
                  <Collapsible
                    open={isOpen3}
                    onOpening={() => {
                      setIsOpen1(false);
                      setIsOpen2(false);
                      setIsOpen3(true);
                      setIsOpen4(false);
                    }}
                    triggerDisabled={isOpen3}
                    triggerOpenedClassName={
                      isOpen3
                        ? 'Collapsible__trigger isOpen'
                        : 'Collapsible__trigger'
                    }
                    trigger="Powerful Analytics"
                  >
                    <p className="features-child1_p">
                      Learn about your audience with in-depth analytics, from
                      watch time to page views, all in one place. Optimize your
                      content with data from every member of your audience, from
                      Twitter to Twitch.
                    </p>
                    <button
                      className={`${
                        light ? 'btn-bg_dark' : 'btn-bg'
                      } features-cta`}
                    >
                      start now
                    </button>
                  </Collapsible>
                </div>
              </div>
              <div
                style={{
                  borderBottom: light
                    ? `1px solid ${dark}`
                    : `1px solid ${white}`,
                }}
                className="features-child1_container"
              >
                <div>
                  <Collapsible
                    open={isOpen4}
                    onOpening={() => {
                      setIsOpen1(false);
                      setIsOpen2(false);
                      setIsOpen3(false);
                      setIsOpen4(true);
                    }}
                    triggerDisabled={isOpen4}
                    triggerOpenedClassName={
                      isOpen4
                        ? 'Collapsible__trigger isOpen'
                        : 'Collapsible__trigger'
                    }
                    trigger="Everything and More"
                  >
                    <p className="features-child1_p">
                      Use Platformpro to help jumpstart your career. Look
                      professional whether you’re getting your first follower or
                      your first million. Platformpro sets you up for success
                      with tools that scale to any size.
                    </p>
                    <button
                      className={`${
                        light ? 'btn-bg_dark' : 'btn-bg'
                      } features-cta`}
                    >
                      start now
                    </button>
                  </Collapsible>
                </div>
              </div>
            </div>
          </div>
          <div className="features-child2">
            <svg
              className="features-illustration"
              width="30em"
              viewBox="0 0 525 525"
              fillRule="evenodd"
              clipRule="evenodd"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit={1.5}
              {...props}
            >
              <circle
                cx={905}
                cy={460}
                r={70}
                fill="none"
                stroke={light ? dark : white}
                strokeWidth={2.38}
                transform="translate(-880.379 -318.597) scale(1.26243)"
              />
              <circle
                cx={550}
                cy={300}
                r={133.591}
                fill="none"
                stroke={light ? dark : white}
                strokeWidth={2.81}
                transform="matrix(.71112 0 0 .71112 -128.997 48.784)"
              />
              <circle
                cx={980}
                cy={530}
                r={44.413}
                fill="none"
                stroke={light ? dark : white}
                strokeWidth={4.35}
                transform="translate(-863.23 -346.487) scale(1.14832)"
              />
              <circle
                cx={980}
                cy={530}
                r={44.413}
                fill="none"
                stroke={light ? dark : white}
                strokeOpacity={0.6}
                strokeWidth={3.17}
                transform="matrix(.94567 0 0 .94567 -664.639 -239.086)"
              />
              <g className="rotating-negative">
                <circle
                  cx={980}
                  cy={530}
                  r={44.413}
                  fill="none"
                  stroke={light ? dark : white}
                  strokeOpacity={0.6}
                  strokeWidth={2.22}
                  strokeLinejoin="miter"
                  strokeMiterlimit={1}
                  strokeDasharray="0,4.44,0,0"
                  transform="translate(-1061.821 -453.889) scale(1.35096)"
                />
              </g>
              <circle
                cx={844.518}
                cy={495.966}
                r={109.98}
                fill="none"
                stroke={light ? dark : white}
                strokeLinejoin="miter"
                strokeMiterlimit={1}
                transform="translate(-582.397 -233.845)"
              />
              <circle
                cx={844.518}
                cy={495.966}
                r={109.98}
                fill="none"
                stroke={light ? dark : white}
                strokeWidth={0.7}
                strokeLinejoin="miter"
                strokeMiterlimit={1}
                transform="translate(-949.579 -449.482) scale(1.43478)"
              />
              <circle
                cx={1071}
                cy={413.5}
                r={7.5}
                fill={light ? dark : white}
                stroke={light ? dark : white}
                strokeLinejoin="miter"
                strokeMiterlimit={1}
                transform="translate(-697.379 -262.879)"
              />
              <circle
                cx={1071}
                cy={413.5}
                r={7.5}
                fill={light ? dark : white}
                stroke={light ? dark : white}
                strokeLinejoin="miter"
                strokeMiterlimit={1}
                transform="translate(-651.082 -151.379)"
              />
              <circle
                cx={1071}
                cy={413.5}
                r={7.5}
                fill={light ? dark : white}
                stroke={light ? dark : white}
                strokeLinejoin="miter"
                strokeMiterlimit={1}
                transform="translate(-697.879 -38.879)"
              />
              <circle
                cx={1071}
                cy={413.5}
                r={7.5}
                fill={light ? dark : white}
                stroke={light ? dark : white}
                strokeLinejoin="miter"
                strokeMiterlimit={1}
                transform="translate(-920.379 -38.879)"
              />
              <circle
                cx={1071}
                cy={413.5}
                r={7.5}
                fill={light ? dark : white}
                stroke={light ? dark : white}
                strokeLinejoin="miter"
                strokeMiterlimit={1}
                transform="translate(-966.676 -151.379)"
              />
              <circle
                cx={1071}
                cy={413.5}
                r={7.5}
                fill={light ? dark : white}
                stroke={light ? dark : white}
                strokeLinejoin="miter"
                strokeMiterlimit={1}
                transform="translate(-921.379 -262.879)"
              />
              <ellipse
                cx={992.5}
                cy={532.5}
                rx={82.5}
                ry={177.5}
                fill="none"
                stroke={light ? dark : white}
                strokeOpacity={0.6}
                strokeWidth={0.76}
                strokeLinejoin="miter"
                strokeMiterlimit={1}
                transform="matrix(1.51515 0 0 1.07042 -1241.667 -307.879)"
              />
              <ellipse
                cx={992.5}
                cy={532.5}
                rx={82.5}
                ry={177.5}
                fill="none"
                stroke={light ? dark : white}
                strokeOpacity={0.6}
                strokeWidth={0.76}
                strokeLinejoin="miter"
                strokeMiterlimit={1}
                transform="matrix(0 1.51515 -1.07042 0 832.121 -1241.667)"
              />
              <ellipse
                cx={992.5}
                cy={532.5}
                rx={82.5}
                ry={177.5}
                fill="none"
                stroke={light ? dark : white}
                strokeOpacity={0.6}
                strokeWidth={0.76}
                strokeLinejoin="miter"
                strokeMiterlimit={1}
                transform="rotate(45 1254.595 -1082.77) scale(1.51515 1.07042)"
              />
              <ellipse
                cx={992.5}
                cy={532.5}
                rx={82.5}
                ry={177.5}
                fill="none"
                stroke={light ? dark : white}
                strokeOpacity={0.6}
                strokeWidth={0.76}
                strokeLinejoin="miter"
                strokeMiterlimit={1}
                transform="rotate(-45 511.31 1914.89) scale(1.51515 1.07042)"
              />
              <circle
                cx={525}
                cy={527.571}
                r={40}
                fill="none"
                stroke={light ? dark : white}
                strokeWidth={2.19}
                transform="matrix(.45745 0 0 .45745 21.961 -137.012)"
              />
              <circle
                cx={525}
                cy={527.571}
                r={40}
                fill="none"
                stroke={light ? dark : white}
                strokeWidth={1.86}
                transform="translate(-20.066 -179.246) scale(.5375)"
              />
              <g className="rotating-10">
                <circle
                  cx={525}
                  cy={527.571}
                  r={40}
                  fill="none"
                  stroke={light ? dark : white}
                  strokeWidth={3.14}
                  strokeDasharray="0,6.27,0,0"
                  transform="translate(-72.566 -232.003) scale(.6375)"
                />
              </g>
              <use
                xlinkHref="#prefix___Image1"
                x={253.748}
                y={91.36}
                width={31.095}
                height={31.095}
                transform="matrix(.97173 0 0 .97173 0 0)"
              />
              <circle
                cx={160}
                cy={580}
                r={40}
                fill={light ? dark : white}
                transform="translate(224.121 -33.426) scale(.2375)"
              />
              <g>
                <circle
                  cx={525}
                  cy={527.571}
                  r={40}
                  fill="none"
                  stroke={light ? dark : white}
                  strokeWidth={2.19}
                  transform="matrix(.45745 0 0 .45745 21.961 178.582)"
                />
                <circle
                  cx={525}
                  cy={527.571}
                  r={40}
                  fill="none"
                  stroke={light ? dark : white}
                  strokeWidth={1.86}
                  transform="translate(-20.066 136.348) scale(.5375)"
                />
                <g className="rotating-10">
                  <circle
                    cx={525}
                    cy={527.571}
                    r={40}
                    fill="none"
                    stroke={light ? dark : white}
                    strokeWidth={3.14}
                    strokeDasharray="0,6.27,0,0"
                    transform="translate(-72.566 83.59) scale(.6375)"
                  />
                </g>
                <use
                  xlinkHref="#prefix___Image1"
                  x={253.748}
                  y={416.136}
                  width={31.095}
                  height={31.095}
                  transform="matrix(.97173 0 0 .97173 0 0)"
                />
                <g transform="translate(224.121 282.168) scale(.2375)">
                  <circle cx={160} cy={580} r={40} fill="#101820" />
                </g>
              </g>
              <g transform="matrix(.57778 0 0 .57778 -113.435 100.343)">
                <g className="rotating-100">
                  <circle
                    cx={650}
                    cy={280}
                    r={450}
                    fill="none"
                    stroke={light ? dark : white}
                    strokeWidth={5.19}
                    strokeLinejoin="miter"
                    strokeMiterlimit={1}
                    strokeDasharray="0,135,36.35,67.5"
                  />
                </g>
              </g>
              <g>
                <path
                  d="M274.255 249.351c-14.91-12.771-14.91-12.771-29.82 0l-.025.02a6.548 6.548 0 00-2.289 4.974v15.553c0 1.912.836 3.729 2.289 4.973l.025.02c14.91 12.772 14.91 12.772 29.82 0 7.455-6.385 7.866-9.577 7.866-12.77 0-3.192-.412-6.384-7.866-12.77zm-24.875.674c0-2.16 2.454-3.525 4.455-2.48l11.042 5.772c-.112 2.908-1.44 6.213-4.546 6.213h-5.428c-1.988 0-3.876.542-5.523 1.48v-10.985zm27.06 14.232l-22.547 12.411c-2.001 1.102-4.513-.26-4.513-2.448v-3.316c0-3.055 2.633-5.836 5.523-5.836h5.428c5.609 0 8.975-4.216 10.046-8.877l6.004 3.138c2.038 1.065 2.07 3.82.058 4.928z"
                  fill={light ? dark : white}
                  fillRule="nonzero"
                />
              </g>
              <defs>
                <image
                  id="prefix___Image1"
                  width={32}
                  height={32}
                  xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAA7EAAAOxAGVKw4bAAACrklEQVRYhb2XXWsTURCGn2RDDHEroYbQSC1VpApK8QP//0/w40YRL0pQIyHUpS6yjdmNF2cmO3uym49m7cBwcpGd9z1z5sw7p8EO1js6bW7zv+jnRbZtzMYOoE3PMWtmVusbyVQS8IBbFW5tXuFriZQSEHD1tnjH87YhMQdmQOL5TDwDsjISKwQMeMuAhcA9oCdrCHQ9An+AGLgCIlljQ2ZeRqJAoARcQfvAwLgSacunMwM8MT41ZEpJLAl44F3ZZR94ABwDp8CJ/B4IgY58ngjIBPgGjIAL+f1DiMSSpQIJv5D0zBX8BHgMPAPOxIeU2xB4CoyBL8AhxWOCvCiXGQi83d8B7gL3ZadPgBfAa+Ct7HqTHQAPJXYG/MUd0bWsKZB2wh5JHC0su5a3+2PZ+Uvg1RbA1gLzzQyXevUZ+a1ZpscvvAHuzM+A8x3BrZ2TF6e6JZEFkv4Al/4D4Ah4BDwH3rBd2qtMj/WXuF7Na2DeCXsLv9t1BVCPoKrgdrGhxOpLbC3MpgJbAloDh7hjqMsGEjOk2EGx6qYENAu9Gglo4+oaAisZUBJKpE19pvFWRGwrff+f5uu5SqiqWF2myqjxVwgouDYNvbt12ZV4oQdYApkhEAOXOGGpyyYSU+V5mQWfgO5+ilOycQ3gY4k1xZNlgKbIohJIyDV9hFO1dA/wVGKMJGaENxcEAJ2wB242aJA3pYD82ty0I34Q/2xI/EZasa+GtgamuKahjQOcsARbAqfAR+A9LgN6BDF5EYIGTOJoIVlYiGsQ1fMEVx8qWOtsDLyTnX8CvgLfcUWou0+rJqKMPAtqWpwRbrzaZyTTCXlpNxlK+zhhKRtKLwVs96G0goSK0z5jeaH5rB3LS0jc/sPEIwHVTzP7RrS9ZP+n2Roit/c43UBmre3yPP8HNztL03zDnRkAAAAASUVORK5CYII="
                />
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default CollapsibleComponent;
