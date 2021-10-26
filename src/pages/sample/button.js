import { Button, PageHeader } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import Util from '@/pages/sample/SampleUtil';
const { rowUtil,Typo } = Util;
const AddRow = rowUtil();

export default () => {
    return(
        <>
            <PageHeader
                className="site-page-header"
                onBack={() => history.back()}
                title={[ "Button", <Button type="link" href="https://ant.design/components/button/#API" target="_blank">API</Button> ]}
            />
            
            <Typo>{"import { Button } from 'antd';"}</Typo><br/>            
            
            <AddRow 
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

            <AddRow 
            title="danger"
            divider={true} 
            demo={<Button danger={true}>danger Button</Button>}            
            description="true | false, &nbsp; 기본값 : false"
            code={<Typo>{"<Button danger={true}>danger Button</Button>"}</Typo>} />
            
            <AddRow
            title="disabled" 
            divider={true} 
            demo={<Button disabled={true}>disabled Button</Button>}            
            description="true | false, &nbsp; 기본값 : false"
            code={<Typo>{"<Button disabled={true}>disabled Button</Button>"}</Typo>} />

            <AddRow
            title="ghost" 
            divider={true} 
            demo={["클릭=>",<Button ghost={true}>ghost Button</Button>]}
            description="true | false, &nbsp; 기본값 : false"
            code={<Typo>{"<Button ghost={true}>ghost Button</Button>"}</Typo>} />
           
           <AddRow
            title="href" 
            divider={true} 
            demo={[<Button href="http://www.ybtour.co.kr">href</Button>]}
            description="String, &nbsp; 기본값 : -"
            code={<Typo>{'<Button href="www.ybtour.co.kr">href</Button>'}</Typo>} />
           
           <AddRow
            title="icon" 
            divider={true} 
            demo={<Button icon={<SearchOutlined/>}>icon</Button>}
            description="ReactNode, &nbsp;기본값 : -"
            code={<>
                <Typo>{"import { SearchOutlined } from '@ant-design/icons';"}</Typo>
                <Typo>{'<Button icon={<SearchOutlined/>}>icon</Button>'}</Typo>                   
            </>} />

           <AddRow
            title="loading"
            divider={true} 
            demo={<Button loading={true}>loading</Button>}
            description="boolean | { delay: number }, &nbsp;기본값 : false"
            code={<>
                <Typo>{"<Button loading={true}>loading</Button>"}</Typo>                
            </>} />

           <AddRow
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

            <AddRow
            title="target" 
            divider={true} 
            demo={[<Button href="http://www.ybtour.co.kr" target="_blank">target</Button>]}
            description="String, &nbsp; 기본값 : -"
            code={<Typo>{'<Button href="http://www.ybtour.co.kr" target="_blank">target</Button>'}</Typo>} />

            <AddRow
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


            <AddRow
            title="onClick" 
            divider={true} 
            demo={[<Button onClick={()=>alert("onClick")}>onClick</Button>]}
            description="function, &nbsp; 기본값 : -"
            code={<Typo>{'Button onClick={()=>alert("onClick")}>onClick</Button>'}</Typo>} />
            
            
        </>
    )
}