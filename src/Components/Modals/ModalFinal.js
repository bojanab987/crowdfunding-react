import '../Modals/Modals.css';
import { ReactComponent as IconChecked } from './../../assets/icon-check.svg';
import { useMyContext } from '../../context/Context';

export default function ModalFinal() {
    const isCompletedModalVisible = useMyContext()[6],
        setCompletedModalVisible = useMyContext()[7];

    return (
        <div className={isCompletedModalVisible === true ? "modal-completed visible" : "modal-completed"}>
            <div className="icon-checked"><IconChecked alt="checked-icon" onClick={() => setCompletedModalVisible(false)} /></div>
            <h1 className="modal-completed-title">Thanks for your support!</h1>
            <p className="modal-completed-text text">Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get an email once our campaign is completed.</p>
            <button className="modal-completed-btn" onClick={() => setCompletedModalVisible(false)}>Got it!</button>
        </div>
    )
}