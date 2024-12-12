"use client";
import {FiHome, FiSend, FiUser} from 'react-icons/fi';
import {AppConfig} from '@/config/app.config';
import {IconButton} from '@/components/SiderIconButton';


export default function Sider() {
  return <div className={'flex-col justify-between md:items-start px-4 hidden md:flex xl:w-[240px] py-6'}>
    <div className={'flex flex-col gap-6'}>
      <div className={''}>
        <div
          className={'text-[20px] w-[32px] h-[32px] bg-neutral-100 rounded-full flex justify-center items-center text-neutral-400 cursor-pointer transition-all duration-300 hover:text-white hover:bg-primary'}>
          <FiUser/>
        </div>
      </div>
      <IconButton
        icon={FiHome}
        label={'Home'}
      />
      <IconButton
        icon={FiSend}
        label={'Contact me'}
      />
    </div>
    <div className={'flex flex-col gap-2'}>
      {AppConfig.socialLinks.map((social, index) => (
        <IconButton
          key={social.name + index}
          icon={social.icon}
          label={social.name}
          onClick={() => window.open(social.url, '_blank')}
        />
      ))}
    </div>
  </div>;
}
