import { Input } from 'antd';

export const YBInput = (props) => {
  return (
    <span validation={props.validation}>
      <Input {...props} />
    </span>
  );
};

export const YBTextArea = (props) => {
  return (
    <span validation={props.validation}>
      <Input.TextArea {...props} />
    </span>
  );
};

export const YBInputSearch = (props) => {
  return (
    <span validation={props.validation}>
      <Input.Search {...props} />
    </span>
  );
};

export const YBInputPassword = (props) => {
  return (
    <span validation={props.validation}>
      <Input.Password {...props} />
    </span>
  );
};
