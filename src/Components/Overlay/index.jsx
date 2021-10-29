import { useMyContext } from './../../context/Context';
import './../Overlay/Overlay.css';

export default function Overlay() {
    const isModalVisible = useMyContext()[4],
        isCompletedModalVisible = useMyContext()[6],
        isOverlayVisible = useMyContext()[8],
        responsiveMenuVisible = useMyContext()[10];

    let className = "modal-overay";

    if (isOverlayVisible && responsiveMenuVisible) {
        className += " nav-shown"
    } else if (isOverlayVisible && (isModalVisible || isCompletedModalVisible)) {
        className += " modal-shown"
    }

    return (
        <div className={className} id="modal-overlay"></div>
    )
}