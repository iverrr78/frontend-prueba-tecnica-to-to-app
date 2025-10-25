import { useState } from 'react';

// Define the AuthForm component that can be used for both login and registration
function AuthForm({ fields, onSubmit, buttonLabel, formTitle }) {
    const [formData, setFormData] = useState(
        fields.reduce((acc, field) => ({ ...acc, [field.name]: '' }), {})
    );

    // Handle input field changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle form submission
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