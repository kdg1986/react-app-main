import { Button } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Modal as _Modal } from 'antd';
import { useEffect, useRef, useState } from 'react';
import Draggable from 'react-draggable';

export const Modal = (props) => <_Modal {...props}>{props.children}</_Modal>;

export const Info = (props) => {
  _Modal.info({
    ...props,
  });
};
export const Success = (props) => {
  _Modal.success({
    ...props,
  });

  return { test };
};
export const Error = (props) => {
  _Modal.error({
    ...props,
  });
};
export const Warning = (props) => {
  _Modal.warning({
    ...props,
  });
};
export const Confirm = (props) => {
  _Modal.confirm({
    ...props,
  });
};

export const DragModal = (props) => {
  const contRef = useRef();
  const [state, setState] = useState({
    disabled: true,
    bounds: { left: 0, top: 0, bottom: 0, right: 0 },
  });
  const draggleRef = useRef();

  const onStart = (event, uiData) => {
    const { clientWidth, clientHeight } = window?.document?.documentElement;
    const targetRect = draggleRef?.current?.getBoundingClientRect();
    setState({
      ...state,
      bounds: {
        left: -targetRect?.left + uiData?.x,
        right: clientWidth - (targetRect?.right - uiData?.x),
        top: -targetRect?.top + uiData?.y,
        bottom: clientHeight - (targetRect?.bottom - uiData?.y),
      },
    });
  };

  useEffect(() => {
    if (contRef?.current) {
      contRef.current.setAttribute('src', 'http://localhost:3000');
    }
    return () => {
      console.log('destroy');
    };
  });

  return (
    <>
      <_Modal
        {...props}
        title={
          <div
            style={{
              width: '100%',
              cursor: 'move',
            }}
            onMouseOver={() => {
              if (state.disabled) {
                setState({ ...state, disabled: false });
              }
            }}
            onMouseOut={() => {
              setState({ ...state, disabled: true });
            }}
            onFocus={() => {}}
            onBlur={() => {}}
            // end
          >
            {props.title}
          </div>
        }
        modalRender={(modal) => (
          <Draggable
            disabled={state.disabled}
            bounds={state.bounds}
            onStart={(event, uiData) => onStart(event, uiData)}
          >
            <div ref={draggleRef}>{modal}</div>
          </Draggable>
        )}
      >
        {/*props.children*/}
        <iframe ref={contRef}></iframe>
      </_Modal>
    </>
  );
};
