import { Radio,Button,Divider, PageHeader } from 'antd';
import {keygen} from '@/util';
import Util from '@/pages/sample/SampleUtil';
const { rowUtil,Typo } = Util;
const Addrow = rowUtil();

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
                <Radio autoFocus={true}/> 
                <Radio.Button autoFocus={true}>button</Radio.Button>
            </>}            
            description="boolean, &nbsp; 기본값 : false"
            code={<>
                <Typo>{"<Radio autoFocus={true}/>"}</Typo>
                <Typo>{"<Radio.Button autoFocus={true}>button</Radio.Button>"}</Typo>
            </>} />

            <Addrow
            title="checked"
            divider={true}
            demo={<>
                <Radio checked={true}/> 
                <Radio.Button checked={true}>button</Radio.Button>
            </>}            
            description="boolean, &nbsp; 기본값 : false"
            code={<>
                <Typo>{"<Radio checked={true}/>"}</Typo>
                <Typo>{"<Radio.Button checked={true}>button</Radio.Button>"}</Typo>
            </>} />

            <Addrow
            title="defaultChecked"
            divider={true}
            demo={<>
                <Radio defaultChecked={true}/> 
                <Radio.Button defaultChecked={true}>button</Radio.Button>
            </>}            
            description="boolean, &nbsp; 기본값 : false"
            code={<>
                <Typo>{"<Radio defaultChecked={true}/>"}</Typo>
                <Typo>{"<Radio.Button defaultChecked={true}>button</Radio.Button>"}</Typo>
            </>} />

            <Addrow
            title="disabled"
            divider={true}
            demo={<>
                <Radio disabled={true}/> 
                <Radio.Button disabled={true}>button</Radio.Button>
            </>}            
            description="boolean, &nbsp; 기본값 : false"
            code={<>
                <Typo>{"<Radio disabled={true}/>"}</Typo>
                <Typo>{"<Radio.Button disabled={true}>button</Radio.Button>"}</Typo>
            </>} />
           
            <Addrow
            title="value"
            divider={true}
            demo={<>
                <Radio value="1"/> 
                <Radio.Button value="1">button</Radio.Button>
            </>}            
            description="boolean, &nbsp; 기본값 : false"
            code={<>
                <Typo>{'<Radio value="1"/>'}</Typo>
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
                </Radio.Group>
                <Radio.Group buttonStyle="solid">
                    <Radio.Button value="1">1</Radio.Button>
                    <Radio.Button value="2">2</Radio.Button>
                    <Radio.Button value="3">3</Radio.Button>                    
                </Radio.Group>                
            </>}            
            description="outline | solid, &nbsp; 기본값 : outline"
            code={<>
                <Typo codeStyle={false}>
<pre>{`<Radio.Group buttonStyle="outline">
    <Radio.Button value="1">1</Radio.Button>
    <Radio.Button value="2">2</Radio.Button>
    <Radio.Button value="3">3</Radio.Button>                    
</Radio.Group>`}</pre>
                </Typo>
                <Typo codeStyle={false}>
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
                <Typo codeStyle={false}>
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
                <Radio.Group defaultValue="2" options={["1","2","3"]}></Radio.Group>
                <Radio.Group defaultValue="3" options={[
                    { label: "a" ,value: "1"  },
                    { label: "b" ,value: "2" ,disabled : true },
                    { label: "c" ,value: "3"  }
                ]}></Radio.Group>
            </>}            
            description="Array : string[] | { label: string value: string disabled?: boolean }, &nbsp; 기본값 : -"
            code={<>
            <Typo>{`<Radio.Group defaultValue="2" options={["1","2","3"]}></Radio.Group>`}</Typo>
                <Typo codeStyle={false}>
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
                <Radio.Group defaultValue="2" options={["1","2","3"]} optionType="button"/>
                <Radio.Group defaultValue="2" options={["1","2","3"]} size="large" optionType="button"/>                
                <Radio.Group defaultValue="2" options={["1","2","3"]} size="middle" optionType="button"/>
                <Radio.Group defaultValue="2" options={["1","2","3"]} size="small" optionType="button"/>
            </>}            
            description="large | middle | small, &nbsp; 기본값 : -"
            code={<>
            <Typo>{`<Radio.Group defaultValue="2" options={["1","2","3"]} optionType="button"/>`}</Typo>
            <Typo>{`<Radio.Group defaultValue="2" options={["1","2","3"]} size="large" optionType="button"/>`}</Typo>
            <Typo>{`<Radio.Group defaultValue="2" options={["1","2","3"]} size="middle" optionType="button"/>`}</Typo>
            <Typo>{`<Radio.Group defaultValue="2" options={["1","2","3"]} size="small" optionType="button"/>`}</Typo>
            </>}/>
        </>
    )
}