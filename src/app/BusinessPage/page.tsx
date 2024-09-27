import Head from "next/head";
import React from 'react';
import {Button, Col, Row, Statistic} from 'antd';

const Business: React.FC = () => (
    <>
        <Head>
            <title>Для бизнеса</title>
        </Head>
        <Row gutter={16}>
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

export default Business;