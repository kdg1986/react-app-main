import { notification } from 'antd';

notification.config({
  placement: 'topLeft', //topLeft topRight bottomLeft bottomRight
  //top: 100,
  //bottom: 50,
  //duration: 3,
  //rtl: true,
});
const YBNotification = (() => {
  const message = 'title';
  return {
    success: (config) => notification.success({ message, ...config }),
    error: (config) => notification.error({ message, ...config }),
    info: (config) => notification.info({ message, ...config }),
    warn: (config) => notification.warn({ message, ...config }),
    warning: (config) => notification.warning({ message, ...config }),
    open: (config) => notification.open({ message, ...config }),
    close: (key) => notification.close(key),
    destroy: () => notification.destroy(),
  };
})();

export default YBNotification;
