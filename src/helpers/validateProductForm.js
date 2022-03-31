export default function validateProductForm(values) {
    let errors = {};
    if (!values.title) {
        errors.title = 'Required';
    } else if (values.title.length < 3) {
        errors.title = 'Must be at least 3 characters';
    }

    if (!values.price) {
        errors.price = 'Required';
    } else if (Number(values.price) < 0) {
        errors.price = 'Must be greater than 0';
    }
    
    if (!values.description) {
        errors.description = 'Required';
    } else if (values.description.length < 10) {
        errors.description = 'Must be at least 10 characters';
    }

    if (!values.image) {
        errors.image = 'Required';
    } else if(!values.image.match(/(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png|webp|svg|jpeg|apng|avif|tiff|raw|ai|psd)/g)) {
        errors.image = 'Must be a valid image URL';
    }

    if(!Object.keys(errors).length) return false
    return errors;
}