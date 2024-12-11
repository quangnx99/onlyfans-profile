'use client';
import {useState} from 'react';
import {cn} from '@/utils/cn';
import ProfileProjects from '@/app/ProfileProjects';

const tabs = [{
  key: 'posts',
  label: 'Posts',
  content: <></>
}, {
  key: 'projects',
  label: 'Projects',
  content: <ProfileProjects/>
}];

export default function ProfileContents() {
  const [activeTab, setActiveTab] = useState<string>('posts');
  return <div className={'bg-white border-t'}>
    <div className={'flex flex-row text-[14px] font-medium'}>
      {tabs.map(tab => (
        <div
          className={cn(
            'flex-1 py-4 text-center border-b text-neutral-400 uppercase font-semibold cursor-pointer hover:text-black',
            tab.key === activeTab && 'border-b-2 border-black text-black'
          )} key={tab.key}
          onClick={() => setActiveTab(tab.key)}
        >
          {tab.label}
        </div>
      ))}
    </div>
    <div className={'bg-neutral-100'}>
      {tabs.map(tab => (
        <div key={tab.key} className={cn(
          tab.key === activeTab ? 'block' : 'hidden',
        )}>
          {tab.content}
        </div>
      ))}
    </div>
  </div>;
}
