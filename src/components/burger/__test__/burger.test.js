import {render, screen} from '@testing-library/react'
import Burger from '../Burger'
import userEvent from '@testing-library/user-event'

describe('Should display heading', () => {

    beforeEach(() => {
        render(<Burger />)
    })

    it('Should display heading', () => {
        const title = screen.getByText('My burger')
        expect(title).toBeInTheDocument()
    })

    it('Should display props', () => {
        render(<Burger burgerName="mon super burger" />)
        const myProps = screen.getByText(/mon super burger/i)
        expect(myProps).toBeInTheDocument()
    })

    it('Should display Like 1', () => {
        expect(screen.queryByText(/Like 1/)).not.toBeInTheDocument() 
        const button = screen.getByText(/Like/i)
        userEvent.click(button)
        expect(screen.getByText(/Like 1/i)).toBeInTheDocument()
        userEvent.click(button)
        expect(screen.getByText(/Like 2/i)).toBeInTheDocument()
        //screen.getByText(/Like/i)
    })
})