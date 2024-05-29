// import logo from './logo.svg';
import './App.css';
import Input from './Components/input/input';
import TextBlock from './Components/text/text';
import Title from './Components/header/header';


// function App() {
//   const number = 0;
//   if (number > 1) {
//     return <div>Hello!</div>
//   }
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         {/* {formatName(user)} */}
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <Input labelName="Name" className='row' />
//         <Input labelName="Age" />
//         <TextBlock text="Something" />
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

function App() {
  const number = 0;
  if (number > 1) {
    return <div>Hello!</div>
  }
  return (
    <div className="App">
      <header className="App-header">
        <Title />
      </header>
      <body className='main-part'>
        <div className='left-part'>
          <Input labelName="Name" className='row' />
          <p></p>
          <Input labelName="Age" className='row' />
          <p></p>
          <Input labelName="City" className='row' />
          <p></p>
          <Input labelName="Color" className='row' />
          <p></p>
          <Input labelName="Animal" className='row' />
        </div>
        <div className='right-part'>
          <TextBlock text="Текст" />
        </div>
      </body>
    </div>
  );
}

export default App;
