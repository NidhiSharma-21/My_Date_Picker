import RecurrenceOptions from '../components/RecurrenceOptions';
import DatePicker from '../components/DatePicker';
import RecurrencePreview from '../components/RecurrencePreview';

const Home = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Recurring Date Picker</h1>
      <DatePicker />
      <RecurrenceOptions />
      <RecurrencePreview />
    </div>
  );
};

export default Home;
