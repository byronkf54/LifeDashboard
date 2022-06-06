import React from "react";

export default function Investments() {

    const [data, setData] = React.useState(null);

    React.useEffect(() => {
        fetch("/investments")
        .then((res) => res.json())
        .then((data) => setData(data.message));
    }, []);

    return (
        <div>
            <p>Enter stock symbol:</p>
            <input type="text" name="symbol" placeholder="stock name/symbol" />
        </div>
    )
};
