import {FiHome, FiSend, FiUser} from 'react-icons/fi';
import {cn} from '@/lib/utils/cn';

function IconButton() {
  return <div></div>;
}

export default function Sider() {
  return <div className={'flex-col gap-6 items-center md:items-start px-4 hidden md:flex xl:w-[240px] py-6'}>
    <div className={''}>
      <div
        className={'text-[20px] w-[32px] h-[32px] bg-neutral-100 rounded-full flex justify-center items-center text-neutral-400 cursor-pointer transition-all duration-300 hover:text-white hover:bg-primary'}>
        <FiUser/>
      </div>
    </div>
    <div
      className={cn(
        'text-neutral-500 w-[40px] h-[40px] flex items-center cursor-pointer hover:text-primary hover:bg-primary/20',
        'w-full gap-4 text-[18px] font-medium'
      )}
    >
      <div className={'w-[32px]'}>
        <FiHome className={'text-[22px] mx-auto'}/>
      </div>
      <div className={'hidden lg:block'}>
        Home
      </div>
    </div>
    <div
      className={cn(
        'text-neutral-500 w-[40px] h-[40px] flex items-center cursor-pointer hover:text-primary hover:bg-primary/20',
        'w-full gap-4 text-[18px] font-medium'
      )}
    >
      <div className={'w-[32px]'}>
        <FiSend className={'text-[22px] mx-auto'}/>
      </div>
      <div className={'hidden lg:block'}>
        Contact me
      </div>
    </div>
  </div>;
}
