import React, { useState } from 'react';
import Particles from 'react-tsparticles';
import Typing from 'react-typing-animation';
import react from '../../assets/react.svg';

export const Body = () => {
  const [jobDesc, setJobDesc] = useState('Software Engineer');
  return (
    <div className="body-container">
      <div className="myself">
        <div className="picture-or-animation">
          <img src={react} width={200} height={200}></img>
        </div>
        <div className="intro">
          <span className="job-description">Hi! I'm Nath</span>
        </div>
        <div className="type-animation">
          <Typing
            loop={true}
            onFinishedTyping={() => {
              jobDesc === 'Software Engineer'
                ? setJobDesc('Front-end Developer')
                : setJobDesc('Software Engineer');
            }}
          >
            <span className="job-description">{jobDesc}</span>
            <Typing.Backspace delay={3000} count={19} />
          </Typing>
        </div>
      </div>
      <div className="particles">
        <Particles
          height="100"
          canvasClassName="atup"
          options={{
            fpsLimit: 60,
            interactivity: {
              detectsOn: 'canvas',
              events: {
                onClick: {
                  enable: true,
                  mode: 'push',
                },
                onHover: {
                  enable: true,
                  mode: 'repulse',
                },
                resize: true,
              },
              modes: {
                bubble: {
                  distance: 800,
                  duration: 2,
                  opacity: 0.8,
                  size: 40,
                },
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: '#9000ff',
              },
              links: {
                color: '#9000ff',
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              collisions: {
                enable: false,
              },
              move: {
                direction: 'none',
                enable: true,
                outMode: 'bounce',
                random: false,
                speed: 4,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  value_area: 800,
                },
                value: 60,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: 'circle',
              },
              size: {
                random: true,
                value: 5,
              },
            },
            detectRetina: true,
          }}
        ></Particles>
      </div>
    </div>
  );
};
