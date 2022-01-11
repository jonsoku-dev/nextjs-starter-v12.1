import { render, screen } from '@testing-library/react'
import React from 'react'
import { ThemeProvider } from 'styled-components'

import { defaultTheme } from '../../../lib/styles/theme'
import Button from './index'

it('버튼을 렌더링 해야한다.', () => {
  render(
    <ThemeProvider theme={defaultTheme}>
      <Button />
    </ThemeProvider>
  )
  const element = screen.getByText(/Button/)
  expect(element).toBeInTheDocument()
})
