import { mockCurrencyChart } from '@/app/core/api/mocks/mockCurrencyChart';
import { useTheme } from '@mui/material/styles';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';

type Props = {
  currencyId: string;
};

export const CurrencyChart = ({ currencyId }: Props) => {
    const theme = useTheme();
    const data = mockCurrencyChart[currencyId as keyof typeof mockCurrencyChart];

    if (!data) {
        return <p>Нет данных для отображения</p>;
    }

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="date" />
        <YAxis domain={['auto', 'auto']} />
        <Tooltip />
        <Line type="monotone" dataKey="value" stroke={theme.palette.secondary.light} strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  );
};