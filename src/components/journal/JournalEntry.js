import React from 'react';

export const JournalEntry = () => {
  return (
    <div className='journal__entry pointer'>
      <div
        className='journal__entry-picture'
        style={{
          backgroundSize: 'cover',
          backgroundImage:
            'url(https://cdn.shopify.com/s/files/1/1619/4221/products/HBE90816_1024x1024@2x.jpg?v=1597958367)',
        }}></div>

      <div className='journal__entry-body'>
        <p className='journal__entry-title'>Un nuevo día</p>
        <p className='journal__entry-content'>
          Reprehenderit id in duis consectetur deserunt ceniam fugiat
        </p>
      </div>

      <div className='journal__entry-date-box'>
        <span>Monday</span>
        <h4>28</h4>
      </div>
    </div>
  );
};
