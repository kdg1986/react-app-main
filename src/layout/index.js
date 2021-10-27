import { Layout } from 'antd';
import Header from '@/layout/Header';
import Left from '@/layout/Left';
import { Route, Switch } from 'react-router';
import Pages from '@/pages';
import withComponentSplitting from '@/components/hoc/withComponentSplitting';
import 'antd/dist/antd.css';
//import { hot } from 'react-hot-loader/root';

const App = () => (
  <>
    <Layout>
      <Header />
      <Layout>
        <Left />
        <Route exact path="/" component={Pages} />
        <Switch>
          {DEVELOP_MODE && (
            <Route
              path="/sample/:name"
              component={withComponentSplitting(() => import('@/pages/sample'))}
            />
          )}
          {DEVELOP_MODE && (
            <Route
              path="/sample"
              component={withComponentSplitting(() => import('@/pages/sample'))}
            />
          )}
          <Route path="/:name" component={Pages} />
        </Switch>
      </Layout>
    </Layout>
  </>
);

export default App;
