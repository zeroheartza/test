import { Dropdown, Row, Col } from 'antd'
import { useRef, useEffect, useState } from 'react'
import 'antd/dist/antd.css';
import styles from './Newpage.module.scss'

const TestPage = () => {
    const ref = useRef<HTMLDivElement>(null)
    const [logoimage, seteLogoImage] = useState("https://demo.thinkspace.ai/_next/image?url=https%3A%2F%2Fuat-concordiar-thinkspace-bucket.s3-ap-southeast-1.amazonaws.com%2FAssets%2FIcons%2FTop%2BNavigation%2FThinkspace-logo.svg&w=256&q=75")
    const [open, setOpen] = useState(false)


    const handleDiv = (info: any) => {

        console.log(info.value, 'test');

    }
    const axios = require('axios');
    const onChange = async (e: any) => {
        console.log(e.files[0], 'e');
       
    }

    return (
        // className={styles['validate-message'] 
        <>
        <div className={`${styles[`new-page`]} ${open && styles['active']}`}>
            {/* <div className={styles['main']} > */}
                <Row gutter={[16, 16]}>
                    <Col span={12}>
                        <div style={{ width: "470px", height: "100px", borderStyle: "solid", color: "#797979", borderRadius: "2em", position: "relative", borderWidth: "thin" }} onClick={()=>setOpen(!open)}>
                            {/* <input style={{ width: "470px", height: "100px", position: "absolute", overflow: "hidden", opacity: 0, zIndex: 1, cursor: "pointer" }} type="file" id="image" onChange={(e) => onChange(e.target)} /> */}
                            <div style={{ width: "100%", backgroundColor: "#FFF", position: "absolute", top: "50%", transform: "translate(0%,-50%)", textAlign: "center" }} >
                                <img style={{ width: "150px" }} src={logoimage} />
                            </div>
                        </div>
                    </Col>
                    <Col span={12}>
                        <div style={{ width: "470px", height: "100px", backgroundColor: "black", borderStyle: "solid", color: "#4360f6", borderRadius: "2em", display: "flex", borderWidth: "thin" }}>
                            <input style={{ width: "470px", height: "100px", position: "absolute", overflow: "hidden", opacity: 0, zIndex: 1, cursor: "pointer" }} type="file" id="image" onChange={(e) => onChange(e.target)} />
                            <img style={{ margin: "auto", width: "150px" }} src="https://demo.thinkspace.ai/_next/image?url=https%3A%2F%2Fuat-concordiar-thinkspace-bucket.s3-ap-southeast-1.amazonaws.com%2FAssets%2FIcons%2FTop%2BNavigation%2FThinkspace-logo.svg&w=256&q=75" />
                        </div>
                    </Col>
                </Row>
                {/* <div className={`${styles[`new-page`]} ${open && styles['active']}`}></div> */}
                <div  className={styles['content-space']}>
                    <div style={{width: "100%", height: "100px", borderStyle: "solid",marginTop:"60px", borderWidth: "thin", borderRadius: "2em" }}>
                    
                        <div>

                        </div>
                    </div>
             
                </div>

            {/* </div> */}
            {/* <div style={{height:"100px",backgroundColor:"black"}}></div> */}
            </div>
        </>
    )
}

export default TestPage