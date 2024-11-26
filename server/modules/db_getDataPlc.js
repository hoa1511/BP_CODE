
const db_s7_cv = require('./db_s7');
var values_module;

setTimeout(() => {
    setInterval(() => {
        process.send({ event: 'socket_io_message_', data: values_module });
    }, 500);
}, 1000);

async function getData() {
    try {
        await db_s7_cv.connectPLC();
        db_s7_cv.readValues((error, values) => {
            if (error) {
                console.error("Xảy ra lỗi khi đọc giá trị PLC:", error);

            } else {
                values_module = values;
                // console.log("Dữ liệu đọc được từ PLC: ", values_module);
            }
        });
    } catch (error) {
        console.error("Xảy ra lỗi đọc plc:", error);
    }
};
getData();


 