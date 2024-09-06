import React from 'react';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import useRecurrenceStore from '../store/recurrenceStore';

const DatePicker = () => {
  const { startDate, endDate, setStartDate, setEndDate } = useRecurrenceStore();

  return (
    <div className="flex space-x-4">
      <div>
        <label>Start Date</label>
        <ReactDatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          className="border p-2 rounded"
        />
      </div>
      <div>
        <label>End Date (Optional)</label>
        <ReactDatePicker
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          className="border p-2 rounded"
        />
      </div>
    </div>
  );
};

export default DatePicker;
