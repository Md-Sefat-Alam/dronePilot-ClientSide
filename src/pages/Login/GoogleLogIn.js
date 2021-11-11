import React from 'react';

const GoogleLogIn = (props) => {
    const { handleGoogleLogin } = props
    return (
        <div onClick={handleGoogleLogin} className="input-group flex-nowrap my-4" style={
            {
                userSelect: 'none',
                borderTopRightRadius: '5px',
                borderBottomRightRadius: '5px',
                border: '2px solid DodgerBlue',
                backgroundColor: 'DodgerBlue'
            }
        }>
            <span className="input-group-text m-0 p-0" id="addon-wrapping3">
                <img className='img-fluid' style={{ width: '32px', }} src="https://us.123rf.com/450wm/kornienko/kornienko1611/kornienko161100200/66047248-chisinau-moldova-november-16-2016-google-logo-on-pc-screen-google-it-is-the-largest-internet-search-.jpg?ver=6" alt="" />
            </span>
            <input style={{ backgroundColor: 'DodgerBlue' }} type="button" value='Sign In Using Google' className="form-control text-start border-0 rounded-0 text-white fw-bolder" aria-label="Username" aria-describedby="addon-wrapping3" />
        </div>
    );
};

export default GoogleLogIn;