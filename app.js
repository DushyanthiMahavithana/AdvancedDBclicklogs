import { sendTapToFirebase } from './firebase.js';

function syncToServer() {
    tapLogsArray.forEach(tapString => {
        const tap = JSON.parse(tapString);

        const record = {
            session_id: uniqueIdentifier,
            platform: dependentVariable,
            sequence: tap.tapSequenceNumber,
            start_time: tap.startTimestamp,
            end_time: tap.endTimestamp,
            duration: tap.endTimestamp - tap.startTimestamp,
            interface_type: tap.interface,
            interface_sequence: tap.interfaceSequence,
            timestamp: new Date().toISOString()
        };

        sendTapToFirebase(record);
    });

    document.getElementById("container").innerHTML = '<span class="spanWhite">Data saved successfully to Firebase!</span>';
}