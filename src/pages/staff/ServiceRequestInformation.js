import React from "react";
import styles from "./styles/ServiceRequestInformation.module.css";

const ServiceRequestInformation = ({ request, onClose, onSave }) => {
  const [editableRequest, setEditableRequest] = React.useState(request);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditableRequest({
      ...editableRequest,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    onSave(editableRequest);
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <h2 className={styles.modalTitle}>Service Request Information</h2>
        <form className={styles.modalForm}>
          <div className={styles.formRow}>
            <label>ID Service Request</label>
            <input type="text" value={editableRequest.id} readOnly />
          </div>
          <div className={styles.formRow}>
            <label>Categories</label>
            <input
              type="text"
              name="category"
              value={editableRequest.category}
              onChange={handleChange}
            />
          </div>
          <div className={styles.formRow}>
            <label>ID | Customer</label>
            <input
              type="text"
              name="customer"
              value={`${editableRequest.customerID} | ${editableRequest.customer}`}
              onChange={handleChange}
            />
          </div>
          <div className={styles.formRow}>
            <label>Status</label>
            <input
              type="text"
              name="status"
              value={editableRequest.status}
              onChange={handleChange}
            />
          </div>
          <div className={styles.formRow}>
            <label>Number of Guards</label>
            <input
              type="text"
              name="numberOfGuards"
              value={editableRequest.numberOfGuards}
              onChange={handleChange}
            />
          </div>
          <div className={styles.formRow}>
            <label>Address</label>
            <input
              type="text"
              name="address"
              placeholder="Adress..."
              value={editableRequest.address || ""}
              onChange={handleChange}
            />
          </div>
          <div className={styles.formRow}>
            <label>Phone</label>
            <input
              type="text"
              name="phone"
              placeholder="(212) 555-1234"
              value={editableRequest.phone || ""}
              onChange={handleChange}
            />
          </div>
          <div className={styles.formRow}>
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="@gmail.com"
              value={editableRequest.email || ""}
              onChange={handleChange}
            />
          </div>
          <div className={styles.formRow}>
            <label>Date</label>
            <input
              type="text"
              name="date"
              value={`${editableRequest.startDate} - ${editableRequest.endDate}`}
              onChange={handleChange}
            />
          </div>
          <div className={styles.formRow}>
            <label>Cost</label>
            <input
              type="text"
              name="cost"
              value={editableRequest.cost}
              onChange={handleChange}
            />
          </div>
          <div className={styles.formRow}>
            <label>Note</label>
            <textarea
              name="note"
              placeholder="..."
              value={editableRequest.note || ""}
              onChange={handleChange}
            />
          </div>
          <div className={styles.modalActions}>
            <button type="button" onClick={onClose}>
              Go back
            </button>
            <button
              type="button"
              className={styles.createButton}
              onClick={handleSubmit}
            >
              Create Contracts
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ServiceRequestInformation;
