import { Alert, Button, PageHeader } from 'antd';
import Util from '@/pages/sample/SampleUtil';
import { keygen } from '@/util';

const { rowUtil, Typo } = Util;
const Addrow = rowUtil(4, 1, 15);

export default () => {
  return (
    <>
      <PageHeader
        className="site-page-header"
        onBack={() => history.back()}
        title={[
          'Alert',
          <Button
            key={keygen}
            type="link"
            href="https://ant.design/components/message/#API"
            target="_blank"
          >
            API
          </Button>,
        ]}
      />
      <Typo>{"import { Alert } from 'antd';"}</Typo>
      <p />

      <Addrow
        title="success"
        divider={true}
        demo={
          <>
            <Alert message="Success Text" type="success" />
          </>
        }
        code={
          <>
            <Typo codeStyle={false}>
              <pre>{`<Button type="primary" onClick={()=>message.success({
    content : "Message",
    duration : 0.5,
    onClose : () => console.log("Message")
})}>Message</Button>`}</pre>
            </Typo>
          </>
        }
      />
    </>
  );
};
