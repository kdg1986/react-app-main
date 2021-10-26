import { Route, Switch } from 'react-router';
import withComponentSplitting from '@/components/hoc/withComponentSplitting';

const System = withComponentSplitting( () => import('@/pages/system') );

export default () => {    
    return(
        <>  
            <Switch>                
                <Route path="/common/:param" component={System}/>                
                <Route path="/" component={()=><h3>potalMain</h3>}/>
            </Switch>
        </>
    )
}