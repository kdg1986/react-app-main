import { Row, Col,Select,Card,Divider,Button,DatePicker,Table,Input,Typography,Radio,Checkbox,Spin } from 'antd';
import { SearchOutlined, EnvironmentOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

/*
axios.put(`${ELASTIC_URL}/demo/commonCode/ERP`,{
    taskList : JSON.stringify([
        { value : "GB", text : "상품" },
        { value : "RB", text : "예약" },
        { value : "IB", text : "항공" },
        { value : "AB", text : "대리점(노랑)" },
        { value : "PB", text : "제휴" },
        { value : "LB", text : "랜드(노랑)" },
        { value : "CB", text : "회계" },
        { value : "UB", text : "고객" },
        { value : "SB", text : "통계" },
        { value : "MB", text : "관리" },
    ])
})
*/
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

const getSystemList = async () => {
    const res = await axios.get(`${ELASTIC_URL}/demo/commonCode/systemList`)
    return res;
}

const SearchOptions = props => {

    const style = {padding: '8px 0' };

    const [state,setState] = useState({
        systemName  : props.systemName  || [], selSystemName : "",
        programGbn  : props.programGbn  || [
            { value : "", text : "전체"},
            { value : "M", text : "메인"},
            { value : "S", text : "서브"}
        ],
        taskGbn1    : props.taskGbn1    || [], selTaskGbn1 : "",
        taskGbn2    : props.taskGbn2    || [],
        disabled1   : props.disabled1,
        disabled2   : props.disabled2,
    });

    useEffect(()=>{        
        getSystemList().then((res)=>{
            setState({ 
                ...state
                ,systemName : [ { value : "", text : "전체"}, ...JSON.parse(res.data._source.systemList) ]
            });
        });
        return () => console.log('cleanup SearchOptions');        
    },[])

    const onChangeSystemName = async (value) => {
        if(value){
            const res = await axios.get(`${ELASTIC_URL}/demo/commonCode/${value}`);
            setState({ 
                ...state,
                taskGbn1 : [ { value : "", text : "전체"}, ...JSON.parse(res.data._source.taskList) ],
                disabled1 : false,   
                selSystemName : value,                
            });
        }else{
            setState({ 
                ...state,
                taskGbn1 : [],
                disabled1 : true,
                taskGbn2 : [],
                disabled2 : true,
                selSystemName : value,                       
            });
        }
    }

    const onChangeTaskGbn1 = async (value) => {
        if(value){
            setState({ ...state, disabled2 : false, selTaskGbn1 : value });
        }else{            
            setState({ 
                ...state,
                disabled2 : true,
                selTaskGbn1 : value
            });
        }
    }

    return(
        <>
            <div style={style}>
                <Row>
                    <Col span={2}>시스템명</Col>
                    <Col span={6}>                    
                        <ComboBox                                 
                        defaultValue=""
                        style={{ width: 250 }} 
                        datasource={state.systemName} 
                        onChange={onChangeSystemName}                         
                        />
                    </Col>
                    <Col span={2}>업무구분</Col>
                    <Col span={6}>
                        <ComboBox
                        style={{ width: 110 }}
                        datasource={state.taskGbn1}
                        disabled={state.disabled1}
                        onChange={onChangeTaskGbn1}
                        />
                        <ComboBox 
                        defaultValue=""
                        style={{ width: 110 }}
                        datasource={state.taskGbn2}
                        disabled={state.disabled2}
                        />
                        <Input style={{ width: 150 }} defaultValue="" />
                    </Col>
                </Row>
            </div>
            <div style={style}>
                <Row>
                    <Col span={2}>프로그램 구분</Col>
                    <Col span={6}>
                        <ComboBox key="4" 
                        defaultValue="" 
                        style={{ width: 250 }} 
                        datasource={state.programGbn} 
                        />
                    </Col>
                    <Col span={2}>수정일자</Col>
                    <Col span={6}>
                        <DatePicker onChange={(date,str)=> setState({ ...state, startDt : str })  } /> ~ <DatePicker onChange={(date,str)=> setState({ ...state, endDt : str })  } />
                    </Col>
                </Row>
            </div>
            <Divider/>
            <Row justify="end">
                <Button type="primary" icon={<SearchOutlined />} onClick={()=>props.doSearch(state)}>Search</Button>
            </Row>
        </>
    )

}

const DataList = props => {    
    return(
        <Table                     
        onRow={(record, rowIndex) => {
            return {
                onClick: event => props.onClick(record, rowIndex), // click row
                //onDoubleClick: event => {}, // double click row
                //onContextMenu: event => {}, // right button click row
                //onMouseEnter: event => {}, // mouse enter row
                //onMouseLeave: event => {}, // mouse leave row
            };
        }}
        rowSelection={{
            //onChange : (val) => console.log(val)                        
        }}
        columns={[
            { title: 'No', dataIndex: 'C'},
            { title: '시스템명', dataIndex: 'systemName', },
            { title: '업무구분', dataIndex: 'task', },
            { title: '프로그램구분', dataIndex: 'programGbn', render : text => text === "M" ? "메인" : "서브"},
            { title: '프로그램 NO', dataIndex: 'programNo', sorter : (a,b) => a.programNo > b.programNo  },
            { title: '프로그램명', dataIndex: 'E', },
            { title: '프로그램 URL', dataIndex: 'programURL', },
            { title: '프로그램 파일명', dataIndex: 'programFileName', },
            { title: '사용', dataIndex: 'useYN', render : (text, record, index) => <Checkbox key={uuidv4()} checked={text === "Y" ? true : false}></Checkbox>    },
            { title: '수정일자', dataIndex: 'modiDate', sorter : (a,b) => a.modiDate < b.modiDate ? -1 : a.modiDate > b.modiDate ? 1 : 0},
        ]}
        dataSource={props.data} 
        />
    )
}

export default () => {        
    const { TextArea } = Input;
    const { Title } = Typography;    
    const style = {padding: '8px 0' };        
    const [ data, setData ] = useState([]);
    const [ detail, setDetail ] = useState();
    const doSearch = async (state) => {
        const res = await axios.get(`${ELASTIC_URL}/program/list/${state.selTaskGbn1}`);
        setData(JSON.parse( res.data._source.programList ).map( (item,idx) => { item.key = idx; return item }));
    }
    const handleChange = e => {        
        setDetail({ ...detail, [e.target.name]: e.target.value });
    }
    const doSave = () => {        
        const {
            C,E,I,            
            programFileName,
            programGbn,
            programNo,
            programURL,
            systemName,
            dtlTaskVal : task,
            useYN,
            modiDate,
            key
        } = detail;
        const _data = [ ...data ];
        
        _data[detail.key] = {
            C,E,I,   
            key,
            programFileName,
            programGbn,
            programNo,
            programURL,
            systemName,
            task,
            useYN,
            modiDate,
        }
        setData(_data);
    }

    const dataRowOnClick = (record,rowIndex) => {        
        setDetail({  spin : true });
        const res = axios.get(`${ELASTIC_URL}/demo/commonCode/${record.systemName}`);
        res.then(( res )=>{
            setDetail({ 
            ...detail,
            //orgRecord : {...record},
            ...record,
            rowIndex : rowIndex,
            dtlTaskList : JSON.parse(res.data._source.taskList),
            dtlTaskVal : record.task 
            });
        })
    }

    useEffect(()=>{                
        getSystemList().then((res)=>{
            setDetail({ 
                ...detail
                ,dtlSystemName : [ ...JSON.parse(res.data._source.systemList) ]
                ,dtlProgramGbn : [                    
                    { value : "M", text : "메인"},
                    { value : "S", text : "서브"}
                ]
            });
        });        
        return () => console.log('cleanup');
    },[])

    return(
        <>
            <Card>
               <SearchOptions
               disabled1={true}
               disabled2={true}
               doSearch={doSearch}               
               />
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
                            <div style={{padding: '0 3px' }}> <Button icon={<SearchOutlined />}>엑셀</Button> </div>                            
                        </Row>
                    </Col>
                </Row>
                <Card>
                    <DataList data={data} onClick={dataRowOnClick}/>
                </Card>
            </div>

            <div style={style}>
                <Row>
                    <Col span={12}>
                        <Row>
                            <Title level={4}><EnvironmentOutlined /> 프로그램 상세 정보</Title>                   
                        </Row>
                    </Col>
                    <Col span={12}>
                        <Row justify="end">                            
                            <div style={{padding: '0 3px' }}> <Button icon={<SearchOutlined />} onClick={doSave} >저장</Button> </div>
                        </Row>
                    </Col>
                </Row>
                <Card>                
                <Row>
                    <Col span={2}>시스템명</Col>
                    <Col span={6}>
                        <ComboBox                         
                        key="4"
                        defaultValue=""
                        style={{ width: 250 }}
                        datasource={detail?.dtlSystemName}
                        value={detail?.systemName}
                        onChange={(val) => setDetail({ ...detail,systemName : val })}
                         />
                    </Col>
                    <Col span={2}>업무구분</Col>
                    <Col span={6}>                    
                        <ComboBox                         
                        key="5"
                        defaultValue=""
                        style={{ width: 250 }}
                        datasource={detail?.dtlTaskList}
                        value={detail?.dtlTaskVal}
                        onChange={(val) => setDetail({ ...detail,dtlTaskVal : val })}
                         />
                    </Col>
                </Row>
            </Card>
            <Card>
                <Row>
                    <Col span={2}>프로그램 NO</Col>
                    <Col span={6}>
                        <Input name="programNo" style={{ width: 200 }} value={detail?.programNo} onChange={handleChange} />
                    </Col>
                    <Col span={2}>프로그램 구분</Col>
                    <Col span={6}>
                        <ComboBox 
                        key="4"
                        defaultValue=""
                        style={{ width: 250 }}
                        datasource={detail?.dtlProgramGbn}
                        value={detail?.programGbn}
                        disabled={true}
                         />
                    </Col>
                </Row>
            </Card>
            <Card>
                <Row>
                    <Col span={2}>프로그램명</Col>
                    <Col span={6}>
                        <Input name="E" style={{ width: 200 }} value={detail?.E} onChange={handleChange} />
                    </Col>
                    <Col span={2}>프로그램파일명</Col>
                    <Col span={6}>
                        <Input name="programFileName" style={{ width: "100%" }} value={detail?.programFileName} onChange={handleChange} />
                    </Col>
                </Row>
            </Card>
            <Card>
                <Row>
                    <Col span={2}>프로그램 URL</Col>
                    <Col span={6}>
                        <Input name="programURL" style={{ width: 200 }} value={detail?.programURL} onChange={handleChange} />                            
                    </Col>
                    <Col span={2}>사용여부</Col>
                    <Col span={6}>
                        <RadioBtn                            
                        name="useYN"
                        value={detail?.useYN}
                        onChange={handleChange}                        
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
                        <TextArea name="I" rows={4} cols={100} value={detail?.I} onChange={handleChange}  />
                    </Col>                        
                </Row>
            </Card>
            </div>
        </>
    )
}