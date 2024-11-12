// Login.js
import React from 'react';
import { Layout, Form, Input, Button, Checkbox, Typography, Row, Col, Card, Tabs, message } from 'antd';
import { useNavigate, Link } from 'react-router-dom';
import HeaderComponent from '../header/Header';
import '../styles/Login.css';

const { Footer, Content } = Layout;
const { Title, Text } = Typography;
const { TabPane } = Tabs;

const Login = () => {
  const navigate = useNavigate();

  const defaultValues = {
    username: '20042851',
    password: '26012002',
    graduate: false,
  };

  const onFinish = (values) => {
    if (values.username === defaultValues.username && values.password === defaultValues.password) {
      navigate('/phonghocsv');
    } else {
      message.error('Đăng nhập không thành công. Vui lòng thử lại.');
    }
  };

  return (

    <>
    <HeaderComponent /> 
    <Layout className="layout-container">
      <Content style={{ padding: '50px', backgroundColor: '#fff' }}>
        <Row gutter={[32, 0]} justify="center">
          {/* News and Schedule Tabs */}
          <Col xs={24} md={12}>
            <Card className="news-card">
              <Tabs defaultActiveKey="1">
                <TabPane tab="Tin Tức - Sự Kiện" key="1">
                  <div className="news-container">
                    <div className="news-item">
                      <Row>
                        <Col span={4}>
                          <Text className="date-text">Tháng 09 <br /> 05</Text>
                        </Col>
                        <Col span={20}>
                          <Text>
                            <a href="#" className="text-link">Hướng dẫn học trực tuyến bằng MS-TEAM</a> <span className="news-label-new">new</span><br />
                            Hướng dẫn sinh viên học trực tuyến <br />
                            <a href="#" className="text-link">Xem chi tiết</a>
                          </Text>
                        </Col>
                      </Row>
                    </div>
                    
                <div style={{ marginBottom: '16px' }}>
                  <Row>
                    <Col span={4}>
                      <Text className="date-text">Tháng 08 <br /> 19</Text>
                    </Col>
                    <Col span={20}>
                      <Text>
                        <a href="#" className="text-link">THÔNG BÁO LỊCH HỌC CHO SINH VIÊN KHÓA 20</a> <span style={{ color: 'red' }}>new</span><br />
                        Thông báo lịch học cho sinh viên khóa 20 <br />
                        <a href="#" style={{ color: 'red' }}>Xem chi tiết</a>
                      </Text>
                    </Col>
                  </Row>
                </div>
                <div style={{ marginBottom: '16px' }}>
                  <Row>
                    <Col span={4}>
                      <Text className="date-text">Tháng 08 <br /> 06</Text>
                    </Col>
                    <Col span={20}>
                      <Text>
                        <a href="#" className="text-link">Hỗ trợ đăng ký học phần HK1 2024-2025</a> <span style={{ color: 'red' }}>HOT</span><br />
                        Đăng ký học phần <br />
                        <a href="#" style={{ color: 'red' }}>Xem chi tiết</a>
                      </Text>
                    </Col>
                  </Row>
                </div>
                <div style={{ marginBottom: '16px' }}>
                  <Row>
                    <Col span={4}>
                      <Text className="date-text">Tháng 07 <br /> 01</Text>
                    </Col>
                    <Col span={20}>
                      <Text>
                        <a href="#" className="text-link">Thông báo về việc lưu trữ dữ liệu trên Hệ thống thư điện tử của Nhà trường</a> <span style={{ color: 'red' }}>HOT</span><br />
                        Thông báo số 865/TB-ĐHCN ban hành ngày 28/6/2024 về việc lưu trữ dữ liệu trên Hệ thống thư điện tử đối với sinh viên và học viên <br />
                        <a href="#" style={{ color: 'red' }}>Xem chi tiết</a>
                      </Text>
                    </Col>
                  </Row>
                </div>

                {/* Additional News Items */}
                <div style={{ marginBottom: '16px' }}>
                  <Row>
                    <Col span={4}>
                      <Text className="date-text">Tháng 06 <br /> 26</Text>
                    </Col>
                    <Col span={20}>
                      <Text>
                        <a href="#" className="text-link">Quy định về việc quản lý và sử dụng Hệ thống thư điện tử của Trường Đại học Công nghiệp TP.HCM</a> <span className="news-label-hot">HOT</span><br />
                        Quy định về việc quản lý và sử dụng Hệ thống thư điện tử của Trường Đại học Công nghiệp TP.HCM ban hành ngày 20/06/2024 <br />
                        <a href="#" style={{ color: 'red' }}>Xem chi tiết</a>
                      </Text>
                    </Col>
                  </Row>
                </div>
                <div style={{ marginBottom: '16px' }}>
                  <Row>
                    <Col span={4}>
                      <Text className="date-text">Tháng 01 <br /> 25</Text>
                    </Col>
                    <Col span={20}>
                      <Text>
                        <a href="#" className="text-link">THƯ CHÚC TẾT</a><br />
                        <a href="#" style={{ color: 'red' }}>Xem chi tiết</a>
                      </Text>
                    </Col>
                  </Row>
                </div>
                <div style={{ marginBottom: '16px' }}>
                  <Row>
                    <Col span={4}>
                      <Text className="date-text">Tháng 01 <br /> 08</Text>
                    </Col>
                    <Col span={20}>
                      <Text>
                        <a href="#" className="text-link">Thông báo v/v đăng ký học phần và đóng học phí học kỳ 2, năm học 2023 – 2024</a><br />
                        Thông báo v/v đăng ký học phần và đóng học phí học kỳ 2, năm học 2023 – 2024 <br />
                        <a href="#" style={{ color: 'red' }}>Xem chi tiết</a>
                      </Text>
                    </Col>
                  </Row>
                </div>
                <div>
                  <Row>
                    <Col span={4}>
                      <Text className="date-text">Tháng 02 <br /> 13</Text>
                    </Col>
                    <Col span={20}>
                      <Text>
                        <a href="#" className="text-link">IUH đón nhận chứng nhận 04 chương trình đào tạo đạt chuẩn AUN-QA và Gặp mặt truyền thống nhân ngày Nhà giáo Việt Nam 20/11</a><br />
                        Chiều ngày 19/11/2019, Trường Đại học Công nghiệp Thành phố Hồ Chí Minh đã long trọng tổ chức Lễ trao chứng nhận 04 chương trình đào tạo đạt chuẩn AUN - QA và Gặp mặt truyền thống nhân ngày Nhà giáo Việt Nam 20/11. <br />
                        <a href="#" style={{ color: 'red' }}>Xem chi tiết</a>
                      </Text>
                    </Col>
                  </Row>
                </div>
                  </div>
                </TabPane>

                <TabPane tab="Thông Tin Giờ Học" key="2">
                  <div style={{ padding: '16px' }}>
                    <Row>
                      <Col span={4}>
                        <Text className="date-text">Tháng 10 <br /> 22</Text>
                      </Col>
                      <Col span={20}>
                        <Text>
                          <a href="#" className="text-link">THÔNG TIN GIỜ HỌC</a> <span className="news-label-hot">HOT</span><br />
                          Giờ học và giờ thi tại Trường Đại học Công nghiệp Thành phố Hồ Chí Minh <br />
                          <a href="#" className="text-link">Xem chi tiết</a>
                        </Text>
                      </Col>
                    </Row>
                  </div>
                </TabPane>
              </Tabs>
            </Card>
          </Col>

          {/* Login Form */}
          <Col xs={24} md={12}>
            <Card className="login-card">
              <Title level={5} className="title-login">Cổng Thông Tin Sinh Viên</Title>
              <Form layout="vertical" initialValues={defaultValues} onFinish={onFinish}>
                <Form.Item label="" name="username" rules={[{ required: true, message: 'Vui lòng nhập tài khoản!' }]}>
                  <Input placeholder="Nhập tài khoản" />
                </Form.Item>
                <Form.Item label="" name="password" rules={[{ required: true, message: 'Vui lòng nhập mật khẩu!' }]}>
                  <Input.Password placeholder="Nhập mật khẩu" />
                </Form.Item>
                <Form.Item name="graduate" valuePropName="checked">
                  <Checkbox>Đã tốt nghiệp</Checkbox>
                </Form.Item>
                <Form.Item>
                  <Button type="primary" htmlType="submit" className="button-submit">Đăng Nhập</Button>
                </Form.Item>
              </Form>

              <div className="text-center">
                <Link to="/forgot-password" className="text-link">Quên mật khẩu?</Link>
              </div>

              <Row justify="space-between" style={{ marginTop: '10px' }}>
                <Col>
                  <Link to="/admin-login" className="text-link">Dành cho chuyên viên</Link>
                </Col>
                <Col>
                  <Link to="/teacher-login" className="text-link">Dành cho giáo viên</Link>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Content>

      <Footer className="footer-container">
        <Text style={{ color: '#1890ff' }}>© 2024 Industrial University of Ho Chi Minh City</Text>
      </Footer>
    </Layout>
    </>
  );
};

export default Login;
