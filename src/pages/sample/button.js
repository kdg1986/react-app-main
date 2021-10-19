import { Button,Row, Col, Divider, PageHeader, Typography,Space  } from 'antd';
import { SearchOutlined,DownloadOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const Typo = props => <Typography.Text 
                      code={props.codeStyle === false ? false : true} strong="true" 
                      copyable={props.copyable === false ? false : true}>{ props.children }</Typography.Text>

const Addrow = props => {
    return(
        <>  
            {props.divider && <Divider/>}
            {props.title && <Typography.Title level={4}>{props.title}</Typography.Title>}
            
            <Row>
                <Col span={5}>
                    <Space direction="vertical">{props.demo}</Space>
                </Col>                
                <Col span={8}>
                    <Row justify="center">
                        <b>{props.description}</b>
                    </Row>
                </Col>
                <Col span={9}>
                    <Space direction="vertical">
                        {props.code}
                    </Space>    
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
                title={[ "Button", <Button type="link" href="https://ant.design/components/button/#API" target="_blank">API</Button> ]}
            />
            
            <Typo>{"import { Button } from 'antd';"}</Typo><br/>            
            
            <Addrow 
            title="block"
            divider={true}            
            demo={<>
                <Button block={true}>block Button</Button>
                <Button block={false}>block Button</Button>
            </>}            
            description="true | false, &nbsp; 기본값 : false"
            code={<>
                <Typo>{"<Button block={true}>black Button</Button>"}</Typo>
                <Typo>{"<Button block={false}>black Button</Button>"}</Typo>
            </>} />

            <Addrow 
            title="danger"
            divider={true} 
            demo={<Button danger={true}>danger Button</Button>}            
            description="true | false, &nbsp; 기본값 : false"
            code={<Typo>{"<Button danger={true}>danger Button</Button>"}</Typo>} />
            
            <Addrow
            title="disabled" 
            divider={true} 
            demo={<Button disabled={true}>disabled Button</Button>}            
            description="true | false, &nbsp; 기본값 : false"
            code={<Typo>{"<Button disabled={true}>disabled Button</Button>"}</Typo>} />

            <Addrow
            title="ghost" 
            divider={true} 
            demo={["클릭=>",<Button ghost={true}>ghost Button</Button>]}
            description="true | false, &nbsp; 기본값 : false"
            code={<Typo>{"<Button ghost={true}>ghost Button</Button>"}</Typo>} />
           
           <Addrow
            title="href" 
            divider={true} 
            demo={[<Button href="http://www.ybtour.co.kr">href</Button>]}
            description="String, &nbsp; 기본값 : -"
            code={<Typo>{'<Button href="www.ybtour.co.kr">href</Button>'}</Typo>} />
           
           <Addrow
            title="icon" 
            divider={true} 
            demo={<Button icon={<SearchOutlined/>}>icon</Button>}
            description="ReactNode, &nbsp;기본값 : -"
            code={<>
                <Typo>{"import { SearchOutlined } from '@ant-design/icons';"}</Typo>
                <Typo>{'<Button icon={<SearchOutlined/>}>icon</Button>'}</Typo>                   
            </>} />

           <Addrow
            title="loading"
            divider={true} 
            demo={<Button loading={true}>loading</Button>}
            description="boolean | { delay: number }, &nbsp;기본값 : false"
            code={<>
                <Typo>{"<Button loading={true}>loading</Button>"}</Typo>                
            </>} />

           <Addrow
            title="shape"
            divider={true} 
            demo={<>                
                <Button shape="circle">circle</Button>
                <Button shape="round">round</Button>
            </>}
            description="default | circle | round, &nbsp;기본값 : default"
            code={<>
                <Typo>{'<Button shape="circle">circle</Button>'}</Typo>
                <Typo>{'<Button shape="round">round</Button>'}</Typo>                
            </>} />

            <Addrow
            title="target" 
            divider={true} 
            demo={[<Button href="http://www.ybtour.co.kr" target="_blank">target</Button>]}
            description="String, &nbsp; 기본값 : -"
            code={<Typo>{'<Button href="http://www.ybtour.co.kr" target="_blank">target</Button>'}</Typo>} />

            <Addrow
            title="type" 
            divider={true} 
            demo={<>
                <Button type="primary">primary</Button>
                <Button type="ghost">ghost</Button>
                <Button type="dashed">dashed</Button>
                <Button type="link">link</Button>
                <Button type="text">text</Button>
                <Button type="default">default</Button>
            </>}
            description="String, &nbsp; 기본값 : default"
            code={<>
                <Typo>{'<Button type="primary">primary</Button>'}</Typo>
                <Typo>{'<Button type="ghost">ghost</Button>'}</Typo>
                <Typo>{'<Button type="dashed">dashed</Button>'}</Typo>
                <Typo>{'<Button type="link">link</Button>'}</Typo>
                <Typo>{'<Button type="text">text</Button>'}</Typo>
                <Typo>{'<Button type="default">default</Button>'}</Typo>
            </>} />


            <Addrow
            title="onClick" 
            divider={true} 
            demo={[<Button onClick={()=>alert("onClick")}>onClick</Button>]}
            description="function, &nbsp; 기본값 : -"
            code={<Typo>{'Button onClick={()=>alert("onClick")}>onClick</Button>'}</Typo>} />
            
            
        </>
    )
}