import { Layout, Switch } from 'antd';
import { useDispatch } from 'react-redux';

export default () => {
    const { Header } = Layout;
    const dispatch = useDispatch();
    return(
        <Header className="header">
        </Header>
    )    
}
