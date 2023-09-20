import React, { useEffect, useState } from 'react';
import { GrLanguage } from 'react-icons/gr';
import { GiMoneyStack, GiReceiveMoney } from 'react-icons/gi';
import { BsCalendar3 } from 'react-icons/bs';
import { MdKeyboardDoubleArrowDown, MdKeyboardDoubleArrowUp } from 'react-icons/md';
import './SeventhPage.css'








const SeventhPage = () => {


    const [moreServiceIcon1, setMoreServiceIcon1] = useState(false)
    const [moreServiceIcon2, setMoreServiceIcon2] = useState(false)
    const [moreServiceIcon3, setMoreServiceIcon3] = useState(false)
    const [moreServiceIcon4, setMoreServiceIcon4] = useState(false)


    const [question1, setQuestion1] = useState(true)
    const handleQuestion1 = () => {
        setQuestion1(!question1);
        setMoreServiceIcon1(!moreServiceIcon1);
        setMoreServiceIcon2(false);
        setMoreServiceIcon3(false);
        setMoreServiceIcon4(false);
    }

    const [question2, setQuestion2] = useState(false)
    const handleQuestion2 = () => {
        setQuestion2(!question2);
        setMoreServiceIcon2(!moreServiceIcon2);
        setMoreServiceIcon1(false);
        setMoreServiceIcon3(false);
        setMoreServiceIcon4(false);
    }

    const [question3, setQuestion3] = useState(false)
    const handleQuestion3 = () => {
        setQuestion3(!question3);
        setMoreServiceIcon3(!moreServiceIcon3);
        setMoreServiceIcon1(false);
        setMoreServiceIcon2(false);
        setMoreServiceIcon4(false);
    }

    const [question4, setQuestion4] = useState(false)
    const handleQuestion4 = () => {
        setQuestion4(!question4);
        setMoreServiceIcon4(!moreServiceIcon4);
        setMoreServiceIcon1(false);
        setMoreServiceIcon2(false);
        setMoreServiceIcon3(false);
    }




    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 0) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);








    return (
        <div className='mt-56 lg:px-12 md:px-2 px-2'>
        <h1 className='md:text-5xl text-4xl text-center font-bold uppercase mt-24 mb-24 '>New Layout</h1>

        <div className='flex justify-center lg:flex-row flex-col-reverse mb-20 lg:px-10 md:px-8 px-2 lg:gap-x-12 lg:gap-y-0 gap-x-4 gap-y-20'>

            
            <div className='lg:w-7/12 w-full mx-auto bg-white shadow-2xl px-6 py-8'>


                <h2 className='text-3xl text-start font-bold text-pink-600 mb-3'>কমপ্লিট SQA(Manual & Automation ) শিখুন</h2>
                <p className='text-black text-lg text-justify'>SQA এর উপর আকর্ষণীয় ক্যারিয়ার বানানোর জন্য প্রয়োজনীয় থিউরী এবং প্রাক্টিক্যাল স্কিলগুলো শিখুন ৩ মাসের লাইভ ক্লাসের মধ্যে এবং ৬টি প্র্যাকটিক্যাল প্রজেক্টের মাধ্যমে।</p>


                <h1 className='text-2xl text-start font-bold text-purple-600 mt-10'>
                    কি শিখবেন এই কোর্সে থেকে?
                </h1>
                <p className='text-black text-lg text-justify mb-4'>
                    যেকোনো ধরনের টেস্টিং এর জন্য সবচেয়ে বেসিক লেভেলে Manual Testing এর বিষয়গুলো খুব ভালভাবে জানতে হয়। Automation এর জন্য Selenium এর মতো ফ্রেমওয়ার্ক জানা থাকলে সেটা দেয় বাড়তি সুবিধা। এগুলো সম্পর্কে জানা না থাকলে এ কোর্সে জেনে যাবেন।
                </p>


                <div className='bg-gray-300 rounded-lg my-10'>
                    <p className='text-black text-justify px-5 py-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse magni quis dolor voluptas eius, adipisci quod quam non unde impedit dolore reiciendis similique nesciunt quia obcaecati eligendi dignissimos. Odit maxime voluptates enim nostrum ex quaerat quas, neque, eveniet sunt, dignissimos corrupti possimus qui reprehenderit officiis cupiditate. Non amet perferendis temporibus laboriosam, sit vero aut quo repellat distinctio labore cum fugit ipsa optio, qui perspiciatis quaerat? Voluptatem nam nobis reprehenderit. Rerum tempore ex illo perspiciatis in accusantium voluptas minus harum consequuntur similique porro ut. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse magni quis dolor Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse magni quis dolor voluptas eius, adipisci quod quam non unde impedit dolore reiciendis similique nesciunt quia obcaecati eligendi.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse magni quis dolor voluptas eius, adipisci quod quam non unde impedit dolore reiciendis similique nesciunt quia. </p>
                </div>


                <h1 className='text-2xl text-start font-bold text-purple-600 mt-4'>
                    SQA অ্যাডভান্সড
                </h1>
                <p className='text-black text-lg text-justify mb-4'>
                    মডার্ন সফটয়্যার গুলো সাধারণত ডায়নামিক হয়। অর্থাৎ সেগুলোতে ইউজাররা নানা ধরনের ইন্টারঅ্যাকশন করে থাকেন। আবার সেসব ইন্টারঅ্যাকশন নিয়ন্ত্রণ করা হয় একটি সিস্টেম দিয়ে, যেটি গুরুত্বপূর্ণ ডেটা সংগ্রহ ও সংরক্ষণের কাজও করে। তাই এই ডায়নামিক জিনিসের টেস্টিং করতে আপনাকে অ্যাডভান্সড সফটয়্যার টেস্টিং সম্পর্কে জানতে হবে।
                </p>


                <h1 className='text-2xl text-start font-bold text-purple-600 mt-4'>
                    রিয়েল-লাইফ প্রজেক্ট
                </h1>
                <p className='text-black text-lg text-justify mb-4'>
                    সফটয়্যার টেস্টিং এর জন্য দরকারি টেকনোলজিগুলো নিয়ে আপনি যা কিছু জানবেন, সেগুলো ৬টি রিয়েল-লাইফ প্রজেক্টের মাধ্যমে করে দেখানো হবে। আপনি নিজেও ৬টি প্রজেক্ট করবেন।
                </p>


                <div className='bg-gray-300 rounded-lg my-10'>
                    <p className='text-black text-justify px-5 py-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse magni quis dolor voluptas eius, adipisci quod quam non unde impedit dolore reiciendis similique nesciunt quia obcaecati eligendi dignissimos. Odit maxime voluptates enim nostrum ex quaerat quas, neque, eveniet sunt, dignissimos corrupti possimus qui reprehenderit officiis cupiditate. Non amet perferendis temporibus laboriosam, sit vero aut quo repellat distinctio labore cum fugit ipsa optio, qui perspiciatis quaerat? Voluptatem nam nobis reprehenderit. Rerum tempore ex illo perspiciatis in accusantium voluptas minus harum consequuntur similique porro ut. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse magni quis dolor Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse magni quis dolor voluptas eius, adipisci quod quam non unde impedit dolore reiciendis similique nesciunt quia obcaecati eligendi.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse magni quis dolor voluptas eius, adipisci quod quam non unde impedit dolore reiciendis similique nesciunt quia. </p>
                </div>


                <h1 className='text-2xl text-start font-bold text-purple-600 mt-4'>
                    রিয়েল-লাইফ প্রজেক্ট
                </h1>
                <p className='text-black text-lg text-justify mb-4'>
                    সফটয়্যার টেস্টিং এর জন্য দরকারি টেকনোলজিগুলো নিয়ে আপনি যা কিছু জানবেন, সেগুলো ৬টি রিয়েল-লাইফ প্রজেক্টের মাধ্যমে করে দেখানো হবে। আপনি নিজেও ৬টি প্রজেক্ট করবেন।
                </p>


                <h1 className='text-2xl text-start font-bold text-purple-600 mt-4'>
                    রিয়েল-লাইফ প্রজেক্ট
                </h1>
                <p className='text-black text-lg text-justify mb-4'>
                    সফটয়্যার টেস্টিং এর জন্য দরকারি টেকনোলজিগুলো নিয়ে আপনি যা কিছু জানবেন, সেগুলো ৬টি রিয়েল-লাইফ প্রজেক্টের মাধ্যমে করে দেখানো হবে। আপনি নিজেও ৬টি প্রজেক্ট করবেন।
                </p>


                <div className='bg-gray-300 rounded-lg my-10'>
                    <p className='text-black text-justify px-5 py-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse magni quis dolor voluptas eius, adipisci quod quam non unde impedit dolore reiciendis similique nesciunt quia obcaecati eligendi dignissimos. Odit maxime voluptates enim nostrum ex quaerat quas, neque, eveniet sunt, dignissimos corrupti possimus qui reprehenderit officiis cupiditate. Non amet perferendis temporibus laboriosam, sit vero aut quo repellat distinctio labore cum fugit ipsa optio, qui perspiciatis quaerat? Voluptatem nam nobis reprehenderit. Rerum tempore ex illo perspiciatis in accusantium voluptas minus harum consequuntur similique porro ut. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse magni quis dolor Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse magni quis dolor voluptas eius, adipisci quod quam non unde impedit dolore reiciendis similique nesciunt quia obcaecati eligendi.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse magni quis dolor voluptas eius, adipisci quod quam non unde impedit dolore reiciendis similique nesciunt quia. </p>
                </div>


                <h1 className='text-2xl text-start font-bold text-purple-600 mt-4'>
                    রিয়েল-লাইফ প্রজেক্ট
                </h1>
                <p className='text-black text-lg text-justify mb-4'>
                    সফটয়্যার টেস্টিং এর জন্য দরকারি টেকনোলজিগুলো নিয়ে আপনি যা কিছু জানবেন, সেগুলো ৬টি রিয়েল-লাইফ প্রজেক্টের মাধ্যমে করে দেখানো হবে। আপনি নিজেও ৬টি প্রজেক্ট করবেন।
                </p>


                <h1 className='text-2xl text-start font-bold text-purple-600 mt-4'>
                    রিয়েল-লাইফ প্রজেক্ট
                </h1>
                <p className='text-black text-lg text-justify mb-4'>
                    সফটয়্যার টেস্টিং এর জন্য দরকারি টেকনোলজিগুলো নিয়ে আপনি যা কিছু জানবেন, সেগুলো ৬টি রিয়েল-লাইফ প্রজেক্টের মাধ্যমে করে দেখানো হবে। আপনি নিজেও ৬টি প্রজেক্ট করবেন।
                </p>


                <h1 className='text-2xl text-start font-bold text-purple-600 mt-4'>
                    রিয়েল-লাইফ প্রজেক্ট
                </h1>
                <p className='text-black text-lg text-justify mb-4'>
                    সফটয়্যার টেস্টিং এর জন্য দরকারি টেকনোলজিগুলো নিয়ে আপনি যা কিছু জানবেন, সেগুলো ৬টি রিয়েল-লাইফ প্রজেক্টের মাধ্যমে করে দেখানো হবে। আপনি নিজেও ৬টি প্রজেক্ট করবেন।
                </p>


                <div className='bg-gray-300 rounded-lg my-10'>
                    <p className='text-black text-justify px-5 py-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse magni quis dolor voluptas eius, adipisci quod quam non unde impedit dolore reiciendis similique nesciunt quia obcaecati eligendi dignissimos. Odit maxime voluptates enim nostrum ex quaerat quas, neque, eveniet sunt, dignissimos corrupti possimus qui reprehenderit officiis cupiditate. Non amet perferendis temporibus laboriosam, sit vero aut quo repellat distinctio labore cum fugit ipsa optio, qui perspiciatis quaerat? Voluptatem nam nobis reprehenderit. Rerum tempore ex illo perspiciatis in accusantium voluptas minus harum consequuntur similique porro ut. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse magni quis dolor Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse magni quis dolor voluptas eius, adipisci quod quam non unde impedit dolore reiciendis similique nesciunt quia obcaecati eligendi.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse magni quis dolor voluptas eius, adipisci quod quam non unde impedit dolore reiciendis similique nesciunt quia. </p>
                </div>


                <h1 className='text-2xl text-start font-bold text-purple-600 mt-4'>
                    রিয়েল-লাইফ প্রজেক্ট
                </h1>
                <p className='text-black text-lg text-justify mb-4'>
                    সফটয়্যার টেস্টিং এর জন্য দরকারি টেকনোলজিগুলো নিয়ে আপনি যা কিছু জানবেন, সেগুলো ৬টি রিয়েল-লাইফ প্রজেক্টের মাধ্যমে করে দেখানো হবে। আপনি নিজেও ৬টি প্রজেক্ট করবেন।
                </p>


                <div className='bg-gray-300 rounded-lg my-10'>
                    <p className='text-black text-justify px-5 py-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse magni quis dolor voluptas eius, adipisci quod quam non unde impedit dolore reiciendis similique nesciunt quia obcaecati eligendi dignissimos. Odit maxime voluptates enim nostrum ex quaerat quas, neque, eveniet sunt, dignissimos corrupti possimus qui reprehenderit officiis cupiditate. Non amet perferendis temporibus laboriosam, sit vero aut quo repellat distinctio labore cum fugit ipsa optio, qui perspiciatis quaerat? Voluptatem nam nobis reprehenderit. Rerum tempore ex illo perspiciatis in accusantium voluptas minus harum consequuntur similique porro ut. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse magni quis dolor Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse magni quis dolor voluptas eius, adipisci quod quam non unde impedit dolore reiciendis similique nesciunt quia obcaecati eligendi.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse magni quis dolor voluptas eius, adipisci quod quam non unde impedit dolore reiciendis similique nesciunt quia. </p>
                </div>


                <h1 className='text-2xl text-start font-bold text-purple-600 mt-4'>
                    রিয়েল-লাইফ প্রজেক্ট
                </h1>
                <p className='text-black text-lg text-justify mb-4'>
                    সফটয়্যার টেস্টিং এর জন্য দরকারি টেকনোলজিগুলো নিয়ে আপনি যা কিছু জানবেন, সেগুলো ৬টি রিয়েল-লাইফ প্রজেক্টের মাধ্যমে করে দেখানো হবে। আপনি নিজেও ৬টি প্রজেক্ট করবেন।
                </p>


                <h1 className='text-2xl text-start font-bold text-purple-600 mt-4'>
                    রিয়েল-লাইফ প্রজেক্ট
                </h1>
                <p className='text-black text-lg text-justify mb-4'>
                    সফটয়্যার টেস্টিং এর জন্য দরকারি টেকনোলজিগুলো নিয়ে আপনি যা কিছু জানবেন, সেগুলো ৬টি রিয়েল-লাইফ প্রজেক্টের মাধ্যমে করে দেখানো হবে। আপনি নিজেও ৬টি প্রজেক্ট করবেন।
                </p>




                <div className='mt-8'>

                    <div className='w-full mx-auto'>

                        <div className='bg-gradient-to-r from-gray-700 to-blue-900 mx-auto rounded-lg py-4 lg:px-3 md:px-3 px-0 lg:mb-0 mb-8'>

                            <div onClick={handleQuestion1} className='flex justify-between items-center my-3 px-4  cursor-pointer'>
                                <div className='flex items-center gap-x-3'>
                                    <div className="avatar mx-auto  ">
                                        <div className="md:w-12 w-10 rounded-full bg-orange-500">
                                            <BsCalendar3 className='md:text-3xl text-2xl mx-auto text-center md:mt-2 mt-2'></BsCalendar3>
                                        </div>
                                    </div>
                                    <h1 className='md:text-xl text-[13px] font-semibold text-gray-200 '>How long do study abroad programs take?</h1>
                                </div>
                                {
                                    !moreServiceIcon1 ?
                                        <MdKeyboardDoubleArrowDown onClick={handleQuestion1} className=' font-bold md:text-4xl text-3xl text-white'></MdKeyboardDoubleArrowDown>
                                        :
                                        <MdKeyboardDoubleArrowUp onClick={handleQuestion1} className='font-bold md:text-4xl text-3xl text-white'></MdKeyboardDoubleArrowUp>
                                }
                            </div>

                            {
                                question1 &&
                                <div>
                                    <p onClick={handleQuestion1} className='text-justify text-gray-200 cursor-pointer mb-4 md:px-10 px-4'>
                                        The length of time you spend studying abroad will depend on the program and level of degree you’re undertaking. Generally, an undergraduate degree will take three or four years of full-time study (for example, in the UK the typical length for most subjects is three years, while in the US the norm is four), while a graduate degree such as a master’s degree or equivalent will take one or two years. A doctoral (PhD) program will usually take three to four years
                                    </p>
                                </div>
                            }
                            <hr className='text-white md:mx-8 mx-6' />



                            <div onClick={handleQuestion2} className='flex justify-between items-center my-3 px-4 cursor-pointer'>
                                <div className='flex items-center gap-x-3'>
                                    <div className="avatar mx-auto  ">
                                        <div className="md:w-12 w-10 rounded-full bg-orange-500">
                                            <GrLanguage className='md:text-3xl text-2xl mx-auto text-center md:mt-2 mt-2'></GrLanguage>
                                        </div>
                                    </div>
                                    <h1 className='md:text-xl text-[13px] font-semibold text-gray-200 '>Do I have to speak a second language to study abroad?</h1>
                                </div>
                                {
                                    !moreServiceIcon2 ?
                                        <MdKeyboardDoubleArrowDown onClick={handleQuestion2} className=' font-bold md:text-4xl text-3xl text-white'></MdKeyboardDoubleArrowDown>
                                        :
                                        <MdKeyboardDoubleArrowUp onClick={handleQuestion2} className='font-bold md:text-4xl text-3xl text-white'></MdKeyboardDoubleArrowUp>
                                }
                            </div>
                            {
                                question2 &&
                                <div>
                                    <p onClick={handleQuestion2} className='text-justify text-gray-200 cursor-pointer mb-4 md:px-10 px-4'>
                                        This depends on the country you wish to study in, and the language your course will be taught in. If you’re not a native English speaker but wish to study a course taught in English, you will have to prove you can speak the language to a fairly high level, by providing English-language test results. This is to ensure you will be able to follow your course without any comprehension problems.
                                        <br></br>
                                        English is also used as a language of instruction in a number of other countries worldwide, particularly for graduate programs and business degrees. English-taught courses will be advertised on the university’s website and can sometimes be searched for using a centralized database run by a national agency.
                                    </p>
                                </div>
                            }
                            <hr className='text-white md:mx-8 mx-6' />


                            <div onClick={handleQuestion3} className='flex justify-between items-center my-3 px-4 cursor-pointer'>
                                <div className='flex items-center gap-x-3'>
                                    <div className="avatar mx-auto  ">
                                        <div className="md:w-12 w-10 rounded-full bg-orange-500">
                                            <GiMoneyStack className='md:text-[32px] text-2xl mx-auto text-center  md:mt-2 mt-2 font-bold'></GiMoneyStack>
                                        </div>
                                    </div>
                                    <h1 className='md:text-xl text-[13px] font-semibold text-gray-200 '>How much does it cost to study abroad?</h1>
                                </div>
                                {
                                    !moreServiceIcon3 ?
                                        <MdKeyboardDoubleArrowDown onClick={handleQuestion3} className='font-bold md:text-4xl text-3xl text-white'></MdKeyboardDoubleArrowDown>
                                        :
                                        <MdKeyboardDoubleArrowUp onClick={handleQuestion3} className='font-bold md:text-4xl text-3xl text-white'></MdKeyboardDoubleArrowUp>
                                }
                            </div>
                            {
                                question3 &&
                                <div>
                                    <p onClick={handleQuestion3} className='text-justify text-gray-200 cursor-pointer mb-4 md:px-10 px-4'>
                                        To work out the cost of studying abroad, you need to consider the average tuition fees for international students in your chosen country, as well as the cost of living. As a point of reference, the average tuition fees for international students studying in the UK start at £10,000 (~US$14,200) a year, with an additional £12,180 (~US$17,300) per year needed to cover living costs (with more needed if you study in London). In the US, the average yearly tuition fee is US$25,620 at public universities and $34,740 at private universities with an additional recommended budget of at least $10,800 to cover your living costs
                                    </p>
                                </div>
                            }



                            <hr className='text-white md:mx-8 mx-6' />
                            <div onClick={handleQuestion4} className='flex justify-between items-center my-3 px-4 cursor-pointer'>
                                <div className='flex items-center gap-x-3'>
                                    <div className="avatar mx-auto  ">
                                        <div className="md:w-12 w-10 rounded-full bg-orange-500">
                                            <GiReceiveMoney className='md:text-3xl text-2xl mx-auto text-center md:mt-2 mt-2'></GiReceiveMoney>
                                        </div>
                                    </div>
                                    <h1 className='md:text-xl text-[13px] font-semibold text-gray-200 '>Can I get financial aid to study abroad?</h1>
                                </div>
                                {
                                    !moreServiceIcon4 ?
                                        <MdKeyboardDoubleArrowDown onClick={handleQuestion4} className='font-bold md:text-4xl text-3xl text-white'></MdKeyboardDoubleArrowDown>
                                        :
                                        <MdKeyboardDoubleArrowUp onClick={handleQuestion4} className='font-bold md:text-4xl text-3xl text-white'></MdKeyboardDoubleArrowUp>
                                }
                            </div>
                            {
                                question4 &&
                                <div>
                                    <p onClick={handleQuestion4} className='text-justify text-gray-200 cursor-pointer mb-4 md:px-10 px-4'>
                                        Although many international students may find it difficult to get a student loan to fund their studies, there are a myriad of other funding opportunities available to make studying abroad more affordable, including scholarships, fellowships, studentships, sponsorships, grants and bursaries.
                                        <br></br>
                                        Your chosen university is perhaps the best place to get funding information relevant to you, so make sure to scour the school’s website for advice or contact the school directly. This is also where information about study abroad scholarships offered by the university and other external organizations can be found, along with details regarding eligibility and how to apply.
                                    </p>
                                </div>
                            }

                        </div>

                    </div>
                </div>




                <div className='bg-gray-800 rounded-lg my-10'>
                    <p className='text-white text-justify px-5 py-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse magni quis dolor voluptas eius, adipisci quod quam non unde impedit dolore reiciendis similique nesciunt quia obcaecati eligendi dignissimos. Odit maxime voluptates enim nostrum ex quaerat quas, neque, eveniet sunt, dignissimos corrupti possimus qui reprehenderit officiis cupiditate. Non amet perferendis temporibus laboriosam, sit vero aut quo repellat distinctio labore cum fugit ipsa optio, qui perspiciatis quaerat? Voluptatem nam nobis reprehenderit. Rerum tempore ex illo perspiciatis in accusantium voluptas minus harum consequuntur similique porro ut. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse magni quis dolor Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse magni quis dolor voluptas eius, adipisci quod quam non unde impedit dolore reiciendis similique nesciunt quia obcaecati eligendi.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse magni quis dolor voluptas eius, adipisci quod quam non unde impedit dolore reiciendis similique nesciunt quia. </p>
                </div>



                <div className='bg-gray-300 rounded-lg my-10'>
                    <p className='text-black text-justify px-5 py-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse magni quis dolor voluptas eius, adipisci quod quam non unde impedit dolore reiciendis similique nesciunt quia obcaecati eligendi dignissimos. Odit maxime voluptates enim nostrum ex quaerat quas, neque, eveniet sunt, dignissimos corrupti possimus qui reprehenderit officiis cupiditate. Non amet perferendis temporibus laboriosam, sit vero aut quo repellat distinctio labore cum fugit ipsa optio, qui perspiciatis quaerat? Voluptatem nam nobis reprehenderit. Rerum tempore ex illo perspiciatis in accusantium voluptas minus harum consequuntur similique porro ut. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse magni quis dolor Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse magni quis dolor voluptas eius, adipisci quod quam non unde impedit dolore reiciendis similique nesciunt quia obcaecati eligendi.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse magni quis dolor voluptas eius, adipisci quod quam non unde impedit dolore reiciendis similique nesciunt quia. </p>
                </div>












            </div>




            <div className='lg:w-5/12 w-full mx-auto lg:px-4 px-1'>

                <div className={`bg-purple-700 rounded-lg ${isSticky ? 'sticky' : ''}`}>
                    <p className='text-white text-justify px-6 py-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse magni quis dolor voluptas eius, adipisci quod quam non unde impedit dolore reiciendis similique nesciunt quia obcaecati eligendi dignissimos. Odit maxime voluptates enim nostrum ex quaerat quas, neque, eveniet sunt, dignissimos corrupti possimus qui reprehenderit officiis cupiditate. Non amet perferendis temporibus laboriosam, sit vero aut quo repellat distinctio labore cum fugit ipsa optio, qui perspiciatis quaerat? Voluptatem nam nobis reprehenderit. Rerum tempore ex illo perspiciatis in accusantium voluptas minus harum consequuntur similique porro ut. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse magni quis dolor Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse magni quis dolor voluptas eius, adipisci quod quam non unde impedit dolore reiciendis similique nesciunt quia obcaecati eligendi.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse magni quis dolor voluptas eius, adipisci quod quam non unde impedit dolore reiciendis similique nesciunt quia. </p>
                </div>
            </div>




        </div>


        <div className='lg:px-0 md:px-6 px-2'>
            <div className='mt-40 bg-gradient-to-r from-gray-700 to-blue-800 mx-auto rounded-lg py-8 lg:px-12 md:px-8 px-3 mb-20'>

                <p className='text-justify text-white mt-4 text-lg mb-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo quaerat ex, voluptatum repudiandae tempora perspiciatis quibusdam fugit eius facere obcaecati libero quis veniam repellat id voluptates. Dolores repudiandae quod ipsum distinctio sint cum, voluptatibus eligendi perspiciatis quisquam inventore. Harum assumenda fugit corrupti culpa et cum nemo unde cupiditate recusandae deserunt, molestias nihil nobis quo voluptatibus nisi aperiam modi quam placeat earum iure, dolores in ipsa quaerat? Provident vel eos quasi velit asperiores delectus cupiditate repellat cum ea sed vitae alias numquam magni quas corporis repudiandae suscipit porro, nobis, necessitatibus illum sapiente, est in! Dolores blanditiis quod quibusdam animi, quam, aliquid minus culpa cumque eius, quaerat doloribus pariatur sunt provident velit! Veniam quod consequatur quos dolorum nobis ut repellat fugit, temporibus saepe quasi dignissimos iste nam esse commodi labore minus pariatur quibusdam, tenetur nostrum earum asperiores perspiciatis nemo deleniti ab. Suscipit minima, exercitationem, delectus at ullam consequatur nisi debitis nesciunt eos consectetur deserunt maiores ipsam dicta tempore dolorem, dolore esse maxime architecto quos placeat. Consectetur commodi rerum necessitatibus facilis, iure assumenda quis quidem cum illum enim fugiat id voluptatum quasi qui? Illum odio quos eveniet quia ea blanditiis labore? Libero porro maiores repellendus, reprehenderit et velit eaque cumque expedita maxime cum.</p>

                <p className='text-justify text-white mt-4 text-lg mb-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo quaerat ex, voluptatum repudiandae tempora perspiciatis quibusdam fugit eius facere obcaecati libero quis veniam repellat id voluptates. Dolores repudiandae quod ipsum distinctio sint cum, voluptatibus eligendi perspiciatis quisquam inventore. Harum assumenda fugit corrupti culpa et cum nemo unde cupiditate recusandae deserunt, molestias nihil nobis quo voluptatibus nisi aperiam modi quam placeat earum iure, dolores in ipsa quaerat? Provident vel eos quasi velit asperiores delectus cupiditate repellat cum ea sed vitae alias numquam magni quas corporis repudiandae suscipit porro, nobis, necessitatibus illum sapiente, est in! Dolores blanditiis quod quibusdam animi, quam, aliquid minus culpa cumque eius, quaerat doloribus pariatur sunt provident velit! Veniam quod consequatur quos dolorum nobis ut repellat fugit, temporibus saepe quasi dignissimos iste nam esse commodi labore minus pariatur quibusdam, tenetur nostrum earum asperiores perspiciatis nemo deleniti ab. Suscipit minima, exercitationem, delectus at ullam consequatur nisi debitis nesciunt eos consectetur deserunt maiores ipsam dicta tempore dolorem, dolore esse maxime architecto quos placeat. Consectetur commodi rerum necessitatibus facilis, iure assumenda quis quidem cum illum enim fugiat id voluptatum quasi qui? Illum odio quos eveniet quia ea blanditiis labore? Libero porro maiores repellendus, reprehenderit et velit eaque cumque expedita maxime cum.</p>



                <p className='text-justify text-white mt-4 text-lg mb-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo quaerat ex, voluptatum repudiandae tempora perspiciatis quibusdam fugit eius facere obcaecati libero quis veniam repellat id voluptates. Dolores repudiandae quod ipsum distinctio sint cum, voluptatibus eligendi perspiciatis quisquam inventore. Harum assumenda fugit corrupti culpa et cum nemo unde cupiditate recusandae deserunt, molestias nihil nobis quo voluptatibus nisi aperiam modi quam placeat earum iure, dolores in ipsa quaerat? Provident vel eos quasi velit asperiores delectus cupiditate repellat cum ea sed vitae alias numquam magni quas corporis repudiandae suscipit porro, nobis, necessitatibus illum sapiente, est in! Dolores blanditiis quod quibusdam animi, quam, aliquid minus culpa cumque eius, quaerat doloribus pariatur sunt provident velit! Veniam quod consequatur quos dolorum nobis ut repellat fugit, temporibus saepe quasi dignissimos iste nam esse commodi labore minus pariatur quibusdam, tenetur nostrum earum asperiores perspiciatis nemo deleniti ab. Suscipit minima, exercitationem, delectus at ullam consequatur nisi debitis nesciunt eos consectetur deserunt maiores ipsam dicta tempore dolorem, dolore esse maxime architecto quos placeat. Consectetur commodi rerum necessitatibus facilis, iure assumenda quis quidem cum illum enim fugiat id voluptatum quasi qui? Illum odio quos eveniet quia ea blanditiis labore? Libero porro maiores repellendus, reprehenderit et velit eaque cumque expedita maxime cum.</p>

            </div>
        </div>

    </div>
    );
};

export default SeventhPage;