import dayjs from 'dayjs';
import { FC, useCallback, useEffect, useState } from 'react';
import { Recipe } from '../../types';
import { DayDisplay } from './DayDisplay';
import { DaysAligner } from './DaysAligner';
import { RunConfig } from './RunConfig';
import { durationToPixel } from './functions';
import { Job } from './types';

export const TimePlanner: FC<{ recipe: Recipe; slug: string }> = (props) => {
    const STORAGE_KEY = `yeastRuns-${props.slug}`;
    const [runs, setRunsLocal] = useState<string[]>([]);

    useEffect(() => {
        const retrieved = localStorage.getItem(STORAGE_KEY);
        const parsed: unknown = retrieved ? JSON.parse(retrieved) : [];
        setRunsLocal(Array.isArray(parsed) ? parsed : []);
    }, [STORAGE_KEY]);

    const setRuns = useCallback(
        (r: string[]) => {
            setRunsLocal(r);
            localStorage.setItem(STORAGE_KEY, JSON.stringify(r));
        },
        [STORAGE_KEY]
    );

    const days = new Set<string>();

    const jobs: Job[] = [];

    runs.forEach((run, i) => {
        let time = dayjs(run);
        props.recipe.stages.forEach((stage) => {
            const day = time.format('YYYY-MM-DD');
            days.add(day);

            const newTime = time
                .add(stage.duration.hours, 'hour')
                .add(stage.duration.minutes, 'minute');

            const start = durationToPixel(time.hour(), time.minute());
            const end = durationToPixel(newTime.hour(), newTime.minute());

            jobs.push({
                run: i + 1,
                day,
                hour: time.format('HH:mm'),
                label: stage.label,
                start,
                end: end > start ? end : 2880,
                isWait: !!stage.isWait,
            });

            if (end < start) {
                const nextDay = time.add(1, 'day').format('YYYY-MM-DD');
                days.add(nextDay);

                jobs.push({
                    run: i + 1,
                    day: nextDay,
                    hour: '00:00',
                    label: stage.label,
                    start: 0,
                    end: end,
                    isWait: !!stage.isWait,
                });
            }

            time = newTime;
        });
    });

    return (
        <div>
            <h1>{props.recipe.title}</h1>
            {runs.map((r, i) => (
                <RunConfig
                    key={`${i.toString()}-${r}`}
                    setter={(start) => {
                        const newRuns = [...runs];
                        newRuns[i] = start;
                        setRuns(newRuns);
                    }}
                    remover={() => {
                        const newRuns = [...runs];
                        newRuns.splice(i, 1);
                        setRuns(newRuns);
                    }}
                    value={r}
                    run={i + 1}
                    className={`run-${(i + 1).toString()}`}
                />
            ))}
            {runs.length < 6 ? (
                <RunConfig
                    setter={(start) => {
                        setRuns([...runs, start]);
                    }}
                />
            ) : null}

            <DaysAligner>
                {[...days].map((r) => (
                    <DayDisplay key={r} day={r} jobs={jobs} />
                ))}
            </DaysAligner>
        </div>
    );
};
