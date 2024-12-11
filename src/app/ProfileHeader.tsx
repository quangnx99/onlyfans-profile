import {AppConfig} from '@/config/app.config';
import {FiShare} from 'react-icons/fi';

export default function ProfileHeader() {
  return <div className={'bg-white border-b'}>
    <div
      className={'h-[200px] bg-cover bg-center'}
      style={{
        backgroundImage: `url(https://images.pexels.com/photos/1287075/pexels-photo-1287075.jpeg?cs=srgb&dl=pexels-eberhardgross-1287075.jpg&fm=jpg)`,
      }}
    >
      <div className="bg-gradient-to-b from-black/60 to-transparent h-[80%] w-full text-white p-4">
        <div className={'font-semibold'}>
          Anh Nhan Nguyen
        </div>
        <div className={'text-[12px]'}>
          3 Posts, 25K Views
        </div>
      </div>
    </div>
    <div className={'flex flex-row justify-between px-4'}>
      <div
        className={'overflow-hidden rounded-full w-[100px] h-[100px] bg-cover bg-center border-2 border-white -mt-[32px]'}
        style={{
          backgroundImage: `url('https://scontent.fhan17-1.fna.fbcdn.net/v/t39.30808-6/359380759_130658296733088_620083027186730739_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEmQrRrwSPEUl-ebBfkdaun7cKrLIRnUartwqsshGdRqqU486pEAYlyWSijP97ZiPDcHio5uc54V3eN5OyPNGx3&_nc_ohc=42nSSm2JqLkQ7kNvgEn3SFg&_nc_zt=23&_nc_ht=scontent.fhan17-1.fna&_nc_gid=AmMJ1TjslGeMr62dSiOI25O&oh=00_AYCjmxYSMiWOEQXviygzJZ9d1pcaerYWWUuXd0oIHDo6LQ&oe=675F1E19')`
        }}
      />
      <div className={'pt-4'}>
        <div className={'border border-neutral-200 w-12 h-12 rounded-full flex justify-center items-center'}>
          <FiShare width='24px'/>
        </div>
      </div>
    </div>
    <div className={'p-4'}>
      <div className={'text-[20px] font-semibold'}>
        {AppConfig.name}
      </div>
      <div className={'flex flex-row text-neutral-500 gap-1 items-center'}>
        <div className={'text-[12px]'}>
          @{AppConfig.username}
        </div>
        <div>
          •
        </div>
        <div className={'text-[12px]'}>
          Available to work <span className={'underline'}>remotely</span>
        </div>
      </div>
      <div className={'text-[14px] mt-1 flex flex-col gap-0.5'}>
        <p className={'leading-relaxed whitespace-pre-wrap line-clamp-3'}>
          {AppConfig.introduction}
        </p>
        <div className={'text-primary font-medium text-[12px] cursor-pointer mt-2'}>
          More info
        </div>
      </div>
    </div>
  </div>
}
