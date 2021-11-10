import { Button, PageHeader, Divider } from 'antd';
import Util from '@/pages/sample/SampleUtil';
import { keygen } from '@/util';
import YBDatePicker from '@/components/YBDatePicker';
import { StringToDate, format } from '@/util/dateUtil';

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
      <Typo>{"import YBDatePicker from '@/components/YBDatePicker';"}</Typo>
      <p />
      <Typo>{"import { StringToDate, format } from '@/util/dateUtil';"}</Typo>
      <p />
      <Addrow
        title="picker"
        divider={true}
        demo={
          <>
            <YBDatePicker defaultValue={new Date()} />
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
        title="defaultValue"
        divider={true}
        demo={
          <>
            <YBDatePicker defaultValue={StringToDate('2015-01-22')} format="yyyy-MM-dd" />
          </>
        }
        description="-, &nbsp; 기본값 : Date"
        code={
          <>
            <Typo>{`<YBDatePicker
              defaultValue={StringToDate('2015-01-22')}
              format="yyyy-MM-dd"
            />`}</Typo>
          </>
        }
      />
      <Addrow
        title="value"
        divider={true}
        demo={
          <>
            <YBDatePicker value={StringToDate('2015-01-22')} format="yyyy-MM-dd" />
          </>
        }
        description="-, &nbsp; 기본값 : data-fns : parse"
        code={
          <>
            <Typo>{`<YBDatePicker
              value={StringToDate('2015-01-22')}
              format="yyyy-MM-dd"
            />`}</Typo>
          </>
        }
      />
      <Addrow
        title="disabledDate"
        divider={true}
        demo={
          <>
            <YBDatePicker disabledDate={(current) => format(current, 'dd') % 2 === 0} />
          </>
        }
        description="function, &nbsp; 기본값 : -"
        code={
          <>
            <Typo>
              {'<YBDatePicker disabledDate={(current) => format(current, "dd") % 2 === 0} />'}
            </Typo>
          </>
        }
      />
      <Addrow
        title="onChange"
        divider={true}
        demo={
          <>
            <YBDatePicker onChange={(date, datestr) => console.log(date, datestr)} />
          </>
        }
        description="function, &nbsp; 기본값 : -"
        code={
          <>
            <Typo>
              {'<YBDatePicker onChange={(date, datestr) => console.log(date, datestr)} />'}
            </Typo>
          </>
        }
      />
      <Addrow
        title="onPanelChange"
        divider={true}
        demo={
          <>
            <YBDatePicker onPanelChange={(date, datestr) => console.log(date, datestr)} />
          </>
        }
        description="function, &nbsp; 기본값 : -"
        code={
          <>
            <Typo>
              {'<YBDatePicker onPanelChange={(date, datestr) => console.log(date, datestr)} />'}
            </Typo>
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
                const _date = format(current, 'dd');
                const style = {};
                if (_date % 2 === 0) {
                  style.border = '1px solid #1890ff';
                  style.borderRadius = '50%';
                }
                return (
                  <div className="ant-picker-cell-inner" style={style}>
                    {_date}
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
              <pre>{`<YBDatePicker
  dateRender={(current) => {
    const _date = format(current, 'dd');
    const style = {};
    if (_date % 2 === 0) {
      style.border = '1px solid #1890ff';
      style.borderRadius = '50%';
    }
    return (
      <div className="ant-picker-cell-inner" style={style}>
        {_date}
      </div>
    );
  }}
/>`}</pre>
            </Typo>
          </>
        }
      />

      <Addrow
        title="format"
        divider={true}
        demo={
          <>
            <YBDatePicker format="yyyy" />
            <YBDatePicker format="MM" />
            <YBDatePicker format="dd" />
            <YBDatePicker format="MM-dd" />
          </>
        }
        description="String, &nbsp; 기본값 : yyyy-MM-dd"
        code={
          <>
            <Typo>{'<YBDatePicker format="yyyy" />'}</Typo>
            <Typo>{'<YBDatePicker format="MM" />'}</Typo>
            <Typo>{'<YBDatePicker format="dd" />'}</Typo>
            <Typo>{'<YBDatePicker format="MM-dd" />'}</Typo>
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
