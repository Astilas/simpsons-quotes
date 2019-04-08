import  React  from  'react';

const  GenerateQuote = ({ selectQuote }) => {
  return (
    <div  className="GenerateQuotes">
    <button  onClick={selectQuote}>Get quote</button>
    </div>
);
};

export  default  GenerateQuote;