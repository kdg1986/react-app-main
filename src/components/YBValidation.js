import { useEffect, useRef } from 'react';

const validation = (ref) => {
  console.log(ref.current.querySelectorAll('input'));
  alert('validation');
  return true;
};

const ref = (props) => {
  const ref = useRef();
  const event = (e) => {
    if (validation(ref)) {
      props?.onAfter && props.onAfter();
    }
  };
  useEffect(() => {
    props?.triggerID &&
      document.querySelector(`#${props.triggerID}`).addEventListener('click', event);
  }, []);
  return ref;
};

const YBValidation = (props) => {
  const formRef = ref(props);
  return <div ref={formRef}>{props.children}</div>;
};

export default YBValidation;
