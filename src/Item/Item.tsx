import * as React from 'react';
import { styled } from '@mui/material/styles';
import "./Item.scss"

interface IItem {
    name: string,
    currentTheme: "lightTheme" | "darkTheme",
    color: 
        "main" | 
        "primary" |         
        "secondary" |
        "error" |
        "danger" |
        "dark" |
        "light" |
        "lovely" |
        "grossy" |
        "temporary"
}




const Item = ({name, color, currentTheme}: IItem) =>{
    
    const CustomItem = styled('button')(({ theme }) => ({        
        background: theme[currentTheme][color],
        color: theme[currentTheme].fontColor
      }));

    return (
        <div className='Item'>
             <CustomItem className='Item-btn'>{name}</CustomItem>
        </div>
       
    )

}

export default Item;