import axios from "axios"

export const imageUpload = async (imageData) => {
    const fromData = new FormData()
    fromData.append('image', imageData)

    const imgBBApi = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMAGE_BB_API}`

   const imageURL = await axios.post(imgBBApi, fromData)

   return imageURL.data.data.url
}