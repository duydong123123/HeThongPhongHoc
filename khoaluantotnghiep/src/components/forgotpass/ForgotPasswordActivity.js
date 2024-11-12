import React from 'react';
import { Layout, Form, Input, Button, message, Typography, Row, Col, Card } from 'antd';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import HeaderComponent from '../header/Header';

const { Title, Text } = Typography;
const { Footer, Content } = Layout;

const ForgotPasswordActivity = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const handleForgotPassword = async (values) => {
    try {
      await axios.post('/api/users/forgot-password', { email: values.email });
      message.success('Yêu cầu đặt lại mật khẩu đã được gửi!');
      form.resetFields();
      navigate('/update-password');
    } catch (error) {
      message.error('Có lỗi xảy ra. Vui lòng kiểm tra lại email của bạn.');
    }
  };

  const styles = {
    layout: {
      minHeight: '200px',
      backgroundColor: '#ffffff',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    content: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '40px 20px',
      width: '80%', // Đặt chiều rộng cho khung content
      maxWidth: '800px', // Đặt chiều rộng tối đa
      backgroundColor: '#ffffff',
    },
    card: {
      width: '800px',
      height:'300px',
      padding: '24px',
      borderRadius: '8px',
      backgroundColor: '#ffffff',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    },
    title: {
      textAlign: 'center',
      fontSize: '24px',
      fontWeight: 600,
      color: '#1890ff',
      marginBottom: '24px',
    },
    input: {
      padding: '10px',
      fontSize: '16px',
    },
    button: {
      width: 'calc(50% - 10px)',
      backgroundColor: '#1890ff',
      color: '#fff',
      border: 'none',
      padding: '10px',
      fontSize: '16px',
      fontWeight: 500,
      transition: 'background-color 0.3s ease',
      borderRadius: '4px',
    },
    buttonSecondary: {
      width: 'calc(50% - 10px)',
      backgroundColor: '#f0f0f0',
      color: '#000',
      border: 'none',
      padding: '10px',
      fontSize: '16px',
      fontWeight: 500,
      transition: 'background-color 0.3s ease',
      borderRadius: '4px',
      marginLeft: '20px',
    },
    footer: {
      textAlign: 'center',
      padding: '20px',
      backgroundColor: '#ffffff',
      borderTop: '1px solid #e8e8e8',
      width: '100%',
    },
    footerText: {
      color: '#8c8c8c',
    },
  };

  return (
    <>
      <HeaderComponent />
      <Layout style={styles.layout}>
        <Content style={styles.content}>
          <Row justify="center">
            <Col xs={24}>
              <Card bordered={false} style={styles.card}>
                <Title level={5} style={styles.title}>Quên Mật Khẩu</Title>
                <Form form={form} onFinish={handleForgotPassword} layout="vertical">
                  <Form.Item
                    name="email"
                    rules={[
                      { required: true, message: 'Vui lòng nhập địa chỉ email của bạn!' },
                      { type: 'email', message: 'Email không hợp lệ!' },
                    ]}
                  >
                    <Input placeholder="Nhập địa chỉ email của bạn" style={styles.input} />
                  </Form.Item>
                  <Form.Item>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Button type="primary" htmlType="submit" style={styles.button}>
                        Gửi Yêu Cầu
                      </Button>
                      <Button
                        type="default"
                        style={styles.buttonSecondary}
                        onClick={() => navigate(-1)}
                      >
                        Quay Lại
                      </Button>
                    </div>
                  </Form.Item>
                </Form>
              </Card>
            </Col>
          </Row>
        </Content>
        <Footer style={styles.footer}>
          <Text style={styles.footerText}>© 2024 Industrial University of Ho Chi Minh City</Text>
        </Footer>
      </Layout>
    </>
  );
};

export default ForgotPasswordActivity;
