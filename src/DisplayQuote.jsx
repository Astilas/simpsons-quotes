import  React  from  'react';

const  DisplayQuote = ({ simpson }) => {
    return (
        <div  className="DisplayQuote">
            <img src={simpson.image}  alt="picture" />
            <ul>
                <li> Character : {simpson.character}</li>
                <li>
                    Quote : {simpson.quote}
                </li>
                <li>
                CharacterDirection : {simpson.characterDirection}
                </li>
            </ul>
        </div>
    );
};


export  default  DisplayQuote;