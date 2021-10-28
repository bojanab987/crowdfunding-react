import React, { useState, useContext, createContext } from 'react';

const Context = createContext();

const ContextProvider = ({ children }) => {

    const [totalDonationAmount, setTotalDonationAmount] = useState(89914);
    const [totalBackers, setTotalBackers] = useState(5007);
    const [isModalVisible, setModalVisible] = useState(false);
    const [isCompletedModalVisible, setCompletedModalVisible] = useState(false);
    const [isOverlayVisible, setOverlayVisible] = useState(false);
    const [responsiveMenuVisible, setResponsiveMenuVisible] = useState(false);

    return (
        <Context.Provider value={[
            totalDonationAmount,
            setTotalDonationAmount,
            totalBackers, setTotalBackers,
            isModalVisible, setModalVisible,
            isCompletedModalVisible, setCompletedModalVisible,
            isOverlayVisible, setOverlayVisible,
            responsiveMenuVisible, setResponsiveMenuVisible
        ]}>{children}
        </Context.Provider>
    );
};

const useMyContext = () => {
    return useContext(Context);
}

export { ContextProvider, useMyContext };