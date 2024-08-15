import React from 'react';
import { useNavigate } from 'react-router-dom';
import PrimarySearchAppBar from './Header';

const HelpPage = () => {
    
    const navigate = useNavigate();

    const handleHelpSubmit = (e) => {
        e.preventDefault();
        alert("Message submitted");
        navigate('/home');
    };

    return (
        <div>
            <PrimarySearchAppBar />
            <div style={styles.container}>
                <h1 style={styles.header}>How can we help?</h1>
                <div style={styles.section}>
                    <h2 style={styles.subHeader}>Frequently Asked Questions</h2>
                    <ul style={styles.list}>
                        <li style={styles.listItem}>
                            <strong>How do I reset my password?</strong>
                            <p>To reset your password, go to the login page and click on "Forgot Password." Follow the instructions sent to your email.</p>
                        </li>
                        <li style={styles.listItem}>
                            <strong>How can I contact support?</strong>
                            <p>You can contact support by emailing us at HRstudio@example.com or calling our hotline at 1-800-777-1313.</p>
                        </li>
                        <li style={styles.listItem}>
                            <strong>Where can I find the user manual?</strong>
                            <p>The user manual can be downloaded from the "Documentation" section of our website.</p>
                        </li>
                    </ul>
                </div>
                <div style={styles.section}>
                    <h2 style={styles.subHeader}>Contact Us</h2>
                    <p>If you have any other questions, feel free to reach out!</p>
                    <form style={styles.form} onSubmit={handleHelpSubmit}>
                        <label style={styles.label}>Your Name:</label>
                        <input style={styles.input} type="text" placeholder="Enter your name" required />
                        <label style={styles.label}>Your Email:</label>
                        <input style={styles.input} type="email" placeholder="Enter your email" required />
                        <label style={styles.label}>Your Message:</label>
                        <textarea style={styles.textarea} placeholder="Enter your message" required></textarea>
                        <button style={styles.button} type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

const styles = {
    container: {
        padding: '30px',
        fontFamily: "'Ubuntu', sans-serif" ,
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
    textarea: {
        marginBottom: '20px',
        padding: '12px',
        fontSize: '18px',
        border: '2px solid #ccc',
        borderRadius: '6px',
        outline: 'none',
        transition: 'border-color 0.3s ease',
        minHeight: '120px',
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

export default HelpPage;
