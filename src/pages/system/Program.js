import { Row, Col,Select,Card,Divider,Button,DatePicker,Table } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

export default () => {

    const { Option } = Select;
    const style = {padding: '8px 0' };

    const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
        },
        {
          title: 'Age',
          dataIndex: 'age',
        },
        {
          title: 'Address',
          dataIndex: 'address',
        },
      ];

    
    const data = [];
    for (let i = 0; i < 46; i++) {
    data.push({
        key: i,
        name: `Edward King ${i}`,
        age: 32,
        address: `London, Park Lane no. ${i}`,
    });
    }


    return(
        <>
            <Card>
                <div style={style}>
                    <Row>
                        <Col span={2}>시스템명</Col>
                        <Col span={6}>                    
                                <Select defaultValue="lucy" style={{ width: 200 }}>
                                    <Option value="jack">Jack</Option>
                                    <Option value="lucy">Lucy</Option>                    
                                    <Option value="Yiminghe">yiminghe</Option>
                                </Select>
                            
                        </Col>
                        <Col span={2}>업무구분</Col>
                        <Col span={6}>col-6</Col>
                    </Row>
                </div>
                <div style={style}>
                    <Row>
                        <Col span={2}>프로그램 구분</Col>
                        <Col span={6}>
                            <Select defaultValue="lucy" style={{ width: 200 }}>
                                <Option value="jack">Jack</Option>
                                <Option value="lucy">Lucy</Option>                    
                                <Option value="Yiminghe">yiminghe</Option>
                            </Select>
                        </Col>
                        <Col span={2}>수정일자</Col>
                        <Col span={6}>
                            <DatePicker /> ~ <DatePicker />

                        </Col>
                    </Row>
                </div>
                <Divider/>
                <Row justify="end">
                    <Button type="primary" icon={<SearchOutlined />}>Search</Button>
                </Row>            
            </Card>
            <div style={style}>
                <Card>
                    <Table columns={columns} dataSource={data} />
                </Card>
            </div>
        </>
    )
}