import { Modal, Button, Row, Col, Image, Table } from 'antd';
import propTypes, { object } from 'prop-types'
import React, { Component, useEffect, useState } from 'react';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import styles from '../../styles/Home.module.css'

const ModalPayment = ({ openModalPayment, visiblePayment, cartPayment }: any) => {
    const [current, setCurrent] = useState(1)
    const [dataSource, setDataSource] = useState<any>([])

    useEffect(() => {
        setDataSource(cartPayment)
    }, [dataSource.length])

    const { confirm } = Modal
    const somePrice = () => {
        let Sum: number = 0
        dataSource.map((e: any) => {
            Sum += parseInt(e.pirce.replace(',', ''))*parseInt(e.amount)
        })
        return Sum
    }
    const showConfirm = () => {

        confirm({
            title: 'Do you Want to buy animal?',
            icon: <ExclamationCircleOutlined />,
            content: `All your order price ${somePrice()} Bath`,
            onOk() {
                console.log('OK');
                openModalPayment(false)
            },
            onCancel() {
                console.log('Cancel');
                openModalPayment(false)
            },
        });
    }

   

    


    return (<div>
        <Modal
            title="Shopping bag"
            visible={visiblePayment}
            onOk={() => openModalPayment(false)}
            onCancel={() => openModalPayment(false)}
            footer={null}
            width={1000}
        >
            {/* <Table dataSource={dataSource} columns={columns} /> */}
            <div style={{width:"100%"}}>
            <img style={{width:"100%"}} src="https://toppng.com/uploads/preview/fire-logo-png-svg-free-download-fire-logo-11563553513c3wo0p7dt1.png"/>
            </div>
            {   
           
                dataSource.map((e:any)=>{
                    return (<div style={{position: "relative"}} ><div style={{position: "absolute"}}>{e.product}{` x `}{e.amount}</div><div style={{textAlign:"right"}}>{(parseInt(e.pirce.replace(",",""))*parseInt(e.amount))}{` บาท`}</div></div>
                    )})
            }
            {<div style={{position: "relative"}} ><div style={{position: "absolute"}}>{`ยอดรวม`}</div><div style={{textAlign:"right"}}>{`${somePrice()}`}{` บาท`}</div></div>}
           

            <div style={{ textAlign: "right" }}>
                <button className={`${styles['button-25']}`} onClick={showConfirm} >Confirm</button>
            </div>
        </Modal>
    </div>)
}
ModalPayment.propTypes = {

    visiblePayment: propTypes.bool.isRequired,
    openModalPayment: propTypes.func.isRequired,
    cartPayment: propTypes.array.isRequired

}
export default ModalPayment;