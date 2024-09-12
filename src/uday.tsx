const ValueUpdate = ({
    count,
    setCount,
}: {
    count: number;
    setCount: any;
}) => {
    const Increment = () => {
        setCount(count + 5)
    }
    const Decrement = () => {
        setCount(count - 5)
    }
    const multiply = () => {
        setCount(count * 5)
    }
    const Division = () => {
        setCount(count / 5)
    }
    const reset = () => {
        setCount(0)
    }
    return (

        <div className="outer">
            <div>{count}</div>
            <div>
                <button className="" onClick={() => {
                    Increment()
                }}>+</button>
                <button className="" onClick={() => {
                    Decrement()
                }}>-</button>
                <button className="" onClick={() => {
                    multiply()
                }}>*</button>
                <button className="" onClick={() => {
                    Division()
                }}>/</button>
                <button className="" onClick={() => {
                    reset()
                }}>clear</button>
            </div>
        </div>
    )

}
export default ValueUpdate