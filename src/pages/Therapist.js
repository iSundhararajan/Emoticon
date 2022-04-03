import React from 'react'
import MiaImg from '../assets/mia.svg'
import RobertImg from '../assets/robert.svg'
import AliyahIng from '../assets/aliyah.svg'
import { Link } from 'react-router-dom'

export default function Therapist() {
    return (
        <div className='min-h-screen pb-8'>
            <h1 className='text-5xl p-8'>Ask a Therapist!</h1>

            <div layout className="flex flex-wrap justify-around w-full px-6 gap-y-6">

                <div className="flex flex-col justify-center">
                    <div layout
                        className="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl drop-shadow-3xl px-3 md:py-6 py-3 max-w-sm md:max-w-xl lg:max-w-6xl mx-auto border border-white bg-white">

                        <div className="w-full md:w-72 grid place-items-center md:drop-shadow-3xl border-2 border-black rounded-md">
                            <img src={MiaImg} width="350" height="350" alt="img" className="rounded-xl bg-projectBg" />
                        </div>

                        <div className="w-full bg-white flex flex-col p-3 border-2 border-black rounded-md">
                            <h1 className="font-black text-gray-800 text-3xl">Mia Chang</h1>

                            <h1 className="text-gray-800 text-2xl py-2">Background: Mental health is very important to me and I have been therapist for 10 years.I love to listen to your problems and help you!</h1>

                            <Link to="/therapist/mia" className='py-4'>
                                <button className='bg-secondary text-white py-2 px-8 rounded-md text-xl md:text-2xl'>Therapist Help</button>
                            </Link>

                        </div>
                    </div>
                </div>

                <div className="flex flex-col justify-center">
                    <div layout
                        className="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl drop-shadow-3xl px-3 md:py-6 py-3 max-w-sm md:max-w-xl lg:max-w-6xl mx-auto border border-white bg-white">

                        <div className="w-full md:w-72 grid place-items-center md:drop-shadow-3xl border-2 border-black rounded-md">
                            <img src={RobertImg} width="350" height="350" alt="img" className="rounded-xl bg-projectBg" />
                        </div>

                        <div className="w-full bg-white flex flex-col p-3 border-2 border-black rounded-md">
                            <h1 className="font-black text-gray-800 text-3xl">Robert Smith</h1>

                            <h1 className="text-gray-800 text-2xl py-2">Background: Therapist for 5 years, recently graduated from Emory with a degree in Psychology. Planning to become a medical psychiatrist</h1>

                            <Link to="/therapist/robert" className='py-4'>
                                <button className='bg-secondary text-white py-2 px-8 rounded-md text-xl md:text-2xl'>Therapist Help</button>
                            </Link>

                        </div>
                    </div>
                </div>

                <div className="flex flex-col justify-center">
                    <div layout
                        className="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl drop-shadow-3xl px-3 md:py-6 py-3 max-w-sm md:max-w-xl lg:max-w-6xl mx-auto border border-white bg-white">

                        <div className="w-full md:w-72 grid place-items-center md:drop-shadow-3xl border-2 border-black rounded-md">
                            <img src={AliyahIng} width="400" height="400" alt="img" className="rounded-xl bg-projectBg" />
                        </div>

                        <div className="w-full bg-white flex flex-col p-3 border-2 border-black rounded-md">
                            <h1 className="font-black text-gray-800 text-3xl">Aliyah Daker</h1>

                            <h1 className="text-gray-800 text-2xl py-2">Background: Medical psychiatrist, with more than 25 years of experience. I have worked with people from all age and ehtnic groups.</h1>

                            <Link to="/therapist/aliyah" className='py-4'>
                                <button className='bg-secondary text-white py-2 px-8 rounded-md text-xl md:text-2xl'>Therapist Help</button>
                            </Link>

                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}
