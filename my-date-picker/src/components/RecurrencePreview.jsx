import { format } from 'date-fns';
import useRecurrenceStore from '../store/recurrenceStore';

const RecurrencePreview = () => {
  const { startDate, endDate, recurrenceType } = useRecurrenceStore();

  if (!startDate) return <p>Please select a start date to see the preview.</p>;

  const formattedStartDate = format(startDate, 'MMMM d, yyyy');
  const formattedEndDate = endDate ? format(endDate, 'MMMM d, yyyy') : 'No end date';

  return (
    <div className="mt-4">
      <h4>Recurrence Preview</h4>
      <p>Start Date: {formattedStartDate}</p>
      <p>End Date: {formattedEndDate}</p>
      <p>Recurrence: {recurrenceType}</p>
    </div>
  );
};

export default RecurrencePreview;
