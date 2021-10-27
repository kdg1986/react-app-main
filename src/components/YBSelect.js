import { Select } from 'antd';

const YBSelect = props => {
  let _props = { ...props };
  !_props?.style && (_props.style = {});
  !_props.style?.width && (_props.style = { ..._props.style, width: 150 });

  return <Select {..._props}>{props.children}</Select>;
};

export default YBSelect;
