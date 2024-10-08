import React, { useEffect } from 'react';
import { NumberFour, NumberThree, NumberTwo,NumberOne } from '../common/Icon';
import tourismEmploy from '../../assets/images/webp/tourismEmploy.webp';
import ellipsEmploy from '../../assets/images/svg/ellipsEmployment.svg';
import empoyEllips from '../../assets/images/svg/EmployEllipsLeft.svg';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Employment = () => {
  useEffect(() => {
    gsap.fromTo(
      '.selfEmployment',
      { x: 100, opacity: 0 },
      { x: 0, opacity: 1, duration: 2, ease: 'power3.out', delay: 0.9, stagger: 0.3, scrollTrigger: { trigger: '.selfEmployment', start: 'top 100%', end: 'bottom 50%' } }
    );
    gsap.fromTo(
      '.workEmployment',
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, duration: 2, ease: 'power3.out', delay: 0.9, stagger: 0.3, scrollTrigger: { trigger: '.workEmployment', start: 'top 100%', end: 'bottom 50%' } }
    );
    gsap.fromTo(
      '.tourismEmploy',
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 2, ease: 'power3.out', scrollTrigger: { trigger: '.workEmployment', start: 'top 100%', end: 'bottom 50%' } }
    );
  }, []);
  return (
    <div className='relative'>
      <div className='container max-w-[1140px] mx-auto px-3 py-[120px] max-lg:py-20 z-30'>
        <div className='flex justify-center'>
          <div className='flex flex-col items-center text-center'>
            <h2 className='font-rubik font-semibold max-md:text-4xl text-5xl max-sm:text-2xl max-sm:leading-7 leading-[56px] text-black tourismEmploy'>
              Employment <span className='text-orange'>Regulation</span>
            </h2>
            <p className='max-w-[716px] max-sm:pt-4 max-sm:text-base max-sm:leading-5 font-lato font-normal pt-4 text-base leading-6 text-gray tourismEmploy'>
              This regulation details the conditions under which foreign nationals can work in Germany. Herbert's training in the Beschäftigungsverordnung allows for accurate guidance on:
            </p>
          </div>
        </div>
      <div className='z-30 flex justify-center lg:hidden'>
        <img className='max-w-[270px] pt-6 w-full' src={tourismEmploy} alt="tourismEmploy" />
      </div>
      <div className='flex max-lg:hidden lg:gap-[73px] max-sm:gap-6 justify-between lg:justify-center items-center pt-[56px] max-sm:pt-[50px]'>
        <div className='flex lg:justify-end'>
          <div className='flex flex-col lg:items-end lg:text-end'>
            <div className='size-[40px] bg-btnOrange rounded-full flex justify-center items-center workEmployment'>
              <NumberOne />
            </div>
            <h2 className='font-lato pt-4 font-medium text-xl leading-6 text-black max-sm:text-base workEmployment'>
              Work permit requirements
            </h2>
            <div className='mt-[56px] size-[40px] bg-btnOrange rounded-full flex justify-center items-center workEmployment'>
              <NumberTwo />
            </div>
            <h2 className='font-lato pt-4 font-medium text-xl leading-6 text-black max-sm:text-base workEmployment'>
              Job-seeking visas
            </h2>
          </div>
        </div>
        <img className='max-lg:hidden max-w-[259px] w-full tourismEmploy' src={tourismEmploy} alt="tourismEmploy" />
        <div className='flex lg:justify-start'>
          <div className='flex flex-col'>
            <div className='size-[40px] bg-btnOrange rounded-full flex justify-center items-center selfEmployment'>
              <NumberThree />
            </div>
            <h2 className='font-lato pt-4 font-medium text-xl leading-6 text-black max-sm:text-base selfEmployment'>
              Self-employment regulations
            </h2>
            <div className='mt-[56px] size-[40px] bg-btnOrange rounded-full flex justify-center items-center selfEmployment'>
              <NumberFour />
            </div>
            <h2 className='max-w-[325px] font-lato pt-4 font-medium text-xl leading-6 text-black max-sm:text-base selfEmployment'>
              Specific provisions for various professional groups
            </h2>
          </div>
        </div>
      </div>
      <div className='lg:hidden flex flex-row flex-wrap -mx-3 pt-11 z-30'>
        <div className='w-6/12 px-3'>
          <div className='flex flex-col lg:items-end lg:text-end'>
            <div className='size-[40px] bg-btnOrange max-sm:size-[30px] rounded-full flex justify-center items-center'>
              <NumberOne className="w-[5px] h-[13px]" />
            </div>
            <h2 className='font-lato pt-4 font-medium text-xl leading-6 text-black max-sm:text-base'>
              Self-employment regulations
            </h2>
          </div>
        </div>
        <div className='w-6/12 px-3'>
          <div className='flex flex-col lg:items-end lg:text-end'>
            <div className='size-[40px] bg-btnOrange max-sm:size-[30px] rounded-full flex justify-center items-center'>
              <NumberTwo className="w-[5px] h-[13px]" />
            </div>
            <h2 className='font-lato pt-4 font-medium text-xl leading-6 text-black max-sm:text-base'>
              Job-seeking visas
            </h2>
          </div>
        </div>
        <div className='w-6/12 px-3 pt-6'>
          <div className='flex flex-col lg:items-end lg:text-end'>
            <div className='size-[40px] bg-btnOrange max-sm:size-[30px] rounded-full flex justify-center items-center'>
              <NumberThree className="w-[5px] h-[13px]" />
            </div>
            <h2 className='font-lato pt-4 font-medium text-xl leading-6 text-black max-sm:text-base'>
              Self-employment regulations
            </h2>
          </div>
        </div>
        <div className='w-6/12 px-3 pt-6'>
          <div className='flex flex-col lg:items-end lg:text-end'>
            <div className='size-[40px] bg-btnOrange max-sm:size-[30px] rounded-full flex justify-center items-center'>
              <NumberFour className="w-[5px] h-[13px]" />
            </div>
            <h2 className='max-w-[325px] font-lato pt-4 font-medium text-xl leading-6 text-black max-sm:text-base'>
              Specific provisions for various professional groups
            </h2>
          </div>
        </div>
      </div>
      <img className='absolute max-lg:bottom-[10%] max-md:bottom-[0%] bottom-[-17%] w-full h-[270px] z-0 left-0' src={ellipsEmploy} alt="ellipsEmploy" />
      <img className='absolute bottom-[137px] max-lg:top-[80px] max-sm:left-[-20px] left-0 z-0' src={empoyEllips} alt="empoyEllips" />
    </div>
    </div>
  );
};

export default Employment;
