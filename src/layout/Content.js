import { Layout, Breadcrumb  } from 'antd';
import '@STYLE/layout.css';

export default props => {  
  const { Content } = Layout;
  
  return(
    <Layout style={{ padding: '0 24px 24px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        {props.menuPath && props.menuPath.map( obj => <Breadcrumb.Item>{obj}</Breadcrumb.Item> )}
      </Breadcrumb>
      <Content
      className="site-layout-background"
      style={{
          padding: 24,
          margin: 0,
          minHeight: 280,
      }}
      >
        {props.children}        
      </Content>
    </Layout>
  )
}