import React, {useState} from 'react';

const QuestionBox = (({question,options,selected})=>{
    const [answer, setAnswer] = useState(options);
    console.log(answer)
    return(
        <div className="questionBox">
            <div className="question">{question}</div>
            {/* {options.map(({tex,index}) =>(<div key={index}>{tex}</div>))} */}
            {answer.map((text,index) => (
                <button className='answerBtn' key={index} onClick={() => {setAnswer([text]);selected(text);}}>{text}</button>
            ))}
        </div>
    )
});

export default QuestionBox;