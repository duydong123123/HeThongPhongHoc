// HeaderComponent.js
import React from 'react';
import { Layout, Row, Col, Typography } from 'antd';
import Logo from '../images/logo.png';

const { Header } = Layout;
const { Title, Text } = Typography;

const HeaderComponent = () => (
  <Header className="header-container">
    <Row justify="center" align="middle" style={{ height: '100%'}}>
      <Col span={6} style={{ textAlign: 'center' }}>
        <img src={Logo} alt="Logo" style={{ width: '80%', maxWidth: '150px' }} />
      </Col>
      <Col span={12} className="title-header" style={{ textAlign: 'center' }}>
        <div>
          <Title level={3} >
            TRƯỜNG ĐẠI HỌC CÔNG NGHIỆP TP. HỒ CHÍ MINH
          </Title>
          <Text
            className="sub-title"
            style={{
              color: 'red',
              marginTop: '10px',
              fontSize: '24px',
              fontWeight: 'bold',  
              // display: 'block',
              textAlign: 'center', 
            }}
          >
            CỔNG THÔNG TIN SINH VIÊN
          </Text>
        </div>
      </Col>
    </Row>
  </Header>
);

export default HeaderComponent;
