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
    ,rowUtil : (col1,col2,col3) => {
        return props => {
            return(
                <>  
                    {props.divider && <Divider/>}
                    {props.title && <Typography.Title level={4}>{props.title}</Typography.Title>}
                    <Row>
                        <Col span={col1 || 4}>
                            <Space direction="vertical">{props.demo}</Space>
                        </Col>
                        <Col span={col2 || 8}>
                            <Row justify="center">
                                <b>{props.description}</b>
                            </Row>
                        </Col>
                        <Col span={col3 || 10}>
                            <Space direction="vertical">{props.code}</Space>
                        </Col>                
                    </Row>
                </>
            )
        }

        
    }                      
}
