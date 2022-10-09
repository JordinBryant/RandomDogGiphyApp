function Button (props) {

    const handleSubmit = () => {
            props.handleSubmitFromApp()
    };

    return (
        <button type="button" onClick={handleSubmit}>Shuffle Dogs</button>
    )
}

export default Button;