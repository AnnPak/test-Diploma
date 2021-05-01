import React from 'react';

interface Props {
  text: string;
  counter: number;
  isShowText?: boolean;
}

export const HelloWorld: React.FC<Props>  = (props) => {
    const { text, counter, isShowText } = props; //деструкторизация 
    
    return (
        <div>
            { isShowText && `${text}-${counter}`}
        </div>   
    )
}
