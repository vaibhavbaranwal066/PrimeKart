import { motion } from 'framer-motion';
import { Rating } from '../components';
import { testimonials } from '../data/mock';
import './TestimonialsSection.css';

const TestimonialsSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="testimonials-section">
      <div className="testimonials-header">
        <h2>What Our Customers Say</h2>
        <p>Join thousands of satisfied customers</p>
      </div>

      <motion.div
        className="testimonials-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {testimonials.map((testimonial) => (
          <motion.div key={testimonial.id} variants={itemVariants} className="testimonial-card">
            <div className="testimonial-rating">
              <Rating value={testimonial.rating} />
            </div>
            <p className="testimonial-content">{testimonial.content}</p>
            <div className="testimonial-author">
              <img src={testimonial.image} alt={testimonial.name} />
              <div>
                <h4>{testimonial.name}</h4>
                <span>{testimonial.role}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default TestimonialsSection;
