import Sider from '@/components/Sider';
import {ReactNode} from 'react';
import Contact from '@/components/Contact';

export default function AppLayout({children}: {children: ReactNode}) {
  return <div className={'flex flex-row lg:container mx-auto h-full min-h-[1000px] gap-0 lg:gap-4 xl:gap-8'}>
    <Sider/>
    <div className={'flex-1 md:border-l lg:border-r bg-neutral-100 h-full overflow-auto'}>
      {children}
    </div>
    <Contact/>
  </div>
}
