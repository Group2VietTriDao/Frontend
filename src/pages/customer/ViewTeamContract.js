import React, { useState } from 'react';
import styles from './style/ContractInfo.module.css';
import ViewProfileGuardContract from './ViewProfileGuardContract'; // Import component

const teamMembers = [
    { name: 'Nguyễn Văn A', role: 'Guard Manager', image: '/images/(1).jpg' },
    { name: 'Nguyễn Văn B', role: 'Guard', image: '/images/(2).jpg' },
    { name: 'Nguyễn Văn C', role: 'Guard', image: '/images/(3).jpg' },
    { name: 'Nguyễn Văn D', role: 'Guard', image: '/images/(4).jpg' },
    { name: 'Nguyễn Văn E', role: 'Guard', image: '/images/(5).jpg' },
    { name: 'Nguyễn Văn F', role: 'Guard', image: '/images/(6).jpg' },
    // Add more members as needed
];

const ViewTeamContract = () => {
    const [showProfileContract, setShowProfileContract] = useState(false);
    const [selectedMember, setSelectedMember] = useState(null);

    const handleButtonClick = (member) => {
        setSelectedMember(member);  // Set the selected member
        setShowProfileContract(true); // Show the modal
    };

    const handleCloseProfileContract = () => {
        setShowProfileContract(false); // Hide the modal
    };

    return (
        <div className={styles.contractContainer}>
            <div className={styles.contractContent}>
                {/* Profile User Section */}
                <div className={styles.userProfileHeader}>
                    <img src="/images/(7).jpg" alt="User Profile" className={styles.userProfileImg} />
                    <div className={styles.userProfileInfo}>
                        <h2>Vo Ninh</h2>
                        <p>ninhvotran@gmail.com</p>
                    </div>
                </div>

                <div className={styles.contractHeader}>
                    <button className={styles.clickableButton} onClick={() => handleButtonClick('Contract Information')}>
                        Contract Information
                    </button>
                    <button className={styles.pdfButton}>View PDF Contract</button>
                </div>

                <div className={styles.contractDetails}>
                    <div className={styles.formGroup}>
                        <label>ID Contract</label>
                        <button className={styles.clickableButton} onClick={() => handleButtonClick('ID Contract')}>
                            1
                        </button>
                    </div>

                    <div className={styles.formGroup}>
                        <label>Categories Service Requirement</label>
                        <button className={styles.clickableButton} onClick={() => handleButtonClick('Categories Service Requirement')}>
                            Personal Protection
                        </button>
                    </div>

                    <div className={styles.teamGrid}>
                        {teamMembers.map((member, index) => (
                            <div key={index} className={styles.teamCard}>
                                <img src={member.image} alt={member.name} className={styles.teamCardImg} />
                                <h4>{member.name}</h4>
                                <p>{member.role}</p>
                                <button 
                                    className={styles.viewProfileButton} 
                                    onClick={() => handleButtonClick(member)}
                                >
                                    View profile
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={styles.pagination}>
                    <button>&lt;</button>
                    <button className={styles.paginationActive}>1</button>
                    <button>2</button>
                    <span>...</span>
                    <button>10</button>
                    <button>11</button>
                    <button>&gt;</button>
                </div>

                <button className={styles.goBackButton}>Go back</button>
            </div>

            {/* Hiển thị modal ViewProfileGuardContract */}
            {showProfileContract && (
                <ViewProfileGuardContract 
                    show={showProfileContract} 
                    handleClose={handleCloseProfileContract} 
                    member={selectedMember} // Truyền dữ liệu của member được chọn
                />
            )}
        </div>
    );
};

export default ViewTeamContract;
