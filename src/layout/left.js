import { Layout, Menu } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';
import { useCallback } from 'react';

const menu = [
  //{ code : "ERP",   title : "영업관리",     depth : 0, no : 0  },
  //{ code : "ITR",   title : "인트라넷관리", depth : 0, no : 1    },
  //{ code : "PAS",   title : "인사관리",     depth : 0, no : 2    },
  { code : "RMS",   title : "시스템관리",   depth : 0, no : 3    },
  //{ code : "AGC",   title : "대리점 웹 ERP",depth : 0, no : 4    },
  //{ code : "LAN",   title : "랜드 웹 ERP",  depth : 0, no : 5    },
  //{ code : "WEB",   title : "홈페이지관리", depth : 0, no : 6     },
  { code : "RMS_1", title : "시스템관리_1", depth : 1, no : 0,pcode : "RMS"   },
  { code : "RMS_2", title : "시스템관리_2", depth : 1, no : 1,pcode : "RMS"   },
  { code : "RMS_1_1", title : "시스템관리_2", depth : 2, no : 1,pcode : "RMS_1"   },
  { code : "RMS_1_2", title : "시스템관리_3", depth : 2, no : 1,pcode : "RMS_1"   },
  { code : "SAMPLE",   title : "예제", depth : 0, no : 6, path : "/sample"     },
]

export default () => {
  const { SubMenu } = Menu;
  const { Sider } = Layout;
  const history = useHistory();
  const handleClick = useCallback(data => history.push(data?.path || "/"),[history]) ;
  const MenuItem = data => {    
    return data.reduce(( acc,cur,idx,arr )=>{
      const subData = menu.filter( item =>  (item?.pcode && item.pcode === cur.code) );
      if( subData.length > 0 ){
        acc = acc.concat(
          <SubMenu key={cur.code} icon={<UserOutlined />} title={cur.title}>
              {MenuItem(subData)}
          </SubMenu>
        );
      }else{
        acc = acc.concat(<Menu.Item key={`${cur.code}_${cur.no}`} onClick={()=>handleClick(cur)}>{cur.title}</Menu.Item>);
      }
      return acc;
    },[])
  }

  return(
    <Sider width={200} className="site-layout-background">
        <Menu
          mode="inline"
          //defaultSelectedKeys={['1']}
          //defaultOpenKeys={['sub_sub1']}
          style={{ height: '100%', borderRight: 0 }}
        >
          {/*<SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
            <SubMenu key="sub_sub1" icon={<UserOutlined />} title="subnav 1">
              <Menu.Item key="1">option2</Menu.Item>
            </SubMenu>
            <Menu.Item key="2">option2</Menu.Item>
            <Menu.Item key="3">option3</Menu.Item>
            <Menu.Item key="4">option4</Menu.Item>
          </SubMenu>*/}
          {MenuItem(menu.filter(item=>item.depth===0))}
        </Menu>
    </Sider>
  )
}