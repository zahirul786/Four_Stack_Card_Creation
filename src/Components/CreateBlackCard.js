import '../App.css';
import { useState } from 'react';
function CreateBlackCard({ onCreate }) {
    const [title, setTitle] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        onCreate(title);
        setTitle('');
    };
    return (
        <form onSubmit={handleSubmit} className="inputPadding">
            <label>Black</label>
            <input placeholder="Add" className="black-input" value={title} onChange={e => setTitle(e.target.value)} required />
        </form>
    );
}
export default CreateBlackCard;