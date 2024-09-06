import create from 'zustand';

const useRecurrenceStore = create((set) => ({
  startDate: null,
  endDate: null,
  recurrenceType: 'none', // daily, weekly, monthly, yearly
  customRecurrence: { everyX: 1, specificDays: [], nthDay: null },
  
  setStartDate: (date) => set({ startDate: date }),
  setEndDate: (date) => set({ endDate: date }),
  setRecurrenceType: (type) => set({ recurrenceType: type }),
  setCustomRecurrence: (recurrence) => set({ customRecurrence: recurrence }),
}));
  
export default useRecurrenceStore;
