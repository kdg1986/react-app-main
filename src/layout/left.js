import { Layout, Menu } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

const menu = [
  //{ code : "ERP",   title : "영업관리",     depth : 0, no : 0  },
  //{ code : "ITR",   title : "인트라넷관리", depth : 0, no : 1    },
  //{ code : "PAS",   title : "인사관리",     depth : 0, no : 2    },
  { code : "RMS",   title : "시스템관리",   depth : 0, no : 3    },
  //{ code : "AGC",   title : "대리점 웹 ERP",depth : 0, no : 4    },
  //{ code : "LAN",   title : "랜드 웹 ERP",  depth : 0, no : 5    },
  //{ code : "WEB",   title : "홈페이지관리", depth : 0, no : 6     },
  { code : "RMS_COMMON", title : "공통코드", depth : 1, no : 0,pcode : "RMS"   },
  { code : "RMS_COMMON_SYS", title : "프로그램관리", depth : 1, no : 0,pcode : "RMS_COMMON",path : "/common/program" },
]

export default () => {
  const { SubMenu } = Menu;
  const { Sider } = Layout;
  const history = useHistory();
  const [ MenuList,setMenuList ] = useState([]);
  const dispatch = useDispatch();
  const handleClick = useCallback(data => {
    const breadcrumb = data.namePath ? `${data.namePath},${data.title}` : `${data.title}`
    dispatch({ type : 'layout/breadcrumb', payload : breadcrumb });
    history.push(data?.path || "/");
  },[history]) ;
  const createMenu = data => {           
    return data.reduce(( acc,cur,idx,arr )=>{
      const subData = menu.filter( item => item?.pcode && item.pcode === cur.code);
      if( subData.length > 0 ){
        acc = acc.concat(
          <SubMenu key={cur.code} icon={<UserOutlined />} title={cur.title}>
              {createMenu( subData.map(item=> { item.namePath = `${(item.namePath || item.title)},${cur.title}`; return item } ) )}
          </SubMenu>
        );
      }else{
        acc = acc.concat(<Menu.Item key={`${cur.code}_${cur.no}`} onClick={()=>handleClick(cur)}>{cur.title}</Menu.Item>);
      }
      return acc;
    },[])
  }

  useEffect(()=>{
    const _menu = DEVELOP_MODE ? menu.filter(item=>item.depth===0).concat([{ code : "SAMPLE",   title : "예제", depth : 0, no : 6, path : "/sample" }])
                               : menu.filter(item=>item.depth===0);
    setMenuList( createMenu( _menu ) );
  },[])

  return(
    <Sider width={200} className="site-layout-background">
        <Menu
          mode="inline"                    
          style={{ height: '100%', borderRight: 0 }}
        >
          {MenuList}
        </Menu>
    </Sider>
  )
}