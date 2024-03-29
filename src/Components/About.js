import React from 'react';
import profileone from '../images/profile-1.JPG';
import Typewriter from 'typewriter-effect';
import { forwardRef } from 'react';
export const About = forwardRef((props, ref) => {
  return (
    <div className='about' ref={ref}>
      <div className='max-width'>
        <h2 className='title'>About me</h2>
        <div className='about-content'>
          <div className='left'>
            <img src={profileone} alt='profile' />
          </div>
          <div className='description'>
            <div className='text'>
              I'm Usama and I'm a{' '}
              <span>
                <Typewriter
                  options={{
                    strings: ['Developer', 'Freelancer', 'Copywriter'],
                    autoStart: true,
                    loop: true,
                    delay: 100,
                    deleteSpeed: 60,
                  }}
                />
              </span>{' '}
            </div>
            <p>
              I am an enthusiastic and passionate Software Engineer who just
              graduated from the premier IT university{' '}
              <span>COMSATS University Islamabad</span> in Software Engineering
              Majors. Although I can code in other fields like Machine Learning
              Models and App Development, my main specialization is doing Web
              Development. I am a highly skilled professional developer who
              loves to take on the challenges and solve them. While doing my
              graduation, I had the pleasure of working at multiple projects of
              Web Development which has polished my skills and enhanced my
              experience. I am keen to learn new technologies and adopt to
              changing environments.
            </p>
            <a
              href='https://drive.google.com/file/d/1DRwCuI2SLlD0p77g9juxLF3GWZd37_Gs/view?usp=sharing'
              className='aboutresume'
              target='_blank'
              rel='noopener noreferrer'
            >
              My Resume
            </a>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
});
