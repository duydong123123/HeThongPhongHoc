// TeacherLogin.js
import React from 'react';
import { Layout, Form, Input, Button, Typography, Row, Col, Card, Tabs, message } from 'antd';
import { useNavigate } from 'react-router-dom';
import HeaderComponent from '../header/Header';

const { Header, Footer, Content } = Layout;
const { Title, Text } = Typography;
const { TabPane } = Tabs;

const TeacherLogin = () => {
  const navigate = useNavigate();

  const defaultValues = {
    username: 'teacher',
    password: 'teacher123',
  };

  const onFinish = (values) => {
    console.log('Success:', values);
    if (values.username === defaultValues.username && values.password === defaultValues.password) {
      navigate('/phonghocgv');
    } else {
      message.error('Đăng nhập không thành công. Vui lòng thử lại.');
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <>
      <HeaderComponent />
      <Layout style={{ minHeight: '100px' }}>
        <Content style={{ padding: '50px', backgroundColor: '#fff' }}>
          <Row gutter={[32, 0]} justify="center">
            
            {/* Events Section */}
            <Col xs={24} md={12}>
              <Card className="news-card">
                <Tabs defaultActiveKey="1">
                  <Tabs.TabPane tab="Tin Tức - Sự Kiện" key="1">
                    <div className="news-container">
                      {/* News Items */}
                      <div style={{ marginBottom: '16px' }}>
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
                  </Tabs.TabPane>

                  <Tabs.TabPane tab="Thông Tin Giờ Học" key="2">
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
                  </Tabs.TabPane>
                </Tabs>
              </Card>
            </Col>

            {/* Login Section */}
            <Col xs={24} md={12}>
              <Card bordered={false} style={{ borderRadius: '8px', borderColor: '#fff', borderWidth: '1px', borderStyle: 'solid' }}>
                <Title level={5} style={{ color: '#333' }}>Cổng Thông Tin Giáo Viên</Title>
                <Form layout="vertical" onFinish={onFinish} onFinishFailed={onFinishFailed}>
                  <Form.Item name="username" rules={[{ required: true, message: 'Vui lòng nhập tài khoản!' }]}>
                    <Input placeholder="Nhập tài khoản" />
                  </Form.Item>
                  <Form.Item name="password" rules={[{ required: true, message: 'Vui lòng nhập mật khẩu!' }]}>
                    <Input.Password placeholder="Nhập mật khẩu" />
                  </Form.Item>
                  <div style={{ textAlign: 'right' ,marginBottom: '16px'}}>
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

        {/* Footer section */}
        <Footer style={{ textAlign: 'center', backgroundColor: '#ffffff', borderTop: '1px solid #e8e8e8', padding: '20px 0' }}>
          <Text style={{ color: '#1890ff' }}>© 2024 Industrial University of Ho Chi Minh City</Text>
        </Footer>
      </Layout>
    </>
  );
};

export default TeacherLogin;