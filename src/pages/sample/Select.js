import { Select,Button,Row, Col, Divider, PageHeader, Typography  } from 'antd';
import { SearchOutlined,DownloadOutlined } from '@ant-design/icons';
import {keygen} from '@/util';

const Typo = props => <Typography.Text 
                      code={props.codeStyle === false ? false : true} strong="true" 
                      copyable={props.copyable === false ? false : true}>{ props.children }</Typography.Text>

const Addrow = props => {
    return(
        <>  
            {props.divider && <Divider/>}
            {props.title && <Typography.Title level={4}>{props.title}</Typography.Title>}
            
            <Row>
                <Col span={4}>{props.demo}</Col>                
                <Col span={8}>
                    <Row justify="center">
                        <b>{props.description}</b>
                    </Row>
                </Col>
                <Col span={10}>
                        {props.code}
                </Col>                
            </Row>
        </>
    )
}

const YBSelect = props => {
    let _props = { ...props };
    !_props?.style && (_props.style = {})
    !_props.style?.width && (_props.style = { ..._props.style, width : 150 });
    
    return <Select {..._props}>{props.children}</Select>
}

export default () => {
    return(
        <>
            <PageHeader
                className="site-page-header"
                onBack={() => history.back()}
                title={[ "Select", <Button key={keygen} type="link" href="https://ant.design/components/select/#API" target="_blank">API</Button> ]}
            />
            
            <Typo>{"import { Select } from 'antd';"}</Typo><br/>            
            
            allowClear<br/>
            autoFocus<br/>

            <Addrow 
            title="block"
            divider={true}            
            demo={<>
                <YBSelect options={[ { label : "A1", value : "A1" }, { label : "A2", value : "A2" }, ]}/>
            </>}            
            description="true | false, &nbsp; 기본값 : false"
            code={<>
                <Typo>{'<YBSelect options={[ { label : "A1", value : "A1" }, { label : "A2", value : "A2" }, ]}/>'}</Typo>
                
            </>} />

            
            
        </>
    )
}