import { Button,Input,Row, Col, Divider, PageHeader, Typography,Space  } from 'antd';
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
                <Col span={5}>
                    <Space direction="vertical">{props.demo}</Space>
                </Col>
                <Col span={8}>
                    <Row justify="center">
                        <b>{props.description}</b>
                    </Row>
                </Col>
                <Col span={9}>
                    <Space direction="vertical">{props.code}</Space>
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
                title={["Input",<Button key={keygen()} type="link" href="https://ant.design/components/input/#Input" target="_blank">API</Button>]}
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
            description="string, &nbsp; 기본값 : -"
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
                <Input size="large" />
                <Input size="middle" />
                <Input size="small" />
            </>}            
            description="large | middle | small, &nbsp; 기본값 : -"
            code={<>
                <Typo>{'<Input size="large" />'}</Typo>
                <Typo>{'<Input size="middle" />'}</Typo>
                <Typo>{'<Input size="small" />'}</Typo>
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
            
            <Divider/>
            <PageHeader
                className="site-page-header"
                onBack={() => history.back()}
                title={["TextArea",<Button key={keygen()} type="link" href="https://ant.design/components/input/#Input.TextArea" target="_blank">API</Button>]}
            />

            <Typo>{"<Input.TextArea/>"}</Typo><br/>

            <Addrow
            title="allowClear"
            divider={true}
            demo={<>
                <Input.TextArea allowClear={true} />
            </>}            
            description="boolean, &nbsp; 기본값 : false"
            code={<>
                <Typo>{'<Input.TextArea allowClear={true} />'}</Typo>
            </>} />

            <Addrow
            title="autoSize"
            divider={true}
            demo={<>
                <Input.TextArea autoSize={true} />
                <Input.TextArea autoSize={{ minRows: 2, maxRows: 6 }} />
            </>}            
            description="true | false or { minRows: 2, maxRows: 6 }, &nbsp; 기본값 : false"
            code={<>
                <Typo>{'<Input.TextArea autoSize={true} />'}</Typo>
                <Typo>{'<Input.TextArea autoSize={{ minRows: 2, maxRows: 6 }} />'}</Typo>                
            </>} />

            <Addrow
            title="bordered"
            divider={true}
            demo={<>
                <Input.TextArea bordered={false} />
            </>}            
            description="boolean, &nbsp; 기본값 : true"
            code={<>
                <Typo>{'<Input.TextArea bordered={false} />'}</Typo>
            </>} />

            <Addrow
            title="defaultValue"
            divider={true}
            demo={<>
                <Input.TextArea defaultValue="test" />
            </>}            
            description="string, &nbsp; 기본값 : -"
            code={<>
                <Typo>{'<Input.TextArea defaultValue="test" />'}</Typo>
            </>} />

            <Addrow
            title="maxLength"
            divider={true}
            demo={<>
                <Input.TextArea maxLength={10} />
            </>}            
            description="number, &nbsp; 기본값 : -"
            code={<>
                <Typo>{'<Input.TextArea maxLength={10} />'}</Typo>
            </>} />

            <Addrow
            title="showCount"
            divider={true}
            demo={<>
                <Input.TextArea showCount={true} />
                <Input.TextArea showCount={{ formatter : (count)=> console.log(count) }} />
            </>}            
            description="boolean | object, &nbsp; 기본값 : false"
            code={<>
                <Typo>{'<Input.TextArea showCount={true} />'}</Typo>
                <Typo>{'<Input.TextArea showCount={{ formatter : (count)=> console.log(count) }} />'}</Typo>
            </>} />

            <Addrow
            title="onPressEnter"
            divider={true}
            demo={<>
                <Input.TextArea onPressEnter={(obj)=> console.log(obj)} />
            </>}            
            description="function, &nbsp; 기본값 : -"
            code={<>
                <Typo>{'<Input.TextArea onPressEnter={(obj)=> console.log(obj)} />'}</Typo>
                
            </>} />

            <Addrow
            title="onResize"
            divider={true}
            demo={<>
                <Input.TextArea onResize={(obj)=> console.log(obj)} />
            </>}            
            description="function, &nbsp; 기본값 : -"
            code={<>
                <Typo>{'<Input.TextArea onResize={(obj)=> console.log(obj)} />'}</Typo>                
            </>} />

            <Divider/>
            <PageHeader
                className="site-page-header"
                onBack={() => history.back()}
                title={["Search",<Button key={keygen()} type="link" href="https://ant.design/components/input/#Input.Search" target="_blank">API</Button>]}
            />

            <Typo>{"<Input.Search/>"}</Typo><br/>

            <Addrow
            title="enterButton"
            divider={true}
            demo={<>
                <Input.Search enterButton={true}/>
                <Input.Search enterButton={<h1>Search</h1>}/>
            </>}            
            description="boolean | ReactNode, &nbsp; 기본값 : false"
            code={<>
                <Typo>{'<Input.Search enterButton={true}/>'}</Typo>
                <Typo>{'<Input.Search enterButton={<h1>Search</h1>}/>'}</Typo>                
            </>} />

            <Addrow
            title="loading"
            divider={true}
            demo={<>
                <Input.Search loading={true}/>                
            </>}            
            description="boolean, &nbsp; 기본값 : false"
            code={<>
                <Typo>{'<Input.Search loading={true}/>'}</Typo>                
            </>} />

            <Addrow
            title="onSearch"
            divider={true}
            demo={<>
                <Input.Search onSearch={()=>alert("search")}/>
            </>}            
            description="boolean, &nbsp; 기본값 : false"
            code={<>
                <Typo>{'<Input.Search onSearch={()=>alert("search")}/>'}</Typo>                
            </>} />            


            <Divider/>
            <PageHeader
                className="site-page-header"
                onBack={() => history.back()}
                title={["Password",<Button key={keygen()} type="link" href="https://ant.design/components/input/#Input.Password" target="_blank">API</Button>]}
            />

            <Typo>{"<Input.Password/>"}</Typo><br/>

            <Addrow
            title="iconRender"
            divider={true}
            demo={<>
                <Input.Password iconRender={(state)=> state ? <div>true</div> : <div>false</div>  }/>
            </>}            
            description="(visible) => ReactNode, &nbsp; 기본값 : -"
            code={<>
                <Typo>{'<Input.Password iconRender={(state)=> state ? <div>true</div> : <div>false</div>  }/>'}</Typo>                
            </>} />            

            <Addrow
            title="iconRender"
            divider={true}
            demo={<>
                <Input.Password visibilityToggle={true}/>
            </>}            
            description="boolean, &nbsp; 기본값 : true"
            code={<>
                <Typo>{'<Input.Password visibilityToggle={true}/>'}</Typo>                
            </>} />
            

        </>
    )
}