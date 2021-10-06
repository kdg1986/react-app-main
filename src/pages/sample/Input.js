import { Button,Input,Row, Col, Divider, PageHeader, Typography  } from 'antd';
import { SearchOutlined,DownloadOutlined } from '@ant-design/icons';
import { v4 as uuidv4 } from 'uuid';

const Typo = props => <Typography.Text 
                      code={props.codeStyle === false ? false : true} strong="true" 
                      copyable={props.copyable === false ? false : true}>{ props.children }</Typography.Text>

const Addrow = props => {
    return(
        <>  
            {props.divider && <Divider/>}
            {props.title && <Typography.Title level={4}>{props.title}</Typography.Title>}
            
            <Row>
                <Col span={5}>{props.demo}</Col>                
                <Col span={8}>
                    <Row justify="center">
                        <b>{props.description}</b>
                    </Row>
                </Col>
                <Col span={9}>
                        {props.code}
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
                title={["Input",<Button key={uuidv4()} type="link" href="https://ant.design/components/input/#Input" target="_blank">API</Button>]}
            />
            
            <Typo>{"import { Input } from 'antd';"}</Typo><br/>
            
            <Addrow
            title="addonAfter"
            divider={true}
            demo={<>
                <Input addonAfter={<SearchOutlined/>}/>
            </>}            
            description="ReactNode, &nbsp; 기본값 : -"
            code={<>
                <Typo>{"<Input addonAfter={<SearchOutlined/>}/>"}</Typo>
            </>} />

            <Addrow
            title="addonBefore"
            divider={true}
            demo={<>
                <Input addonBefore={<SearchOutlined/>}/>
            </>}            
            description="ReactNode, &nbsp; 기본값 : -"
            code={<>
                <Typo>{"<Input addonBefore={<SearchOutlined/>}/>"}</Typo>
            </>} />

            <Addrow
            title="allowClear"
            divider={true}
            demo={<>
                <Input allowClear={true} defaultValue="test"/>
            </>}            
            description="ReactNode, &nbsp; 기본값 : -"
            code={<>
                <Typo>{'<Input allowClear={true} defaultValue="test"/>'}</Typo>
            </>} />

            <Addrow
            title="bordered"
            divider={true}
            demo={<>
                <Input bordered={false} defaultValue="test"/>
            </>}            
            description="true | false, &nbsp; 기본값 : true"
            code={<>
                <Typo>{'<Input bordered={true} defaultValue="test"/>'}</Typo>
            </>} />

            <Addrow
            title="defaultValue"
            divider={true}
            demo={<>
                <Input defaultValue="test" />
            </>}            
            description="String, &nbsp; 기본값 : -"
            code={<>
                <Typo>{'<Input defaultValue="test" />'}</Typo>
            </>} />

            <Addrow
            title="disabled"
            divider={true}
            demo={<>
                <Input disabled={true} />
            </>}            
            description="true | false, &nbsp; 기본값 : false"
            code={<>
                <Typo>{'<Input disabled={true} />'}</Typo>
            </>} />

            <Addrow
            title="maxLength"
            divider={true}
            demo={<>
                <Input maxLength={10} />
            </>}            
            description="number, &nbsp; 기본값 : -"
            code={<>
                <Typo>{'<Input maxLength={10} />'}</Typo>
            </>} />

            <Addrow
            title="prefix"
            divider={true}
            demo={<>
                <Input prefix={<DownloadOutlined/>} />
            </>}            
            description="ReactNode, &nbsp; 기본값 : -"
            code={<>
                <Typo>{'<Input prefix={<DownloadOutlined/>} />'}</Typo>
            </>} />

            <Addrow
            title="suffix"
            divider={true}
            demo={<>
                <Input suffix={<DownloadOutlined/>} />
            </>}            
            description="ReactNode, &nbsp; 기본값 : -"
            code={<>
                <Typo>{'<Input suffix={<DownloadOutlined/>} />'}</Typo>
            </>} />

            <Addrow
            title="size"
            divider={true}
            demo={<>
                <Input size="large" /><p/>
                <Input size="middle" /><p/>
                <Input size="small" />
            </>}            
            description="large | middle | small, &nbsp; 기본값 : -"
            code={<>
                <Typo>{'<Input size="large" />'}</Typo><p/>
                <Typo>{'<Input size="middle" />'}</Typo><p/>
                <Typo>{'<Input size="small" />'}</Typo><p/>
            </>} />
            
            <Addrow
            title="onChange"
            divider={true}
            demo={<>
                <Input onChange={()=>alert("onChange")} />
            </>}            
            description="function, &nbsp; 기본값 : -"
            code={<>
                <Typo>{'<Input onChange={()=>alert("onChange")} />'}</Typo>
            </>} />

            <Addrow
            title="onPressEnter"
            divider={true}
            demo={<>
                <Input onPressEnter={()=>alert("onPressEnter")} />
            </>}            
            description="function, &nbsp; 기본값 : -"
            code={<>
                <Typo>{'<Input onPressEnter={()=>alert("onPressEnter")} />'}</Typo>
            </>} />
            



            
            
            
        </>
    )
}