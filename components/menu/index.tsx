
import "@fortawesome/fontawesome-free/css/all.css";
import propTypes, { object } from 'prop-types'
import React, { Component, useEffect, useState } from 'react';


const Navbar = ({ openModal, visible, cart }: any) => {
  const [num, setNum] = useState(0)
  useEffect(() => {
    setNum(cart.length)
  }, [cart.length])
  const handleModal = () => {
    openModal(true)
  }

  return (<div style={{ height: "80px", boxShadow: "0px 1px 12px #f0f0f0" }}>
    <div style={{ textAlign: "right", padding: "2%" }}>
      <i className="fa-solid fa-cart-arrow-down fa-2x" style={{ textAlign: "right", top: "30px", cursor: "pointer" }} onClick={handleModal}></i>
    </div>
  </div>);


}
Navbar.propTypes = {

  visible: propTypes.bool.isRequired,
  openModal: propTypes.func.isRequired,
  cart: propTypes.array.isRequired,

}
export default Navbar;