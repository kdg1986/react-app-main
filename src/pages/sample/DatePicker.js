import { DatePicker, Button, PageHeader, Divider } from 'antd';
import moment from 'moment';
import Util from '@/pages/sample/SampleUtil';
import { keygen } from '@/util';
const { rowUtil, Typo } = Util;
const Addrow = rowUtil();
const { RangePicker } = DatePicker;

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
            <DatePicker defaultValue={moment('2021-10-20')} />
            <DatePicker picker="week" />
            <DatePicker picker="month" />
            <DatePicker picker="quarter" />
            <DatePicker picker="year" />
          </>
        }
        description="date | week | month | quarter | year, &nbsp; 기본값 : date"
        code={
          <>
            <Typo>{'<DatePicker  />'}</Typo>
            <Typo>{'<DatePicker picker="week" />'}</Typo>
            <Typo>{'<DatePicker picker="month" />'}</Typo>
            <Typo>{'<DatePicker picker="quarter" />'}</Typo>
            <Typo>{'<DatePicker picker="year" />'}</Typo>
          </>
        }
      />

      <Addrow
        title="autoFocus"
        divider={true}
        demo={
          <>
            <DatePicker autoFocus={true} />
          </>
        }
        description="boolean, &nbsp; 기본값 : false"
        code={
          <>
            <Typo>{'<DatePicker autoFocus={true} />'}</Typo>
          </>
        }
      />

      <Addrow
        title="inputReadOnly"
        divider={true}
        demo={
          <>
            <DatePicker inputReadOnly={true} />
          </>
        }
        description="boolean, &nbsp; 기본값 : false"
        code={
          <>
            <Typo>{'<DatePicker inputReadOnly={true} />'}</Typo>
          </>
        }
      />

      <Addrow
        title="mode"
        divider={true}
        demo={
          <>
            <DatePicker mode="time" />
            <DatePicker mode="date" />
            <DatePicker mode="month" />
            <DatePicker mode="year" />
            <DatePicker mode="decade" />
          </>
        }
        description="boolean, &nbsp; 기본값 : -"
        code={
          <>
            <Typo>{'<DatePicker mode="time"  />'}</Typo>
            <Typo>{'<DatePicker mode="date"  />'}</Typo>
            <Typo>{'<DatePicker mode="month"  />'}</Typo>
            <Typo>{'<DatePicker mode="year"  />'}</Typo>
            <Typo>{'<DatePicker mode="decade"  />'}</Typo>
          </>
        }
      />

      <Addrow
        title="size"
        divider={true}
        demo={
          <>
            <DatePicker size="large" />
            <DatePicker size="middle" />
            <DatePicker size="small" />
          </>
        }
        description="large | middle | small, &nbsp; 기본값 : -"
        code={
          <>
            <Typo>{'<DatePicker size="large"  />'}</Typo>
            <Typo>{'<DatePicker size="middle"  />'}</Typo>
            <Typo>{'<DatePicker size="small"  />'}</Typo>
          </>
        }
      />

      <Addrow
        title="disabledDate"
        divider={true}
        demo={
          <>
            <DatePicker disabledDate={current => current.date() % 2 === 0} />
          </>
        }
        description="function, &nbsp; 기본값 : -"
        code={
          <>
            <Typo>{'<DatePicker disabledDate={current => current.date() % 2 === 0}  />'}</Typo>
          </>
        }
      />

      <Addrow
        title="dateRender"
        divider={true}
        demo={
          <>
            <DatePicker
              dateRender={current => {
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
