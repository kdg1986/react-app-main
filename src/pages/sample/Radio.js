import { Radio,Button,Input,Row, Col, Divider, PageHeader, Typography  } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import {keygen} from '@/util';

const Typo = props => <Typography.Text 
                      code={props.codeStyle === false ? false : true} strong="true" 
                      copyable={props.copyable === false ? false : true}>{ props.children}</Typography.Text>

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
                <Col span={10}>
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
                title={["Radio/Radio.Button",<Button key={keygen()} type="link" href="https://ant.design/components/radio/#Radio/Radio.Button" target="_blank">API</Button>]}
            />
            
            <Typo>{"import { Radio } from 'antd';"}</Typo><br/>
            <Typo>{"<Radio/>"}</Typo><br/>
            <Typo>{"<Radio.Button/>"}</Typo>
            
            <Addrow
            title="autoFocus"
            divider={true}
            demo={<>
                <Radio autoFocus={true}/> <p/>
                <Radio.Button autoFocus={true}>button</Radio.Button>
            </>}            
            description="boolean, &nbsp; 기본값 : false"
            code={<>
                <Typo>{"<Radio autoFocus={true}/>"}</Typo><p/>
                <Typo>{"<Radio.Button autoFocus={true}>button</Radio.Button>"}</Typo>
            </>} />

            <Addrow
            title="checked"
            divider={true}
            demo={<>
                <Radio checked={true}/> <p/>
                <Radio.Button checked={true}>button</Radio.Button>
            </>}            
            description="boolean, &nbsp; 기본값 : false"
            code={<>
                <Typo>{"<Radio checked={true}/>"}</Typo><p/>
                <Typo>{"<Radio.Button checked={true}>button</Radio.Button>"}</Typo>
            </>} />

            <Addrow
            title="defaultChecked"
            divider={true}
            demo={<>
                <Radio defaultChecked={true}/> <p/>
                <Radio.Button defaultChecked={true}>button</Radio.Button>
            </>}            
            description="boolean, &nbsp; 기본값 : false"
            code={<>
                <Typo>{"<Radio defaultChecked={true}/>"}</Typo><p/>
                <Typo>{"<Radio.Button defaultChecked={true}>button</Radio.Button>"}</Typo>
            </>} />

            <Addrow
            title="disabled"
            divider={true}
            demo={<>
                <Radio disabled={true}/> <p/>
                <Radio.Button disabled={true}>button</Radio.Button>
            </>}            
            description="boolean, &nbsp; 기본값 : false"
            code={<>
                <Typo>{"<Radio disabled={true}/>"}</Typo><p/>
                <Typo>{"<Radio.Button disabled={true}>button</Radio.Button>"}</Typo>
            </>} />
           
            <Addrow
            title="value"
            divider={true}
            demo={<>
                <Radio value="1"/> <p/>
                <Radio.Button value="1">button</Radio.Button>
            </>}            
            description="boolean, &nbsp; 기본값 : false"
            code={<>
                <Typo>{'<Radio value="1"/>'}</Typo><p/>
                <Typo>{'<Radio.Button value="1">button</Radio.Button>'}</Typo>
            </>} />

            <Divider/>
            <PageHeader
                className="site-page-header"
                onBack={() => history.back()}
                title={["RadioGroup",<Button key={keygen()} type="link" href="https://ant.design/components/radio/#RadioGroup" target="_blank">API</Button>]}
            />

            <Addrow
            title="buttonStyle"
            divider={true}
            demo={<>
                <Radio.Group buttonStyle="outline">
                    <Radio.Button value="1">1</Radio.Button>
                    <Radio.Button value="2">2</Radio.Button>
                    <Radio.Button value="3">3</Radio.Button>                    
                </Radio.Group><p/>
                <Radio.Group buttonStyle="solid">
                    <Radio.Button value="1">1</Radio.Button>
                    <Radio.Button value="2">2</Radio.Button>
                    <Radio.Button value="3">3</Radio.Button>                    
                </Radio.Group>                
            </>}            
            description="outline | solid, &nbsp; 기본값 : outline"
            code={<>
                <Typo copyable={false} codeStyle={false}>
<pre>{`<Radio.Group buttonStyle="outline">
    <Radio.Button value="1">1</Radio.Button>
    <Radio.Button value="2">2</Radio.Button>
    <Radio.Button value="3">3</Radio.Button>                    
</Radio.Group>`}</pre>
                </Typo><p/>
                <Typo copyable={false} codeStyle={false}>
<pre>{`<Radio.Group buttonStyle="solid">
    <Radio.Button value="1">1</Radio.Button>
    <Radio.Button value="2">2</Radio.Button>
    <Radio.Button value="3">3</Radio.Button>                    
</Radio.Group>`}</pre>
                </Typo>                
            </>}/>

            <Addrow
            title="defaultValue"
            divider={true}
            demo={<>
                <Radio.Group defaultValue="1">
                    <Radio.Button value="1">1</Radio.Button>
                    <Radio.Button value="2">2</Radio.Button>
                    <Radio.Button value="3">3</Radio.Button>                    
                </Radio.Group>             
            </>}            
            description="any, &nbsp; 기본값 : -"
            code={<>
                <Typo copyable={false} codeStyle={false}>
<pre>{`<Radio.Group defaultValue="1">
    <Radio.Button value="1">1</Radio.Button>
    <Radio.Button value="2">2</Radio.Button>
    <Radio.Button value="3">3</Radio.Button>                    
</Radio.Group>`}</pre>
                </Typo>
            </>}/>

            <Addrow
            title="options"
            divider={true}
            demo={<>
                <Radio.Group defaultValue="2" options={["1","2","3"]}></Radio.Group><p/>
                <Radio.Group defaultValue="3" options={[
                    { label: "a" ,value: "1"  },
                    { label: "b" ,value: "2" ,disabled : true },
                    { label: "c" ,value: "3"  }
                ]}></Radio.Group>
            </>}            
            description="Array : string[] | { label: string value: string disabled?: boolean }, &nbsp; 기본값 : -"
            code={<>
            <Typo copyable={false} codeStyle={false}>
<pre>{`<Radio.Group defaultValue="2" options={["1","2","3"]}></Radio.Group>`}</pre>
                </Typo><p/>
                <Typo copyable={false} codeStyle={false}>
<pre>{`<Radio.Group defaultValue="3" options={[
    { label: "a" ,value: "1"  },
    { label: "b" ,value: "2" ,disabled : true },
    { label: "c" ,value: "3"  }
]}></Radio.Group>`}</pre>
                </Typo>
            </>}/>

            <Addrow
            title="optionType"
            divider={true}
            demo={<>
                <Radio.Group defaultValue="2" options={["1","2","3"]} optionType="button"></Radio.Group>
            </>}            
            description="default | button, &nbsp; 기본값 : default"
            code={<>
            <Typo>{`<Radio.Group defaultValue="2" options={["1","2","3"]} optionType="button"/>`}</Typo>
            </>}/>

            <Addrow
            title="size"
            divider={true}
            demo={<>
                <Radio.Group defaultValue="2" options={["1","2","3"]} optionType="button"/><p/>
                <Radio.Group defaultValue="2" options={["1","2","3"]} size="large" optionType="button"/><p/>                
                <Radio.Group defaultValue="2" options={["1","2","3"]} size="middle" optionType="button"/><p/>
                <Radio.Group defaultValue="2" options={["1","2","3"]} size="small" optionType="button"/>
            </>}            
            description="large | middle | small, &nbsp; 기본값 : -"
            code={<>
            <Typo>{`<Radio.Group defaultValue="2" options={["1","2","3"]} optionType="button"/>`}</Typo><p/>
            <Typo>{`<Radio.Group defaultValue="2" options={["1","2","3"]} size="large" optionType="button"/>`}</Typo><p/>
            <Typo>{`<Radio.Group defaultValue="2" options={["1","2","3"]} size="middle" optionType="button"/>`}</Typo><p/>
            <Typo>{`<Radio.Group defaultValue="2" options={["1","2","3"]} size="small" optionType="button"/>`}</Typo>
            </>}/>
        </>
    )
}