import { Button, PageHeader } from 'antd';
import Util from '@/pages/sample/SampleUtil';
import YBMessage from '@/components/YBMessage';
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
          'Message',
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
      <Typo>{"import YBMessage from '@/components/YBMessage';"}</Typo>
      <p />

      <Addrow
        title="success"
        divider={true}
        demo={
          <>
            <Button
              type="primary"
              onClick={() =>
                YBMessage.success({
                  content: 'Message',
                  duration: 0.5,
                  onClose: () => console.log('Message'),
                })
              }
            >
              Message
            </Button>
          </>
        }
        code={
          <>
            <Typo codeStyle={false}>
              <pre>{`<Button type="primary" onClick={()=>YBMessage.success({
    content : "Message",
    duration : 0.5,
    onClose : () => console.log("Message")
})}>Message</Button>`}</pre>
            </Typo>
          </>
        }
      />

      <Addrow
        title="error"
        divider={true}
        demo={
          <>
            <Button
              type="primary"
              onClick={() =>
                YBMessage.error({
                  content: 'error',
                  duration: 0.5,
                  onClose: () => console.log('error'),
                })
              }
            >
              error
            </Button>
          </>
        }
        code={
          <>
            <Typo codeStyle={false}>
              <pre>{`<Button type="primary" onClick={()=>YBMessage.error({
    content : "Message",
    duration : 0.5,
    onClose : () => console.log("error")
})}>error</Button>`}</pre>
            </Typo>
          </>
        }
      />

      <Addrow
        title="info"
        divider={true}
        demo={
          <>
            <Button
              type="primary"
              onClick={() =>
                YBMessage.info({
                  content: 'Message',
                  duration: 0.5,
                  onClose: () => console.log('info'),
                })
              }
            >
              info
            </Button>
          </>
        }
        code={
          <>
            <Typo codeStyle={false}>
              <pre>{`<Button type="primary" onClick={()=>YBMessage.info({
    content : "Message",
    duration : 0.5,
    onClose : () => console.log("info")
})}>info</Button>`}</pre>
            </Typo>
          </>
        }
      />

      <Addrow
        title="warn"
        divider={true}
        demo={
          <>
            <Button
              type="primary"
              onClick={() =>
                YBMessage.warn({
                  content: 'warn',
                  duration: 0.5,
                  onClose: () => console.log('warn'),
                })
              }
            >
              warn
            </Button>
          </>
        }
        code={
          <>
            <Typo codeStyle={false}>
              <pre>{`<Button type="primary" onClick={()=>YBMessage.warn({
    content : "Message",
    duration : 0.5,
    onClose : () => console.log("warn")
})}>warn</Button>`}</pre>
            </Typo>
          </>
        }
      />

      <Addrow
        title="loading"
        divider={true}
        demo={
          <>
            <Button
              type="primary"
              onClick={() =>
                YBMessage.loading({
                  content: 'loading',
                  duration: 0.5,
                  onClose: () => console.log('loading'),
                })
              }
            >
              loading
            </Button>
          </>
        }
        code={
          <>
            <Typo codeStyle={false}>
              <pre>{`<Button type="primary" onClick={()=>YBMessage.loading({
    content : "loading",
    duration : 0.5,
    onClose : () => console.log("loading")
})}>loading</Button>`}</pre>
            </Typo>
          </>
        }
      />

      <Addrow
        title="destroy"
        divider={true}
        demo={
          <>
            <Button type="primary" onClick={() => YBMessage.destroy()}>
              destroy
            </Button>
          </>
        }
        code={
          <>
            <Typo codeStyle={false}>
              <pre>{`<Button type="primary" onClick={()=>YBMessage.destroy()}>destroy</Button>`}</pre>
            </Typo>
          </>
        }
      />

      <Addrow
        title="key"
        divider={true}
        demo={
          <>
            <Button
              type="primary"
              onClick={() => {
                const key = 'Update';
                YBMessage.loading({ content: 'Loading...', key });
                setTimeout(() => {
                  YBMessage.success({ content: 'Loaded!', key, duration: 2 });
                }, 1000);
              }}
            >
              key === key
            </Button>
            <Button
              type="primary"
              onClick={() => {
                const key = 'Update1';
                const key1 = 'Update2';
                YBMessage.loading({ content: 'Loading...', key });
                setTimeout(() => {
                  YBMessage.success({ content: 'Loaded!', key: key1, duration: 2 });
                }, 1000);
              }}
            >
              key !== key
            </Button>
          </>
        }
        code={
          <>
            <Typo codeStyle={false}>
              <pre>{`<Button type="primary" onClick={()=>{
    const key = "Update";
    YBMessage.loading({ content: 'Loading...', key });
    setTimeout(() => {
      YBMessage.success({ content: 'Loaded!', key, duration: 2 });
    }, 1000);
}}>key === key</Button>`}</pre>
            </Typo>
            <Typo codeStyle={false}>
              <pre>{`<Button type="primary" onClick={()=>{
    const key = "Update";
    const key1 = "Update1";
    YBMessage.loading({ content: 'Loading...', key });
    setTimeout(() => {
      YBMessage.success({ content: 'Loaded!', key : key1, duration: 2 });
    }, 1000);
}}>key !== key</Button>`}</pre>
            </Typo>
          </>
        }
      />
    </>
  );
};
