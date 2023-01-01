const DeclarativeCode = () => {

    const numbers = [1, 2, 3, 4, 5];

    return numbers.map(number => {
        <p>{number}</p>
    });
}