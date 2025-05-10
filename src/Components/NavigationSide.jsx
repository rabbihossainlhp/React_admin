import React, { useState } from 'react';
import {
    BellOutlined, 
    MenuOutlined, 
    BorderlessTableOutlined, 
    DashboardOutlined, 
    CloseCircleOutlined , 
    SettingOutlined, 
    StarOutlined, 
    TagsOutlined, 
    UsergroupAddOutlined 
} from '@ant-design/icons';
import { Card } from 'antd';

const NavigationSide = () => {
    
    const [clickedMenue,setClickedMenue] = useState(false);
    const [activeItem,setActiveItem] = useState(null);
    
    const onMenueClicke = ()=>{
        setClickedMenue(!clickedMenue);
    }


    const NavigationItems = [
        {name:"Dashboard",    icon: <DashboardOutlined  className='text-2xl ' /> } , 
        {name:"Catagories",   icon: <BorderlessTableOutlined className='text-2xl ' /> } , 
        {name:"Notification", icon: <BellOutlined className='text-2xl ' /> } , 
        {name:"Review",       icon: <StarOutlined className='text-2xl ' /> } , 
        {name:"User",         icon: <UsergroupAddOutlined className='text-2xl ' /> } , 
        {name:"Settings",     icon: <SettingOutlined className='text-2xl ' /> } , 
        {name:"Tags",         icon: <TagsOutlined className='text-2xl ' /> } , 
    ];
    
    return (
        <div>
            <div className='absolute left-2 top-2 text-3xl font-bold border-2 h-14 w-14 text-center rounded-full p-2 cursor-pointer sm:hidden ' onClick={onMenueClicke} ><MenuOutlined  /></div>
            <div className={`sidebar bg-blue-600 h-screen w-72 relative flex flex-col items-center transition-all duration-300  ${clickedMenue?"left-0":"  -left-full"}  sm:left-0 justify-between `}>
                <span className='relative sm:hidden visible right-0  top-1 w-full text-4xl font-bold text-white  ' onClick={onMenueClicke}><CloseCircleOutlined className='absolute right-2 top-2' /> </span>
                <h2 className='text-yellow-300 font-bold text-2xl h-1/5 w-full text-center content-center'>.SoHojPor@</h2>
                <ul className="sidebrItem h-4/5 text-white font-bold text-xl flex flex-col justify-evenly items-start pl-2 w-4/5">
                    {
                        NavigationItems.map((item,index)=>{
                            return <li key={index} className={`h-11 w-full flex items-center gap-4 pl-4  ${activeItem === index ? 'bg-black rounded-4xl':'hover:bg-indigo-900 hover:rounded-4xl'} cursor-pointer transition-all `} 
                                    onClick={()=>setActiveItem(index)}>
                                        {item.icon} {item.name}
                                    </li>
                        })
                    }
                </ul>
            </div>
        </div>  
    );
};

export default NavigationSide;