import '../App.css'
import { useState } from 'react';
function CreateRedCard({ onCreate }) {
    const [title, setTitle] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        onCreate(title);
        setTitle('');
    };
    return (
        <form onSubmit={handleSubmit} className="inputPadding">
            <label>Red</label>
            <input placeholder="Add" className="red-input" value={title} onChange={e => setTitle(e.target.value)} required />
        </form>
    );
}
export default CreateRedCard;