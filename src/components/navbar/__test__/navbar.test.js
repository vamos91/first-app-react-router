import {render, screen} from '@testing-library/react'
import NavigationBar from '../NavigationBar'
import { BrowserRouter } from 'react-router-dom'
import userEvent from '@testing-library/user-event'

describe('Testing navbar component', () => {
    beforeEach(() => {
        render(<BrowserRouter><NavigationBar /></BrowserRouter>)
    })
    
    it('Should display light button', () => {
        expect(screen.getByText(/dark/i)).toBeInTheDocument()
        const button = screen.getByRole('theme-button')
        userEvent.click((button))
        expect(screen.getByText(/light/i)).toBeInTheDocument()
    })
})