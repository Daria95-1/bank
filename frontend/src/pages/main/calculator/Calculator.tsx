import {
  Box,
  Typography,
  ToggleButtonGroup,
  ToggleButton,
  Slider,
  TextField,
  Button,
} from '@mui/material'
import { useState, useMemo } from 'react'
import {
  Container,
  Title,
  SliderLabel,
  SliderStyle,
  TermToggleGroup,
  ResultBlock,
  FinalAmount,
  FormBlock,
  SubmitButton,
  FirstBlock,
  SecondBlock,
  LimitStyle,
} from './Calculator.style'
import { termOptions } from './const/const'

const formatNumber = (value: number) =>
  new Intl.NumberFormat('ru-RU').format(value)

const INTEREST_RATE = 0.16

export const Calculator = () => {
  const [amount, setAmount] = useState(10_000)
  const [months, setMonths] = useState(12)
  const [fullName, setFullName] = useState('Иванов Иван Иванович')
  const [phone, setPhone] = useState('')

  const finalAmount = useMemo(
    () => Math.floor(amount * (1 + INTEREST_RATE * (months / 12))),
    [amount, months]
  )

  const income = finalAmount - amount

  return (
      <Box sx={Container}>
          <Box sx={FirstBlock}>
            <Typography variant="h4" sx={Title}>Калькулятор</Typography>

            <Typography sx={SliderLabel}>Сумма вклада</Typography>
            <Slider
                value={amount}
                onChange={(_, val) => typeof val === 'number' && setAmount(val)}
                min={10000}
                max={999000000}
                step={10000}
                valueLabelDisplay="auto"
                sx={SliderStyle}
            />
            
            <Box sx={LimitStyle}>  
                <Typography sx={{fontSize: '12px'}}>от 10 000 ₽</Typography>
                <Typography sx={{fontSize: '12px'}}>до 999 000 000 ₽</Typography>
            </Box>

            <Typography gutterBottom>Срок вклада</Typography>
            <ToggleButtonGroup
                value={months}
                exclusive
                onChange={(_, val) => val && setMonths(val)}
                sx={TermToggleGroup}
            >
                {termOptions.map(({ value, label }) => (
                    <ToggleButton key={value} value={value}>
                    {label}
                    </ToggleButton>
                ))}
            </ToggleButtonGroup>
            <Box>
                Ставка увеличивается: на +4% при сроке 3 года, на +2% при сроке 2 года и на +1% при других сроках — при условии оформления карты Momentum и подключения персональной подписки в течение 14 дней с открытия вклада, непрерывной подписки и отсутствия просрочек. Максимальная сумма вкладов — до 1,5 млн ₽.
            </Box>
        </Box>
          
        <Box sx={SecondBlock}>
            <Box sx={ResultBlock}>
                <Typography variant="h6">Сумма в конце срока</Typography>
                <Typography sx={FinalAmount}>{formatNumber(finalAmount)} ₽</Typography>
                <Typography mt={2}>Процентная ставка: <strong>16%</strong></Typography>
                <Typography>Доход по вкладу: {formatNumber(income)} ₽</Typography>
            </Box>

            <Box sx={FormBlock}>
                <TextField
                label="Телефон"
                placeholder="+7 (___) ___-__-__"
                value={phone}
                onChange={e => setPhone(e.target.value)}
                />

                <TextField
                label="Фамилия Имя Отчество"
                value={fullName}
                onChange={e => setFullName(e.target.value)}
                />

                <Button
                    variant="contained"
                    disabled={!phone || !fullName}
                    sx={SubmitButton}
                >
                    Отправить заявку
                </Button>
            </Box>
        </Box>

    </Box>
  )
}
