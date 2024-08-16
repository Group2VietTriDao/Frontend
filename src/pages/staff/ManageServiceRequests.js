import React, { useState } from "react";
import styles from "./styles/ManageServiceRequests.module.css";
import ServiceRequestInformation from "./ServiceRequestInformation";

const ManageServiceRequests = () => {
  const initialData = [
    {
      id: 1,
      customerID: 231,
      customer: "Joseph Bennett",
      status: "Incomplete",
      numberOfGuards: 75,
      category: "Personal Protection",
      cost: "$804",
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
      cost: "$573",
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
      cost: "$1200",
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
      cost: "$1500",
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
      cost: "$900",
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
      cost: "$500",
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
      cost: "$700",
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
      cost: "$600",
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
      cost: "$850",
      startDate: "20/11/2023",
      endDate: "25/11/2023",
    },
  ];

  const [data, setData] = useState(initialData);
  const [selectedIds, setSelectedIds] = useState([]);
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All Status");
  const [categoryFilter, setCategoryFilter] = useState("All Categories");

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

  const handleView = (request) => {
    setSelectedRequest(request);
  };

  const handleSave = (updatedRequest) => {
    // Update data with new information from modal
    setData((prevData) =>
      prevData.map((item) =>
        item.id === updatedRequest.id ? updatedRequest : item
      )
    );
    setSelectedRequest(null);
  };

  const filteredData = data.filter((item) => {
    // Filter by customer name
    const matchesSearchTerm = item.customer
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    // Filter by status
    const matchesStatus =
      statusFilter === "All Status" || item.status === statusFilter;

    // Filter by service type
    const matchesCategory =
      categoryFilter === "All Categories" || item.category === categoryFilter;

    return matchesSearchTerm && matchesStatus && matchesCategory;
  });

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
            placeholder="Search task list"
            className={styles.searchInput}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            className={styles.select}
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option>All Status</option>
            <option>Incomplete</option>
            <option>Completed</option>
            <option>Inprogress</option>
            <option>Pending</option>
          </select>
          <select
            className={styles.select}
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
          >
            <option>All Categories</option>
            <option>Personal Protection</option>
            <option>Event Security</option>
            <option>Corporate Security</option>
            <option>Residential Security</option>
          </select>
          <button
            className={styles.clearFiltersButton}
            onClick={() => {
              setSearchTerm("");
              setStatusFilter("All Status");
              setCategoryFilter("All Categories");
            }}
          >
            Clear filters
          </button>
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
            {filteredData.map((row) => (
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
                  <button
                    className={styles.viewButton}
                    onClick={() => handleView(row)}
                  >
                    View
                  </button>
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

      {/* View Modal */}
      {selectedRequest && (
        <ServiceRequestInformation
          request={selectedRequest}
          onClose={() => setSelectedRequest(null)}
          onSave={handleSave}
        />
      )}
    </div>
  );
};

export default ManageServiceRequests;
