import { Button, Divider, PageHeader } from 'antd';
import { SearchOutlined, DownloadOutlined } from '@ant-design/icons';
import { keygen } from '@/util';
import Util from '@/pages/sample/SampleUtil';
import YBValidation from '@/components/YBValidation';
import { YBInput, YBTextArea, YBInputSearch, YBInputPassword } from '@/components/YBInput';

const { rowUtil, Typo } = Util;
const Addrow = rowUtil();
const doSave = () => console.log('doSave');

export default () => {
  return (
    <>
      <Button id="doSave">Vaildation</Button>
      <YBValidation triggerID="doSave" onAfter={doSave}>
        <PageHeader
          className="site-page-header"
          onBack={() => history.back()}
          title={[
            'Input',
            <Button
              key={keygen}
              type="link"
              href="https://ant.design/components/input/#Input"
              target="_blank"
            >
              API
            </Button>,
          ]}
        />

        <Typo>{"import { YBInput } from '@/components/YBInput'"}</Typo>
        <br />

        <Addrow
          title="addonAfter"
          divider={true}
          demo={
            <>
              <YBInput validation="false" addonAfter={<SearchOutlined />} />
            </>
          }
          description="ReactNode, &nbsp; 기본값 : -"
          code={
            <>
              <Typo>{'<YBInput addonAfter={<SearchOutlined/>}/>'}</Typo>
            </>
          }
        />

        <Addrow
          title="addonBefore"
          divider={true}
          demo={
            <>
              <YBInput addonBefore={<SearchOutlined />} />
            </>
          }
          description="ReactNode, &nbsp; 기본값 : -"
          code={
            <>
              <Typo>{'<YBInput addonBefore={<SearchOutlined/>}/>'}</Typo>
            </>
          }
        />

        <Addrow
          title="allowClear"
          divider={true}
          demo={
            <>
              <YBInput allowClear={true} defaultValue="test" />
            </>
          }
          description="ReactNode, &nbsp; 기본값 : -"
          code={
            <>
              <Typo>{'<YBInput allowClear={true} defaultValue="test"/>'}</Typo>
            </>
          }
        />

        <Addrow
          title="bordered"
          divider={true}
          demo={
            <>
              <YBInput bordered={false} defaultValue="test" />
            </>
          }
          description="true | false, &nbsp; 기본값 : true"
          code={
            <>
              <Typo>{'<YBInput bordered={true} defaultValue="test"/>'}</Typo>
            </>
          }
        />

        <Addrow
          title="defaultValue"
          divider={true}
          demo={
            <>
              <YBInput defaultValue="test" />
            </>
          }
          description="string, &nbsp; 기본값 : -"
          code={
            <>
              <Typo>{'<YBInput defaultValue="test" />'}</Typo>
            </>
          }
        />

        <Addrow
          title="disabled"
          divider={true}
          demo={
            <>
              <YBInput disabled={true} />
            </>
          }
          description="true | false, &nbsp; 기본값 : false"
          code={
            <>
              <Typo>{'<YBInput disabled={true} />'}</Typo>
            </>
          }
        />

        <Addrow
          title="maxLength"
          divider={true}
          demo={
            <>
              <YBInput maxLength={10} />
            </>
          }
          description="number, &nbsp; 기본값 : -"
          code={
            <>
              <Typo>{'<YBInput maxLength={10} />'}</Typo>
            </>
          }
        />

        <Addrow
          title="prefix"
          divider={true}
          demo={
            <>
              <YBInput prefix={<DownloadOutlined />} />
            </>
          }
          description="ReactNode, &nbsp; 기본값 : -"
          code={
            <>
              <Typo>{'<YBInput prefix={<DownloadOutlined/>} />'}</Typo>
            </>
          }
        />

        <Addrow
          title="suffix"
          divider={true}
          demo={
            <>
              <YBInput suffix={<DownloadOutlined />} />
            </>
          }
          description="ReactNode, &nbsp; 기본값 : -"
          code={
            <>
              <Typo>{'<YBInput suffix={<DownloadOutlined/>} />'}</Typo>
            </>
          }
        />

        <Addrow
          title="size"
          divider={true}
          demo={
            <>
              <YBInput size="large" />
              <YBInput size="middle" />
              <YBInput size="small" />
            </>
          }
          description="large | middle | small, &nbsp; 기본값 : -"
          code={
            <>
              <Typo>{'<YBInput size="large" />'}</Typo>
              <Typo>{'<YBInput size="middle" />'}</Typo>
              <Typo>{'<YBInput size="small" />'}</Typo>
            </>
          }
        />

        <Addrow
          title="onChange"
          divider={true}
          demo={
            <>
              <YBInput onChange={() => alert('onChange')} />
            </>
          }
          description="function, &nbsp; 기본값 : -"
          code={
            <>
              <Typo>{'<YBInput onChange={()=>alert("onChange")} />'}</Typo>
            </>
          }
        />

        <Addrow
          title="onPressEnter"
          divider={true}
          demo={
            <>
              <YBInput onPressEnter={() => alert('onPressEnter')} />
            </>
          }
          description="function, &nbsp; 기본값 : -"
          code={
            <>
              <Typo>{'<YBInput onPressEnter={()=>alert("onPressEnter")} />'}</Typo>
            </>
          }
        />

        <Divider />
        <PageHeader
          className="site-page-header"
          onBack={() => history.back()}
          title={[
            'TextArea',
            <Button
              key={keygen()}
              type="link"
              href="https://ant.design/components/input/#Input.TextArea"
              target="_blank"
            >
              API
            </Button>,
          ]}
        />

        <Typo>{'<YBTextArea/>'}</Typo>
        <br />

        <Addrow
          title="allowClear"
          divider={true}
          demo={
            <>
              <YBTextArea allowClear={true} />
            </>
          }
          description="boolean, &nbsp; 기본값 : false"
          code={
            <>
              <Typo>{'<YBTextArea allowClear={true} />'}</Typo>
            </>
          }
        />

        <Addrow
          title="autoSize"
          divider={true}
          demo={
            <>
              <YBTextArea autoSize={true} />
              <YBTextArea autoSize={{ minRows: 2, maxRows: 6 }} />
            </>
          }
          description="true | false or { minRows: 2, maxRows: 6 }, &nbsp; 기본값 : false"
          code={
            <>
              <Typo>{'<YBTextArea autoSize={true} />'}</Typo>
              <Typo>{'<YBTextArea autoSize={{ minRows: 2, maxRows: 6 }} />'}</Typo>
            </>
          }
        />

        <Addrow
          title="bordered"
          divider={true}
          demo={
            <>
              <YBTextArea bordered={false} />
            </>
          }
          description="boolean, &nbsp; 기본값 : true"
          code={
            <>
              <Typo>{'<YBTextArea bordered={false} />'}</Typo>
            </>
          }
        />

        <Addrow
          title="defaultValue"
          divider={true}
          demo={
            <>
              <YBTextArea defaultValue="test" />
            </>
          }
          description="string, &nbsp; 기본값 : -"
          code={
            <>
              <Typo>{'<YBTextArea defaultValue="test" />'}</Typo>
            </>
          }
        />

        <Addrow
          title="maxLength"
          divider={true}
          demo={
            <>
              <YBTextArea maxLength={10} />
            </>
          }
          description="number, &nbsp; 기본값 : -"
          code={
            <>
              <Typo>{'<YBTextArea maxLength={10} />'}</Typo>
            </>
          }
        />

        <Addrow
          title="showCount"
          divider={true}
          demo={
            <>
              <YBTextArea showCount={true} />
              <YBTextArea showCount={{ formatter: (count) => console.log(count) }} />
            </>
          }
          description="boolean | object, &nbsp; 기본값 : false"
          code={
            <>
              <Typo>{'<YBTextArea showCount={true} />'}</Typo>
              <Typo>
                {'<YBTextArea showCount={{ formatter : (count)=> console.log(count) }} />'}
              </Typo>
            </>
          }
        />

        <Addrow
          title="onPressEnter"
          divider={true}
          demo={
            <>
              <YBTextArea onPressEnter={(obj) => console.log(obj)} />
            </>
          }
          description="function, &nbsp; 기본값 : -"
          code={
            <>
              <Typo>{'<YBTextArea onPressEnter={(obj)=> console.log(obj)} />'}</Typo>
            </>
          }
        />

        <Addrow
          title="onResize"
          divider={true}
          demo={
            <>
              <YBTextArea onResize={(obj) => console.log(obj)} />
            </>
          }
          description="function, &nbsp; 기본값 : -"
          code={
            <>
              <Typo>{'<YBTextArea onResize={(obj)=> console.log(obj)} />'}</Typo>
            </>
          }
        />

        <Divider />
        <PageHeader
          className="site-page-header"
          onBack={() => history.back()}
          title={[
            'Search',
            <Button
              key={keygen()}
              type="link"
              href="https://ant.design/components/input/#Input.Search"
              target="_blank"
            >
              API
            </Button>,
          ]}
        />

        <Typo>{'<YBInputSearch/>'}</Typo>
        <br />

        <Addrow
          title="enterButton"
          divider={true}
          demo={
            <>
              <YBInputSearch enterButton={true} />
              <YBInputSearch enterButton={<h1>Search</h1>} />
            </>
          }
          description="boolean | ReactNode, &nbsp; 기본값 : false"
          code={
            <>
              <Typo>{'<YBInputSearch enterButton={true}/>'}</Typo>
              <Typo>{'<YBInputSearch enterButton={<h1>Search</h1>}/>'}</Typo>
            </>
          }
        />

        <Addrow
          title="loading"
          divider={true}
          demo={
            <>
              <YBInputSearch loading={true} />
            </>
          }
          description="boolean, &nbsp; 기본값 : false"
          code={
            <>
              <Typo>{'<YBInputSearch loading={true}/>'}</Typo>
            </>
          }
        />

        <Addrow
          title="onSearch"
          divider={true}
          demo={
            <>
              <YBInputSearch onSearch={() => alert('search')} />
            </>
          }
          description="boolean, &nbsp; 기본값 : false"
          code={
            <>
              <Typo>{'<YBInputSearch onSearch={()=>alert("search")}/>'}</Typo>
            </>
          }
        />

        <Divider />
        <PageHeader
          className="site-page-header"
          onBack={() => history.back()}
          title={[
            'Password',
            <Button
              key={keygen()}
              type="link"
              href="https://ant.design/components/input/#Input.Password"
              target="_blank"
            >
              API
            </Button>,
          ]}
        />

        <Typo>{'<YBInputPassword/>'}</Typo>
        <br />

        <Addrow
          title="iconRender"
          divider={true}
          demo={
            <>
              <YBInputPassword
                iconRender={(state) => (state ? <div>true</div> : <div>false</div>)}
              />
            </>
          }
          description="(visible) => ReactNode, &nbsp; 기본값 : -"
          code={
            <>
              <Typo>
                {
                  '<YBInputPassword iconRender={(state)=> state ? <div>true</div> : <div>false</div>  }/>'
                }
              </Typo>
            </>
          }
        />

        <Addrow
          title="iconRender"
          divider={true}
          demo={
            <>
              <YBInputPassword visibilityToggle={true} />
            </>
          }
          description="boolean, &nbsp; 기본값 : true"
          code={
            <>
              <Typo>{'<YBInputPassword visibilityToggle={true}/>'}</Typo>
            </>
          }
        />
      </YBValidation>
    </>
  );
};
