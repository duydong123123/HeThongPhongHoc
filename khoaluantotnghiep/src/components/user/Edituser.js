import React, { useState, useEffect } from 'react';
import { Layout, Card, Typography, Input, Modal, Form, Button, Avatar, message, Select, Row, Col } from 'antd';
import { UserOutlined, ArrowLeftOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;
const { Option } = Select;

const Edituser = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [form] = Form.useForm();
  const [addForm] = Form.useForm();
  const [userData, setUserData] = useState(null);
  const [users, setUsers] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState('');

  useEffect(() => {
    // Fetch user data when component mounts
    const fetchUserData = async () => {
      try {
        const response = await fetch('https://672ab9d2976a834dd024325b.mockapi.io/user'); // Replace with your actual API endpoint
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        setUsers(data);
        
        // Set default selected user as the first user in the list
        if (data.length > 0) {
          setSelectedUserId(data[0].id);
          setUserData(data[0]);
        }
      } catch (error) {
        message.error('Không thể tải thông tin người dùng.');
        console.error(error);
      }
    };

    fetchUserData();
  }, []);

  const handleUserChange = (userId) => {
    const selectedUser = users.find(user => user.id === userId);
    setUserData(selectedUser);
    setSelectedUserId(userId);
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const openAddModal = () => setIsAddModalOpen(true);
  const closeAddModal = () => setIsAddModalOpen(false);

  const handleFormSubmit = async (values) => {
    try {
      const response = await fetch(`https://672ab9d2976a834dd024325b.mockapi.io/user/${selectedUserId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) throw new Error('Network response was not ok');
      const updatedUser = await response.json();
      
      // Update the user in the state
      setUsers((prevUsers) =>
        prevUsers.map((user) => (user.id === selectedUserId ? updatedUser : user))
      );
      setUserData(updatedUser);
      message.success('Thông tin người dùng đã được cập nhật thành công.');
      closeModal();
    } catch (error) {
      message.error('Không thể cập nhật thông tin người dùng.');
      console.error(error);
    }
  };

  const handleAddUser = async (values) => {
    try {
      const response = await fetch('https://672ab9d2976a834dd024325b.mockapi.io/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) throw new Error('Network response was not ok');
      const addedUser = await response.json();
      setUsers((prevUsers) => [...prevUsers, addedUser]);
      message.success('Người dùng mới đã được thêm thành công.');
      closeAddModal();
    } catch (error) {
      message.error('Không thể thêm người dùng mới.');
      console.error(error);
    }
  };

  const handleDeleteUser = async () => {
    try {
      const response = await fetch(`https://672ab9d2976a834dd024325b.mockapi.io/user/${selectedUserId}`, {
        method: 'DELETE',
      });

      if (!response.ok) throw new Error('Network response was not ok');
      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== selectedUserId));
      setUserData(null);
      setSelectedUserId('');
      message.success('Người dùng đã được xóa thành công.');
    } catch (error) {
      message.error('Không thể xóa người dùng.');
      console.error(error);
    }
  };

  return (
    <Layout style={{ minHeight: '100vh', backgroundColor: '#f0f2f5', padding: '24px' }}>
      <Row justify="start" align="middle" style={{ marginBottom: '24px' }}>
        <Button 
          type="link" 
          icon={<ArrowLeftOutlined />} 
          onClick={() => window.history.back()}
        >
          Trở lại
        </Button>
      </Row>
      <Row justify="center" align="middle">
        <Col xs={24} sm={16} md={12} lg={8} xl={6}>
          <Card style={{ textAlign: 'center', padding: '24px', borderRadius: '8px' }}>
            <Avatar size={80} icon={<UserOutlined />} style={{ marginBottom: '16px' }} />
            <Title level={4}>Thông tin sinh viên</Title>

            <Select
              style={{ width: '100%', marginBottom: '16px' }}
              value={selectedUserId}
              onChange={handleUserChange}
            >
              {users.map(user => (
                <Option key={user.id} value={user.id}>
                  {user.name}
                </Option>
              ))}
            </Select>

            <div style={{ textAlign: 'left', marginBottom: '16px' }}>
              <Text strong>MSSV:</Text> <Text>{userData ? userData.id : 'Loading...'}</Text>
              <br />
              <Text strong>Họ tên:</Text> <Text>{userData ? userData.name : 'Loading...'}</Text>
              <br />
              <Text strong>Email:</Text> <Text>{userData ? userData.email : 'Loading...'}</Text>
              <br />
              <Text strong>Vai trò:</Text> <Text>{userData ? userData.role : 'Loading...'}</Text>
              <br />
              <Text strong>Địa chỉ:</Text> <Text>{userData ? userData.address : 'Loading...'}</Text>
              <br />
              <Text strong>Số điện thoại:</Text> <Text>{userData ? userData.phone : 'Loading...'}</Text>
            </div>
            <Button type="primary" style={{ width: '100%', marginBottom: '8px' }} onClick={openModal}>
              Chỉnh sửa thông tin
            </Button>
            <Button type="default" style={{ width: '100%', marginBottom: '8px' }} onClick={openAddModal}>
              Thêm người dùng
            </Button>
            <Button type="danger" style={{ width: '100%' }} onClick={handleDeleteUser}>
              Xóa người dùng
            </Button>
          </Card>
        </Col>
      </Row>

      {/* Modal for Editing User Details */}
      <Modal title="Chỉnh sửa thông tin người dùng" open={isModalOpen} onCancel={closeModal} footer={null} centered>
        <Form
          form={form}
          layout="vertical"
          initialValues={userData}
          onFinish={handleFormSubmit}
        >
          <Form.Item label="ID Người Dùng" name="id">
            <Input disabled />
          </Form.Item>
          <Form.Item label="Tên" name="name" rules={[{ required: true, message: 'Vui lòng nhập tên' }]}> 
            <Input />
          </Form.Item>
          <Form.Item label="Email" name="email" rules={[{ required: true, message: 'Vui lòng nhập email' }]}> 
            <Input />
          </Form.Item>
          <Form.Item label="Vai trò" name="role" rules={[{ required: true, message: 'Vui lòng nhập vai trò' }]}> 
            <Input />
          </Form.Item>
          <Form.Item label="Địa chỉ" name="address"> 
            <Input />
          </Form.Item>
          <Form.Item label="Số điện thoại" name="phone"> 
            <Input />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
              Lưu thay đổi
            </Button>
            <Button style={{ width: '100%', marginTop: '8px' }} onClick={closeModal}>
              Hủy bỏ
            </Button>
          </Form.Item>
        </Form>
      </Modal>

      {/* Modal for Adding New User */}
      <Modal title="Thêm người dùng mới" open={isAddModalOpen} onCancel={closeAddModal} footer={null} centered>
        <Form
          form={addForm}
          layout="vertical"
          onFinish={handleAddUser}
        >
          <Form.Item label="ID Người Dùng" name="id" rules={[{ required: true, message: 'Vui lòng nhập ID' }]}> 
            <Input />
          </Form.Item>
          <Form.Item label="Tên" name="name" rules={[{ required: true, message: 'Vui lòng nhập tên' }]}> 
            <Input />
          </Form.Item>
          <Form.Item label="Email" name="email" rules={[{ required: true, message: 'Vui lòng nhập email' }]}> 
            <Input />
          </Form.Item>
          <Form.Item label="Vai trò" name="role" rules={[{ required: true, message: 'Vui lòng nhập vai trò' }]}> 
            <Input />
          </Form.Item>
          <Form.Item label="Địa chỉ" name="address"> 
            <Input />
          </Form.Item>
          <Form.Item label="Số điện thoại" name="phone"> 
            <Input />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
              Thêm người dùng
            </Button>
            <Button style={{ width: '100%', marginTop: '8px' }} onClick={closeAddModal}>
              Hủy bỏ
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </Layout>
  );
};

export default Edituser;
