import { Checkbox,Button,Row, Col, Divider, PageHeader, Typography,Space  } from 'antd';
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


export default () => {
    
    const op = [{ label: 'Apple', value: 'A' },{ label: 'Pear', value: 'P' },]

    return(
        <>
            <PageHeader
                className="site-page-header"
                onBack={() => history.back()}
                title={[ "Checkbox", <Button key={keygen} type="link" href="https://ant.design/components/checkbox/#Checkbox" target="_blank">API</Button> ]}
            />
            
            <Typo>{"import { Checkbox } from 'antd';"}</Typo>

            <Addrow
            title="autoFocus"
            divider={true}
            demo={<>
                <Checkbox autoFocus={true} >Checkbox</Checkbox>
            </>}
            description="true | false, &nbsp; 기본값 : false"
            code={<>
                <Typo>{'<Checkbox autoFocus={true}>Checkbox</Checkbox>'}</Typo>
            </>} />

            <Addrow
            title="checked"
            divider={true}
            demo={<>
                <Checkbox checked={true} >Checkbox</Checkbox>
            </>}
            description="true | false, &nbsp; 기본값 : false"
            code={<>
                <Typo>{'<Checkbox checked={true} >Checkbox</Checkbox>'}</Typo>
            </>} />

            <Addrow
            title="defaultChecked"
            divider={true}
            demo={<>
                <Checkbox defaultChecked={true} >Checkbox</Checkbox>
            </>}
            description="true | false, &nbsp; 기본값 : false"
            code={<>
                <Typo>{'<Checkbox defaultChecked={true} >Checkbox</Checkbox>'}</Typo>
            </>} />

            <Addrow
            title="disabled"
            divider={true}
            demo={<>
                <Checkbox disabled={true} >Checkbox</Checkbox>
            </>}
            description="true | false, &nbsp; 기본값 : false"
            code={<>
                <Typo>{'<Checkbox disabled={true} >Checkbox</Checkbox>'}</Typo>
            </>} />

            <Addrow
            title="indeterminate"
            divider={true}
            demo={<>
                <Checkbox indeterminate={true} >Checkbox</Checkbox>
            </>}
            description="true | false, &nbsp; 기본값 : false"
            code={<>
                <Typo>{'<Checkbox indeterminate={true} >Checkbox</Checkbox>'}</Typo>
            </>} />

            <Addrow
            title="onChange"
            divider={true}
            demo={<>
                <Checkbox onChange={(e)=>console.log(e)} >Checkbox</Checkbox>
            </>}
            description="true | false, &nbsp; 기본값 : false"
            code={<>
                <Typo>{'<Checkbox onChange={(e)=>console.log(e)} >Checkbox</Checkbox>'}</Typo>
            </>} />

            <Divider/>
            <PageHeader
                className="site-page-header"
                onBack={() => history.back()}
                title={[ "Checkbox.Group", <Button key={keygen} type="link" href="https://ant.design/components/checkbox/#Checkbox-Group" target="_blank">API</Button> ]}
            />     

            <Typo>{"<Checkbox.Group/>"}</Typo>

            <Typo codeStyle={false} copyable={false}>{"const op = [{ label: 'Apple', value: 'A' },{ label: 'Pear', value: 'P' },]"}</Typo>

            <Addrow
            title="options"
            divider={true}
            demo={<>
                <Checkbox.Group options={op} />
                <Checkbox.Group options={["Apple","Pear"]} />
            </>}
            description="obj{ label : string, value : string } | string[] , &nbsp; 기본값 : []"
            code={<>
                <Typo>{'<Checkbox.Group options={op} />'}</Typo>
                <Typo>{'<Checkbox.Group options={["Apple","Pear"]} />'}</Typo>
            </>} />

            <Addrow
            title="defaultValue"
            divider={true}
            demo={<>
                <Checkbox.Group options={op} defaultValue={["A"]} />
            </>}
            description="string[] , &nbsp; 기본값 : []"
            code={<>
                <Typo>{'<Checkbox.Group options={op} defaultValue={["A"]} />'}</Typo>
            </>} />

            <Addrow
            title="disabled"
            divider={true}
            demo={<>
                <Checkbox.Group options={op} disabled={true} />
            </>}
            description="true | false , &nbsp; 기본값 : false"
            code={<>
                <Typo>{'<Checkbox.Group options={op} disabled={true} />'}</Typo>
            </>} />

            <Addrow
            title="value"
            divider={true}
            demo={<>
                <Checkbox.Group options={op} value={["A","P"]} />
            </>}
            description="string[] , &nbsp; 기본값 : []"
            code={<>
                <Typo>{'<Checkbox.Group options={op} value={["A","P"]} />'}</Typo>
            </>} />

            <Addrow
            title="onChange"
            divider={true}
            demo={<>
                <Checkbox.Group options={op} name="TEST" onChange={(val)=>console.log(val,event.target.name)} />
            </>}
            description="string[] , &nbsp; 기본값 : []"
            code={<>
                <Typo>{'<Checkbox.Group options={op} name="TEST" onChange={(val)=>console.log(val,event.target.name)} />'}</Typo>
            </>} />





            
            
        </>
    )
}