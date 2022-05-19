import * as React from 'react';
import { useState } from 'react';
import './Field.scss';
import { styled } from '@mui/material/styles';

import Item from "../Item/Item";

type themesKinds = "lightTheme" | "darkTheme";

const Field = () => {              

    const [currentTheme, setCurrenTheme] = useState<themesKinds>("lightTheme");

    const changeTheme = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>{
        e.preventDefault();
        setCurrenTheme(currentTheme == "lightTheme" ? "darkTheme" : "lightTheme");       
    }

    const CustomField = styled('div')(({ theme }) => ({        
        background: theme[currentTheme].backColor       
      }));

    return (        
            <CustomField className='Field'>
                <Item name="main" currentTheme={currentTheme} color="main"/>
                <Item name="primary" currentTheme={currentTheme} color="primary"/>
                <Item name="secondary" currentTheme={currentTheme} color="secondary"/>
                <Item name="error" currentTheme={currentTheme} color="error"/>
                <Item name="danger" currentTheme={currentTheme} color="danger"/>
                <Item name="dark" currentTheme={currentTheme} color="dark"/>
                <Item name="light" currentTheme={currentTheme} color="light"/>
                <Item name="lovely" currentTheme={currentTheme} color="lovely"/>
                <Item name="grossy" currentTheme={currentTheme} color="grossy"/>
                <Item name="temporary" currentTheme={currentTheme} color="temporary"/>
                
                <div className='Field-changeTheme'>
                    <button onClick={(e)=>changeTheme(e)}>Изменить тему</button>
                </div>   
            </CustomField> 
    )
}

export default Field;