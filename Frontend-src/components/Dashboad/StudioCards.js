import React, { useState, useContext } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { DateRangePicker } from 'react-date-range';
import { addDays } from 'date-fns';
import './Stcards.css';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { CartContext } from './context/CartContext'; // Import CartContext

function StudioCards() {
  const [showModal, setShowModal] = useState(false);
  const [selectedStudio, setSelectedStudio] = useState(null);
  const [selectedDates, setSelectedDates] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 1),
      key: 'selection'
    }
  ]);
  const [rentAmount, setRentAmount] = useState(0);
  const [bookedStudios, setBookedStudios] = useState([]); // Track booked studios

  const { addToCart } = useContext(CartContext); // Use CartContext

  const studios = [
    {
      name: 'Sunset Sound Studio',
      address: '6650 Sunset Blvd, Los Angeles, CA 90028',
      imgSrc: 'https://assets-global.website-files.com/5fa0baa5ea5c262586cf8fd0/60bed84a0b69857e1a899396_Best%20Photo%20Studios%20in%20Los%20Angeles%20-%20Featured%20Image%20-%20Wrapbook.jpg',
      rentPerDay: 500
    },
    {
        name: 'Abbey Road Studios',
        address: '3 Abbey Rd, London NW8 9AY, United Kingdom',
        imgSrc: 'https://i.pinimg.com/originals/58/97/b9/5897b9a30f875b1db5872894c6a23e0b.jpg',
        rentPerDay: 800
      },
      {
        name: 'Electric Lady Studios',
        address: '52 W 8th St, New York, NY 10011',
        imgSrc: 'http://wallpapercave.com/wp/vWqogDI.jpg',
        rentPerDay: 600
      },
      {
        name: 'Capitol Studios',
        address: '1750 Vine St, Hollywood, CA 90028',
        imgSrc: 'https://spectralplex.com/wp-content/uploads/2019/12/dave-pensado-fab-factory-mix-studio-1600x1000.jpg',
        rentPerDay: 750
      },
      {
        name: 'Ocean Way Recording',
        address: '6050 Sunset Blvd, Los Angeles, CA 90028',
        imgSrc: 'https://png.pngtree.com/thumb_back/fw800/background/20230521/pngtree-studio-with-guitars-in-it-image_2683934.jpg',
        rentPerDay: 550
      },
      {
        name: 'Metropolis Studios',
        address: '70 Chiswick High Rd, Chiswick, London W4 1SY, United Kingdom',
        imgSrc: 'http://getwallpapers.com/wallpaper/full/5/f/6/391107.jpg',
        rentPerDay: 700
      }
    // ... other studios
  ];

  const handleViewDetails = (studio) => {
    setSelectedStudio(studio);
    setShowModal(true);
    calculateRent(studio.rentPerDay, selectedDates[0].startDate, selectedDates[0].endDate);
  };

  const handleClose = () => setShowModal(false);

  const handleDateChange = (ranges) => {
    const { startDate, endDate } = ranges.selection;
    setSelectedDates([ranges.selection]);
    if (selectedStudio) {
      calculateRent(selectedStudio.rentPerDay, startDate, endDate);
    }
  };

  const calculateRent = (rentPerDay, startDate, endDate) => {
    const timeDifference = endDate - startDate;
    const numberOfDays = Math.ceil(timeDifference / (1000 * 60 * 60 * 24)) + 1;
    setRentAmount(rentPerDay * numberOfDays);
  };

  const handleBookNow = () => {
    const numberOfDays = Math.ceil(
      (selectedDates[0].endDate - selectedDates[0].startDate) / (1000 * 60 * 60 * 24)) + 1;

    const bookingDetails = {
      name: selectedStudio.name,
      quantity: numberOfDays, // Number of days of booking
      price: selectedStudio.rentPerDay, // Total rent amount
    };

    addToCart(bookingDetails); // Add the booking details to the cart

    alert(`You have booked ${selectedStudio.name} for ₹${rentAmount}.`);
    setBookedStudios([...bookedStudios, selectedStudio.name]); // Mark the studio as booked
    setShowModal(false);
  };

  return (
    <div className='studio-card-container'>
      <div className='studio-card-box'>
        {studios.map((studio, index) => (
          <Card key={index} className='studio-card'>
            <Card.Img variant="top" src={studio.imgSrc} className="studio-card-img-top" />
            <Card.Body>
              <Card.Title>{studio.name}</Card.Title>
              <Card.Text>{studio.address}</Card.Text>
              {bookedStudios.includes(studio.name) ? (
                <Button variant="secondary" disabled style={{backgroundColor:'gray',border:'none'}}>
                  Previously Booked
                </Button>
              ) : (
                <Button variant="primary" onClick={() => handleViewDetails(studio)} style={{backgroundColor:'black',border:'none'}}>
                  View Details
                </Button>
              )}
            </Card.Body>
          </Card>
        ))}
      </div>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Book {selectedStudio?.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <DateRangePicker
            ranges={selectedDates}
            onChange={handleDateChange}
            minDate={new Date()}
          />
          <p>Total Rent: ₹{rentAmount}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose} style={{backgroundColor:'black',border:'none'}}>
            Close
          </Button>
          <Button variant="primary" onClick={handleBookNow} style={{backgroundColor:'black',border:'none'}}>
            Book Now
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default StudioCards;
