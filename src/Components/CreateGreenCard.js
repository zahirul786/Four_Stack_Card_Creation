import '../App.css';
import { useState } from 'react';
function CreateGreenCard({ onCreate }) {
    const [title, setTitle] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        onCreate(title);
        setTitle('');
    };
    return (
        <form onSubmit={handleSubmit} className="inputPadding">
            <label>Green</label>
            <input placeholder="Add" className="green-input" value={title} onChange={e => setTitle(e.target.value)} required />
        </form>
    );
}
export default CreateGreenCard;