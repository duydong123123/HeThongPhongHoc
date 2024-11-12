import React, { useEffect } from 'react';
import { Form, Input, Button, message, Select, Space } from 'antd';
import axios from 'axios';

const { Option } = Select;

const UpdateRoomInformation = ({ roomData, onUpdate, onClose }) => {
  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue(roomData); // Prepopulate form with selected room data
  }, [roomData, form]);

  const updateRoom = async (values) => {
    try {
      const updatedRoom = { key: roomData.key, ...values };

      // PUT request to update room info (Replace '/api/room-schedule' with your API)
      await axios.put(`/api/room-schedule/${roomData.key}`, updatedRoom);
      message.success('Cập nhật thông tin phòng thành công!');
      onUpdate(updatedRoom); // Callback to parent component to update state
      form.resetFields();
      onClose(); // Close the modal after updating
    } catch (error) {
      message.error('Cập nhật phòng học thất bại!');
    }
  };

  // Reset form fields
  const handleReset = () => {
    form.resetFields();
  };

  return (
    <div style={{ padding: '20px', backgroundColor: '#ffffff', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', maxWidth: '500px', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#1890ff', fontWeight: '600' }}>Cập Nhật Phòng Học</h2>
      <Form form={form} onFinish={updateRoom} layout="vertical">
        
        {/* Session field */}
        <Form.Item
          name="session"
          label="Ca Học"
          rules={[{ required: true, message: 'Vui lòng chọn ca học!' }]}
        >
          <Select placeholder="Chọn ca học">
            <Option value="sáng">Sáng</Option>
            <Option value="chiều">Chiều</Option>
          </Select>
        </Form.Item>

        {/* Dynamic fields for each day of the week */}
        {['thu2', 'thu3', 'thu4', 'thu5', 'thu6', 'thu7', 'cn'].map(day => (
          <Form.Item key={day} label={`Thông tin ${day === 'cn' ? 'Chủ Nhật' : `Thứ ${day.slice(3)}`}`}>
            <Input.Group compact>
              <Form.Item
                name={[day, 'room']}
                noStyle
                rules={[{ required: false }]}
              >
                <Select placeholder="Phòng" style={{ width: '30%' }}>
                  <Option value="trống">Trống</Option> {/* "Trống" as an option */}
                  {[...Array(12)].map((_, index) => (
                    <Option key={`A${index + 1}`} value={`A${index + 1}`}>{`A${index + 1}`}</Option>
                  ))}
                  {[...Array(12)].map((_, index) => (
                    <Option key={`B${index + 1}`} value={`B${index + 1}`}>{`B${index + 1}`}</Option>
                  ))}
                </Select>
              </Form.Item>

              <Form.Item
                name={[day, 'time']}
                noStyle
                rules={[{ required: false }]}
              >
                <Input placeholder="Thời gian" style={{ width: '35%', marginLeft: '10px' }} />
              </Form.Item>

              <Form.Item
                name={[day, 'courseCode']}
                noStyle
                rules={[{ required: false }]}
              >
                <Input placeholder="Mã học phần" style={{ width: '30%', marginLeft: '10px' }} />
              </Form.Item>
            </Input.Group>
          </Form.Item>
        ))}

        {/* Button Actions */}
        <Space style={{ width: '100%', justifyContent: 'center', marginTop: '20px' }}>
          <Button 
            type="primary" 
            htmlType="submit" 
            style={{
              width: '100px',
              height: '36px',
              backgroundColor: '#1890ff',
              borderColor: '#1890ff',
              fontWeight: 'bold',
              borderRadius: '6px',
              transition: 'all 0.3s ease',
              boxShadow: '0 2px 5px rgba(0, 0, 0, 0.15)',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = '#40a9ff';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = '#1890ff';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            Cập Nhật
          </Button>

          <Button 
            type="default" 
            onClick={handleReset} 
            style={{
              width: '100px',
              height: '36px',
              backgroundColor: '#f0f0f0',
              borderColor: '#d9d9d9',
              fontWeight: 'bold',
              borderRadius: '6px',
              transition: 'all 0.3s ease',
              boxShadow: '0 2px 5px rgba(0, 0, 0, 0.15)',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = '#e6e6e6';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = '#f0f0f0';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            Đặt Lại
          </Button>

          <Button 
            type="ghost" 
            onClick={onClose} 
            style={{
              width: '100px',
              height: '36px',
              color: '#ff4d4f',
              borderColor: '#ff4d4f',
              fontWeight: 'bold',
              borderRadius: '6px',
              transition: 'all 0.3s ease',
              boxShadow: '0 2px 5px rgba(0, 0, 0, 0.15)',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = '#ffccc7';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            Đóng
          </Button>
        </Space>
      </Form>
    </div>
  );
};

export default UpdateRoomInformation;
