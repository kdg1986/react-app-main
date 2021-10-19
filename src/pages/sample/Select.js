import { Select,Button, PageHeader, } from 'antd';
import {keygen} from '@/util';
import Util from '@/pages/sample/SampleUtil';
import { useState } from 'react';
const { Addrow,Typo } = Util;

const YBSelect = props => {
    let _props = { ...props };
    !_props?.style && (_props.style = {})
    !_props.style?.width && (_props.style = { ..._props.style, width : 150 });
    
    return <Select {..._props}>{props.children}</Select>
}

export default () => {

    const optionList = [ { label : "A1", value : "1" }, { label : "A2", value : "2" }, ]
    const [ openState , open ] = useState(false);
    

    return(
        <>
            <PageHeader
                className="site-page-header"
                onBack={() => history.back()}
                title={[ "Select", <Button key={keygen} type="link" href="https://ant.design/components/select/#API" target="_blank">API</Button> ]}
            />
            
            <Typo>{"import { Select } from 'antd';"}</Typo><br/>            
            <Typo codeStyle={false} copyable={false}>{'const optionList = [ { label : "A1", value : "A1" }, { label : "A2", value : "A2" }, ]'}</Typo>
            

            <Addrow 
            title="allowClear"
            divider={true}            
            demo={<>
                <YBSelect allowClear={true} options={optionList}/>
            </>}            
            description="true | false, &nbsp; 기본값 : false"
            code={<>
                <Typo>{'<YBSelect allowClear={true} options={optionList}/>'}</Typo>                
            </>} />

            <Addrow
            title="autoFocus"
            divider={true}
            demo={<>
                <YBSelect autoFocus={true} options={optionList}/>
            </>}
            description="true | false, &nbsp; 기본값 : false"
            code={<>
                <Typo>{'<YBSelect autoFocus={true} options={optionList}/>'}</Typo>                
            </>} />

            <Addrow
            title="disabled"
            divider={true}
            demo={<>
                <YBSelect disabled={true} options={optionList}/>
            </>}
            description="true | false, &nbsp; 기본값 : false"
            code={<>
                <Typo>{'<YBSelect disabled={true} options={optionList}/>'}</Typo>                
            </>} />

            
            <Addrow
            title="mode"
            divider={true}
            demo={<>
                <YBSelect mode="multiple" options={optionList}/>
            </>}
            description="multiple | tags, &nbsp; 기본값 : -"
            code={<>
                <Typo>{'<YBSelect mode="multiple" options={optionList}/>'}</Typo>
            </>} />

            <Addrow
            title="open"
            divider={true}
            demo={<>
                <Button onClick={()=>open( !openState )}>toggle</Button>
                <YBSelect open={openState} options={optionList}/>
            </>}
            description="multiple | tags, &nbsp; 기본값 : -"
            code={<>
                <Typo codeStyle={false}>
<pre>{`const [ openState , open ] = useState(false);
<Button onClick={()=>open( !openState )}>toggle</Button>
<YBSelect open={openState} options={optionList}/>
`}</pre>
                </Typo>
            </>}/>

            <Addrow
            title="placeholder"
            divider={true}
            demo={<>
                <YBSelect placeholder={<div>선택</div>} allowClear={true} options={optionList}/>
            </>}
            description="ReactNode, &nbsp; 기본값 : -"
            code={<>
                <Typo>{'<YBSelect placeholder={<div>선택</div>} allowClear={true} options={optionList}/>'}</Typo>
            </>} />

            <Addrow
            title="size"
            divider={true}
            demo={<>
                <YBSelect size="large" options={optionList}/>
                <YBSelect size="middle" options={optionList}/>
                <YBSelect size="small" options={optionList}/>
            </>}
            description="large | middle | small, &nbsp; 기본값 : middle"
            code={<>
                <Typo>{'<YBSelect size="large" options={optionList}/>'}</Typo>
                <Typo>{'<YBSelect size="middle" options={optionList}/>'}</Typo>
                <Typo>{'<YBSelect size="small" options={optionList}/>'}</Typo>
            </>} />



            <Addrow
            title="onSelect"
            divider={true}
            demo={<>
                <YBSelect onSelect={(a,b)=>alert(a,b)} options={optionList}/>
            </>}
            description="function, &nbsp; 기본값 : -"
            code={<>
                <Typo>{'<YBSelect onSelect={(a,b)=>console.log(a,b)} options={optionList}/>'}</Typo>
            </>} />

            <Addrow
            title="onClear"
            divider={true}
            demo={<>
                <YBSelect onClear={()=>alert("onClear")} options={optionList} allowClear={true}/>
            </>}
            description="function, &nbsp; 기본값 : -"
            code={<>
                <Typo>{'<YBSelect onClear={(a,b)=>alert(a,b)} options={optionList} allowClear={true}/>'}</Typo>
            </>} />

            <Addrow
            title="onChange"
            divider={true}
            demo={<>
                <YBSelect onChange={(a,b)=>alert(a,b)} options={optionList} />
            </>}
            description="function, &nbsp; 기본값 : -"
            code={<>
                <Typo>{'<YBSelect onChange={(a,b)=>alert(a,b)} options={optionList} />'}</Typo>
            </>} />

                





            
            
        </>
    )
}