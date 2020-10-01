import React from 'react';
import me from './skills.json'
const Question = () => {

    return(
    <div>
            <h1>About</h1>
            <ul>
                {me.QandA.map((x) => {
                    return (
                        <li><p>{"Q." + x.q}</p><p>{"A." +x.a}</p></li>
                        )
                })}
            </ul>
    </div>
    );
}
export default Question;