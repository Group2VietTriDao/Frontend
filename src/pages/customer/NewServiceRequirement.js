import React, { useState } from "react";
import clsx from "clsx";

import styles from "./style/newServiceRequirement.module.css";

const NewServiceRequirement = () => {
  const [formData, setFormData] = useState({
    category: "Personal Protection",
    numberOfGuards: "",
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div>
      <div className={styles.Profile}>
        <div className={styles.userDetails}>
          <img src="/avatar111.jpg" alt="User" className={styles.userImage} />
          <div className={styles.userInfo}>
            <h2>HuongPhan</h2>
            <p>HuongPhan@gmail.com</p>
          </div>
        </div>
        <div className={styles.serviceTitle}>
          <h2>Service Requiment</h2>
        </div>
      </div>

      <div className={styles.container}>
        <form onSubmit={handleSubmit}>
          <h3 className={styles.formTitle}>New Service Request</h3>
          <div className={styles.formGroup}>
            <label htmlFor="category" className={styles.label}>
              Categories Service Requiment
            </label>
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
            <label htmlFor="numberOfGuards" className={styles.label}>
              Number of Guards
            </label>
            <input
              type="number"
              name="numberOfGuards"
              placeholder="30"
              value={formData.numberOfGuards}
              onChange={handleChange}
              className={styles.input}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="address" className={styles.label}>
              Address
            </label>
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
              className={styles.input}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="phone" className={styles.label}>
              Phone
            </label>
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
            <label htmlFor="email" className={styles.label}>
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="email@gmail.com"
              value={formData.email}
              onChange={handleChange}
              className={styles.input}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="date" className={styles.label}>
              Date
            </label>
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
            <label htmlFor="cost" className={styles.label}>
              Cost
            </label>
            <input
              type="text"
              name="cost"
              placeholder="$800"
              value={`${formData.cost}`}
              onChange={handleChange}
              className={styles.input}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="note" className={styles.label}>
              Note
            </label>
            <textarea
              name="note"
              placeholder="Note by customer"
              value={formData.note}
              onChange={handleChange}
              className={styles.textarea}
            />
          </div>
          <div className={styles.formActions}>
            <button type="button" className={styles.goBackButton}>
              Go back
            </button>
            <button type="submit" className={styles.submitButton}>
              Create Service Requiment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewServiceRequirement;
