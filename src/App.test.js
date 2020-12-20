import React from 'react';
import MainApp from "./App";
import ReactDOM from 'react-dom'
// test('renders learn react link', () => {
//   const { getByText } = render(<MainApp />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MainApp/>,div);
  ReactDOM.unmountComponentAtNode(div)
});