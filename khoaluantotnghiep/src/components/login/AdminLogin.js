import React from 'react';
import { Layout, Form, Input, Button, Typography, Row, Col, Card, message } from 'antd';
import { useNavigate } from 'react-router-dom';
import HeaderComponent from '../header/Header';
const { Header, Footer, Content } = Layout;
const { Title, Text } = Typography;

const AdminLogin = () => {
  const navigate = useNavigate();

  const onFinish = (values) => {
    console.log('Admin Login Success:', values);
    if (values.username === 'admin' && values.password === 'admin123') {
      navigate('/phonghoc');
    } else {
      message.error('Đăng nhập không thành công. Vui lòng thử lại.');
    }
  };

  return (
    <>
    <HeaderComponent />
    <Layout style={{ minHeight: '100px',backgroundColor:'#fff' }}>
      <Content style={{ padding: '50px', backgroundColor: '#fff' }}>
        <Row gutter={[32, 0]} justify="center">
          {/* News Section */}
          <Col xs={24} md={12}>
            <Card title="Tin Tức - Sự Kiện" bordered={false} style={{ borderRadius: '8px', borderColor: '#1890ff', borderWidth: '1px', borderStyle: 'solid' }}>
              <div style={{ marginBottom: '16px' }}>
                <Row>
                  <Col span={4}>
                    <Text strong style={{ color: 'blue', fontSize: '18px' }}>Tháng 9 <br /> 01</Text>
                  </Col>
                  <Col span={20}>
                    <Text>
                      <a href="#" style={{ color: '#1890ff', fontWeight: '500' }}>Hướng dẫn học trực tuyến bằng MS-TEAM</a> <br />
                      Hướng dẫn học sinh học trực tuyến <br />
                      <a href="#" style={{ color: 'red' }}>Xem chi tiết</a>
                    </Text>
                  </Col>
                </Row>
              </div>
              <div>
                <Row>
                  <Col span={4}>
                    <Text strong style={{ color: 'blue', fontSize: '18px' }}>Tháng 9 <br /> 02</Text>
                  </Col>
                  <Col span={20}>
                    <Text>
                      <a href="#" style={{ color: '#1890ff', fontWeight: '500' }}>Hướng dẫn xem phòng học trên web</a> <br />
                      Hướng dẫn sinh viên xem phòng học <br />
                      <a href="#" style={{ color: 'red' }}>Xem chi tiết</a>
                    </Text>
                  </Col>
                </Row>
              </div>
            </Card>
          </Col>

          {/* Admin Login Section */}
          <Col xs={24} md={12}>
            <Card bordered={false} style={{ borderRadius: '8px', borderColor: '#1890ff', borderWidth: '1px', borderStyle: 'solid' }}>
              <Title level={5} style={{ color: '#008000' }}>Đăng Nhập Quản Trị</Title>
              <Form layout="vertical" onFinish={onFinish}>
                <Form.Item label="" name="username" rules={[{ required: true, message: 'Vui lòng nhập tài khoản!' }]}>
                  <Input placeholder="Nhập tài khoản" />
                </Form.Item>
                <Form.Item label="" name="password" rules={[{ required: true, message: 'Vui lòng nhập mật khẩu!' }]}>
                  <Input.Password placeholder="Nhập mật khẩu" />
                </Form.Item>
                <div style={{ textAlign: 'right', marginBottom: '16px' }}>
                  <a href="/forgot-password" style={{ color: '#1890ff' }}>Quên mật khẩu?</a>
                </div>
                <Form.Item>
                  <Row gutter={16}>
                    <Col span={12}>
                      <Button type="default" style={{ width: '100%' }} onClick={() => navigate(-1)}>
                        Quay Lại
                      </Button>
                    </Col>
                    <Col span={12}>
                      <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
                        Đăng Nhập
                      </Button>
                    </Col>
                  </Row>
                </Form.Item>
              </Form>
            </Card>
          </Col>
        </Row>
      </Content>

      <Footer style={{ textAlign: 'center', backgroundColor: '#ffffff', borderTop: '1px solid #e8e8e8' }}>
        <Text style={{ color: '#1890ff' }}>© 2024 Industrial University of Ho Chi Minh City</Text>
      </Footer>
    </Layout>
    </>
  );
};

export default AdminLogin;
