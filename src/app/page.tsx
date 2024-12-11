import AppLayout from '@/components/AppLayout';
import ProfileHeader from '@/app/ProfileHeader';
import ProfileSubscriptions from '@/app/ProfileSubscriptions';
import ProfileContents from '@/app/ProfileContents';

export default function Home() {
  return (
    <AppLayout>
      <ProfileHeader/>
      <ProfileSubscriptions/>
      <ProfileContents/>
    </AppLayout>
  );
}
