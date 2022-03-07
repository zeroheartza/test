import { Modal, Button, Row, Col, Image, Table } from 'antd';
import propTypes, { object } from 'prop-types'
import React, { Component, useEffect, useState } from 'react';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import styles from '../../styles/Home.module.css'

const ModalCart = ({ openModal, visible, visiblePayment, openModalPayment, cart,setCartPaymentFn }: any) => {
    const [current, setCurrent] = useState(1)
    const [dataSource, setDataSource] = useState<any>([])
    const [cartPayment, setCartPayment] = useState<any>([])

    useEffect(() => {
        setDataSource(cart)
    }, [dataSource.length])

    const { confirm } = Modal

    const check = (id:any,data:any) =>{
        const result = data.filter((o:any)=>o.id==id)   
        if(result.length==0){
            return true
        }
        else{
            return false
        }
    }
    const somePrice = () => {
        let Sum: number = 0
        const array: any = [] 
        const data:any = [...dataSource]
        dataSource.map((e:any)=>{
            const result = data.filter((o:any)=>o.id==e.id)
            if(check(result[0].id,array)){
                const amount = {
                    "amount":result.length
                }    
                array.push({...result[0],...amount})
            }
        })       
        console.log(array,'array');
        array.map((e:any)=>{
            Sum+=(parseInt(e.pirce.replace(",",""))*parseInt(e.amount))
        })   
        return {Sum,array}
    }
    const showConfirm = () => {
        const {Sum,array} = somePrice()

        
        confirm({
            title: 'สินค้าในตะกร้าของคุณ',
            icon: <ExclamationCircleOutlined />,
            content: (
            <>
            {array.map((e:any)=>{
                return (<div style={{position: "relative"}} ><div style={{position: "absolute"}}>{e.product}{` x `}{e.amount}</div><div style={{textAlign:"right"}}>{(parseInt(e.pirce.replace(",",""))*parseInt(e.amount))}{` บาท`}</div></div>)
            })}
            {<div style={{position: "relative"}} ><div style={{position: "absolute"}}>{`ยอดรวม`}</div><div style={{textAlign:"right"}}>{`${Sum}`}{` บาท`}</div></div>}
            </>),
            onOk() {
                console.log('OK');
                openModal(false)
                openModalPayment(true)
                setCartPaymentFn(array)
            },
            onCancel() {
                console.log('Cancel');
                openModal(false)
            },
        });
    }

    const columns = [
        {
            title: 'product',
            dataIndex: 'product',
            sorter: (a: any, b: any) => a.product.localeCompare(b.product),
            key: 'product',
            render: (text: any, record: any) => {
                return (
                    <div >
                        <div >
                            <Row style={{ display: "flex", alignItems: 'center' }}>
                                <Col span={5} >
                                    {
                                        <Image
                                            src={record.img}
                                            width={'25px'}
                                            height={'25px'}
                                            style={{ borderRadius: '50%' }} />

                                    }
                                </Col>
                                <Col span={19} >
                                    <span >{record.product}</span>
                                </Col>
                            </Row>
                        </div>
                    </div>
                );
            },
        },
        {
            title: 'type',
            dataIndex: 'type',
            sorter: (a: any, b: any) => a.type.localeCompare(b.type),
            key: 'type',
        },

        {
            title: 'pirce',
            dataIndex: 'pirce',
            sorter: (a: any, b: any) => a.pirce.localeCompare(b.pirce),
            key: 'pirce',
        },
        {
            title: 'จัดการสินค้า',
            key: 'delete item',
            dataIndex: 'delete item',
            render: (text: any, record: any) => (
                <button className={`${styles['button-24']}`}
                    onClick={() => {
                        setDataSource(dataSource.splice(dataSource.indexOf(record), 1))
                        if (dataSource.length == 0) {
                            setDataSource([])
                        }
                    }}>
                    {"ยกเลิกสินค้านี้"}
                </button>
            ),
        },
    ];


    return (<div>
        <Modal
            title="Shopping bag"
            visible={visible}
            onOk={() => openModal(false)}
            onCancel={() => openModal(false)}
            footer={null}
            width={1000}
        >
            <Table dataSource={dataSource} columns={columns} />
            <div style={{ textAlign: "right" }}>
                <button className={`${styles['button-25']}`} onClick={showConfirm} >Confirm</button>
            </div>
        </Modal>
    </div>)
}
ModalCart.propTypes = {

    visible: propTypes.bool.isRequired,
    visiblePayment: propTypes.bool.isRequired,
    openModalPayment: propTypes.func.isRequired,
    openModal: propTypes.func.isRequired,
    cart: propTypes.array.isRequired,
    setCartPaymentFn: propTypes.func.isRequired,

}
export default ModalCart;