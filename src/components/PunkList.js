import React from 'react';
import CollectionCard from "./CollectionCard";
import './PunkList.css';

export default function PunkList({punkListData, setSelectedPunk}) {
    return (
        <div className={'punkList'}>
            {
                punkListData.map(punk => (
                    <div key={punk.token_id} onClick={() => {
                        console.log(punk.token_id);
                        setSelectedPunk(punk.token_id)
                    }}>
                        <CollectionCard key={punk.token_id} id={punk.token_id} name={punk.name} traits={punk.traits} image={punk.image_preview_url}/>

                    </div>

                ))
            }
        </div>
    );
}
