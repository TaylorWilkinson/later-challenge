import React from 'react';
import '../App.css';
import './Hero.css';
import { Button } from './Button';

function Hero() {
  return (
    <section className='hero-container'>
      <div class="row">
        <h1>A social media marketing platform that actually helps you grow</h1>
      </div>
      <div class="row">
        <div class="col-1-of-2">
          <img src="./images/Hp--visual--planner-f0bab8b1.png" alt='Later Visual Planner mockup'></img>
        </div>
        <div class="col-2-of-2">
          <h6>Visual Planner</h6>
      		<h2>Plan a month's worth of social media posts in minutes</h2>
      		<p>
            Scheduling your social media content is as simple as dragging-and-dropping. No, seriously. Later will tell you your unique Best Time to Post, so you can schedule in batches and publish without a hitch.
          </p>
          <div className="hero-btns">
            <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--medium'>Visual Planner &#8250;</Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero;
