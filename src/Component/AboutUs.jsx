import React from 'react';
import AboutMemberCard from '../Cards/AboutMemberCard';
const AboutUs = () => {
    return (
        <div className='mt-10'>
            <div className='flex flex-col items-center gap-5 mb-10'>
                <h1 className='md:text-4xl text-xl text-red-600 text-center font-SptFont2'>
                    Shaptorshi Family
                </h1>
                <div className='flex items-center'>
                    <div className='h-[3px] w-16 bg-red-800'></div>
                    <div className='h-[5px] w-16 bg-red-800'></div>
                    <div className='h-[3px] w-16 bg-red-800'></div>
                </div>
            </div>
            {/* Advisors Panel */}
            <div className="container bg-[url('')] mb-10">
                <div className=''>
                    <AboutMemberCard
                        Image="public/Image/BadhsaSir.png"
                        Name='Md Badsha Khan'
                        Qualification="dvdv"
                        ContactNumber="01913-897799"
                        MailId="mailid@gmail.com"
                        Designation="Prime Advisor" />
                </div>
                <div className='grid md:grid-cols-2 grid-cols-1 gap-3 md:mt-10'>
                    <AboutMemberCard
                        Image="public/Image/SotProfile.png"
                        Name='ABCD'
                        Qualification="dvdv"
                        ContactNumber="161612"
                        MailId="mailid@gmail.com"
                        Designation="Advisor 1" />
                    <AboutMemberCard
                        Image="public/Image/SotProfile.png"
                        Name='cvdssbb'
                        Qualification="dvdv"
                        ContactNumber="161612"
                        MailId="mailid@gmail.com"
                        Designation="Advisor 2" />
                </div>
                {/* MD PaneL */}
                <div className="mt-10">
                    <AboutMemberCard
                        Image="public/Image/Samia.png"
                        Name='Mss.Samia Sultana'
                        Qualification="dvdv"
                        ContactNumber="161612"
                        MailId="mailid@gmail.com"
                        Designation="MD" />
                    <div className='grid md:grid-cols-2 grid-cols-1 gap-3 md:mt-10'>
                        <AboutMemberCard
                            Image="public/Image/Shimanto.png"
                            Name='Shimanto Khan'
                            Qualification="dvdv"
                            ContactNumber="161612"
                            MailId="mailid@gmail.com"
                            Designation="DD" />
                        <AboutMemberCard
                            Image="public/Image/Sreya.png"
                            Name='Sreya'
                            Qualification="dvdv"
                            ContactNumber="161612"
                            MailId="mailid@gmail.com"
                            Designation="ADD" />
                    </div>

                </div>
                {/* CEO Panel */}
                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 mt-10'>
                    <AboutMemberCard
                        Image="public/Image/SotProfile.png"
                        Name='cvvvx'
                        Qualification="dvdv"
                        ContactNumber="161612"
                        MailId="mailid@gmail.com"
                        Designation="CEO 2" />
                    <AboutMemberCard
                        Image="public/Image/Sujoy.png"
                        Name='Shuvro Sujoy'
                        Qualification="dvdv"
                        ContactNumber="161612"
                        MailId="mailid@gmail.com"
                        Designation="CEO 1" />
                    <AboutMemberCard
                        Image="public/Image/SotProfile.png"
                        Name='sdsbbs'
                        Qualification="dvdv"
                        ContactNumber="161612"
                        MailId="mailid@gmail.com"
                        Designation="CEO 3" />
                </div>
                {/* Teacher Panel */}
                {/* <div>
                <h3 className='flex justify-center text-2xl text-red-600 font-SptFont text-center'>Teachers And Their Details</h3>
            </div> */}
                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 mt-10'>
                    <AboutMemberCard
                        Image="public/Image/SotProfile.png"
                        Name='dvdbb'
                        Qualification="dvdv"
                        ContactNumber="161612"
                        MailId="mailid@gmail.com"
                        Designation="Teacher" />
                    <AboutMemberCard
                        Image="public/Image/SotProfile.png"
                        Name='dzvvv'
                        Qualification="dvdv"
                        ContactNumber="161612"
                        MailId="mailid@gmail.com"
                        Designation="Teacher" />
                    <AboutMemberCard
                        Image="public/Image/SotProfile.png"
                        Name='vvdbb'
                        Qualification="dvdv"
                        ContactNumber="161612"
                        MailId="mailid@gmail.com"
                        Designation="Teacher" />
                    <AboutMemberCard
                        Image="public/Image/SotProfile.png"
                        Name='BDsdbjdvb'
                        Qualification="dvdv"
                        ContactNumber="161612"
                        MailId="mailid@gmail.com"
                        Designation="Teacher" />
                    <AboutMemberCard
                        Image="public/Image/SotProfile.png"
                        Name='BDsdbjdvb'
                        Qualification="dvdv"
                        ContactNumber="161612"
                        MailId="mailid@gmail.com"
                        Designation="Teacher" />
                    <AboutMemberCard
                        Image="public/Image/SotProfile.png"
                        Name='BDsdbjdvb'
                        Qualification="dvdv"
                        ContactNumber="161612"
                        MailId="mailid@gmail.com"
                        Designation="Teacher" />
                    <AboutMemberCard
                        Image="public/Image/SotProfile.png"
                        Name='BDsdbjdvb'
                        Qualification="dvdv"
                        ContactNumber="161612"
                        MailId="mailid@gmail.com"
                        Designation="Teacher" />
                </div>
            </div>
        </div>
    );
};

export default AboutUs;