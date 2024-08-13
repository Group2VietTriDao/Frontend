import React, { useState } from "react";
import clsx from "clsx";
import styles from "./style/ViewAndEditServiceRequirement.module.css";

const ViewAndEditServiceRequirement = () => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form đã gửi:", formData);
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <img src="/avatar111.jpg" alt="User" className={styles.avatar} />
          <div>
            <h2>Huong Phan</h2>
            <p>HuongPhan@gmail.com</p>
          </div>
        </div>
        <div className={styles.headerRight}>
          <h2>Service Requirement</h2>
          <p>ID: {formData.id}</p>
        </div>
      </div>

      <div className={styles.formContainer}>
        <form onSubmit={handleSubmit}>
          <div className={styles.formstatus}>
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

          <div className={styles.formGroup}>
            <label htmlFor="note">Note</label>
            <textarea
              name="note"
              placeholder="Enter note"
              value={formData.note}
              onChange={handleChange}
              className={styles.textarea}
            />
          </div>

          <div className={styles.buttonsContainer}>
            <button type="button" className={styles.goBackButton}>
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
