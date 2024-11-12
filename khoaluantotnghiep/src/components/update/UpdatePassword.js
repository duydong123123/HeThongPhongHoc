import React from 'react';
import { Layout, Form, Input, Button, message, Typography, Row, Col, Card } from 'antd';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/UpdatePassword.css'; // Assuming you have global styles here
import HeaderComponent from '../header/Header';

const { Title, Text } = Typography;
const { Header, Footer, Content } = Layout;

const UpdatePasswordActivity = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate(); // Initialize navigate

  const handleUpdatePassword = async (values) => {
    try {
      // Make sure to replace this URL with your actual API endpoint
      await axios.put(`/api/users/update-password/${values.userId}`, { newPassword: values.newPassword });
      message.success('Mật khẩu đã được cập nhật!'); // Success message
      form.resetFields();

      // Navigate to the login page after a successful update
      navigate('/login'); // Navigate to the login page
    } catch (error) {
      console.error('Update Password Error:', error); // Log error for debugging
      message.error('Có lỗi xảy ra!'); // Error message
    }
  };

  return (
    <>
    <HeaderComponent />
    <Layout style={{ minHeight: '100vh', background: '#f0f2f5' }}>
      <Content style={{ padding: '50px', display: 'flex', justifyContent: 'center', backgroundColor: '#fff' }}>
        <Row justify="center" style={{ width: '100%', maxWidth: '600px' }}>
          <Col xs={24}>
            <Card bordered={false} style={{ borderRadius: '8px', borderColor: '#1890ff', borderWidth: '1px', borderStyle: 'solid' }}>
              <Title level={5} style={{ color: '#008000', textAlign: 'center' }}>Cập Nhật Mật Khẩu</Title>
              <Form form={form} onFinish={handleUpdatePassword} layout="vertical">
                <Form.Item name="userId" label="ID Người Dùng" rules={[{ required: true, message: 'Vui lòng nhập ID người dùng!' }]}>
                  <Input placeholder="Nhập ID người dùng" />
                </Form.Item>
                <Form.Item name="newPassword" label="Mật Khẩu Mới" rules={[{ required: true, message: 'Vui lòng nhập mật khẩu mới!' }]}>
                  <Input.Password placeholder="Nhập mật khẩu mới" />
                </Form.Item>
                <Form.Item>
                  <Button type="primary" htmlType="submit" style={{ width: '100%' }}>Cập Nhật Mật Khẩu</Button>
                </Form.Item>
              </Form>
            </Card>
          </Col>
        </Row>
      </Content>

      <Footer style={{ textAlign: 'center', backgroundColor: '#ffffff', borderTop: '1px solid #e8e8e8' }}>
        <Text style={{ color: '#1890ff' }}>© 2024 Trường Đại học Công nghiệp Thành phố Hồ Chí Minh</Text>
      </Footer>
    </Layout>
    </>
  );
};

export default UpdatePasswordActivity;
