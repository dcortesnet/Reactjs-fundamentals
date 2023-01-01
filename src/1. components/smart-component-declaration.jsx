export const SmartComponentCalculateDay = () => {
    const sum = 1 + 1;
    return <DumpComponentShowResult result={sum} />
}

export const DumbComponentShowResult = (props) => {
    return <p>The sum is `${props.result}`</p>
}