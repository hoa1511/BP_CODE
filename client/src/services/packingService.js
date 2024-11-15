import axios from "axios";
export const fetchPackingData = async (date, station) => {
  try {
    const response = await axios.get("http://localhost:5000/api/packing/packing-data", {
      params: {
        date: date ? date.format("YYY-MM-DD") : null ,
        station: station,
      }
    })
    console.log("Dữ liệu nhận được từ API:", response.data)
    return response.data;
  } catch (error){
    console.error("Lỗi khi lấy dữ liệu từ API", error)
    throw error
  }
}