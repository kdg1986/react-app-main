import { Layout, Breadcrumb } from 'antd';
import '@STYLE/layout.css';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

export default props => {  
  const { Content } = Layout;
  const store = useSelector(state => state.layoutReducer);
  const [ breadcrumb, setBreadcrumb] = useState("");
  useEffect(()=>{    
    setBreadcrumb( props.breadcrumb || store.breadcrumb )    
  },[])

  return(
    <Layout style={{ padding: '0 24px 24px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        {breadcrumb && breadcrumb.split(',').map( obj => <Breadcrumb.Item key={obj}>{obj}</Breadcrumb.Item> )}
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