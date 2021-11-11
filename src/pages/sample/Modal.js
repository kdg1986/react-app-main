import { Button, PageHeader } from 'antd';
import Util from '@/pages/sample/SampleUtil';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { keygen } from '@/util';
import { useState } from 'react';
import { Modal, Confirm, Error, Info, Success, Warning, DragModal } from '@/components/YBModal';

const { rowUtil, Typo } = Util;
const Addrow = rowUtil(4, 1, 15);

export default () => {
  const [isVisBasicModal, setBasicModal] = useState(false);
  const [isVisCustomModal, setBasicCustomModal] = useState({
    visible: false,
    loading: false,
  });
  const [isVisDragModal, setVisDragModal] = useState(false);

  return (
    <>
      <PageHeader
        className="site-page-header"
        onBack={() => history.back()}
        title={[
          'Modal',
          <Button
            key={keygen}
            type="link"
            href="https://ant.design/components/modal/#API"
            target="_blank"
          >
            API
          </Button>,
        ]}
      />
      <Typo>{"import { Modal } from 'antd';"}</Typo>
      <p />

      <Addrow
        title="basic Modal"
        divider={true}
        demo={
          <>
            <Button type="primary" onClick={() => setBasicModal(true)}>
              Open Modal
            </Button>
            <Modal
              title="Basic Modal"
              visible={isVisBasicModal}
              onOk={() => setBasicModal(false)}
              onCancel={() => setBasicModal(false)}
            >
              <p>Some contents...</p>
            </Modal>
          </>
        }
        code={
          <>
            <Typo codeStyle={false}>
              <pre>{`const [isVisBasicModal, setBasicModal] = useState(false);

<Button type="primary" onClick={() => setBasicModal(true)}>
  Open Modal
</Button>
<Modal
  title="Basic Modal"
  visible={isVisBasicModal}
  onOk={() => setBasicModal(false)}
  onCancel={() => setBasicModal(false)}
>
  <p>Some contents...</p>
</Modal>
  `}</pre>
            </Typo>
          </>
        }
      />

      <Addrow
        title="customized footer"
        divider={true}
        demo={
          <>
            <Button
              type="primary"
              onClick={() => setBasicCustomModal({ ...isVisCustomModal, visible: true })}
            >
              Open custom Modal
            </Button>
            <Modal
              title="Basic Custom Modal"
              visible={isVisCustomModal.visible}
              footer={[
                <Button
                  key="back"
                  onClick={() => setBasicCustomModal({ ...isVisCustomModal, visible: false })}
                >
                  Return
                </Button>,
                <Button
                  key="submit"
                  type="primary"
                  loading={isVisCustomModal.loading}
                  onClick={() => {
                    setBasicCustomModal({ ...isVisCustomModal, loading: true });
                    setTimeout(() => {
                      setBasicCustomModal({ ...isVisCustomModal, loading: false, visible: false });
                    }, 3000);
                  }}
                >
                  Submit
                </Button>,
              ]}
            >
              <p>Some contents...</p>
            </Modal>
          </>
        }
        code={
          <>
            <Typo codeStyle={false}>
              <pre>{`const [isVisCustomModal, setBasicCustomModal] = useState({
    visible: false,
    loading: false,
  });

<Button
  type="primary"
  onClick={() => setBasicCustomModal({ ...isVisCustomModal, visible: true })}
>
  Open custom Modal
</Button>
<Modal
  title="Basic Custom Modal"
  visible={isVisCustomModal.visible}
  closable={false}
  footer={[
    <Button
      key="back"
      onClick={() => setBasicCustomModal({ ...isVisCustomModal, visible: false })}
    >
      Return
    </Button>,
    <Button
      key="submit"
      type="primary"
      loading={isVisCustomModal.loading}
      onClick={() => {
        setBasicCustomModal({ ...isVisCustomModal, loading: true });
        setTimeout(() => {
          setBasicCustomModal({ ...isVisCustomModal, loading: false, visible: false });
        }, 3000);
      }}
    >
      Submit
    </Button>,
  ]}
>
  <p>Some contents...</p>
</Modal>
  `}</pre>
            </Typo>
          </>
        }
      />

      <Addrow
        title="confirm"
        divider={true}
        demo={
          <>
            <Button
              onClick={() => {
                Confirm({
                  title: 'confirm',
                  icon: <ExclamationCircleOutlined />,
                  content: 'descriptions',
                  onOk() {
                    console.log('OK');
                  },
                  onCancel() {
                    console.log('Cancel');
                  },
                });
              }}
            >
              Confirm
            </Button>
          </>
        }
        code={
          <>
            <Typo codeStyle={false}>
              <pre>{`<Button
  onClick={() => {
    Confirm({
      title: 'confirm',
      icon: <ExclamationCircleOutlined />,
      content: 'descriptions',
      onOk() {
        console.log('OK');
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  }}
>
  Confirm
</Button>`}</pre>
            </Typo>
          </>
        }
      />

      <Addrow
        title="success"
        divider={true}
        demo={
          <>
            <Button
              onClick={() => {
                Success({
                  title: 'success',
                  icon: <ExclamationCircleOutlined />,
                  content: 'descriptions',
                });
              }}
            >
              success
            </Button>
          </>
        }
        code={
          <>
            <Typo codeStyle={false}>
              <pre>{`<Button
  onClick={() => {
    Success({
      title: 'success',
      icon: <ExclamationCircleOutlined />,
      content: 'descriptions',
      onOk() {
        console.log('OK');
      },
    });
  }}
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
              onClick={() => {
                Error({
                  title: 'error',
                  icon: <ExclamationCircleOutlined />,
                  content: 'descriptions',
                  onOk() {
                    console.log('OK');
                  },
                });
              }}
            >
              error
            </Button>
          </>
        }
        code={
          <>
            <Typo codeStyle={false}>
              <pre>{`<Button
  onClick={() => {
    Error({
      title: 'error',
      icon: <ExclamationCircleOutlined />,
      content: 'descriptions',
      onOk() {
        console.log('OK');
      },
    });
  }}
>
  error
</Button>`}</pre>
            </Typo>
          </>
        }
      />

      <Addrow
        title="warning"
        divider={true}
        demo={
          <>
            <Button
              onClick={() => {
                Warning({
                  title: 'warning',
                  icon: <ExclamationCircleOutlined />,
                  content: 'descriptions',
                  onOk() {
                    console.log('OK');
                  },
                });
              }}
            >
              warning
            </Button>
          </>
        }
        code={
          <>
            <Typo codeStyle={false}>
              <pre>{`<Button
  onClick={() => {
    Warning({
      title: 'warning',
      icon: <ExclamationCircleOutlined />,
      content: 'descriptions',
      onOk() {
        console.log('OK');
      },
    });
  }}
>
  warning
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
              onClick={() => {
                Info({
                  title: 'Info',
                  icon: <ExclamationCircleOutlined />,
                  content: 'descriptions',
                  onOk() {
                    console.log('OK');
                  },
                });
              }}
            >
              info
            </Button>
          </>
        }
        code={
          <>
            <Typo codeStyle={false}>
              <pre>{`<Button
  onClick={() => {
    Info({
      title: 'Info',
      icon: <ExclamationCircleOutlined />,
      content: 'descriptions',
      onOk() {
        console.log('OK');
      },
    });
  }}
>
  info
</Button>`}</pre>
            </Typo>
          </>
        }
      />

      <Addrow
        title="Draggable Modal"
        divider={true}
        demo={
          <>
            <Button onClick={() => setVisDragModal(true)}>Draggable Modal</Button>
            {isVisDragModal && (
              <DragModal
                title="Draggable"
                visible={isVisDragModal}
                onOk={() => setVisDragModal(false)}
                onCancel={() => setVisDragModal(false)}
              >
                Draggable Content
              </DragModal>
            )}
          </>
        }
        code={
          <>
            <Typo codeStyle={false}>
              <pre>{`const [isVisDragModal, setVisDragModal] = useState(false);
<Button onClick={() => setVisDragModal(true)}>Draggable Modal</Button>
<DragModal
  title="Draggable"
  visible={isVisDragModal}
  onOk={() => setVisDragModal(false)}
  onCancel={() => setVisDragModal(false)}
>
  Draggable Content
</DragModal>`}</pre>
            </Typo>
          </>
        }
      />
    </>
  );
};
