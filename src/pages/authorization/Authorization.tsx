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
import { errorText, formWrapper, submitButton, title } from './Authorization.style'
import { authFormSchema } from '@/app/core/schemas'
import { useAuthSubmit } from '@/shared/hooks/UseAuthSubmit'
import { selectUserRole } from '@/app/core/redux/slice.ts/user-slice'
import { RoutesConf } from '@/app/core/enums/routes.enums'
import { ROLE } from '@/shared/const/role'

// json-server --watch src/db.json --port 3000

type FormData = {
  login: string
  password: string
}

export const Authorization = () => {
  const navigate = useNavigate()
  const roleId = useSelector(selectUserRole)
  const { onSubmit, serverError, clearServerError } = useAuthSubmit(false)

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

            {(serverError || errors.login || errors.password) && (
              <Typography sx={errorText}>
                {serverError || errors.login || errors.password}
              </Typography>
            )}

            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={submitButton}
            >
              Войти
            </Button>
          </Form>
        </Box>
      )}
    </Formik>
  )
}
