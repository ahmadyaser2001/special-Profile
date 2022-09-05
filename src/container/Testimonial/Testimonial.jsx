import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import './testimonial.scss';
import {images}from '../../constants'
const  brands=[
  {id:'1',imgUrl:images.adidas},
  {id:'2',imgUrl:images.amazon},
  {id:'3',imgUrl:images.asus},
  {id:'4',imgUrl:images.bolt},

]
const  testimonials=[
  {name:'yaser',title:'Adidas',description:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam in exercitationem eos veniam! Iste esse et impedit atque vel aliquam voluptatum animi. Expedita, quo maxime repellat adipisci quidem voluptatem dicta?  ',imgUrl:images.about01},
  {name:'komil',title:'Amazon',description:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam in exercitationem eos veniam! Iste esse et impedit atque vel aliquam voluptatum animi. Expedita, quo maxime repellat adipisci quidem voluptatem dicta?',imgUrl:images.about02},
  {name:'Ahmad',title:'Asus',description:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam in exercitationem eos veniam! Iste esse et impedit atque vel aliquam voluptatum animi. Expedita, quo maxime repellat adipisci quidem voluptatem dicta?',imgUrl:images.about03},

]
const Testimonial = () => {

  return (
    <>
     {testimonials.map((about, index) => (
          <div className="app__testimonial-item app__flex mb-5">
            <img src={about.imgUrl} alt={about.title} />
            <div className="app__testimonial-content">
              <p className="p-text">{about.description}</p>
              <div>
                <h4 className="bold-text">{about.name}</h4>
                <h5 className="p-text">{about.title}</h5>
              </div>
            </div>
           
          </div>
        ))}
        
      <div className="app__testimonial-brands app__flex">
        {brands.map((brand,index) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: 'tween' }}
            key={brand.id}
          >
            <img src={brand.imgUrl} alt={brand.name} />
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Testimonial, 'app__testimonial'),
  'testimonial',
  'app__primarybg',
);
