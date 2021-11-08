import { Upload, Button, PageHeader, Modal } from 'antd';
import { UploadOutlined, PlusOutlined } from '@ant-design/icons';
import React from 'react';
import Util from '@/pages/sample/SampleUtil';
import { keygen } from '@/util';

const { rowUtil, Typo } = Util;
const Addrow = rowUtil(4, 1, 15);

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader1 = new FileReader();
    reader1.readAsBinaryString(file);
    console.log(reader1.result);

    const reader = new FileReader();
    reader.readAsDataURL(file);
    console.log(reader.result);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}

class PicturesWall extends React.Component {
  state = {
    previewVisible: false,
    previewImage: '',
    previewTitle: '',
    fileList: [
      {
        uid: '-1',
        name: 'image.png',
        status: 'done',
        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      },
      {
        uid: '-2',
        name: 'image.png',
        status: 'done',
        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      },
      {
        uid: '-3',
        name: 'image.png',
        status: 'done',
        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      },
      {
        uid: '-4',
        name: 'image.png',
        status: 'done',
        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      },
      {
        uid: '-xxx',
        percent: 50,
        name: 'image.png',
        status: 'uploading',
        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      },
      {
        uid: '-5',
        name: 'image.png',
        status: 'error',
      },
    ],
  };

  handleCancel = () => this.setState({ previewVisible: false });

  handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    this.setState({
      previewImage: file.url || file.preview,
      previewVisible: true,
      previewTitle: file.name || file.url.substring(file.url.lastIndexOf('/') + 1),
    });
  };

  handleChange = ({ fileList }) => this.setState({ fileList });

  render() {
    const { previewVisible, previewImage, fileList, previewTitle } = this.state;
    const uploadButton = (
      <div>
        <PlusOutlined />
        <div style={{ marginTop: 8 }}>Upload</div>
      </div>
    );
    return (
      <>
        <Upload
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          listType="picture-card"
          fileList={fileList}
          onPreview={this.handlePreview}
          onChange={this.handleChange}
        >
          {fileList.length >= 8 ? null : uploadButton}
        </Upload>
        <Modal
          visible={previewVisible}
          title={previewTitle}
          footer={null}
          onCancel={this.handleCancel}
        >
          <img alt="example" style={{ width: '100%' }} src={previewImage} />
        </Modal>
      </>
    );
  }
}

export default () => {
  return (
    <>
      <PageHeader
        className="site-page-header"
        onBack={() => history.back()}
        title={[
          'Upload',
          <Button
            key={keygen}
            type="link"
            href="https://ant.design/components/upload/#API"
            target="_blank"
          >
            API
          </Button>,
        ]}
      />
      <Typo>{"import { Upload } from 'antd';"}</Typo>
      <p />

      <Addrow
        title="success"
        divider={true}
        demo={
          <>
            <PicturesWall />
          </>
        }
        code={
          <>
            <Typo codeStyle={false}>
              <pre>{``}</pre>
            </Typo>
          </>
        }
      />
    </>
  );
};
