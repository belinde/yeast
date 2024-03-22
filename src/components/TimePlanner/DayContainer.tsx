import styled from 'styled-components';

export const DayContainer = styled.div`
    margin-top: 1rem;
    width: 300px;
    border: 1px solid black;
    overflow: auto;

    h2 {
        text-align: center;
    }
    .day {
        height: 2880px;
        position: relative;

        .hour {
            height: 120px;
            border-top: 1px dashed darkgray;
            padding: 0.5rem;
            box-sizing: border-box;
        }
        .job {
            position: absolute;
            border: 1px solid blue;
            padding: 0.5rem;
            box-sizing: border-box;
            display: flex;
            gap: 0.5rem;

            .run-number {
                font-weight: bold;
            }
            .job-label {
                flex-grow: 1;
            }
        }
        .wait {
            opacity: 0.2;
        }

        .run-1 {
            left: 50px;
            width: 250px;
        }
        .run-2 {
            left: 75px;
            width: 225px;
        }
        .run-3 {
            left: 100px;
            width: 200px;
        }
        .run-4 {
            left: 125px;
            width: 175px;
        }
        .run-5 {
            left: 150px;
            width: 150px;
        }
        .run-6 {
            left: 175px;
            width: 125px;
        }
    }
`;
