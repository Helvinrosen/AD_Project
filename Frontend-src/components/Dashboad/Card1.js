import React, { useState, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { CartContext } from './context/CartContext'; // Import CartContext
import './Card.css';

function Cards() {
  const [showModal, setShowModal] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { addToCart } = useContext(CartContext); // Use CartContext

  const products = [
    { name: 'Camera (Mirrorless)', price: 1000, readings: "High quality mirrorless camera.", imgSrc: "https://www.capturewithnikon.in/wp-content/uploads/2020/12/Understanding-the-Basics-of-a-Mirrorless-Camera.jpg" },
    { name: 'Microphones', price: 150, readings: "Professional microphones.", imgSrc: "https://cdn.prod.website-files.com/655e0fa544c67c1ee5ce01c7/655e0fa544c67c1ee5ce1178_different-types-of-microphones-which-one-do-you-need-header.jpeg" },
    { name: 'Studio Monitors', price: 500, readings: "High fidelity studio monitors.", imgSrc: "https://dt7v1i9vyp3mf.cloudfront.net/styles/news_large/s3/imagelibrary/M/Monitors_01-qmB8Eq3lUISzwy3iA1BnIrgQdm5A7W4a.jpg" },
    { name: 'Lighting (Softboxes)', price: 300, readings: "Softbox lighting for studios.", imgSrc: "https://img.freepik.com/free-vector/photo-studio-with-lighting-equipment-flash-spotlight-softbox_1284-42324.jpg" },
    { name: 'Audio Interface', price: 200, readings: "High performance audio interface.", imgSrc: "https://m.media-amazon.com/images/I/51dcxH44lpL._AC_UF1000,1000_QL80_.jpg" },
    { name: 'Gimbel', price: 250, readings: "Stabilize your shots with a gimbel.", imgSrc: "https://www.crazyshotdrones.com.au/cdn/shop/products/241e7d22a743ca5d4778bb1b14614860_large_eb73d78d-ca78-43b3-b49c-1061c4b31405.jpg?v=1614923454" }
  ];

  const handleBookNow = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);

  const handleAddItems = () => {
    if (selectedProduct) {
      addToCart({ name: selectedProduct.name, quantity, price: selectedProduct.price }); // Add item to cart with price
    }
    setShowModal(false);
  };

  return (
    <div className='cardcontainer'>
      <div className='cardbox'>
        {products.map((product, index) => (
          <Card key={index} className='card hover-div'>
            <Card.Img variant="top" src={product.imgSrc} className="card-img-top" />
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text>
                Price: ₹{product.price}
              </Card.Text>
              <p>{product.readings}</p>
              <div className="card-button-container" >
                <Button variant="primary" onClick={() => handleBookNow(product)} style={{backgroundColor:'black',border:'none'}}>Rent now</Button>
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header  closeButton>
          <Modal.Title>Rent {selectedProduct?.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formQuantity">
              <Form.Label>Quantity</Form.Label>
              <Form.Control
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                min="1"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose} style={{backgroundColor:'black',border:'none'}}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAddItems} style={{backgroundColor:'black',border:'none'}}>
            Add Items
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Cards;
