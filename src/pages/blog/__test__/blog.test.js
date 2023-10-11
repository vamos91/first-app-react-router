import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Blog from '../Blog'
import { BrowserRouter } from 'react-router-dom'

describe('Testing blog component', () => {
    beforeEach(() => {
        render(<BrowserRouter><Blog /></BrowserRouter>)
    })

    it('Should display data loaded', async () => {
        expect(screen.queryByText(/...loading data/i)).not.toBeInTheDocument()
        userEvent.click(screen.getByText(/Get post/i)) 
        expect(screen.getByText(/...loading data/i)).toBeInTheDocument()
        expect(await screen.findByText(/data loaded/i)).toBeInTheDocument()
        screen.debug()
    })
})