import React, { useEffect, useState } from 'react';
import { Form, message, Card, Button, Row, Col } from 'antd';
import 'antd/dist/antd.css';
import propTypes, { object } from 'prop-types'
const { Meta } = Card;

const Item = ({  id, product, pirce, content, img ,type,callback}: any) => {
  const handleFormSubmit = (e: any, id: number) => {
    callback(id,product, pirce, content, img,type)
  };
  return (
    <div style={{paddingRight:"7rem"}}>
      <Card style={{ width: 240, height: 350, borderRadius: 15, overflow: "hidden" }} cover={<img style={{ width: 240, height: 180 }} alt="example" src={img} />}>
        <Meta title={product}
          description={
            content.length > 50 ?
              (<div style={{
                width: "auto",
                height: "60px",
                overflow: "auto"
              }}>{content}</div>)
              : content}
        />
        <h3 style={{ left: 15, bottom: 7, position: 'absolute' }}>$ {pirce}</h3>
        <Button htmlType="submit" onClick={(e) => handleFormSubmit(e, id)} shape="round" style={{ right: 10, bottom: 10, position: 'absolute', background: "white", borderColor: "#91d5ff" }}>add to cart</Button>
      </Card>
    </div>
  )
}
Item.propTypes = {
  id: propTypes.number.isRequired,
  product: propTypes.string.isRequired,
  pirce: propTypes.string.isRequired,
  content: propTypes.string.isRequired,
  img: propTypes.string.isRequired,
  type: propTypes.string.isRequired,
  callback: propTypes.func.isRequired,
}

export default Item
