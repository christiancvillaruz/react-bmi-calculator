import { useState } from "react";
import { Helmet } from "react-helmet";
import { FaHeart, FaGithub, FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";
import './index.css';

function App() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState(0);
  const [message, setMessage] = useState('');

  let calcBmi = (event) => {
    event.preventDefault();

    if (weight == 0 || height == 0) {
      alert("Please enter a value on weight/height!");
    }
    else {
      let bmi = (weight / (height * height));
      setBmi(bmi.toFixed(1));

      if (bmi < 18.5) {
        setMessage("You are underweight.");
      }
      else if (bmi >= 18.5 && bmi <= 24.9) {
        setMessage("You are in healthy range!");
      }
      else if (bmi >= 25 && bmi <= 29.9) {
        setMessage("You are overweight.");
      }
      else if (bmi >= 30) {
        setMessage("You are obese!");
      }
    }
  }

  return (
    <div className="container mx-auto p-4">
      <Helmet>
        <title>Body Mass Index (BMI) Calculator</title>
      </Helmet>
      <h2 className="font-extrabold text-3xl p-4 text-center">
        Body Mass Index (BMI) Calculator
      </h2>
      <div className="flex justify-center">
        <div className="bg-white shadow-md p-4 max-w-[1000px] rounded-md">
          <form action="#" onSubmit={ calcBmi }>
            <div className="flex flex-row justify-between items-center space-x-2 py-2">
              <label>Weight (kilograms)</label>
              <input type="text" class="block p-2 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500" onChange={(e) => setWeight(e.target.value)} value={ weight } />
            </div>
            <div className="flex flex-row justify-between items-center space-x-2 py-2">
              <label>Height (meters)</label>
              <input type="text" class="block p-2 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500" onChange={(e) => setHeight(e.target.value)} value={ height } />
            </div>
            <div className="flex flex-row justify-end items-end space-x-2 py-2">
              <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center" type="submit">Calculate</button>
              <button className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 text-center" type="button" onClick={ () => { setWeight(0); setHeight(0); setBmi(0); setMessage('') } }>Reset</button>
            </div>
            <hr className="py-2" />
            <div className="text-center py-2">
              <h3 className="text-lg font-bold">Your BMI is:</h3>
              <p className="font-bold">{ bmi }</p>
              <p className="p-4">{ message }</p>
            </div>
          </form>
        </div>
      </div>
      <footer className="text-center text-zinc-700 py-12">
        <h1 className="flex flex-row justify-center items-center gap-1">Made with <FaHeart/> by Christian</h1>
        <ul className="flex flex-row justify-center items-center gap-3 p-4 text-2xl">
          <li><a href="https://github.com/christiancvillaruz" target="_blank"><FaGithub/></a></li>
          <li><a href="https://twitter.com/robertssson13" target="_blank"><FaTwitter/></a></li>
          <li><a href="https://facebook.com/kristyaaaan7" target="_blank"><FaFacebook/></a></li>
          <li><a href="https://linkedin.com/in/christiancvillaruz" target="_blank"><FaLinkedin/></a></li>
        </ul>
      </footer>
    </div>
  );
}

export default App;