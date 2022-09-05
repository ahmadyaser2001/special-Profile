import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ReactTooltip from 'react-tooltip';
import { AppWrap, MotionWrap } from '../../wrapper';
import './skills.scss';
import { images } from '../../constants';
const skills =[
  {title:'Html',imgUrl:images.html},
  {title:'Css',imgUrl:images.css},
  {title:'Javascript',imgUrl:images.javascript},
  {title:'Git',imgUrl:images.git},
  {title:'API',imgUrl:images.api},
  {title:'React',imgUrl:images.react},
  {title:'Node',imgUrl:images.node},
  {title:'Sass',imgUrl:images.sass},
  {title:'Typescript',imgUrl:images.typescript},

]
const experiences =[
  {id:'1',year:'2018',com:'Mac',name:'Fornted Developer' ,},
  {id:'2',year:'2020',com:'Facbook',name:'Fornted Developer' ,},
  {id:'2',year:'2020',com:'Hatcat',name:'BlockChain Developer' ,},
  {id:'2',year:'2020',com:'Netflex',name:'Web Designer' ,},

]
const Skills = () => {


 

  return (
    <>
      <h2 className="head-text">Skills & Experiences</h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={skill.imgUrl} alt={skill.title} />
              </div>
              <p className="p-text">{skill.title}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="app__skills-exp">
        <motion.div className="app__skills-list">
          {experiences.map((skill) => (
            <motion.div
            className="app__skills-exp-item"
            key={skill.id}
          >
               <div className="app__skills-exp-year">
                <p className="bold-text">{skill.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
              <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-tip
                      data-for={skill.name}
                      key={skill.name}
                    >
                      <h4 className="bold-text">{skill.name}</h4>
                      <p className="p-text">{skill.com}</p>
                    </motion.div>
                   
              </motion.div>
            </motion.div>
            
             
          ))}
        </motion.div>
         
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'skills',
  'app__whitebg',
);
