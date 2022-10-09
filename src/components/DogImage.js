function DogImage(props) {
    return (
        <div className="dog-row">
            <img src={props.getImg.message} alt=""/>
        </div>
    )
}

export default DogImage;