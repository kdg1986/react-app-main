import { Layout } from 'antd';
import Header from './Header';
import Left from './Left'
import Content from './Content';
import 'antd/dist/antd.css';

import { Route, Switch } from 'react-router';
import Sample from '@/pages/sample';
import Pages from '@/pages';

export default () => {  

  const App = () => {
    return (
      <Layout>
          <Header/>
          <Layout>
              <Left/>
              <Content>                              
                  <Switch>
                      <Pages/>
                  </Switch>
              </Content>
          </Layout>
      </Layout>
    );
  }

  return (
    <>
      <Route exact path="/" component={App}/>
      <Switch>        
        <Route path="/sample/:name" component={Sample}/>
        <Route path="/sample" component={Sample}/>
        <Route path="/:name" component={App}/>
      </Switch>
    </>
  );
}