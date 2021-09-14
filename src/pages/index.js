import { Route, Switch } from 'react-router';
import withComponentSplitting from '@/components/withComponentSplitting';

//const Inbox = withComponentSplitting( () => import('@/pages/inbox') );
const Inbox2 = withComponentSplitting( () => import('@/pages/inbox2') );

export default () => {    
    return(
        <>  
            <Switch>
                <Route path="/inbox" component={()=><h3>Inbox Potal</h3>}/>
                <Route path="/inbox2/:param" component={Inbox2}/>
                <Route path="/" component={()=><h3>potalMain</h3>}/>
            </Switch>
        </>
    )
}