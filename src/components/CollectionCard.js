import React from 'react';
import weth from '../assets/weth.png';
import './CollectionCard.css';

export default function CollectionCard({id, name, traits, image}) {
    return (
        <>
            <div className="collectionCard">
                <img src={image} alt={""}/>
                <div className="details">
                    <div className="name">
                        {name}
                        <div className="id">&middot;#{id}</div>
                    </div>
                    <div className="priceContainer">
                        <img src={weth} className={'wethImage'} alt={""}/>
                        <div className="price">{traits[0]?.value || 32}</div>
                    </div>
                </div>
            </div>
        </>
    );
}
