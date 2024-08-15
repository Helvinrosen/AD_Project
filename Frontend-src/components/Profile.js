import React from 'react';
import PrimarySearchAppBar from './Dashboad/Header';

const ProfilePage = () => {

    const handleProfileUpdate = (e) => {
        e.preventDefault();
        alert("Profile updated");
    };

    return (
        <div>
            <PrimarySearchAppBar />
            <div style={styles.container}>
                <h1 style={styles.header}>Your Profile</h1>
                <div style={styles.section}>
                    <h2 style={styles.subHeader}>Personal Information</h2>
                    <div style={styles.profileInfo}>
                        <p><strong>Name:</strong> Helvin</p>
                        <p><strong>Email:</strong> csk@gmail.com</p>
                        <p><strong>Phone:</strong> (123) 456-7890</p>
                    </div>
                </div>
                <div style={styles.section}>
                    <h2 style={styles.subHeader}>Booking History</h2>
                    <ul style={styles.list}>
                        <li style={styles.listItem}>
                            <strong>Booking #1:</strong>
                            <p>Studio A - July 15, 2024 - 2:00 PM to 4:00 PM</p>
                        </li>
                        <li style={styles.listItem}>
                            <strong>Booking #2:</strong>
                            <p>Studio B - August 3, 2024 - 10:00 AM to 1:00 PM</p>
                        </li>
                        <li style={styles.listItem}>
                            <strong>Booking #3:</strong>
                            <p>Studio C - August 10, 2024 - 6:00 PM to 8:00 PM</p>
                        </li>
                    </ul>
                </div>
                <div style={styles.section}>
                    <h2 style={styles.subHeader}>Update Profile</h2>
                    <form style={styles.form} onSubmit={handleProfileUpdate}>
                        <label style={styles.label}>Name:</label>
                        <input style={styles.input} type="text" defaultValue="" required />
                        <label style={styles.label}>Email:</label>
                        <input style={styles.input} type="email" defaultValue="" required />
                        <label style={styles.label}>Phone:</label>
                        <input style={styles.input} type="tel" defaultValue="" required />
                        <button style={styles.button} type="submit">Update Profile</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

const styles = {
    container: {
        padding: '30px',
        fontFamily: "'Ubuntu', sans-serif",
        maxWidth: '800px',
        margin: 'auto',
        backgroundColor: '#f9f9f9',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        marginTop: '30px',
    },
    header: {
        fontSize: '42px',
        color: '#333',
        textAlign: 'center',
        marginBottom: '40px',
    },
    subHeader: {
        fontSize: '32px',
        color: '#555',
        marginBottom: '20px',
        borderBottom: '2px solid #ddd',
        paddingBottom: '10px',
    },
    section: {
        marginBottom: '50px',
    },
    profileInfo: {
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
    list: {
        listStyleType: 'none',
        paddingLeft: '0',
    },
    listItem: {
        marginBottom: '20px',
        padding: '15px',
        backgroundColor: '#fff',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        transition: 'transform 2s ease-in-out',
    },
    listItemHover: {
        transform: 'translateY(5px)',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '500px',
        margin: 'auto',
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    label: {
        marginBottom: '10px',
        fontSize: '18px',
        color: '#333',
    },
    input: {
        marginBottom: '20px',
        padding: '12px',
        fontSize: '18px',
        border: '2px solid #ccc',
        borderRadius: '6px',
        outline: 'none',
        transition: 'border-color 0.3s ease',
    },
    inputFocus: {
        borderColor: '#007BFF',
    },
    button: {
        padding: '12px 20px',
        fontSize: '18px',
        color: '#fff',
        backgroundColor: '#080808',
        border: 'none',
        borderRadius: '6px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
    },
    buttonHover: {
        backgroundColor: '#080808',
    },
};

export default ProfilePage;
