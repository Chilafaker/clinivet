// layout/MainLayout.tsx
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';

const MainLayout = () => {
  return (
    <div className="flex h-screen bg-[#F8FAFC] text-gray-800">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header />
        <main className="p-6 overflow-y-auto bg-[#F8FAFC] min-h-screen">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;