export default function validateProductForm(values) {
    let errors = {};

    if (values.title?.length < 3) {
        errors.title = values.title === '' 
        ? 'A title is required' 
        : 'Title must be at least 3 characters long'
    }
    if (values.price && Number(values.price) < 0) {
        errors.price = values.price === '' 
        ? 'The price is required' 
        : 'Must be greater than 0'
    }
    if (values.description?.length < 5) {
        errors.description = values.description === '' 
        ? 'Please write a description' 
        : 'Description must be at least 5 characters';
    }

    return errors;
}