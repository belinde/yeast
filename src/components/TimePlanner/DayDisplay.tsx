import dayjs from 'dayjs';
import { FC } from 'react';
import { DayContainer } from './DayContainer';
import { JobDisplay } from './JobDisplay';
import { Job } from './types';

export const DayDisplay: FC<{ day: string; jobs: Job[] }> = (props) => {
    return (
        <DayContainer>
            <h2>{dayjs(props.day).format('D/M')}</h2>
            <div className="day">
                <div className="hours">
                    {[...Array(24).keys()].map((h) => (
                        <div className="hour" key={h}>
                            {h}:00
                        </div>
                    ))}
                </div>
                {props.jobs
                    .filter((j) => j.day === props.day)
                    .map((job) => (
                        <JobDisplay
                            key={`${job.run.toString()}-${job.start.toString()}`}
                            job={job}
                        />
                    ))}
            </div>
        </DayContainer>
    );
};
