function isMobileDevice() {
    const mobileWidth = 1090; // You can adjust this value to suit your needs
    return window.innerWidth <= mobileWidth;
}

const styles = {
    containerStyle: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        alignContent: 'center',
        backgroundColor: '#1D1B18',
        justifyContent: 'center',
        textAlign: 'center',
        fontSize: '15px',
        boxSizing: 'border-box',
        marginTop: '5%',
        marginBottom: '5%',
        color: '#EAFE72',
    },
    linkStyle: {
        textDecoration: 'none',
        fontSize: isMobileDevice() ? '13px' : '24px', // Reduce font size for mobile devices
        color: '#EAFE72',
    },
    buttonStyle: {
        textDecoration: 'none',
        fontSize: isMobileDevice() ? '13px' : '24px', // Reduce font size for mobile devices
        color: '#EAFE72',
        border: '1px solid #EAFE72',
        borderRadius: '5px',
        padding: '10px',
        fontFamily: 'Cutive Mono',
        backgroundColor: 'transparent',
        cursor: 'pointer'
    }
};

module.exports = styles;
