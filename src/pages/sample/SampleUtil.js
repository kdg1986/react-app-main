import { Row, Col, Divider,  Typography,Space  } from 'antd';

export default {
    Typo : props => <Typography.Text 
                      code={props.codeStyle === false ? false : true} strong="true" 
                      copyable={props.copyable === false
                         ? false
                         : {
                            text : props.children?.props?.children || props.children                            
                         }
                      }>{ props.children }</Typography.Text>
    ,Addrow : props => {
        return(
            <>  
                {props.divider && <Divider/>}
                {props.title && <Typography.Title level={4}>{props.title}</Typography.Title>}
                <Row>
                    <Col span={4}>
                        <Space direction="vertical">{props.demo}</Space>
                    </Col>
                    <Col span={8}>
                        <Row justify="center">
                            <b>{props.description}</b>
                        </Row>
                    </Col>
                    <Col span={10}>
                        <Space direction="vertical">{props.code}</Space>
                    </Col>                
                </Row>
            </>
        )
    }                      
}
