import React, { useState } from 'react';
import styles from './style/ViewProfileGuardContract.module.css';

const StarRating = () => {
  const [rating, setRating] = useState(0);

  const handleRating = (index) => {
    setRating(index);
  };

  return (
    <div className={styles.starRating}>
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={`${styles.star} ${star <= rating ? styles.selected : ''}`}
          onClick={() => handleRating(star)}
        >
          ★
        </span>
      ))}
    </div>
  );
};

const ViewProfileGuardContract = ({ show, handleClose }) => {
  const showHideClassName = show ? styles.displayBlock : styles.displayNone;

  const [feedback, setFeedback] = useState('');
  const [reviews, setReviews] = useState([
    { name: 'Annie Haley', date: '3 days ago', text: 'The security guard performed his duties excellently...' },
    { name: 'Green William', date: '2 months ago', text: 'The security guard responded quickly and effectively...' }
  ]);

  const handleFeedbackChange = (event) => {
    setFeedback(event.target.value);
  };

  const handleSubmit = () => {
    if (feedback.trim()) {
      const newReview = { name: 'Your Feedback', date: 'Just now', text: feedback };
      setReviews([newReview, ...reviews]);
      setFeedback('');
    }
  };

  return (
    <div className={`${styles.modal} ${showHideClassName}`}>
      <section className={styles.modalMain}>
        <button className={styles.closeButton} onClick={handleClose}>X</button>
        <div className={styles.profile}>
          <div className={styles.profileHeader}>
            <img src="profile_image_url" alt="Profile" className={styles.profileImage} />
            <div className={styles.profileInfo}>
              <h2>xuanhuynh</h2>
              <p>Guard</p>
            </div>
            <div className={styles.profileRatings}>
              <p>Professional Expertise</p>
              <StarRating />
            </div>
          </div>
          <div className={styles.profileDetails}>
            <p><strong>Name:</strong> xuanhuynh</p>
            <p><strong>Email:</strong> xuanhuynh543@gmail.com</p>
            <p><strong>Date of Birth:</strong> 23/02/2003</p>
            <p><strong>Working Experience:</strong> 8 Year</p>
            <p><strong>Gender:</strong> Male</p>
            <p><strong>Phone Number:</strong> (555) 123-4567</p>
          </div>
          <div className={styles.feedbackSection}>
            <textarea
              placeholder="Type your feedback"
              value={feedback}
              onChange={handleFeedbackChange}
            ></textarea>
            <button className={styles.submitButton} onClick={handleSubmit}>Submit</button>
          </div>
          <div className={styles.reviews}>
            <h3>Reviews</h3>
            {reviews.map((review, index) => (
              <div key={index} className={styles.review}>
                <h4>{review.name} <span>{review.date}</span></h4>
                <p>{review.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ViewProfileGuardContract;
