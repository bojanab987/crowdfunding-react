import '../Modals/Modals.css';
import { ReactComponent as IconChecked } from './../../assets/icon-check.svg';
import { useMyContext } from '../../context/Context';

export default function ModalFinal() {
    const isModalVisible = useMyContext()[4],
        setModalVisible = useMyContext()[5];

    return (
        <div className={isModalVisible ? "modal-completed visible" : "modal-completed"}>
            <div className="icon-checked"><IconChecked alt="checked-icon" onClick={() => setModalVisible(false)} /></div>
            <h1 className="modal-completed-title">Thanks for your support!</h1>
            <p className="modal-completed-text text">Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get an email once our campaign is completed.</p>
            <button className="modal-completed-btn js-got-it" onClick={() => setModalVisible(false)}>Got it!</button>
        </div>
    )
}