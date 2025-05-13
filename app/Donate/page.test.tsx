import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Donate from './page'
import userEvent, { UserEvent } from '@testing-library/user-event'

let user: UserEvent;
describe("Donate",()=>{
    beforeAll(() => {
        user = userEvent.setup()
    })
    it("renders", ()=>{
        render(<Donate/>)
        expect(screen.getByText("LYFF Champions - Donate Today")).toBeInTheDocument()
    })
    it("has a donate button", () => {
        render(<Donate/>)
        expect(screen.getByRole("button", { name: /donate online/i })).toBeInTheDocument()
    })
    it("donate button should route to the paypal donation page", async () => {
        render(<Donate />)
        const donateButton = screen.getByRole("link", { name: /donate online/i })
        await user.click(donateButton)
        expect(donateButton).toHaveAttribute("href", "https://www.paypal.com/donate/?hosted_button_id=T2623JGCVG4YW")
    })
    it("renders", ()=>{
        render(<Donate/>)
        expect(screen.getByText("Mail in your Donation")).toBeInTheDocument()
    })
})
