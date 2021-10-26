import { Switch,Button, PageHeader, Divider } from 'antd';
import Util from '@/pages/sample/SampleUtil';
import {keygen} from '@/util';
const { rowUtil,Typo } = Util;
const Addrow = rowUtil();

export default () => {
    return(
        <>
            <PageHeader
                className="site-page-header"
                onBack={() => history.back()}
                title={[ "Switch", <Button key={keygen} type="link" href="https://ant.design/components/switch/#API" target="_blank">API</Button> ]}
            />            
            <Typo>{"import { Switch } from 'antd';"}</Typo><p/>

            <Addrow
            title="defaultChecked"
            divider={true}
            demo={<>
                <Switch defaultChecked />
            </>}
            description="true | false, &nbsp; 기본값 : false"
            code={<>
                <Typo>{'<Switch defaultChecked />'}</Typo>
            </>} />

            <Addrow
            title="autoFocus"
            divider={true}
            demo={<>
                <Switch autoFocus />
            </>}
            description="true | false, &nbsp; 기본값 : false"
            code={<>
                <Typo>{'<Switch autoFocus />'}</Typo>
            </>} />

            <Addrow
            title="checked"
            divider={true}
            demo={<>
                <Switch checked={true} />
            </>}
            description="true | false, &nbsp; 기본값 : false"
            code={<>
                <Typo>{'<Switch checked={true} />'}</Typo>
            </>} />

            <Addrow
            title="checkedChildren"
            divider={true}
            demo={<>
                <Switch checkedChildren={<h1>check</h1>} />
            </>}
            description="ReactNode, &nbsp; 기본값 : -"
            code={<>
                <Typo>{'<Switch checkedChildren={<h1>check</h1>} />'}</Typo>
            </>} />

            <Addrow
            title="unCheckedChildren"
            divider={true}
            demo={<>
                <Switch unCheckedChildren={<h1>unCheck</h1>} />
            </>}
            description="ReactNode, &nbsp; 기본값 : -"
            code={<>
                <Typo>{'<Switch unCheckedChildren={<h1>unCheck</h1>} />'}</Typo>
            </>} />

            <Addrow
            title="loading"
            divider={true}
            demo={<>
                <Switch loading={true} />
            </>}
            description="true | false, &nbsp; 기본값 : false"
            code={<>
                <Typo>{'<Switch loading={true} />'}</Typo>
            </>} />

            <Addrow
            title="onClick"
            divider={true}
            demo={<>
                <Switch onClick={(a,b)=>console.log(a,b)} />
            </>}
            description="function, &nbsp; 기본값 : -"
            code={<>
                <Typo>{'<Switch onClick={(a,b)=>console.log(a,b)} />'}</Typo>
            </>} />

            <Addrow
            title="onChange"
            divider={true}
            demo={<>
                <Switch onChange={(a,b)=>console.log(a,b)} />
            </>}
            description="function, &nbsp; 기본값 : -"
            code={<>
                <Typo>{'<Switch onChange={(a,b)=>console.log(a,b)} />'}</Typo>
            </>} />

            <Addrow
            title="size"
            divider={true}
            demo={<>
                <Switch size="default" />
                <Switch size="small" />
            </>}
            description="default | small, &nbsp; 기본값 : default"
            code={<>
                <Typo>{'<Switch size="default" />'}</Typo>
                <Typo>{'<Switch size="small" />'}</Typo>
            </>} />


        </>
    )
}