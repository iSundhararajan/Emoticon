import React from "react"
import MentalHealthImg from '../assets/mental_health.svg'
import MeetingImg from '../assets/meet.svg'
import ChatImg from '../assets/chat.svg'
import { Link } from 'react-router-dom';

export default function Home() {

  return (
    <div className='md:mx-28 mx-4 pt-10 pb-12'>

      <div className='md:grid md:grid-cols-2 items-center pt-10'>
        <div className=''>
          <h1 className='text-3xl md:text-5xl'>Welcome to Emoticon :-)</h1>
          <p className='text-xl md:text-2xl py-4 tracking-wider text-justify'>Your mental health is important and it matters just as much as your physical health does. We will help you take care of your mental well-being. Click to get started!</p>

          <Link to="/therapist">
            <button className='bg-secondary text-white py-2 px-8 rounded-md text-xl md:text-2xl'>Therapist Help</button>
          </Link>

        </div>
        <div className="grid place-items-center py-4 drop-shadow-3xl shadow-black">
          <img src={MentalHealthImg} alt="img" width="500" height="500" />
        </div>
      </div>

      <div className='md:grid md:grid-cols-2 pt-12 items-center'>
        <div className="grid place-items-center py-4 drop-shadow-3xl shadow-black">
          <img src={MeetingImg} alt="img" width="300" height="300" />
        </div>
        <div className=''>
          <p className='text-xl md:text-2xl py-4 tracking-wider'>If you’re feeling down or want to talk to someone, our therapists are available. You can communicate to them by messaging or through video call. Go to the Therapist Help tab to get started!</p>
        </div>
      </div>

      <div className='md:grid md:grid-cols-2 items-center pt-10'>
        <div className=''>
          <p className='text-xl md:text-2xl py-4 tracking-wider text-justify'>If you want to anonymously talk to us, head over to the Chatroom tab. You can find other users there as well as resources that may help you!</p>
        </div>
        <div className="grid place-items-center py-4 drop-shadow-3xl shadow-black">
          <img src={ChatImg} alt="img" width="500" height="500" />
        </div>
      </div>

    </div>
  )
}
