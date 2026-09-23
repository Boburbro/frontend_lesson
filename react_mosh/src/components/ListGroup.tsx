import { useState } from "react";

interface Props {
    items: string[],
    heading: string,
    onSelectedItem: (item: string) => void,
}

function ListGroup(prop: Props) {


    const [selectedIndex, setSelectedIndex] = useState(-1);


    return (
        <>
            <h1>{prop.heading}</h1>
            {prop.items.length === 0 ? <p>No item found</p> : null}
            <ul className="list-group">
                {prop.items.map((item, index) => (<li className=

                    {selectedIndex === index ?
                        "list-group-item active" : "list-group-item"} key={item} onClick={() => {
                            setSelectedIndex(index);
                            prop.onSelectedItem(item);
                        }}>{item}</li>))}
            </ul>
        </>
    );
}

export default ListGroup;