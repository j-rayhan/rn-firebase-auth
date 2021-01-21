export default interface Expense {
  id: string;
  description: string;
  name: string;
  amount: number;
  createdAt: string;
};

export const expenses: Expense[] = [
  {
    id: '1',
    description: 'expense 1',
    name: 'Apple',
    amount: 12,
    createdAt: '12-01-2021',
  },
  {
    id: '2',
    description: 'expense 2',
    name: 'Orange',
    amount: 10,
    createdAt: '12-01-2021',
  },
  {
    id: '3',
    description: 'expense 3',
    name: 'Mango',
    amount: 32,
    createdAt: '13-01-2021',
  },
  {
    id: '4',
    description: 'expense 4',
    name: 'Banana',
    amount: 14,
    createdAt: '12-04-2021',
  },
];
