import React from 'react';
import {Button, Col, Row, Statistic} from 'antd';
import styles from '@/app/BusinessPage/BusinessPage.module.css';


function Business() {
    return (
    <>
        <Row gutter={16}
             className={styles['row']}>
            <Col span={12}>
                <Statistic title="Active Users" value={112893}/>
            </Col>
            <Col span={12}>
                <Statistic title="Account Balance (CNY)" value={112893} precision={2}/>
                <Button style={{marginTop: 16}} type="primary">
                    Recharge
                </Button>
            </Col>
            <Col span={12}>
                <Statistic title="Active Users" value={112893} loading/>
            </Col>
        </Row>
    </>
    );
}

export default Business;