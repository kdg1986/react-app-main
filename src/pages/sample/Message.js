import { message, Button, PageHeader } from 'antd';
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
      <Typo>{"import { message } from 'antd';"}</Typo>
      <p />

      <Addrow
        title="success"
        divider={true}
        demo={
          <>
            <Button
              type="primary"
              onClick={() =>
                message.success({
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
              <pre>{`<Button type="primary" onClick={()=>message.success({
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
                message.error({
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
              <pre>{`<Button type="primary" onClick={()=>message.error({
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
                message.info({
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
              <pre>{`<Button type="primary" onClick={()=>message.info({
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
                message.warn({
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
              <pre>{`<Button type="primary" onClick={()=>message.warn({
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
                message.loading({
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
              <pre>{`<Button type="primary" onClick={()=>message.loading({
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
            <Button type="primary" onClick={() => message.destroy()}>
              destroy
            </Button>
          </>
        }
        code={
          <>
            <Typo codeStyle={false}>
              <pre>{`<Button type="primary" onClick={()=>message.destroy()}>destroy</Button>`}</pre>
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
                message.loading({ content: 'Loading...', key });
                setTimeout(() => {
                  message.success({ content: 'Loaded!', key, duration: 2 });
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
                message.loading({ content: 'Loading...', key });
                setTimeout(() => {
                  message.success({ content: 'Loaded!', key: key1, duration: 2 });
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
    message.loading({ content: 'Loading...', key });
    setTimeout(() => {
        message.success({ content: 'Loaded!', key, duration: 2 });
    }, 1000);
}}>key === key</Button>`}</pre>
            </Typo>
            <Typo codeStyle={false}>
              <pre>{`<Button type="primary" onClick={()=>{
    const key = "Update";
    const key1 = "Update1";
    message.loading({ content: 'Loading...', key });
    setTimeout(() => {
        message.success({ content: 'Loaded!', key : key1, duration: 2 });
    }, 1000);
}}>key !== key</Button>`}</pre>
            </Typo>
          </>
        }
      />
    </>
  );
};
