// components/CalendarMini.tsx
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useState } from 'react';

const CalendarMini = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div className="bg-white rounded-xl shadow p-4">
      <h3 className="text-lg font-bold mb-2 text-gray-800">Calendario</h3>
      <Calendar onChange={setDate} value={date} />
    </div>
  );
};

export default CalendarMini;