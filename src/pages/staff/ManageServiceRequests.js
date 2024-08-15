import React, { useState } from "react";
import styles from "./styles/ManageServiceRequests.module.css";

const ManageServiceRequests = () => {
  const initialData = [
    {
      id: 1,
      customerID: 231,
      customer: "Joseph Bennett",
      status: "Incomplete",
      numberOfGuards: 75,
      category: "Personal Protection",
      budget: "$804",
      startDate: "20/03/2024",
      endDate: "25/07/2022",
    },
    {
      id: 2,
      customerID: 232,
      customer: "Emma Johnson",
      status: "Incomplete",
      numberOfGuards: 80,
      category: "Personal Protection",
      budget: "$573",
      startDate: "09/11/2021",
      endDate: "08/04/2021",
    },
    {
      id: 3,
      customerID: 233,
      customer: "Michael Smith",
      status: "Completed",
      numberOfGuards: 45,
      category: "Event Security",
      budget: "$1200",
      startDate: "15/06/2022",
      endDate: "18/06/2022",
    },
    {
      id: 4,
      customerID: 234,
      customer: "Sarah Taylor",
      status: "Pending",
      numberOfGuards: 100,
      category: "Corporate Security",
      budget: "$1500",
      startDate: "01/07/2023",
      endDate: "05/07/2023",
    },
    {
      id: 5,
      customerID: 235,
      customer: "James Brown",
      status: "Incomplete",
      numberOfGuards: 60,
      category: "Residential Security",
      budget: "$900",
      startDate: "10/08/2023",
      endDate: "15/08/2023",
    },
    {
      id: 6,
      customerID: 236,
      customer: "Emily Davis",
      status: "Inprogress",
      numberOfGuards: 40,
      category: "Personal Protection",
      budget: "$500",
      startDate: "25/04/2023",
      endDate: "28/04/2023",
    },
    {
      id: 7,
      customerID: 237,
      customer: "David Wilson",
      status: "Pending",
      numberOfGuards: 55,
      category: "Event Security",
      budget: "$700",
      startDate: "14/09/2023",
      endDate: "18/09/2023",
    },
    {
      id: 8,
      customerID: 238,
      customer: "Sophia Martinez",
      status: "Completed",
      numberOfGuards: 30,
      category: "Corporate Security",
      budget: "$600",
      startDate: "05/10/2022",
      endDate: "07/10/2022",
    },
    {
      id: 9,
      customerID: 239,
      customer: "Daniel Lee",
      status: "Inprogress",
      numberOfGuards: 70,
      category: "Residential Security",
      budget: "$850",
      startDate: "20/11/2023",
      endDate: "25/11/2023",
    },
    {
      id: 10,
      customerID: 240,
      customer: "Olivia Moore",
      status: "Completed",
      numberOfGuards: 35,
      category: "Event Security",
      budget: "$400",
      startDate: "01/12/2022",
      endDate: "03/12/2022",
    },
    // add more data here...
  ];

  const [data, setData] = useState(initialData);
  const [selectedIds, setSelectedIds] = useState([]);

  const handleCheckboxChange = (id) => {
    setSelectedIds((prevSelectedIds) =>
      prevSelectedIds.includes(id)
        ? prevSelectedIds.filter((selectedId) => selectedId !== id)
        : [...prevSelectedIds, id]
    );
  };

  const handleDelete = () => {
    const updatedData = data.filter((item) => !selectedIds.includes(item.id));
    setData(updatedData);
    setSelectedIds([]);
    console.log("Deleted IDs: ", selectedIds);
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.header}>
        <button className={styles.deleteButton} onClick={handleDelete}>
          Delete
        </button>
      </div>
      <div className={styles.tableContainer}>
        <div className={styles.filters}>
          <input
            type="text"
            placeholder=" Search task list"
            className={styles.searchInput}
          />
          <select className={styles.select}>
            <option>All Status</option>
            <option>Incomplete</option>
            <option>Complete</option>
            <option>Inprogress</option>
            <option>Pending</option>
          </select>
          <select className={styles.select}>
            <option>All Categories</option>
          </select>
          <button className={styles.clearFiltersButton}>Clear Filters</button>
        </div>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>
                <input type="checkbox" />
              </th>
              <th>ID Service Request</th>
              <th>ID | Customer</th>
              <th>Status</th>
              <th>Number of Guards</th>
              <th>Category</th>
              <th>Cost</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr key={row.id}>
                <td>
                  <input
                    type="checkbox"
                    checked={selectedIds.includes(row.id)}
                    onChange={() => handleCheckboxChange(row.id)}
                  />
                </td>
                <td>{row.id}</td>
                <td className={styles.Customer}>
                  {row.customerID} | {row.customer}
                </td>
                <td
                  className={`${styles.status} ${
                    styles[row.status.toLowerCase()]
                  }`}
                >
                  {row.status}
                </td>
                <td>{row.numberOfGuards}</td>
                <td>{row.category}</td>
                <td>{row.cost}</td>
                <td>{row.startDate}</td>
                <td>{row.endDate}</td>
                <td>
                  <button className={styles.viewButton}>View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className={styles.pagination}>
          <button>&lt;</button>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>&gt;</button>
        </div>
      </div>
    </div>
  );
};

export default ManageServiceRequests;
