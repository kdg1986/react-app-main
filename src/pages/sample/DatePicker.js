import { Button, PageHeader, Divider } from 'antd';
import Util from '@/pages/sample/SampleUtil';
import { keygen } from '@/util';
import YBDatePicker from '@/components/YBDatePicker';

const { rowUtil, Typo } = Util;
const Addrow = rowUtil();
const { RangePicker } = YBDatePicker;

export default () => {
  return (
    <>
      <PageHeader
        className="site-page-header"
        onBack={() => history.back()}
        title={[
          'DatePicker',
          <Button
            key={keygen}
            type="link"
            href="https://ant.design/components/date-picker/#API"
            target="_blank"
          >
            API
          </Button>,
        ]}
      />
      <Typo>{"import { DatePicker } from 'antd';"}</Typo>
      <p />
      <Addrow
        title="picker"
        divider={true}
        demo={
          <>
            {/*<YBDatePicker defaultValue={moment('2021-10-20')} />*/}
            <YBDatePicker picker="week" />
            <YBDatePicker picker="month" />
            <YBDatePicker picker="quarter" />
            <YBDatePicker picker="year" />
          </>
        }
        description="date | week | month | quarter | year, &nbsp; 기본값 : date"
        code={
          <>
            <Typo>{'<YBDatePicker  />'}</Typo>
            <Typo>{'<YBDatePicker picker="week" />'}</Typo>
            <Typo>{'<YBDatePicker picker="month" />'}</Typo>
            <Typo>{'<YBDatePicker picker="quarter" />'}</Typo>
            <Typo>{'<YBDatePicker picker="year" />'}</Typo>
          </>
        }
      />
      <Addrow
        title="autoFocus"
        divider={true}
        demo={
          <>
            <YBDatePicker autoFocus={true} />
          </>
        }
        description="boolean, &nbsp; 기본값 : false"
        code={
          <>
            <Typo>{'<YBDatePicker autoFocus={true} />'}</Typo>
          </>
        }
      />
      <Addrow
        title="inputReadOnly"
        divider={true}
        demo={
          <>
            <YBDatePicker inputReadOnly={true} />
          </>
        }
        description="boolean, &nbsp; 기본값 : false"
        code={
          <>
            <Typo>{'<YBDatePicker inputReadOnly={true} />'}</Typo>
          </>
        }
      />

      <Addrow
        title="size"
        divider={true}
        demo={
          <>
            <YBDatePicker size="large" />
            <YBDatePicker size="middle" />
            <YBDatePicker size="small" />
          </>
        }
        description="large | middle | small, &nbsp; 기본값 : -"
        code={
          <>
            <Typo>{'<YBDatePicker size="large"  />'}</Typo>
            <Typo>{'<YBDatePicker size="middle"  />'}</Typo>
            <Typo>{'<YBDatePicker size="small"  />'}</Typo>
          </>
        }
      />
      <Addrow
        title="disabledDate"
        divider={true}
        demo={
          <>
            <YBDatePicker disabledDate={(current) => current.date() % 2 === 0} />
          </>
        }
        description="function, &nbsp; 기본값 : -"
        code={
          <>
            <Typo>{'<YBDatePicker disabledDate={current => current.date() % 2 === 0}  />'}</Typo>
          </>
        }
      />
      <Addrow
        title="dateRender"
        divider={true}
        demo={
          <>
            <YBDatePicker
              dateRender={(current) => {
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
              }}
            />
          </>
        }
        description="function, &nbsp; 기본값 : -"
        code={
          <>
            <Typo codeStyle={false}>
              <pre>{`<YBDatePicker dateRender={current => {
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
          </>
        }
      />
      <Divider />
      <PageHeader
        className="site-page-header"
        onBack={() => history.back()}
        title={[
          'RangePicker',
          <Button
            key={keygen}
            type="link"
            href="https://ant.design/components/date-picker/#RangePicker"
            target="_blank"
          >
            API
          </Button>,
        ]}
      />
      <Typo>{'const { RangePicker } = DatePicker;'}</Typo>
      <p />
      <Addrow
        title="picker"
        divider={true}
        demo={
          <>
            <RangePicker />
            <RangePicker picker="week" />
            <RangePicker picker="month" />
            <RangePicker picker="quarter" />
            <RangePicker picker="year" />
          </>
        }
        description="date | week | month | quarter | year, &nbsp; 기본값 : date"
        code={
          <>
            <Typo>{'<RangePicker  />'}</Typo>
            <Typo>{'<RangePicker picker="week" />'}</Typo>
            <Typo>{'<RangePicker picker="month" />'}</Typo>
            <Typo>{'<RangePicker picker="quarter" />'}</Typo>
            <Typo>{'<RangePicker picker="year" />'}</Typo>
          </>
        }
      />
    </>
  );
};
