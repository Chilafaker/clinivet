import { Calendar, DollarSign, Syringe, PawPrint } from "lucide-react";

type StatCardProps = {
  title: string;
  value: string;
  icon: "calendar" | "dollar-sign" | "syringe" | "paw-print";
};

const icons: Record<StatCardProps["icon"], React.ElementType> = {
  calendar: Calendar,
  "dollar-sign": DollarSign,
  syringe: Syringe,
  "paw-print": PawPrint,
};

const StatCard = ({ title, value, icon }: StatCardProps) => {
  const Icon = icons[icon];
  if (!Icon) {
    console.error(`Ícono "${icon}" no está definido en StatCard`);
    return null;
  }

  return (
    <div className="bg-white rounded-xl shadow p-4">
      <div className="flex items-center gap-4">
        <div className="bg-blue-100 text-blue-600 p-2 rounded-full">
          <Icon className="w-5 h-5" />
        </div>
        <div>
          <p className="text-sm text-gray-500 font-medium">{title}</p>
          <p className="text-xl font-bold text-gray-800">{value}</p>
        </div>
      </div>
    </div>
  );
};

export default StatCard;
