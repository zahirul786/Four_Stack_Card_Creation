import '../App.css';
import { useState } from 'react';
function CreateBlueCard({ onCreate }) {
    const [title, setTitle] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        onCreate(title);
        setTitle('');
    };
    return (
        <form onSubmit={handleSubmit} className="inputPadding">
            <label>Blue</label>
            <input placeholder="Add" className="blue-input" value={title} onChange={e => setTitle(e.target.value)} required />
        </form>
    );
}
export default CreateBlueCard;