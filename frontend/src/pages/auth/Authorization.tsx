import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Formik, Form, Field, type FormikHelpers } from 'formik'
import {
  TextField,
  Button,
  Typography,
  IconButton,
  InputAdornment,
  Box,
} from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { formWrapper, LinkStyle, title } from './Auth.style'
import { authFormSchema } from '@/app/core/schemas'
import { RoutesConf } from '@/app/core/enums/routes.enums'
import { ROLE } from '@/shared/const/role'
import { selectUserRole } from '@/app/core/redux/slice/userSlice'
import { useAuthSubmit } from '@/shared/hooks/use-auth-submit'

// json-server --watch src/db.json --port 3000

type FormData = {
  login: string
  password: string
}

export const Authorization = () => {
  const navigate = useNavigate()
  const roleId = useSelector(selectUserRole)
  const { onSubmit, clearServerError } = useAuthSubmit(false)

  const [showPassword, setShowPassword] = useState(false)

  useEffect(() => {
    if (roleId !== ROLE.GUEST) {
      navigate(`/${RoutesConf.main}`, { replace: true })
    }
  }, [roleId, navigate])

  const handleFormSubmit = (
    values: FormData,
    formikHelpers: FormikHelpers<FormData>
  ) => {
    onSubmit(values, formikHelpers.resetForm)
  }

  const handleToReg = () => {
    navigate(`/${RoutesConf.sign_up}`)
  }

  return (
    <Formik
      initialValues={{ login: '', password: '' }}
      validationSchema={authFormSchema}
      onSubmit={handleFormSubmit}
      validateOnChange={false}
      validateOnBlur={false}
    >
      {({ errors, touched, handleChange }) => (
        <Box sx={formWrapper}>
          <Form>
            <Typography sx={title}>Вход</Typography>

            <Field
              name="login"
              as={TextField}
              label="Логин"
              variant="outlined"
              fullWidth
              margin="normal"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                clearServerError()
                handleChange(e)
              }}
              error={Boolean(touched.login && errors.login)}
              helperText={touched.login && errors.login ? errors.login : ''}
            />

            <Field
              name="password"
              as={TextField}
              label="Пароль"
              variant="outlined"
              fullWidth
              margin="normal"
              type={showPassword ? 'text' : 'password'}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                clearServerError()
                handleChange(e)
              }}
              error={Boolean(touched.password && errors.password)}
              helperText={
                touched.password && errors.password ? errors.password : ''
              }
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword(!showPassword)}
                      edge="end"
                      aria-label="toggle password visibility"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
            >
              Войти
            </Button>

            <Box sx={LinkStyle} onClick={handleToReg}>
              Зарегистрироваться
            </Box>
          </Form>
        </Box>
      )}
    </Formik>
  )
}
