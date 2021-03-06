import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, StatusBar, Modal, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPhoneSquareAlt } from '@fortawesome/free-solid-svg-icons';
import { faCalendarPlus } from '@fortawesome/free-solid-svg-icons';

export default function Nurse() {

    const [modalOpen, setModalOpen] = useState(false);
    const [modalTwoOpen, setModalTwoOpen] = useState(false);

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#32afa9' barStyle="light-content" />
            <View style={styles.topContainer}>
                <View style={styles.nurseContainer}>
                    <Image
                        source={require("../assets/nurse.png")}
                        resizeMode="contain"
                        style={styles.nurseAvatar}
                    ></Image>
                </View>

                <Text style={styles.nurseMaryPoppins}>Nurse Mary Poppins</Text>
                <Text style={styles.stGeorgesHospital}>St George's Hopsital</Text>
                <Text style={styles.birmingham}>Birmingham</Text>
            </View>
            <View style={styles.bottomContainer}>
                <View style={styles.rectangle}>
                    <TouchableOpacity style={styles.inner} onPress={() => setModalOpen(true)}>
                        <Text style={styles.bookingText}>
                            Book a time slot for a call with the nurse</Text>
                        <FontAwesomeIcon icon={faCalendarPlus} style={styles.calendarIcon} size={80} />
                        <Modal
                            transparent={true}
                            visible={modalOpen}
                            animationType='fade'>
                            <View style={styles.grayOverlay}>
                                <View style={styles.bookPopUpContainer}>
                                    <Text style={styles.bookPopUpTitle}>Book Time Slot</Text>
                                    <Text style={styles.bookPopUpText}>We are currently unable to book appointments.</Text>
                                    <View style={styles.bookPopUpButtons}>
                                        <TouchableOpacity onPress={() => setModalOpen(false)} style={styles.exit}>
                                            <Text style={styles.bookPopUpButtonText}>Exit</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </Modal>
                    </TouchableOpacity>
                </View>
                <View style={styles.rectangle}>
                    <TouchableOpacity style={styles.inner} onPress={() => setModalTwoOpen(true)}>
                        <Text style={styles.bookingText}>
                            Make an {"\n"}urgent call to the nurse</Text>
                        <FontAwesomeIcon icon={faPhoneSquareAlt} style={styles.calendarIcon} size={80} />
                        <Modal
                            transparent={true}
                            visible={modalTwoOpen}
                            animationType='fade'>
                            <View style={styles.grayOverlay}>
                                <View style={styles.urgentPopUpContainer}>
                                    <Text style={styles.urgentPopUpTitle}>Urgent Call</Text>
                                    <Text style={styles.urgentPopUpText}>We are very busy and urge you not to call if your relative is not in a critical condition. Do you still want to call the nurse?</Text>
                                    <View style={styles.yesNoContainer}>
                                        <TouchableOpacity onPress={() => setModalTwoOpen(false)}>
                                            <View style={styles.noButton}>
                                                <Text style={styles.urgentPopUpButtonText}>No</Text>
                                            </View>
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={() => setModalTwoOpen(false)}>
                                            <View style={styles.yesButton}>
                                                <Text style={styles.urgentPopUpButtonText}>Yes</Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </Modal>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    topContainer: {
        flex: 1,
        width: '100%',
        height: '100%'
    },

    bottomContainer: {
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        height: '100%',
        backgroundColor: '#32afa9',
        alignItems: 'center'
    },

    rectangle: {
        width: '50%',
        height: '70%',
        padding: '5%',
    },

    inner: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
        elevation: 5,
        shadowColor: 'grey',
        shadowOffset: {
            width: 4,
            height: 4
        },
        shadowOpacity: 50,
        shadowRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        padding: '5%'
    },

    bookingText: {
        color: "#121212",
        fontSize: 16,
        fontFamily: 'Medium',
        textAlign: 'center',
        paddingTop: 10,
        flex: 1
    },
    calendarIcon: {
        color: "rgba(88,172,168,1)",
        fontSize: 40,
        flex: 1
    },
    //Nurses Avatar

    nurseContainer: {
        padding: 10,
        width: 147,
        height: 147
    },
    nurseAvatar: {
        width: 147,
        height: 147,
        marginTop: 10,
        marginLeft: 240,
    },

    //Nurse's Details

    nurseMaryPoppins: {
        color: "#121212",
        fontSize: 18,
        fontFamily: 'SemiBold',
        marginTop: 35,
        marginRight: 30,
        textAlign: 'right'
    },
    stGeorgesHospital: {
        color: "#121212",
        fontSize: 16,
        fontFamily: 'Medium',
        marginTop: 11,
        marginRight: 30,
        textAlign: 'right'
    },
    birmingham: {
        color: "#121212",
        fontSize: 16,
        fontFamily: 'Regular',
        marginTop: 12,
        marginRight: 30,
        textAlign: 'right'
    },

    //Urgent Call Rectangle

    urgentCallText: {
        color: "#121212",
        fontSize: 16,
        fontFamily: 'Regular',
        letterSpacing: 0,
        marginTop: 4
    },
    urgentCallIcon: {
        color: "rgba(88,172,168,1)",
        fontSize: 40,
        height: 40,
        width: 40,
        marginLeft: 70,
        marginTop: -15
    },

    //Pop Ups

    grayOverlay: {
        flex: 1,
        backgroundColor: "#000000aa",
        justifyContent: 'center',
        alignItems: 'center'
    },


    //Book Call Pop Up
    bookPopUpContainer: {
        width: '70%',
        height: '50%',
        backgroundColor: "rgba(255,255,255,1)",
        borderRadius: 54,
        flex: 0.25,
        justifyContent: 'center',
        paddingVertical: 20,
        paddingHorizontal: 10
    },

    bookPopUpTitle: {
        color: "#121212",
        fontSize: 18,
        fontFamily: 'SemiBold',
        textAlign: 'center',
        flex: 1,
        marginTop: 15
    },
    bookPopUpText: {
        color: "#121212",
        fontSize: 16,
        fontFamily: "Regular",
        textAlign: "center",
        flex: 1,
    },

    bookPopUpButtons: {
        width: '100%',
        height: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    exit: {
        backgroundColor: "rgba(172,88,88,1)",
        borderRadius: 28,
        alignItems: 'center',
        height: '60%',
        width: '30%',
        justifyContent: 'center',
    },

    bookPopUpButtonText: {
        fontSize: 18,
        fontFamily: "Medium",
        color: "rgba(255,255,255,1)",
        textAlign: "center",
    },

    //Urgent Call Pop Up
    urgentPopUpContainer: {
        width: '75%',
        height: '50%',
        backgroundColor: "rgba(255,255,255,1)",
        borderRadius: 54,
        flex: 0.3,
        justifyContent: 'center',
        paddingVertical: 20,
        paddingHorizontal: 20
    },

    urgentPopUpTitle: {
        color: "#121212",
        fontSize: 18,
        fontFamily: 'SemiBold',
        alignSelf: "center",
        flex: 1,
        marginTop: 15
    },
    urgentPopUpText: {
        color: "#121212",
        fontSize: 16,
        fontFamily: "Regular",
        textAlign: "center",
        alignSelf: "center",
        flex: 2.3
    },

    yesNoContainer: {
        height: '100%',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        flex: 1
    },

    noButton: {
        width: 100,
        height: 33,
        backgroundColor: "rgba(172,88,88,1)",
        borderRadius: 28,
        alignItems: 'center',
        justifyContent: 'center',

    },
    yesButton: {
        width: 100,
        height: 33,
        backgroundColor: "rgba(88,172,168,1)",
        borderRadius: 28,
        alignItems: 'center',
        justifyContent: 'center',
    },

    urgentPopUpButtonText: {
        fontSize: 18,
        fontFamily: "Medium",
        color: "rgba(255,255,255,1)",
    }


});
