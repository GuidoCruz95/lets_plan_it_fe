import '../layouts/styles.css'

import { useState } from 'react'

function TagsInput() {
    const [tags, setTags] = useState([])

    function handleKeyDown(e) {
        if (e.key !== 'Enter') {
            return
        }
        e.preventDefault();
        const value = e.target.value
        if (!value.trim()) {
            return
        }
        setTags([...tags, value])
        e.target.value = ''
    }

    function removeTag(index) {
        setTags(tags.filter((el, i) => i !== index))
    }

    return (
        <div className="tags-input-container">
            {tags.map((tag, index) => (
                <div className="tag-item" key={index}>
                    <span className="text">{tag}</span>
                    <span className="close" onClick={() => removeTag(index)}>&times;</span>
                </div>
            ))}
            <input onKeyDown={handleKeyDown} type="text" className="tags-input" placeholder="escribe algo" />
        </div>
    )
}

export default TagsInput