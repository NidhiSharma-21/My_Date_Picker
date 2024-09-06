import { useState } from 'react';
import useRecurrenceStore from '../store/recurrenceStore';

const recurrenceOptions = ['Daily', 'Weekly', 'Monthly', 'Yearly'];

const RecurrenceOptions = () => {
  const { setRecurrenceType } = useRecurrenceStore();
  const [selectedOption, setSelectedOption] = useState('none');

  const handleChange = (event) => {
    const value = event.target.value;
    setSelectedOption(value);
    setRecurrenceType(value);
  };

  return (
    <div>
      <h3>Recurrence Options</h3>
      <select className="border p-2 rounded" value={selectedOption} onChange={handleChange}>
        <option value="none">None</option>
        {recurrenceOptions.map((option) => (
          <option key={option} value={option.toLowerCase()}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default RecurrenceOptions;
