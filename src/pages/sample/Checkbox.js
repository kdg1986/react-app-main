import { Checkbox, Button, Divider, PageHeader } from 'antd';
import { keygen } from '@/util';
import Util from '@/pages/sample/SampleUtil';
const { rowUtil, Typo } = Util;
const Addrow = rowUtil();

export default () => {
  const op = [
    { label: 'Apple', value: 'A' },
    { label: 'Pear', value: 'P' },
  ];

  return (
    <>
      <PageHeader
        className="site-page-header"
        onBack={() => history.back()}
        title={[
          'Checkbox',
          <Button
            key={keygen}
            type="link"
            href="https://ant.design/components/checkbox/#Checkbox"
            target="_blank"
          >
            API
          </Button>,
        ]}
      />

      <Typo>{"import { Checkbox } from 'antd';"}</Typo>

      <Addrow
        title="autoFocus"
        divider={true}
        demo={
          <>
            <Checkbox autoFocus={true}>Checkbox</Checkbox>
          </>
        }
        description="true | false, &nbsp; 기본값 : false"
        code={
          <>
            <Typo>{'<Checkbox autoFocus={true}>Checkbox</Checkbox>'}</Typo>
          </>
        }
      />

      <Addrow
        title="checked"
        divider={true}
        demo={
          <>
            <Checkbox checked={true}>Checkbox</Checkbox>
          </>
        }
        description="true | false, &nbsp; 기본값 : false"
        code={
          <>
            <Typo>{'<Checkbox checked={true} >Checkbox</Checkbox>'}</Typo>
          </>
        }
      />

      <Addrow
        title="defaultChecked"
        divider={true}
        demo={
          <>
            <Checkbox defaultChecked={true}>Checkbox</Checkbox>
          </>
        }
        description="true | false, &nbsp; 기본값 : false"
        code={
          <>
            <Typo>{'<Checkbox defaultChecked={true} >Checkbox</Checkbox>'}</Typo>
          </>
        }
      />

      <Addrow
        title="disabled"
        divider={true}
        demo={
          <>
            <Checkbox disabled={true}>Checkbox</Checkbox>
          </>
        }
        description="true | false, &nbsp; 기본값 : false"
        code={
          <>
            <Typo>{'<Checkbox disabled={true} >Checkbox</Checkbox>'}</Typo>
          </>
        }
      />

      <Addrow
        title="indeterminate"
        divider={true}
        demo={
          <>
            <Checkbox indeterminate={true}>Checkbox</Checkbox>
          </>
        }
        description="true | false, &nbsp; 기본값 : false"
        code={
          <>
            <Typo>{'<Checkbox indeterminate={true} >Checkbox</Checkbox>'}</Typo>
          </>
        }
      />

      <Addrow
        title="onChange"
        divider={true}
        demo={
          <>
            <Checkbox onChange={e => console.log(e)}>Checkbox</Checkbox>
          </>
        }
        description="true | false, &nbsp; 기본값 : false"
        code={
          <>
            <Typo>{'<Checkbox onChange={(e)=>console.log(e)} >Checkbox</Checkbox>'}</Typo>
          </>
        }
      />

      <Divider />
      <PageHeader
        className="site-page-header"
        onBack={() => history.back()}
        title={[
          'Checkbox.Group',
          <Button
            key={keygen}
            type="link"
            href="https://ant.design/components/checkbox/#Checkbox-Group"
            target="_blank"
          >
            API
          </Button>,
        ]}
      />

      <Typo>{'<Checkbox.Group/>'}</Typo>
      <p />

      <Typo codeStyle={false} copyable={false}>
        {"const op = [{ label: 'Apple', value: 'A' },{ label: 'Pear', value: 'P' },]"}
      </Typo>

      <Addrow
        title="options"
        divider={true}
        demo={
          <>
            <Checkbox.Group options={op} />
            <Checkbox.Group options={['Apple', 'Pear']} />
          </>
        }
        description="obj{ label : string, value : string } | string[] , &nbsp; 기본값 : []"
        code={
          <>
            <Typo>{'<Checkbox.Group options={op} />'}</Typo>
            <Typo>{'<Checkbox.Group options={["Apple","Pear"]} />'}</Typo>
          </>
        }
      />

      <Addrow
        title="defaultValue"
        divider={true}
        demo={
          <>
            <Checkbox.Group options={op} defaultValue={['A']} />
          </>
        }
        description="string[] , &nbsp; 기본값 : []"
        code={
          <>
            <Typo>{'<Checkbox.Group options={op} defaultValue={["A"]} />'}</Typo>
          </>
        }
      />

      <Addrow
        title="disabled"
        divider={true}
        demo={
          <>
            <Checkbox.Group options={op} disabled={true} />
          </>
        }
        description="true | false , &nbsp; 기본값 : false"
        code={
          <>
            <Typo>{'<Checkbox.Group options={op} disabled={true} />'}</Typo>
          </>
        }
      />

      <Addrow
        title="value"
        divider={true}
        demo={
          <>
            <Checkbox.Group options={op} value={['A', 'P']} />
          </>
        }
        description="string[] , &nbsp; 기본값 : []"
        code={
          <>
            <Typo>{'<Checkbox.Group options={op} value={["A","P"]} />'}</Typo>
          </>
        }
      />

      <Addrow
        title="onChange"
        divider={true}
        demo={
          <>
            <Checkbox.Group
              options={op}
              name="TEST"
              onChange={val => console.log(val, event.target.name)}
            />
          </>
        }
        description="string[] , &nbsp; 기본값 : []"
        code={
          <>
            <Typo>
              {
                '<Checkbox.Group options={op} name="TEST" onChange={(val)=>console.log(val,event.target.name)} />'
              }
            </Typo>
          </>
        }
      />
    </>
  );
};
