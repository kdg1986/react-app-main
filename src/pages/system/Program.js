import { Row, Col,Select,Card,Divider,Button,DatePicker,Table,Input,Typography,Radio   } from 'antd';
import { SearchOutlined, EnvironmentOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const ComboBox = props => {
    const { Option } = Select;
    /* key value */
    return (
        <Select {...props}>
            {props.datasource.map(item=><Option value={item.value} key={uuidv4()} >{item.text}</Option> )}            
        </Select>
    )
}
ComboBox.defaultProps = {
    datasource : [],
    defaultValue : ""
}

const RadioBtn = props => {
    return(
        <Radio.Group {...props}>
            {props.datasource.map(item=><Radio value={item.value} key={uuidv4()}>{item.text}</Radio> )}
        </Radio.Group>
    )
}
RadioBtn.defaultProps = {
    datasource : [],
    defaultvalue : ""
}

export default () => {
    const { TextArea } = Input;
    const { Title } = Typography;
    
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

    const [ tbdata,setTbdata ] = useState(null);
    const [ select1,setSelect1 ] = useState({});
    const [ select2,setSelect2 ] = useState({});
    const [ disabled1,setDisabled1 ] = useState(true);
    const [ disabled2,setDisabled2 ] = useState(true);
    const [ value, setValue ] = useState(null);

    useEffect(()=>{
        const _selData = [
            { value : "", text : "전체" },
            { value : "1", text : "Lucy" }
        ];
        setSelect1({ data : _selData, selValue : "" });
        setSelect2({ data : _selData, selValue : "" });
    },[]);
    
    const onChange = e => setValue(e.target.value);

    const rowSelection = (val) => {
        console.log(val)
    }

    return(
        <>
            <Card>
                <div style={style}>
                    <Row>
                        <Col span={2}>시스템명</Col>
                        <Col span={6}>                    
                            <ComboBox                                 
                            defaultValue="" 
                            style={{ width: 250 }} 
                            datasource={select1.data} 
                            onChange={(value)=> setSelect1({ ...select1,selValue : value  })} 
                            />
                        </Col>
                        <Col span={2}>업무구분</Col>
                        <Col span={6}>
                            <ComboBox                                 
                            defaultValue="" 
                            style={{ width: 100 }} 
                            datasource={select1.data} 
                            disabled={disabled2}
                            onChange={(value)=> {
                                setSelect2({ ...select2,selValue : value  });
                                setDisabled2( !(value.length) );                                    
                            }} 
                            />
                            <ComboBox 
                            defaultValue="" 
                            style={{ width: 100 }} 
                            datasource={select1.data} 
                            disabled={disabled2} 
                            />
                            <Input style={{ width: 150 }} defaultValue="" />
                        </Col>
                    </Row>
                </div>
                <div style={style}>
                    <Row>
                        <Col span={2}>프로그램 구분</Col>
                        <Col span={6}>
                            <ComboBox key="4" defaultValue="" style={{ width: 250 }} datasource={select2.data} />
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
                <Row>
                    <Col span={12}>
                        <Row>
                            <Title level={4}><EnvironmentOutlined /> 프로그램 정보</Title>
                        </Row>
                    </Col>
                    <Col span={12}>
                        <Row justify="end">                            
                            <div style={{padding: '0 3px' }}> <Button icon={<SearchOutlined />}>신규</Button> </div>
                            <div style={{padding: '0 3px' }}> <Button icon={<SearchOutlined />}>삭제</Button> </div>
                            <div style={{padding: '0 3px' }}> <Button icon={<SearchOutlined />}>취소</Button> </div>
                            <div style={{padding: '0 3px' }}> <Button icon={<SearchOutlined />}>저장</Button> </div>
                            <div style={{padding: '0 3px' }}> <Button icon={<SearchOutlined />}>엑셀</Button> </div>                            
                        </Row>
                    </Col>
                </Row>
                <Card>
                    <Table                     
                    onRow={(record, rowIndex) => {
                        return {
                          onClick: event => console.log( record,rowIndex ), // click row
                          //onDoubleClick: event => {}, // double click row
                          //onContextMenu: event => {}, // right button click row
                          //onMouseEnter: event => {}, // mouse enter row
                          //onMouseLeave: event => {}, // mouse leave row
                        };
                    }}
                    rowSelection={{
                        onChange : (val) => console.log(val)                        
                    }}
                    columns={[
                        { title: 'Name', dataIndex: 'name', },
                        { title: 'Age', dataIndex: 'age', },
                        { title: 'Address', dataIndex: 'address', },
                    ]}
                    dataSource={data} 
                    />
                </Card>
            </div>

            <div style={style}>
                <Title level={4}><EnvironmentOutlined /> 프로그램 상세 정보</Title>
                <Card>
                    <Row>
                        <Col span={2}>시스템명</Col>
                        <Col span={6}>
                            <ComboBox key="4" defaultValue={select2.selValue} style={{ width: 250 }} datasource={select2.data} />
                        </Col>
                        <Col span={2}>업무구분</Col>
                        <Col span={6}>
                            <ComboBox key="4" defaultValue={select2.selValue} style={{ width: 250 }} datasource={select2.data} />
                        </Col>
                    </Row>
                </Card>
                <Card>
                    <Row>
                        <Col span={2}>프로그램 NO</Col>
                        <Col span={6}>
                            <Input style={{ width: 150 }} defaultValue="" />
                        </Col>
                        <Col span={2}>프로그램 구분</Col>
                        <Col span={6}></Col>
                    </Row>
                </Card>
                <Card>
                    <Row>
                        <Col span={2}>프로그램명</Col>
                        <Col span={6}>
                            <Input style={{ width: 150 }} defaultValue="" />
                        </Col>
                        <Col span={2}>프로그램파일명</Col>
                        <Col span={6}>
                            <Input style={{ width: "100%" }} defaultValue="" />
                        </Col>
                    </Row>
                </Card>
                <Card>
                    <Row>
                        <Col span={2}>프로그램 URL</Col>
                        <Col span={6}>
                            <Input style={{ width: 150 }} defaultValue="" />                            
                        </Col>
                        <Col span={2}>사용여부</Col>
                        <Col span={6}>
                            <RadioBtn                            
                            value={value}
                            onChange={onChange}
                            defaultvalue={1}
                            datasource={[
                                { value : "Y", text : "Y" },
                                { value : "N", text : "N" },
                                
                            ]}
                            />
                        </Col>
                    </Row>
                </Card>
                <Card>
                    <Row>
                        <Col span={2}>비고</Col>
                        <Col span={22}>
                            <TextArea rows={4} cols={100}  />
                        </Col>                        
                    </Row>
                </Card>
            </div>
        </>
    )
}