import React from 'react'
import { useState, useEffect } from 'react';
import { BlockMapType, NotionRenderer } from "react-notion";

type Props = {
    pageId: string;
}

function NotionPost(props: Props) {
    const [data, setData] = useState<BlockMapType | undefined>();

    useEffect(() => {
        async function fetchData() {
            const res = await fetch('https://notion-api.splitbee.io/v1/page/' + props.pageId);
            const jsonData = await res.json();
            setData(jsonData);
        }
        fetchData();
    }, []);

    if (!data) {
        return <div>Loading...</div>;
    }

    return (
        <div style={{ maxWidth: 768 }}>
            <NotionRenderer blockMap={data} />
        </div>
    );
}

export default NotionPost;