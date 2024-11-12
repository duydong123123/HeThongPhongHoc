import React, { useState, useEffect } from 'react';
import { Layout, Menu, Table, Row, Col, Card, Button, Typography, Input, Select, DatePicker, Modal, message, Popconfirm } from 'antd';
import { useNavigate } from 'react-router-dom';
import { DownOutlined } from '@ant-design/icons'; // Import icon for dropdown indicator
import AddNewRow from '../add/AddNewRow';
import UpdateRoomInformation from '../update/UpdateRoomInformation';
import StatisticsRoom from '../phong/StatisticsRoom';
import HeaderComponent from '../header/Header';

const { Header, Sider, Content, Footer } = Layout;
const { Title } = Typography;
const { Option } = Select;
const { SubMenu } = Menu; // Import SubMenu from Menu

const PhongHoc = () => {
  const navigate = useNavigate();
  const [dataSource, setDataSource] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBuilding, setSelectedBuilding] = useState(null);
  const [selectedFloor, setSelectedFloor] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [isAddRowVisible, setIsAddRowVisible] = useState(false);
  const [isUpdateRoomVisible, setIsUpdateRoomVisible] = useState(false);
  const [isStatisticsModalVisible, setIsStatisticsModalVisible] = useState(false);

  useEffect(() => {
    // Fetch data from the API
    const fetchData = async () => {
      try {
        const response = await fetch('https://672ab9d2976a834dd024325b.mockapi.io/phonghoc');
        if (response.ok) {
          const data = await response.json();
          const dataWithKeys = data.map((item, index) => ({ ...item, key: item.id || index }));
          setDataSource(dataWithKeys);
        } else {
          console.error('Failed to fetch data');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  // Search and filter handlers
  const handleSearch = (e) => setSearchQuery(e.target.value);
  const handleFloorChange = (value) => setSelectedFloor(value);
  const handleDateChange = (date) => setSelectedDate(date);

  // Handle building selection
  const handleBuildingSelect = (building) => {
    setSelectedBuilding(building);
  };

  // Filter data based on search and selected building
  const filteredData = dataSource.filter(item => {
    const matchesSearch = searchQuery ? item.session.includes(searchQuery) : true;
    const matchesBuilding = selectedBuilding ? item.building.startsWith(selectedBuilding) : true;
    const matchesFloor = selectedFloor ? item.floor === selectedFloor : true;
    const matchesDate = selectedDate ? item.date === selectedDate.format('YYYY-MM-DD') : true;
    return matchesSearch && matchesBuilding && matchesFloor && matchesDate;
  });

  // Handlers for Add, Update, Delete Room, and Delete by Day
  const handleAddNewRow = (newRow) => {
    setDataSource(prevDataSource => [...prevDataSource, { ...newRow, key: newRow.id || prevDataSource.length }]);
    setIsAddRowVisible(false);
    message.success('Phòng học mới đã được thêm thành công!');
  };

  const handleUpdateRoomInformation = (updatedRow) => {
    setDataSource(prevDataSource => {
      const updatedDataSource = prevDataSource.map(row => row.key === updatedRow.key ? updatedRow : row);
      return updatedDataSource;
    });
    setIsUpdateRoomVisible(false);
    message.success('Thông tin phòng đã được cập nhật!');
  };

  const handleDeleteRoom = async (id) => {
    try {
      const response = await fetch(`https://672ab9d2976a834dd024325b.mockapi.io/phonghoc/${id}`, {
        method: 'DELETE'
      });
      if (response.ok) {
        setDataSource(prevDataSource => prevDataSource.filter(row => row.id !== id));
        message.success('Phòng học đã được xóa thành công!');
      } else {
        message.error('Xóa phòng học không thành công!');
      }
    } catch (error) {
      console.error('Error deleting room:', error);
      message.error('Có lỗi xảy ra khi xóa phòng học!');
    }
  };

  const handleEditUser = () => {
    navigate('/edit-user');
  };

  const handleBackToLogin = () => {
    navigate('/');
  };

  const columns = [
    {
      title: 'Buổi Học',
      dataIndex: 'session',
      key: 'session',
      align: 'center',
    },
    ...['thu2', 'thu3', 'thu4', 'thu5', 'thu6', 'thu7', 'cn'].map(day => ({
      title: `Thứ ${day.slice(3)}`,
      dataIndex: day,
      key: day,
      align: 'center',
      render: (data, record) => (
        data ? (
          <>
            <div style={{ padding: '8px', backgroundColor: '#e6f7ff', borderRadius: '5px', textAlign: 'center' }}>
              <strong>Phòng: {data.room}</strong>
              <br />
              <span>Thời gian: {data.time}</span>
              <br />
              <span>Mã Học Phần: {data.courseCode}</span>
            </div>
            <Popconfirm
              title="Bạn có chắc chắn muốn xóa phòng này không?"
              onConfirm={() => handleDeleteRoom(record.id)}
              okText="Có"
              cancelText="Không"
            >
              <Button type="danger" size="small" style={{ marginTop: 10 }}>Xóa</Button>
            </Popconfirm>
          </>
        ) : (
          <div style={{ color: '#aaa' }}>Trống</div>
        )
      )
    })),
  ];

  return (
    <>
      <HeaderComponent />
      <Layout style={{ minHeight: '100vh' }}>
        <Layout>
          <Sider 
            width={220} 
            className="site-layout-background" 
            style={{ backgroundColor: '#ffffff', height: 'calc(100vh - 64px)', overflowY: 'auto' }}
          >
            <Menu mode="vertical" defaultSelectedKeys={['all']}>
              {/* SubMenu cho danh sách tòa nhà */}
              <SubMenu key="buildings"  title="Chọn Tòa Nhà">
                {Array.from({ length: 24 }, (_, i) => String.fromCharCode(65 + i)).map(building => (
                  <Menu.Item key={building} onClick={() => handleBuildingSelect(building)}>
                    Tòa nhà {building}
                  </Menu.Item>
                ))}
              </SubMenu>
              
              {/* Các mục thêm, cập nhật, thống kê và chỉnh sửa người dùng */}
              <Menu.Item key="add" onClick={() => setIsAddRowVisible(true)}>Thêm phòng mới</Menu.Item>
              <Menu.Item key="update" onClick={() => setIsUpdateRoomVisible(true)}>Cập nhật phòng</Menu.Item>
              <Menu.Item key="edit-user" onClick={handleEditUser}>Chỉnh sửa người dùng</Menu.Item>
              <Menu.Item key="statistics" onClick={() => setIsStatisticsModalVisible(true)}>Thống Kê Phòng</Menu.Item>
            </Menu>
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Content className="content" style={{ maxHeight: 'calc(100vh - 64px)', overflowY: 'auto' }}>
              <Row justify="space-between" align="middle" style={{ marginBottom: 20 }}>
                <Col>
                  <Input
                    placeholder="Tìm kiếm theo mã học phần"
                    value={searchQuery}
                    onChange={handleSearch}
                    style={{ width: 200, marginRight: 10 }}
                  />
                  <Select
                    placeholder="Chọn tầng"
                    style={{ width: 150, marginRight: 10 }}
                    onChange={handleFloorChange}
                  >
                    <Option value="1">Tầng 1</Option>
                    <Option value="2">Tầng 2</Option>
                    <Option value="3">Tầng 3</Option>
                  </Select>
                  <DatePicker onChange={handleDateChange} placeholder="Chọn ngày" />
                </Col>
                <Col>
                  <Button type="ghost" onClick={handleBackToLogin}>Trở về</Button>
                  <Button type="primary">Tiếp</Button>
                </Col>
              </Row>

              <Card style={{ borderRadius: '8px', border: '2px solid #1890ff', padding: '20px' }}>
                <Title level={4} style={{ color: '#1890ff', textAlign: 'center' }}>Lịch Phòng {selectedBuilding ? `- Tòa ${selectedBuilding}` : ''}</Title>
                <Table
                  dataSource={filteredData}
                  columns={columns}
                  pagination={false}
                  rowClassName="table-row"
                  style={{ backgroundColor: '#e6f7ff' }}
                />
              </Card>
            </Content>
          </Layout>
        </Layout>
      </Layout>

      {/* Các Modal cho thêm, cập nhật và thống kê phòng */}
      <Modal
        title="Thêm Phòng Mới"
        visible={isAddRowVisible}
        onCancel={() => setIsAddRowVisible(false)}
        footer={null}
        className="add-room-modal"
      >
        <AddNewRow onAdd={handleAddNewRow} />
      </Modal>

      <Modal
        title="Cập Nhật Phòng"
        visible={isUpdateRoomVisible}
        onCancel={() => setIsUpdateRoomVisible(false)}
        footer={null}
        className="update-room-modal"
      >
        <UpdateRoomInformation onUpdate={handleUpdateRoomInformation} />
      </Modal>

      <Modal
        title="Thống Kê Phòng"
        visible={isStatisticsModalVisible}
        onCancel={() => setIsStatisticsModalVisible(false)}
        footer={null}
        width={800}
        className="statistics-modal"
      >
        <StatisticsRoom />
      </Modal>
    </>
  );
};

export default PhongHoc;
