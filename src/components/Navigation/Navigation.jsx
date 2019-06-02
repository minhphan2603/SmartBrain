import React from 'react';

const Navigation = ({onChangeRoute, route}) => {
    if (route === 'home'){
        return (
            <nav style={{display:'flex', justifyContent:'flex-end'}}>
            <p className='f3 link black dim underline pa3 pointer' onClick={() => onChangeRoute('signin')} >Sign Out</p>
        </nav>
        )
    }
    return (
        <nav style={{display:'flex', justifyContent:'flex-end'}}>
            <p className='f3 link black dim underline pa3 pointer' onClick={() => onChangeRoute('signin')} >Sign In</p>
            <p className='f3 link black dim underline pa3 pointer' onClick={() => onChangeRoute('register')} >Register</p>
        </nav>
    )
}

export default Navigation;