import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Formik, Form, Field, type FormikHelpers } from 'formik'
import { TextField, Button, Typography, IconButton, InputAdornment, Box } from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { errorText, formWrapper, LinkStyle, title } from './Auth.style'
import { ROLE } from '@/shared/const/role'
import { RoutesConf } from '@/app/core/enums/routes.enums'
import { regFormSchema } from '@/app/core/schemas'
import { selectUserRole } from '@/app/core/redux/slice/userSlice'
import { useAuthSubmit } from '@/shared/hooks/use-auth-submit'
import { LayoutWrapper } from '@/shared/ui/layoutWrapper/LayoutWrapper'

type FormData = {
  login: string
  password: string
  passcheck: string
}

export const Registration = () => {
    const navigate = useNavigate()
  const roleId = useSelector(selectUserRole)
  const { onSubmit, serverError, clearServerError } = useAuthSubmit(true)

  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  useEffect(() => {
    if (roleId === ROLE.USER) {
        navigate(`/${RoutesConf.main}`)
    }
  }, [roleId, navigate])

  const handleFormSubmit = (
    values: FormData,
    formikHelpers: FormikHelpers<FormData>,
  ) => {
    onSubmit(values, formikHelpers.resetForm)
    }
    
    const handleToAuth = () => {
        navigate(`/${RoutesConf.sign_in}`)
    }

    return (
      <LayoutWrapper> 
        <Formik
        initialValues={{ login: '', password: '', passcheck: '' }}
        validationSchema={regFormSchema}
        onSubmit={handleFormSubmit}
        validateOnChange={false}
        validateOnBlur={false}
        >
            {({ errors, touched, handleChange }) => (
                <Box sx={formWrapper}>
                    <Form>
                    <Typography sx={title}>Регистрация</Typography>

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
                        helperText={touched.password && errors.password ? errors.password : ''}
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

                    <Field
                        name="passcheck"
                        as={TextField}
                        label="Повторите пароль"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        type={showConfirmPassword ? 'text' : 'password'}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        clearServerError()
                        handleChange(e)
                        }}
                        error={Boolean(touched.passcheck && errors.passcheck)}
                        helperText={touched.passcheck && errors.passcheck ? errors.passcheck : ''}
                        InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                            <IconButton
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                edge="end"
                                aria-label="toggle confirm password visibility"
                            >
                                {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                            </InputAdornment>
                        ),
                        }}
                    />

                    {(serverError || errors.login || errors.password || errors.passcheck) && (
                        <Typography sx={errorText}>
                        {serverError || errors.login || errors.password || errors.passcheck}
                        </Typography>
                    )}

                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        fullWidth
                    >
                        Зарегистрироваться
                    </Button>
                        
                    <Box sx={LinkStyle} onClick={handleToAuth}>
                    Войти
                    </Box>
                </Form>
            </Box>
        )}
        </Formik>
      </LayoutWrapper>
  )
}
