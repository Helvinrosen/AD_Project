import React, { useEffect, useState, useRef } from 'react';
import './Detail.css';

const Detail = () => {
    const [studioTime, setStudioTime] = useState(0);
    const [happyCreators, setHappyCreators] = useState(0);
    const [studiosNationwide, setStudiosNationwide] = useState(0);
    const [investment, setInvestment] = useState(0);
    const statsRef = useRef(null); // Reference to the stats section
    const [hasCounted, setHasCounted] = useState(false); // To prevent recounting on multiple scrolls

    useEffect(() => {
        const incrementCounter = (setter, finalValue, increment, delay) => {
            let current = 0;
            const timer = setInterval(() => {
                current += increment;
                if (current >= finalValue) {
                    setter(finalValue);
                    clearInterval(timer);
                } else {
                    setter(current);
                }
            }, delay);
        };

        const handleIntersection = (entries) => {
            const [entry] = entries;
            if (entry.isIntersecting && !hasCounted) {
                // Start the counting animation
                incrementCounter(setStudioTime, 10000, 100, 10); // Counting from 0 to 10,000
                incrementCounter(setHappyCreators, 500, 10, 20); // Counting from 0 to 500
                incrementCounter(setStudiosNationwide, 15, 1, 100); // Counting from 0 to 15
                incrementCounter(setInvestment, 10, 1, 200); // Counting from 0 to 10 (crores)
                
                setHasCounted(true); // Ensure the counting only happens once
            }
        };

        const observer = new IntersectionObserver(handleIntersection, {
            threshold: 0.5, // Trigger when 50% of the element is visible
        });

        // Store the ref value in a local variable
        const currentStatsRef = statsRef.current;

        if (currentStatsRef) {
            observer.observe(currentStatsRef);
        }

        return () => {
            if (currentStatsRef) {
                observer.unobserve(currentStatsRef);
            }
        };
    }, [hasCounted]);

    return (
        <div className="rental-info-container">
            <div className='image-placeholder'>
                <img src='https://www.unstudio.com/image/2023/1/25/evabloem_unstudio_echo_exterior_007-238455128.jpg%28mediaclass-background-xl.07f7adb8a95599dcb70557da25aa6351c3fd0c58%29.jpg' style={{width:'100%',height:'60vh',marginBottom:'4vh',border:'none',borderRadius:'3vh'}} alt='Studio  Placeholder'/>
                
            </div>
            <div className="info-sections">
                <div className="info-section">
                    <div className="icon">🎥</div>
                    <h3>Professional Setup</h3>
                    <p>Our studios are equipped with high-end gear and professional lighting, ensuring that your content creation is of top-notch quality.</p>
                </div>
                <div className="info-section">
                    <div className="icon">🚀</div>
                    <h3>Instant Booking</h3>
                    <p>Book your studio space instantly and avoid lengthy processes. Get access to a professional environment whenever you need it.</p>
                </div>
                <div className="info-section">
                    <div className="icon">💼</div>
                    <h3>Affordable Packages</h3>
                    <p>Choose from a range of affordable packages tailored to meet your creative needs without breaking the bank.</p>
                </div>
                <div className="info-section">
                    <div className="icon">🌐</div>
                    <h3>Network & Collaborate</h3>
                    <p>Join a community of creators, network, and collaborate on exciting projects to grow your creative portfolio.</p>
                </div>
            </div>
            <div className="stats-section" ref={statsRef}>
                <div className="stat-item">
                    <h2>{studioTime.toLocaleString()}+</h2>
                    <p>Hours of Studio Time</p>
                </div>
                <div className="stat-item">
                    <h2>{happyCreators.toLocaleString()}+</h2>
                    <p>Happy Creators</p>
                </div>
                <div className="stat-item">
                    <h2>{studiosNationwide}+</h2>
                    <p>Studios Nationwide</p>
                </div>
                <div className="stat-item">
                    <h2>₹{investment} Cr+</h2>
                    <p>Invested in Equipment</p>
                </div>
            </div>
        </div>
    );
};

export default Detail;
