import React from 'react';
import { Local } from '../components/Local.js';
import { render, screen } from '@testing-library/react';

describe('Local.js', () => {
    test('displays PPP', () => {
        render(<Local country={{Country: "United States", "Date": "2016-01-01",
        "Local price": "4.93",
        "Dollar ex": "1.0",
        "Dollar price": "4.93",
        "Dollar PPP": "1.0",
        "Dollar valuation": "0.0"}} localPrice={4.93} input="12"/>);
        expect(screen.getByTestId("ppp")).toHaveTextContent('Your Dollar Purchasing Parity (PPP) is 1.0');
        expect(screen.getByTestId("local-burgers")).toHaveTextContent("You could buy 2.4340770791075053 of Big Macs in your country")
    })
})