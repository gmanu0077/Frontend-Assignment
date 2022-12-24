import React, { useState } from 'react';
import Input from './components/inputJson';
import MyForm from './components/renderJson';
export default function MyPage() {
    const [data, setdata] = useState("{}")
    console.log(data, "dat")
    return (
        <div style={{ display: 'flex' }}>
            <div style={{ flex: 1, height: "max-content", width: '50%' }}>
                <h4 style={{ color: "white", textAlign: "center" }}>json schema</h4>
                <Input setdata={setdata} />
            </div>
            <div style={{ flex: 1, height: "max-content", width: '50%' }}>
                <h4 style={{ color: "white", textAlign: "center" }} >UI</h4>
                <MyForm data={data} />
            </div>
        </div>
    );
}