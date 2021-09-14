import { Row, Col, Divider } from 'antd';
import { Route,Link,Switch } from 'react-router-dom';
import { Typography } from 'antd';

import Button from '@/pages/sample/button';

import Content from '@/layout/Content';

export default ({location, match}) => {
    const { Title } = Typography;
    const Index = () => {
        return (
            <>
                <Row>
                    <Col flex="auto">
                        <Link to={`${match.path}/button`}><Title>Button</Title></Link>
                    </Col>                
                </Row>
                <Divider />
                <Row>
                    <Col flex="auto">
                        <Title>Button1</Title>
                        
                    </Col>                
                </Row>
                <Divider />
                <Row>
                    <Col flex="auto">
                        <Title>Button2</Title>
                    </Col>                
                </Row>
            </>
        )
    }

    return (
        <>
            <Route exact path="/sample" component={() => <Content><Index/></Content>}/>
            <Switch>
                <Route path="/sample/button" component={()=><Content><Button/></Content>}/>
            </Switch>
        </>
    )
}
