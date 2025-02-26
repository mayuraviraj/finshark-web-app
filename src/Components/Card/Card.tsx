import React from 'react';

interface Props {
    companyName: string;
    ticker: string;
    price: number;
}
const Card = ({companyName, ticker, price}: Props) => {
    return (
        <div>
            <h2>{companyName}</h2>
            <h2>{ticker}</h2>
            <h2>${price}</h2>
        </div>
    );
};

export default Card;