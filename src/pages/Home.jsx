import './Home.css'
import ButtonStates from '../components/Button States/ButtonStates'
import TarjetExtension from '../components/Tarjet Extension/TarjetExtension'
import { iconExtensions, iconSun, iconMoon, logoDevlens, logoStyleSpy, logoSpeedBoost, logoJsonWizard, logoTabMasterPro, logoViewportBuddy, logoMarkupNotes, logoGridGuides, logoPalettePicker, logoLinkChecker, logoDomSnapshot, logoConsolePlus } from '../components/images'
import { use, useState } from 'react'

const Home = () => {
    //Estado De tema oscuro y claro
    const [ThemeLight, setThemeLight] = useState(false)

    // Funcion Cambio de tema oscuro a claro
    const CambioTheme = () => {
        setThemeLight(!ThemeLight)
    }

    //Estado tema de botones de filtros
    const [estadoActiveThemeButton, setEstadoThemeButton] = useState(1)

    //Funcion Que me elimina la tarjeta del array al darle click al boton remove
    const RemoveTarjet = (id) => {
        setTarjet(prev => prev.filter(t => t.id !== id))
    }
    
    //Estado de tarjeta
    const [tarjets, setTarjet] = useState([
        {
            id: 1,
            imageTarjet: logoDevlens,
            titleTarjet: "DevLens",
            active: false,
            tarjetDescription: "Quickly inspect page layouts and visualize elements boundaries"
        },
        {
            id: 2,
            imageTarjet: logoStyleSpy,
            titleTarjet: "StyleSpy",
            active: false,
            tarjetDescription: "Instantly analyze and copy CSS from any webpage element."
        },
        {
            id: 3,
            imageTarjet: logoSpeedBoost,
            titleTarjet: "SpeedBoost",
            active: false,
            tarjetDescription: "Optimizes browser resource usage to accelerate page loading."
        },
        {
            id: 4,
            imageTarjet: logoJsonWizard,
            titleTarjet: "JSONWizard",
            active: false,
            tarjetDescription: "Formats, validates, and prettifies JSON responses in-browser."
        },
        {
            id: 5,
            imageTarjet: logoTabMasterPro,
            titleTarjet: "TabMaster Pro",
            active: false,
            tarjetDescription: "Organizes browser tabs into groups and sessions."
        },
        {
            id: 6,
            imageTarjet: logoViewportBuddy,
            titleTarjet: "ViewportBuddy",
            active: false,
            tarjetDescription: "Simulates various screen resolutions directly within the browser."
        },
        {
            id: 7,
            imageTarjet: logoMarkupNotes,
            titleTarjet: "Markup Notes",
            active: false,
            tarjetDescription: "Enables annotation and notes directly onto webpages for collaborative debugging."
        },
        {
            id: 8,
            imageTarjet: logoGridGuides,
            titleTarjet: "GridGuides",
            active: false,
            tarjetDescription: "Overlay customizable grids and alignment guides on any webpage."
        },
        {
            id: 9,
            imageTarjet: logoPalettePicker,
            titleTarjet: "Palette Picker",
            active: false,
            tarjetDescription: "Instantly extracts color palettes from any webpage."
        },
        {
            id: 10,
            imageTarjet: logoLinkChecker,
            titleTarjet: "LinkChecker",
            active: false,
            tarjetDescription: "Scans and highlights broken links on any page."
        },
        {
            id: 11,
            imageTarjet: logoDomSnapshot,
            titleTarjet: "DOM Snapshot",
            active: false,
            tarjetDescription: "Capture and export DOM structures quickly."
        },
        {
            id: 12,
            imageTarjet: logoConsolePlus,
            titleTarjet: "ConsolePlus",
            active: false,
            tarjetDescription: "Enhanced developer console with advanced filtering and logging."
        }
    ]
    )

    //Funcion para cambiar estado de tarjeta
    const toggleTarjet = (id) => {
        setTarjet(prev =>
            prev.map(tarjet =>
                tarjet.id === id
                    ? { ...tarjet, active: !tarjet.active }
                    : tarjet
            )
        )
    }
    //Estado tema de botones de filtros
    const [filter, setFilter] = useState('all')

    // Content States Buttons
    const contentButtons = [
        {
            id: 1,
            text: "All",
            filter: "all"
        },
        {
            id: 2,
            text: "Active",
            filter: "active"
        },
        {
            id: 3,
            text: "Inactive",
            filter: "inactive"
        }
    ]

    //Variable que guarda los filtros
    const filteredTarjets = tarjets.filter(tarjet => {
        if (filter === "active") return tarjet.active;
        if (filter === "inactive") return !tarjet.active;
        return true;
    });

    return (
        <section className={`section_main ${ThemeLight ? 'section_main_light' : ''}`}>
            <div className='main_container'>
                <div className={`container_extensions ${ThemeLight ? 'container_extensions_light' : ''}`}>
                    <div className='content_extensions'>
                        <div className='image_extensions'>
                            <img src={iconExtensions} alt="icon-extensions" />
                            <h1 className={`title_extension ${ThemeLight ? 'title_extension_light' : ''}`}>Extensions</h1>
                        </div>
                        <div className='icon_theme'>
                            <div className={`image_theme ${ThemeLight ? 'image_theme_light' : ''}`} onClick={CambioTheme}>
                                <img src={ThemeLight ? iconMoon : iconSun} alt="icon theme" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='states_extensions'>
                    <div className='tittle_listExtensions'>
                        <h1 className={`paragraph_listExtensions ${ThemeLight ? 'paragraph_listExtensions_light' : ''}`}>
                            Extensions List
                        </h1>
                    </div>
                    <div className='button_states'>
                        {contentButtons.map((item) => (
                            <ButtonStates className={`${ThemeLight ? 'container_buttonStates_light' : ''} 
                            ${estadoActiveThemeButton === item.id ? 'container_buttonStates_active' : ''}`}
                                key={item.id}
                                textButton={item.text}
                                onClick={() => { setEstadoThemeButton(item.id); setFilter(item.filter) }} />
                        ))}
                    </div>
                </div>
                <div className='container_tarjets'>
                    {filteredTarjets.map((item) => (
                        <TarjetExtension className={`${ThemeLight ? 'container_tarjet_light' : ''}`}
                            key={item.id}
                            classNameTitle={`${ThemeLight ? 'title_tarjet_light' : ''}`}
                            classNameDescription={`${ThemeLight ? 'description_tarjet_light' : ''}`}
                            classNameButtonRemove={`${ThemeLight ? 'button_remove_light' : ''}`}
                            classNameButtonState={`${ThemeLight ? 'button_stateTarjet_light' : ''} ${item.active ? 'button_stateTarjet_active' : ''} `}
                            imageTarjet={item.imageTarjet}
                            titleTarjet={item.titleTarjet}
                            tarjetDescription={item.tarjetDescription}
                            classNameCircle={`${item.active ? 'circle_active' : ''}`}
                            onclickRemove={() => RemoveTarjet(item.id)}
                            onclickButton={() => toggleTarjet(item.id)}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Home