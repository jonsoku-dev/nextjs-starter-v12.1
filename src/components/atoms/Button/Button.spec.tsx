import { render, screen } from '@testing-library/react'
import React from 'react'
import { ThemeProvider } from 'styled-components'

import Button from '@/components/atoms/Button'
import { defaultTheme } from '@/lib/styles/theme'

it('버튼을 렌더링 해야한다.', () => {
  render(
    <ThemeProvider theme={defaultTheme}>
      <Button />
    </ThemeProvider>
  )
  const element = screen.getByText(/Button/)
  expect(element).toBeInTheDocument()
})
