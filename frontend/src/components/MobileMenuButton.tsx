// ✅ src/components/MobileMenuButton.tsx
import { Menu } from 'lucide-react';
import { useUIStore } from '../store/ui';

const MobileMenuButton = () => {
  const toggleSidebar = useUIStore((state) => state.toggleSidebar);

  return (
    <button onClick={toggleSidebar} className="block sm:hidden p-2">
      <Menu className="w-6 h-6 text-gray-700" />
    </button>
  );
};

export default MobileMenuButton;