import { mount, shallow } from 'enzyme';
// import TradeHistory, { ITradeHistory } from '../pages/tradeHistory';

// const tableData: Array<ITradeHistory> = [
//   { quantity: 123, price: 0.002, time: '2020-06-18 15:50:00' },
// ];
// const cols = [{ header: 'Quantity' }, { header: 'Price' }, { header: 'Time' }];

// describe('index page', () => {
//   it('should have App component', () => {
//     const subject = mount(<TradeHistory data={tableData} />);
//     expect(subject).toHaveLength(1);
//   });
// });

// describe('panel headers', () => {
//   it('should have 3 headers', () => {
//     const tradeHistory = shallow(<TradeHistory data={tableData} />);

//     // There should be ONLY 1 table element
//     const table = tradeHistory.find('table');
//     expect(table).toHaveLength(1);

//     // The table should have ONLY 1 thead element
//     const thead = table.find('thead');
//     expect(thead).toHaveLength(1);

//     // The number of th tags should be equal to number of columns
//     const headers = thead.find('th');
//     expect(headers).toHaveLength(cols.length);

//     // Each th tag text should equal to column header
//     headers.forEach((th, idx) => {
//       expect(th.text()).toEqual(cols[idx].header);
//     });

//     // The table should have ONLY 1 tbody tag
//     const tbody = table.find('tbody');
//     expect(tbody).toHaveLength(1);

//     // tbody tag should have the same number of tr tags as data rows
//     const rows = tbody.find('tr');
//     expect(rows).toHaveLength(tableData.length);

//     // Loop through each row and check the content
//     rows.forEach((tr, rowIndex) => {
//       const cells = tr.find('td');
//       expect(cells).toHaveLength(cols.length);
//       expect(Number(cells.at(0).text())).toEqual(tableData[rowIndex].quantity);
//       expect(Number(cells.at(1).text())).toEqual(tableData[rowIndex].price);
//       expect(cells.at(2).text()).toEqual(tableData[rowIndex].time);
//     });
//   });
// });
