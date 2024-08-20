/* eslint-disable react/no-unescaped-entities */
import clsx from 'clsx';
import { calibreFont, SFmono } from '~/fonts/font.config';
import Button from '~/components/Button/Button';
import { FiDownload } from 'react-icons/fi';
import AsideSocial from '~/components/Social/AsideSocial';
import { SocialList } from '~/components/Social';
import { cn } from '~/lib/utils';
import Image from 'next/image';
import Photo from '~/components/Photo/Photo';

export default function Home() {
  return (
    <>
      {/* Intro */}
      <div className="hidden xl:block">
        <AsideSocial />
      </div>
      <section className={clsx(calibreFont.variable, 'h-screen grid place-items-center', 'xl:ml-[100px]')}>
        <div className={clsx('font-calibre container ', 'flex flex-col items-center gap-4', 'xl:block xl:ml-[100px]')}>
          <span className={clsx(SFmono.variable, 'font-SFmono text-secondary')}>Hi, my name is</span>
          <h1 className={clsx('font-[600] text-third text-[40px] text-center', 'xl:text-[80px] xl:text-left')}>
            Le Xuan Bach, <br />
            <span className="text-four block leading-tight">I build things for the web.</span>
          </h1>
          <p className={clsx('font-calibre text-four text-xl mt-[12px] text-center', 'xl:w-[540px] xl:text-left')}>
            I’m a <span className="text-secondary">passionate software engineer </span>
            specializing in building exceptional digital experiences. Currently, i'm{' '}
            <span className="hidden xl:inline-block">focused on building product and</span> based in Ho Chi Minh City (HCMC), Viet Nam 📍.
          </p>
          {/* Social icons */}
          <div className="xl:hidden">
            <SocialList />
          </div>
          {/* download button */}
          <Button className="text-secondary items-baseline leading-[28px] mt-5 xl:w-fit">
            <span className="font-SFmono text-sm">check out my cv/portfolio</span>
            <FiDownload className="inline-block text-xl ml-2" />
          </Button>
        </div>
      </section>

      {/* About */}
      <section id="about" className={cn(calibreFont.variable, 'h-screen w-screen')}>
        <div className="container mx-auto px-[100px]">
          <h1 className="home-title font-calibre text-[32px] font-[600] text-third">About me</h1>
          <div className="flex mt-[50px]">
            <div className="flex-1 xl:max-w-[550px]">
              <p className="font-calibre text-[22px] text-four mb-[15px] leading-[32px]">
                Hello! My name is Bach, you can call me Bale. I enjoy creating things that live on the internet. My interest in web
                development started back in 2020 when I decided to try creating something that make a valuable product for society.
              </p>

              <p className="font-calibre text-[22px] text-four mb-[15px] leading-[32px]">
                Fast-forward to today, I'm a dedicated student currently enrolled at the Ho Chi Minh City University of Technology and
                Education (HCMUTE). My academic journey at HCMUTE has been a remarkable experience filled with learning, growth, and
                exciting challenges. As I pursue my education in this esteemed institution, I am passionate about Information and Technology
                and continually strive to expand my knowledge and contribute to my field. I look forward to sharing my academic and personal
                experiences with you as I continue on this educational adventure at HCMUTE.
              </p>

              <p className="font-calibre text-[22px] text-four mb-[15px] leading-[32px]">
                Here are a few technologies I’ve been working with recently:
              </p>

              <div>
                <ul className="font-SFmono text-[14px] text-four mb-[15px] leading-[32px] grid grid-cols-2">
                  <li className='before:content-["▹"] before:text-secondary before:text-[16px] before:mr-[12px]'>JavaScript (ES6+)</li>
                  <li className='before:content-["▹"] before:text-secondary before:text-[16px] before:mr-[12px]'>Typescript</li>
                  <li className='before:content-["▹"] before:text-secondary before:text-[16px] before:mr-[12px]'>React (Next.js)</li>
                  <li className='before:content-["▹"] before:text-secondary before:text-[16px] before:mr-[12px]'>
                    Node.js (Express, Nest.js)
                  </li>
                  <li className='before:content-["▹"] before:text-secondary before:text-[16px] before:mr-[12px]'>MongoDB</li>
                  <li className='before:content-["▹"] before:text-secondary before:text-[16px] before:mr-[12px]'>PostgreSQL</li>
                  <li className='before:content-["▹"] before:text-secondary before:text-[16px] before:mr-[12px]'>CI/CD (Jenkins)</li>
                  <li className='before:content-["▹"] before:text-secondary before:text-[16px] before:mr-[12px]'>C# .NET</li>
                </ul>
              </div>
            </div>
            <div className="ml-[64px]">
              <Photo />
            </div>
          </div>

          <div></div>
        </div>
      </section>

      {/* Working */}
      <section id="working"></section>
    </>
  );
}
