import { ReactComponent as IconClose } from '../../assets/icon-close-modal.svg';
import { useMyContext } from '../../context/Context';
import '../Modals/Modals.css';
import Option from './Option';
import { options } from './../../data/data';

export default function MainModal() {

    const isModalVisible = useMyContext()[4],
        setModalVisible = useMyContext()[5],
        setOverlayVisible = useMyContext()[9];

    let visible = {
        visibility: "visible",
        opacity: "1"
    };
    let hidden = {
        visibility: "hidden",
        opacity: "0"
    }

    return (
        <div
            className={isModalVisible === false ? "modal-default" : "modal-default modal-visible"}
            style={isModalVisible === true ? { visible } : { hidden }}>
            <div className="modal-content">
                <div className="close-modal">
                    <IconClose
                        alt="close-modal"
                        onClick={() => { setModalVisible(false); setOverlayVisible(false) }} />
                </div>
                <div className="modal__top">
                    <h2 className="modal__top-title">Back this project</h2>
                    <p className="modal__top-text text">Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?
                    </p>
                </div>
                <div className="modal__options-form">
                    {options.map((option, i) => {
                        return (
                            <Option key={i} {...option} />
                        )
                    })}
                </div>
            </div>
        </div>
    );
};