import classNames from 'classnames';
import { FC } from 'react';
import { numToAlphabet } from './functions';
import { Job } from './types';

export const JobDisplay: FC<{ job: Job }> = (props) => {
    return (
        <div
            key={`${props.job.run}-${props.job.start}`}
            className={classNames('job', `run-${props.job.run}`, {
                wait: props.job.isWait,
            })}
            style={{
                top: props.job.start,
                height: props.job.end - props.job.start,
            }}
        >
            <span className="run-number">{numToAlphabet(props.job.run)}</span>
            <span className="job-label">{props.job.label}</span>
            <span className="job-hour">{props.job.hour}</span>
        </div>
    );
};
