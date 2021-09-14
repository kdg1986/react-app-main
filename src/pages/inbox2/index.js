import { Route } from 'react-router-dom';
import queryString from 'query-string';

export default ({location, match}) => {
    const query = queryString.parse(location.search);
    const prefix = "/inbox2";

    return (
        <>        
            <Route path={`${match.path}`} component={()=><h3>Inbox2 Potal</h3>}/>
        </>
    )
}

