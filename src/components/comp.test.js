import {render, screen} from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';
import {BrowserRouter} from 'react-router-dom';
import Edit from "./Edit";
import Newuser from "./Newuser";
import { Provider } from 'react-redux';
import store from "../redux/store"
test("user input",()=>{
    render(<Provider store={store}><Edit/></Provider>, {wrapper: BrowserRouter});
    const unerInputEl= screen.getByPlaceholderText("name");
    expect(unerInputEl).toBeInTheDocument()
})
test("user input",()=>{
    render(<Provider store={store}><Edit/></Provider>, {wrapper: BrowserRouter});
    const unerInputEl= screen.getByPlaceholderText("phone");
    expect(unerInputEl).toBeInTheDocument()
})
test("user input",()=>{
    render(<Provider store={store}><Edit/></Provider>, {wrapper: BrowserRouter});
    const unerInputEl= screen.getByPlaceholderText("email");
    expect(unerInputEl).toBeInTheDocument()
})
test("user input",()=>{
    render(<Provider store={store}><Edit/></Provider>, {wrapper: BrowserRouter});
    const unerInputEl= screen.getByPlaceholderText("Address");
    expect(unerInputEl).toBeInTheDocument()
})

test("user input",()=>{
    render(<Provider store={store}><Newuser/></Provider>, {wrapper: BrowserRouter});
    const unerInputEl= screen.getByPlaceholderText("name");
    expect(unerInputEl).toBeInTheDocument()
})
test("user input",()=>{
    render(<Provider store={store}><Newuser/></Provider>, {wrapper: BrowserRouter});
    const unerInputEl= screen.getByPlaceholderText("phone");
    expect(unerInputEl).toBeInTheDocument()
})
test("user input",()=>{
    render(<Provider store={store}><Newuser/></Provider>, {wrapper: BrowserRouter});
    const unerInputEl= screen.getByPlaceholderText("email");
    expect(unerInputEl).toBeInTheDocument()
})
test("user input",()=>{
    render(<Provider store={store}><Newuser/></Provider>, {wrapper: BrowserRouter});
    const unerInputEl= screen.getByPlaceholderText("Address");
    expect(unerInputEl).toBeInTheDocument()
})
