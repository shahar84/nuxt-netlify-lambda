import axios from '~/plugins/axios'

export const getExample = async () => {
  try {
    return await axios.get('/example')
  } catch (e) {
    console.error(e)
  }
}
export default { getExample }
