import { DatePicker,Button,Row, Col, Divider, PageHeader, Typography,Space  } from 'antd';
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

    return(
        <>
            <PageHeader
                className="site-page-header"
                onBack={() => history.back()}
                title={[ "DatePicker", <Button key={keygen} type="link" href="https://ant.design/components/date-picker/#API" target="_blank">API</Button> ]}
            />            
            <Typo>{"import { DatePicker } from 'antd';"}</Typo><p/>

            <Addrow
            title="picker"
            divider={true}
            demo={<>
                <DatePicker  />
                <DatePicker picker="week" />
                <DatePicker picker="month" />
                <DatePicker picker="quarter" />
                <DatePicker picker="year" />
            </>}
            description="date | week | month | quarter | year, &nbsp; 기본값 : date"
            code={<>
                <Typo>{'<DatePicker  />'}</Typo>
                <Typo>{'<DatePicker picker="week" />'}</Typo>
                <Typo>{'<DatePicker picker="month" />'}</Typo>
                <Typo>{'<DatePicker picker="quarter" />'}</Typo>
                <Typo>{'<DatePicker picker="year" />'}</Typo>
            </>} />

            <Addrow
            title="autoFocus"
            divider={true}
            demo={<>
                <DatePicker autoFocus={true}  />
            </>}
            description="boolean, &nbsp; 기본값 : false"
            code={<>
                <Typo>{'<DatePicker autoFocus={true} />'}</Typo>                
            </>} />

            <Addrow
            title="inputReadOnly"
            divider={true}
            demo={<>
                <DatePicker inputReadOnly={true}  />
            </>}
            description="boolean, &nbsp; 기본값 : false"
            code={<>
                <Typo>{'<DatePicker inputReadOnly={true} />'}</Typo>                
            </>} />

            <Addrow
            title="mode"
            divider={true}
            demo={<>
                <DatePicker mode="time"  />
                <DatePicker mode="date"  />
                <DatePicker mode="month"  />
                <DatePicker mode="year"  />
                <DatePicker mode="decade"  />
            </>}
            description="boolean, &nbsp; 기본값 : -"
            code={<>
                <Typo>{'<DatePicker mode="time"  />'}</Typo>
                <Typo>{'<DatePicker mode="date"  />'}</Typo>
                <Typo>{'<DatePicker mode="month"  />'}</Typo>
                <Typo>{'<DatePicker mode="year"  />'}</Typo>
                <Typo>{'<DatePicker mode="decade"  />'}</Typo>
            </>} />

            <Addrow
            title="size"
            divider={true}
            demo={<>
                <DatePicker size="large"  />
                <DatePicker size="middle"  />
                <DatePicker size="small"  />
            </>}
            description="large | middle | small, &nbsp; 기본값 : -"
            code={<>
                <Typo>{'<DatePicker size="large"  />'}</Typo>
                <Typo>{'<DatePicker size="middle"  />'}</Typo>
                <Typo>{'<DatePicker size="small"  />'}</Typo>
            </>} />

            <Addrow
            title="disabledDate"
            divider={true}
            demo={<>
                <DatePicker disabledDate={current => current.date() % 2 === 0}  />
            </>}
            description="function, &nbsp; 기본값 : -"
            code={<>
                <Typo>{'<DatePicker disabledDate={current => current.date() % 2 === 0}  />'}</Typo>
            </>} />

            <Addrow
            title="dateRender"
            divider={true}
            demo={<>
                <DatePicker dateRender={current => {
                    const style = {};
                    if (current.date() % 2 === 0) {
                        style.border = '1px solid #1890ff';
                        style.borderRadius = '50%';
                    }
                    return (
                    <div className="ant-picker-cell-inner" style={style}>
                        {current.date()}
                    </div>
                    );
                }}  />
            </>}
            description="function, &nbsp; 기본값 : -"
            code={<>
                <Typo copyable={false} codeStyle={false}>
<pre>{`<DatePicker dateRender={current => {
    const style = {};
    if (current.date() % 2 === 0) {
        style.border = '1px solid #1890ff';
        style.borderRadius = '50%';
    }
    return (
        <div className="ant-picker-cell-inner" style={style}>
            {current.date()}
        </div>
    );
}}  />`}</pre>
</Typo>
            </>} />


        </>
    )
}