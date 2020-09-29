import React from 'react';

const Local = ({country, input, localPrice}) => {
    const numBurgers = +input / localPrice; // TODO
    const ppp = country['Dollar PPP']; // TODO
    return (
        <div className="third">
            <p data-testid="local-burgers">You could buy {numBurgers} of Big Macs in your country</p>
            <p data-testid="ppp">Your Dollar Purchasing Parity (PPP) is {ppp}</p>
        </div>
    )
}

export { Local }