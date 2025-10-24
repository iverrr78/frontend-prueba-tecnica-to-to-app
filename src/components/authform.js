import React, { useState } from 'react';

function AuthForm({ fields, onSubmit, buttonLabel, formTitle }) {
    const [formData, setFormData] = useState(
        fields.reduce((acc, field) => ({ ...acc, [field.name]: '' }), {})
    );

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (onSubmit) {
            onSubmit(formData);
        }
    };

    return (
        <form className="auth-form" onSubmit={handleSubmit}>
             <h2 style={{ textAlign: 'center', marginBottom: '18px' }}>{formTitle}</h2>
            {fields.map(field => (
                <div key={field.name}>
                    <label htmlFor={field.name}>{field.label}:</label>
                    <input
                        type={field.type}
                        id={field.name}
                        name={field.name}
                        value={formData[field.name]}
                        onChange={handleChange}
                        required
                    />
                </div>
            ))}
            <button type="submit">{buttonLabel}</button>
        </form>
    );
}

export { AuthForm };