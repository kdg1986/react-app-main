import { Route,Switch } from 'react-router-dom';
import queryString from 'query-string';
import Content from '@/layout/Content';
import withComponentSplitting from '@/components/withComponentSplitting';

const Program = withComponentSplitting( () => import('@/pages/system/Program') )

export default ({location, match}) => {
    const query = queryString.parse(location.search);
    const prefix = "/common";
    return (
        <Switch>            
            <Route path={`${prefix}/program`} component={()=> <Content><Program/></Content> }/>
            <Route path={`${match.path}`} component={()=><h3>common Potal</h3>}/>
        </Switch>
    )
}

