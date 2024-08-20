import React, { useState } from "react";
import clsx from "clsx";
import styles from "./style/ViewAndEditServiceRequirement.module.css";
import { postData } from '../../services/apiService';

const ViewAndEditServiceRequirement = ({ setShowService }) => {
  const [formData, setFormData] = useState({
    id: "12345",
    status: "Pending",
    category: "Personal Protection",
    numberOfGuards: "30",
    address: "",
    phone: "",
    email: "",
    date: "",
    cost: "",
    note: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await postData('request/update', {
      id: formData.id,
      status: formData.status,

    })
  };

  return (
    <div className={`absolute top-0 left-0 bottom-0 right-0 bg-gray-900/50 z-20`}>
      <div className={styles.formContainer}>
        <form onSubmit={handleSubmit} className='grid grid-cols-2 gap-4'>
          <div>
            <label htmlFor="status">Status</label>
            <input
              type="text"
              name="status"
              value={formData.status}
              onChange={handleChange}
              disabled
              className={styles.input}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="category">Categories Service Requirement</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className={styles.select}
            >
              <option value="Personal Protection">Personal Protection</option>
              <option value="Event Security">Event Security</option>
              <option value="Home Security">Home Security</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="numberOfGuards">Number of Guards</label>
            <input
              type="number"
              name="numberOfGuards"
              placeholder="Enter number of guards"
              value={formData.numberOfGuards}
              onChange={handleChange}
              className={styles.input}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="address">Address</label>
            <input
              type="text"
              name="address"
              placeholder="Enter address"
              value={formData.address}
              onChange={handleChange}
              className={styles.input}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              name="phone"
              placeholder="123-456-7890"
              value={formData.phone}
              onChange={handleChange}
              className={styles.input}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleChange}
              className={styles.input}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="date">Date</label>
            <input
              type="text"
              name="date"
              placeholder="10/02/2024 - 25/09/2024"
              value={formData.date}
              onChange={handleChange}
              className={styles.input}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="cost">Cost</label>
            <input
              type="text"
              name="cost"
              placeholder="$800"
              value={formData.cost}
              onChange={handleChange}
              className={styles.input}
            />
          </div>

          <div className={`${styles.formGroup} col-span-2`}>
            <label htmlFor="note">Note</label>
            <textarea
              name="note"
              placeholder="Enter note"
              value={formData.note}
              onChange={handleChange}
              className={styles.textarea}
            />
          </div>

          <div className={`${styles.buttonsContainer} col-span-2`}>
            <button
              onClick={() => setShowService(false)}
              type="button" className={styles.goBackButton}>
              Go back
            </button>
            <button type="submit" className={styles.submitButton}>
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ViewAndEditServiceRequirement;
