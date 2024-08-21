import React, { useCallback, useState } from "react";
import clsx from "clsx";

import styles from "./style/newServiceRequirement.module.css";

const NewServiceRequirement = ({ setShowNewService, setLoad }) => {
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

  const splitDate = useCallback((date) => {
    return date.split('-')
  }, [formData.date])
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.category && formData.cost && formData.date && formData.email && formData.note && formData.phone && formData.numberOfGuards)
      return
    // await postData('/service-request/add', {
    //   phone: formData.phone,
    //   email: formData.email,
    //   budget: formData.cost,
    //   address: formData.address,
    //   note: formData.note,
    //   numberOfGuards: Number(formData.numberOfGuards),
    //   status: formData.category,
    //   startDate: splitDate(formData.date)[0].trim(),
    //   endDate: splitDate(formData.date)[1].trim(),
    // })
    setLoad(true)
    setShowNewService(false)
  };

  return (
    <div className={`absolute top-0 left-0 bottom-0 right-0 bg-gray-900/50 z-20`}>
      <div className={`${styles.container} mx-auto overflow-auto`}>
        <form onSubmit={handleSubmit} className='grid grid-cols-2 gap-4'>
          <h3 className={`${styles.formTitle} col-span-2`}>New Service Request</h3>
          <div className={`${styles.formGroup} col-span-2`}>
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
          <div className={`${styles.formGroup} col-span-2`}>
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
          <div className={`${styles.formActions} col-span-2`}>
            <button onClick={() => setShowNewService(false)} type="button" className={styles.goBackButton}>
              Go back
            </button>
            <button type="submit" className={styles.submitButton}>
              Create Service Requiment
            </button>
          </div>
        </form>
      </div>
    </div >
  );
};

export default NewServiceRequirement;
