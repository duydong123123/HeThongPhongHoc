import React, { useState, useEffect } from 'react';
import { Layout, Table, Row, Col, Card, Button, Typography, Input, Select, DatePicker } from 'antd';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../styles/PhongHocSV.css';
import HeaderComponent from '../header/Header';

const { Header, Content, Footer } = Layout;
const { Title } = Typography;
const { Option } = Select;

const PhongHocGV = () => {
  const [dataSource, setDataSource] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBuilding, setSelectedBuilding] = useState(null);
  const [selectedFloor, setSelectedFloor] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);

  const navigate = useNavigate(); // Initialize navigate

  useEffect(() => {
    fetch('https://672ab9d2976a834dd024325b.mockapi.io/phonghoc')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setDataSource(data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleSearch = (e) => setSearchQuery(e.target.value);
  const handleBuildingChange = (value) => setSelectedBuilding(value);
  const handleFloorChange = (value) => setSelectedFloor(value);
  const handleDateChange = (date) => setSelectedDate(date);

  const handleBack = () => {
    navigate('/'); // Navigate to the login page
  };

  const filteredData = dataSource.filter(item => {
    const matchesSearch = item.room ? item.room.includes(searchQuery) : false;
    const matchesBuilding = selectedBuilding ? item.building === selectedBuilding : true;
    const matchesFloor = selectedFloor ? item.floor === selectedFloor : true;
    const matchesDate = selectedDate ? item.date === selectedDate.format('YYYY-MM-DD') : true;
    return matchesSearch && matchesBuilding && matchesFloor && matchesDate;
  });

  const columns = [
    { 
      title: 'Buổi Học',
      dataIndex: 'session', 
      key: 'session', 
      align: 'center',
      render: (session) => (session === 'sáng' ? 'Sáng' : 'Chiều')
    },
    ...['thu2', 'thu3', 'thu4', 'thu5', 'thu6', 'thu7', 'chunhat'].map(day => ({
      title: `Thứ ${day.slice(3)}`,
      dataIndex: day,
      key: day,
      align: 'center',
      render: (data) => data 
        ? <div className="table-cell-content">
            <strong>Phòng: {data.room}</strong><br />
            <span>Thời gian: {data.time}</span><br />
            <span>Mã Học Phần: {data.courseCode}</span>
          </div> 
        : <div className="empty-cell">Trống</div>
    })),
  ];

  return (
    <>
      <HeaderComponent/>
      <Layout className="layout">
        <Content className="content">
          <Row justify="space-between" align="middle" className="search-bar">
            <Col>
              <Input 
                placeholder="Tìm kiếm theo mã học phần" 
                value={searchQuery}
                onChange={handleSearch}
                className="search-input"
              />
              <Select 
                placeholder="Chọn tòa nhà" 
                className="select"
                onChange={handleBuildingChange}
              >
                <Option value="A">Tòa A</Option>
                <Option value="B">Tòa B</Option>
              </Select>
              <Select 
                placeholder="Chọn tầng" 
                className="select"
                onChange={handleFloorChange}
              >
                <Option value="1">Tầng 1</Option>
                <Option value="2">Tầng 2</Option>
                <Option value="3">Tầng 3</Option>
              </Select>
              <DatePicker onChange={handleDateChange} placeholder="Chọn ngày" />
            </Col>
            <Col>
              <Button type="/" onClick={handleBack}>Trở về</Button>
            </Col>
          </Row>

          <Card className="card-container">
            <Title level={4} className="card-title">Lịch Phòng</Title>
            <Table
              dataSource={filteredData.length > 0 ? filteredData : dataSource}
              columns={columns}
              pagination={false}
              rowClassName="table-row"
              scroll={{ x: '80%', y: 6000 }}
            />
          </Card>
        </Content>
      </Layout>
    </>
  );
};

export default PhongHocGV;
