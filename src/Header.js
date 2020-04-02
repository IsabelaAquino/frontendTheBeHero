import React from 'react';

export default function Header({children}) { //props (geral pega todas as propriedadade) <h1>{props.title}</h1>
    return (
        <header>
            {/* <h1>{props.children}</h1> */}
            <h1>{children}</h1>
        </header>    
    );
}

// or export default Header; 