import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import StudentComment from "../Cards/StudentComment";
const StudentsCommentS = () => {
    return (
        <div className='space-y-5'>
        <h2 className='text-zinc-950 text-2xl font-semibold'>কোর্সটি নিয়ে শিক্ষার্থীদের মতামত</h2>
        <div className=''>
            <Swiper navigation={true} modules={[Navigation]} className="md:w-[600px]">
                <SwiperSlide>
                    <StudentComment
                        Comment="অনলাইন ব্যাচে ক্লাস করে সব বিষয়ের মূল্যায়ন উৎসবে ভালো করেছি, বিশেষ করে গণিত, বাংলা, ইংরেজি বিষয়ে অনলাইন ব্যাচের শিক্ষকবৃন্দের পড়ানো এত ভালো যে লাইভ ক্লাসের পর দ্বিতীয়বার আর পড়তে হয় না।"
                        Image="public/Image/presentation1.jpg"
                        Name="আদ্রিজা"
                        Address="শিক্ষার্থী, খলিলুর রহমান বালিকা উচ্চ বিদ্যালয়, চট্টগ্রাম"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <StudentComment
                        Comment="অনলাইন ব্যাচে ক্লাস করে সব বিষয়ের মূল্যায়ন উৎসবে ভালো করেছি, বিশেষ করে গণিত, বাংলা, ইংরেজি বিষয়ে অনলাইন ব্যাচের শিক্ষকবৃন্দের পড়ানো এত ভালো যে লাইভ ক্লাসের পর দ্বিতীয়বার আর পড়তে হয় না।"
                        Image="public/Image/presentation1.jpg"
                        Name="আদ্রিজা"
                        Address="শিক্ষার্থী, খলিলুর রহমান বালিকা উচ্চ বিদ্যালয়, চট্টগ্রাম"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <StudentComment
                        Comment="অনলাইন ব্যাচে ক্লাস করে সব বিষয়ের মূল্যায়ন উৎসবে ভালো করেছি, বিশেষ করে গণিত, বাংলা, ইংরেজি বিষয়ে অনলাইন ব্যাচের শিক্ষকবৃন্দের পড়ানো এত ভালো যে লাইভ ক্লাসের পর দ্বিতীয়বার আর পড়তে হয় না।"
                        Image="public/Image/presentation1.jpg"
                        Name="আদ্রিজা"
                        Address="শিক্ষার্থী, খলিলুর রহমান বালিকা উচ্চ বিদ্যালয়, চট্টগ্রাম"
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    </div>
    );
};

export default StudentsCommentS;