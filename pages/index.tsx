import React, { useState } from 'react';
import 'antd/dist/antd.css';
import Item from '../components/item/index'
import Navbarx from '../components/menu/index'
import obj from '../data.json'
import ModalCart from '../components/modalCart';
import ModalPayment from '../components/modalPayment';
const index = () => {
  const [cart, setCart] = useState<Array<any>>([])
  const [cartPayment, setCartPayment] = useState<Array<any>>([])
  const [visible, setVisible] = useState(false);
  const [visiblePayment, setVisiblePayment] = useState(false);

  const functioncallback = (id: number, product: string, pirce: string, content: string, img: string,type:string) => {
    const data = {
      id: id,
      product: product,
      pirce: pirce,
      content: content,
      img: img,
      type:type
    }
    cart.push(data)
    setCart(cart)
  }
  const openModal = (status: boolean) => {
    setVisible(status)
  }

  const setCartPaymentFn = (cart: any) => {
    setCartPayment(cart)
  }
  const openModalPayment = (status: boolean) => {
    console.log(status);
    
    setVisiblePayment(status)
  }
  return (<div style={{ backgroundColor: "#f8f8f8" }}><Navbarx visible={visible} openModal={openModal} cart={cart} />
    <div style={{ marginLeft: "3rem", marginRight: "3rem", marginTop: "3rem" }}>
      {obj.data.map((e) => {
        return <>
          <h1>{e.type}</h1>
          <div style={{
            display: "flex",
            width: "100%",
            overflowX: "scroll",
          }}>
            {e.items.map((o) => {
              return <Item id={o.id} product={o.product} pirce={o.pirce} content={o.content} img={o.img} type={e.type} callback={functioncallback} />
            })}</div>
        </>


      })}
    </div>
    <div>
      {(visible)?(<>
        <ModalCart visible={visible} visiblePayment={visiblePayment} openModalPayment={openModalPayment} openModal={openModal} cart={cart} setCartPaymentFn={setCartPaymentFn} />
      </>):<></>
      }
    </div>
    <div>
      {(visiblePayment)?(<>
        <ModalPayment visiblePayment={visiblePayment} openModalPayment={openModalPayment} cartPayment={cartPayment} />
      </>):<></>
      }
    </div>
  </div>
 
  )

}



export default index
