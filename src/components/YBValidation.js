import { useEffect, useRef } from 'react';

const ref = (props) => {
  const ref = useRef();
  let validationList;
  const validation = () => {
    console.log(validationList);
    return validationList.length === 0;
  };

  const event = (e) => {
    if (validation()) {
      props?.onAfter && props.onAfter();
    }
  };

  useEffect(() => {
    validationList = Array.prototype.slice
      .call(document.querySelectorAll('span'))
      .reduce((acc, cur, idx, arr) => {
        if (cur.attributes?.validation && cur.getAttribute('validation') === 'true') {
          acc = acc.concat(cur);
        }
        return acc;
      }, []);
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
