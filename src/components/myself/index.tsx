import React, { useEffect, useState } from 'react';
import Particles from 'react-tsparticles';
import myPortrait from '../../assets/icons/portrait.svg';
import './styles.scss';

const jobDescriptions = ['Software Engineer', 'Full Stack Developer', 'QA Engineer'];

export const Body = () => {
  const [jobIndex, setJobIndex] = useState(0);
  const [jobDesc, setJobDesc] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentJob = jobDescriptions[jobIndex];
    const typingDelay = isDeleting ? 70 : 110;
    const pauseDelay = 1800;

    const timer = window.setTimeout(() => {
      if (!isDeleting && jobDesc.length < currentJob.length) {
        setJobDesc(currentJob.slice(0, jobDesc.length + 1));
        return;
      }

      if (!isDeleting && jobDesc.length === currentJob.length) {
        setIsDeleting(true);
        return;
      }

      if (isDeleting && jobDesc.length > 0) {
        setJobDesc(currentJob.slice(0, jobDesc.length - 1));
        return;
      }

      setIsDeleting(false);
      setJobIndex((currentIndex) => (currentIndex + 1) % jobDescriptions.length);
    }, !isDeleting && jobDesc.length === currentJob.length ? pauseDelay : typingDelay);

    return () => {
      window.clearTimeout(timer);
    };
  }, [isDeleting, jobDesc, jobDescriptions, jobIndex]);

  return (
    <div id="body-container">
      <div className="myself">
        <div className="my-portrait">
          <img src={myPortrait} alt="portrait"></img>
        </div>
        <div className="intro">
          <span className="job-description">Hi, I'm Nathan!</span>
        </div>
        <div className="type-animation">
          <span className="job-description job-description-typed">{jobDesc}</span>
        </div>
      </div>
      <div className="particles">
        <Particles
          height="100%"
          options={{
            fpsLimit: 60,
            interactivity: {
              detectsOn: 'canvas',
              events: {
                onClick: {
                  enable: false,
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
                  size: 6,
                },
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 100,
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
                enable: false,
                opacity: 0.8,
                width: 1,
              },
              collisions: {
                enable: false,
              },
              move: {
                direction: 'none',
                enable: true,
                outMode: 'bounce',
                random: true,
                speed: 4,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  value_area: 800,
                },
                value: 40,
              },
              opacity: {
                value: 0.3,
              },
              shape: {
                type: ["circle", "square", "triangle"]
              },
              size: {
                random: true,
                value: 10,
              },
            },
            detectRetina: true,
          }}
        ></Particles>
      </div>
    </div>
  );
};
