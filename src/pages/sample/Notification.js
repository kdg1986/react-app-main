import { Button, PageHeader } from 'antd';
import Util from '@/pages/sample/SampleUtil';
import YBNotification from '@/components/YBNotification';
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
          'Notification',
          <Button
            key={keygen}
            type="link"
            href="https://ant.design/components/notification/#API"
            target="_blank"
          >
            API
          </Button>,
        ]}
      />
      <Typo>{"import YBNotification from '@/components/YBNotification';"}</Typo>
      <p />

      <Addrow
        title="success"
        divider={true}
        demo={
          <>
            <Button
              onClick={() =>
                YBNotification.success({
                  description: 'description',
                  onClick: () => console.log('onClick'),
                  onClose: () => console.log('onClose'),
                })
              }
            >
              success
            </Button>
          </>
        }
        code={
          <>
            <Typo codeStyle={false}>
              <pre>{`<Button
  onClick={() =>
    YBNotification.success({      
      description: 'description',
      onClick: () => console.log('onClick'),
      onClose: () => console.log('onClose'),
    })
  }
>
  success
</Button>`}</pre>
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
              onClick={() =>
                YBNotification.error({
                  message: 'title',
                  description: 'description',
                  onClick: () => console.log('onClick'),
                  onClose: () => console.log('onClose'),
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
              <pre>{`<Button
  onClick={() =>
    YBNotification.error({      
      description: 'description',
      onClick: () => console.log('onClick'),
      onClose: () => console.log('onClose'),
    })
  }
>
error
</Button>`}</pre>
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
              onClick={() =>
                YBNotification.info({
                  message: 'title',
                  description: 'description',
                  onClick: () => console.log('onClick'),
                  onClose: () => console.log('onClose'),
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
              <pre>{`<Button
  onClick={() =>
    YBNotification.info({      
      description: 'description',
      onClick: () => console.log('onClick'),
      onClose: () => console.log('onClose'),
    })
  }
>
info
</Button>`}</pre>
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
              onClick={() =>
                YBNotification.warn({
                  message: 'title',
                  description: 'description',
                  onClick: () => console.log('onClick'),
                  onClose: () => console.log('onClose'),
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
              <pre>{`<Button
  onClick={() =>
    YBNotification.warn({      
      description: 'description',
      onClick: () => console.log('onClick'),
      onClose: () => console.log('onClose'),
    })
  }
>
warn
</Button>`}</pre>
            </Typo>
          </>
        }
      />

      <Addrow
        title="open"
        divider={true}
        demo={
          <>
            <Button
              onClick={() =>
                YBNotification.open({
                  message: 'title',
                  description: 'description',
                  onClick: () => console.log('onClick'),
                  onClose: () => console.log('onClose'),
                })
              }
            >
              open
            </Button>
          </>
        }
        code={
          <>
            <Typo codeStyle={false}>
              <pre>{`<Button
  onClick={() =>
    YBNotification.open({      
      description: 'description',
      onClick: () => console.log('onClick'),
      onClose: () => console.log('onClose'),
    })
  }
>
open
</Button>`}</pre>
            </Typo>
          </>
        }
      />

      <Addrow
        title="close"
        divider={true}
        demo={
          <>
            <Button
              onClick={() =>
                YBNotification.warning({
                  message: 'title',
                  description: 'description',
                  key: 'close',
                  onClick: () => console.log('onClick'),
                  onClose: () => console.log('onClose'),
                })
              }
            >
              warning
            </Button>
            <Button onClick={() => YBNotification.close('close')}>close</Button>
          </>
        }
        code={
          <>
            <Typo codeStyle={false}>
              <pre>{`<Button
  onClick={() =>
    YBNotification.warning({      
      description: 'description',
      key: 'close',
      onClick: () => console.log('onClick'),
      onClose: () => console.log('onClose'),
    })
  }
>
  warning
</Button>
<Button onClick={() => YBNotification.close('close')}>close</Button>`}</pre>
            </Typo>
          </>
        }
      />
    </>
  );
};
