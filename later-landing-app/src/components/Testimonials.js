import React from 'react';
import '../App.css';
import './Testimonials.css';
import CardItem from './CardItem';

function Testimonials() {
  return (
    <>
    <div className='div-row'>
      <img className="div-image" src='images/square.svg'/>
    </div>
    <section className='cards alternate-bg'>
      <div className='cards__container'>
      <h6>WHAT OUR CUSTOMERS SAY</h6>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/ryan-babenzien-188b1ec5.png'
              alt='Picture of Ryan Babezien'
              quote='We’ve been using Later for a little over 2 years. The visual planner is one of the tools that has helped us become more efficient and it’s an important part of our marketing toolkit.'
              name='Ryan Babenzien'
              title='Founder and CEO of GREATS'
            />
            <CardItem
              src='images/olivia-desantos-39b7b4c7.png'
              alt='Picture of Olivia DeSantos'
              quote='Later’s powerful automation tools and helpful trainings have helped drive my business forward My business has grown with the platform, taking my brand form a lowly wedding blog to a successful destination wedding business.'
              name='Olivia DeSantos'
              title='Wedding Planner, Nulyweds'
            />
            <CardItem
              src='images/me-undies-423a19b1.png'
              alt='MeUndies logo'
              quote='Later has enabled our team to focus on producing quality, engaging content by freeing up time that would have been spent on collecting user-gerenated assets, planning, and scheduling.'
              name='Social Media Team'
              title='MeUndies'
            />
          </ul>
        </div>
      </div>
    </section>
    </>
  )
}

export default Testimonials;
