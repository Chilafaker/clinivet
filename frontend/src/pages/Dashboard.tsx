// pages/Dashboard.tsx
import StatCard from '../components/StatCard';
import CalendarMini from '../components/CalendarMini';
import FabQuickActions from '../components/FabQuickActions';

const Dashboard = () => {
  return (
    <div className="space-y-6 px-4 md:px-8 py-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Hola, Itzel 👋</h2>
          <p className="text-sm text-gray-500 mt-1">Hoy tienes 7 citas y 3 seguimientos pendientes.</p>
        </div>
        <div className="w-10 h-10 rounded-full overflow-hidden">
          <img src="https://i.pravatar.cc/100" alt="avatar" className="w-full h-full object-cover" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <StatCard title="Citas del día" value="7" icon="calendar" />
        <StatCard title="Ingresos de hoy" value="$1,250" icon="dollar-sign" />
        <StatCard title="Vacunas próximas" value="3" icon="syringe" />
        <StatCard title="Pacientes activos" value="120" icon="paw-print" />
      </div>

      <div className="flex justify-center">
        <div className="bg-white rounded-xl shadow p-6 w-full md:w-[500px]">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Calendario</h3>
          <CalendarMini />
        </div>
      </div>

      <FabQuickActions />
    </div>
  );
};

export default Dashboard;
