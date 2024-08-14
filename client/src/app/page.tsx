import clsx from 'clsx';
import { Fragment } from 'react';
import { calibreFont, SFmono } from '~/fonts/font.config';
import Button from '~/components/Button/Button';
import { FiDownload } from 'react-icons/fi';
import AsideSocial from '~/components/Social/AsideSocial';
import { FaGithub, FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa';
import Social from '~/components/Social/Social';

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
            specializing in building exceptional digital experiences. Currently, i'm <span className="hidden xl:inline-block">focused on building product and</span> based in Ho Chi Minh City (HCMC),
            Viet Nam 📍.
          </p>
          {/* Social icons */}
          <div className="xl:hidden">
            <Social />
          </div>
          {/* download button */}
          <Button className="text-secondary items-baseline leading-[28px] mt-5 xl:w-fit">
            <span className="font-SFmono text-sm">check out my cv/portfolio</span>
            <FiDownload className="inline-block text-xl ml-2" />
          </Button>
        </div>
      </section>

      {/* About */}
      <section></section>
    </>
  );
}
