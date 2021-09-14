import { Button,Row, Col, Divider,PageHeader  } from 'antd';
import { Typography } from 'antd';

const { Title } = Typography;
const Typo = props => <Typography.Text code={true} copyable>{ props.children }</Typography.Text>

const Addrow = props => {
    return(
        <>  
            <Row>
                <Col flex={props.demoFlex||2}>                        
                    {props.demo}
                </Col>
                <Col flex={props.codeFlex||3}>
                    <Typo>{props.code}</Typo>
                </Col>
            </Row>
        </>
    )
}

export default () => {
    return(
        <>
            <PageHeader
                className="site-page-header"
                onBack={() => history.back()}
                title="Button"                
            />
            <Typo>{"import { Button } from 'antd';"}</Typo>
            <Divider/>
            <Addrow demo={<Button type="primary">Primary Button</Button>} code={'<Button type="primary">Primary Button</Button>'} />
            <Divider/>
            <Addrow demo={<Button>Default Button</Button>} code={'<Button>Default Button</Button>'} />
            <Divider/>
            <Addrow demo={<Button type="dashed">Dashed Button</Button>} code={'<Button type="dashed">Dashed Button</Button>'} />
            <Divider/>
            <Addrow demo={<Button type="text">Text Button</Button>} code={'<Button type="text">Text Button</Button>'} />
            <Divider/>
            <Addrow demo={<Button type="link">Link Button</Button>} code={'<Button type="link">Link Button</Button>'} />
        </>
    )
}