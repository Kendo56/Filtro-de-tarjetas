
import './TarjetExtension.css'

const TarjetExtension = ({ className, imageTarjet, titleTarjet, classNameTitle, classNameDescription, classNameButtonRemove, onclickRemove, classNameButtonState, tarjetDescription, classNameCircle, onclickButton }) => {
    return (
        <div className={`container_tarjet ${className || ''}`}>
            <div className='content_tarjet'>
                <div className='info_tarjet'>
                    <div className='image_tarjet'>
                        <img src={imageTarjet} alt='icon tarjet' />
                    </div>
                    <div className='text_tarjet'>
                        <h2 className={`title_tarjet ${classNameTitle || ''}`} >
                            {titleTarjet}
                        </h2>
                        <p className={`description_tarjet ${classNameDescription || ''}`}>
                            {tarjetDescription}
                        </p>
                    </div>
                </div>
                <div className='state_tarjet'>
                    <div className='content_button_state'>
                        <div className='container_button_remove'>
                            <button className={`button_remove ${classNameButtonRemove || ''}`} onClick={onclickRemove}>
                                Remove
                            </button>
                        </div>
                        <div className='container_button_state'>
                            <button className={`button_stateTarjet ${classNameButtonState || ''}`} onClick={onclickButton} >
                                <div className={`circle ${classNameCircle || ''}`}></div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TarjetExtension