import { Row, Col, Divider } from 'antd';
import { Route,Link,Switch } from 'react-router-dom';
import { Typography } from 'antd';

import Button from '@/pages/sample/Button';
import Input from '@/pages/sample/Input';
import Radio from '@/pages/sample/Radio';
import Select from '@/pages/sample/Select';
import Checkbox from '@/pages/sample/Checkbox';
import DatePicker from '@/pages/sample/DatePicker';

import Content from '@/layout/Content';
import { Fragment } from 'react';


const list = [
    { name : "Button", component : Button},
    { name : "Input", component : Input},
    { name : "Radio", component : Radio},
    { name : "Select", component : Select},
    { name : "Checkbox", component : Checkbox},
    { name : "DatePicker", component : DatePicker},
]


export default ({location, match}) => {
    const { Title } = Typography;    
    const Index = () => {
        return list.map((item,idx) =>{
            return <Fragment key={idx}>
                {idx !== 0 && <Divider/>}
                <Row>
                    <Col flex="auto">
                        <Link to={`${match.path}/${item.name}`} ><Title>{item.name}</Title></Link>
                    </Col>
                </Row>
            </Fragment>
        })
    }

    return (
        <Content>
            <Route exact path="/sample" component={() => <Index/>}/>
            <Switch>
                {list.map((item,idx) =>{
                    return <Route key={idx} path={`/sample/${item.name}`} component={()=><item.component/>}/>
                })}                
            </Switch>
        </Content>
    )
}
