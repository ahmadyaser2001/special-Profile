import React, { useState, useEffect } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';
import {images}from '../../constants'

import { AppWrap, MotionWrap } from '../../wrapper';
import './work.scss';
const about =[
  {title:'Web Development',description:'I am a good Web Developer ',imgUrl:images.about01,lin:'http//',vlink:'http//'},
  {title:'Web Design',description:'I am a good Web Design ',imgUrl:images.about02,lin:'http//',vlink:'http//'},
  {title:'Web Development',description:'I am a good UI/UX Designer ',imgUrl:images.about03,lin:'http//',vlink:'http//'},
  {title:'Web Animations',description:'I am a good Web Animations ',imgUrl:images.about04,lin:'http//',vlink:'http//'},
  {title:'Web Development',description:'I am a good Web Developer ',imgUrl:images.about01,lin:'http//',vlink:'http//'},
  {title:'Web Design',description:'I am a good Web Design ',imgUrl:images.about02,lin:'http//',vlink:'http//'},

]
const Work = () => {

  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  return (
    <>
      <h2 className="head-text">My Creative <span>Portfolio</span> Section</h2>

     

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {about.map((work, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div
              className="app__work-img app__flex"
            >
              <img src={work.imgUrl} alt={work.name} />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                className="app__work-hover app__flex"
              >
                <a href={work.projectLink} target="_blank" rel="noreferrer">

                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                   <a href={work.vlink} target="_blank" rel="noopener noreferrer"><AiFillEye size={130} className="ml-3"/></a>

                  
                  </motion.div>
                </a>
                <a href={work.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <a href={work.lin} target="_blank" rel="noopener noreferrer"><AiFillGithub size={130} className="ml-3"/></a>
                    
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>{work.description}</p>

            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Work, 'app__works'),
  'work',
  'app__primarybg',
);
