import dayjs from 'dayjs';
import { FC, useState } from 'react';
import styled from 'styled-components';
import { numToAlphabet } from './functions';

const RunContainer = styled.div`
    margin: 0.5em;
    font-size: 120%;
    padding: 0.5rem;

    input {
        font-size: 120%;
        margin: 0 0.5em;
    }
    span {
        display: inline-block;
        width: 2em;
    }
    button {
        margin-right: 2rem;
    }
`;

export const RunConfig: FC<{
    setter: (start: string) => void;
    remover?: () => void;
    value?: string;
    run?: number;
    className?: string;
}> = (props) => {
    const [startTime, setStartTime] = useState(
        () => props.value || dayjs().format('YYYY-MM-DDTHH:mm')
    );
    return (
        <RunContainer className={props.className}>
            <span>{props.run ? numToAlphabet(props.run) : ' '}</span>
            <input
                type="datetime-local"
                value={startTime}
                onChange={(evt) => setStartTime(evt.target.value)}
            />
            <button onClick={() => props.setter(startTime)}>
                Imposta impasto
            </button>
            {props.remover && <button onClick={props.remover}>&times;</button>}
        </RunContainer>
    );
};
