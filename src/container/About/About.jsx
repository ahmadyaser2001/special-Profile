import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {images}from '../../constants'
import { AppWrap, MotionWrap } from '../../wrapper';
import './about.scss';
const about =[
  {title:'Web Development',description:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat itaque cumque quis corporis voluptatum ipsa quod, ',imgUrl:images.about01},
  {title:'Web Design',description:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat itaque cumque quis corporis voluptatum ipsa quod, ',imgUrl:images.about02},
  {title:'Web Development',description:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat itaque cumque quis corporis voluptatum ipsa quod, ',imgUrl:images.about03},
  {title:'Web Animations',description:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat itaque cumque quis corporis voluptatum ipsa quod, ',imgUrl:images.about04},

]
const About = () => {
  const [abouts, setAbouts] = useState([]); 

  return (
    <>
      <h2 className="head-text">I Know that <span>Good Design</span> <br />means  <span>Good Business</span></h2>

      <div className="app__profiles">
        {about.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__whitebg',
);
