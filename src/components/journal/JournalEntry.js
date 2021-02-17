import React from 'react';

export const JournalEntry = () => {
  return (
    <div className='journal__entry pointer'>
      <div
        className='journal__entry-picture'
        style={{
          backgroundSize: 'cover',
          backgroundImage:
            'url(https://images.pexels.com/photos/2670898/pexels-photo-2670898.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)',
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
