import React, { useState, useEffect } from 'react';
import { Card, Spin, message } from 'antd';

const StatisticsRoom = () => {
  const [totalRooms, setTotalRooms] = useState(0);
  const [availableRooms, setAvailableRooms] = useState(0);
  const [bookedRooms, setBookedRooms] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data from the API
    const fetchData = async () => {
      try {
        const response = await fetch('https://672ab9d2976a834dd024325b.mockapi.io/phonghoc');
        if (response.ok) {
          const data = await response.json();
          calculateStatistics(data);
        } else {
          message.error('Không thể tải dữ liệu từ API.');
        }
      } catch (error) {
        message.error('Có lỗi xảy ra khi lấy dữ liệu!');
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Function to calculate statistics
  const calculateStatistics = (data) => {
    const total = data.length;
    const booked = data.filter(item => item.courseCode).length;
    const available = total - booked;

    setTotalRooms(total);
    setBookedRooms(booked);
    setAvailableRooms(available);
  };

  return (
    <div>
      {loading ? (
        <Spin tip="Đang tải dữ liệu..." />
      ) : (
        <Card title="Thống Kê Phòng" bordered={false}>
          <p>Tổng số phòng: {totalRooms}</p>
          <p>Phòng còn trống: {availableRooms}</p>
          <p>Phòng đã đặt: {bookedRooms}</p>
        </Card>
      )}
    </div>
  );
};

export default StatisticsRoom;
