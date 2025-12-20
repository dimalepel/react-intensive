import { useState, useCallback } from "react";
import styles from './PostLengthFilter.module.css'

type PostLengthFilterProps = {
    onChange: (min: number, max: number) => void;
}

export default function PostLengthFilter({ onChange }: PostLengthFilterProps) {
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(100);

    const handleMinChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number(e.target.value);
        setMin(value);
        onChange(value, max);
    }, [max, onChange]);

    const handleMaxChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number(e.target.value);
        setMax(value);
        onChange(min, value);
    }, [min, onChange]);

    return (
        <div className={styles.filter}>
            <label>
                Мин. длина:
                <input
                    type="number"
                    min={0}
                    value={min}
                    onChange={handleMinChange}
                    style={{ marginLeft: "10px", marginRight: "20px" }}
                />
            </label>

            <label>
                Макс. длина:
                <input
                    type="number"
                    min={0}
                    value={max}
                    onChange={handleMaxChange}
                    style={{ marginLeft: "10px" }}
                />
            </label>
        </div>
    );
}