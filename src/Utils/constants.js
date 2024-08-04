export const LOGO = 'https://pbs.twimg.com/media/GUHWyUmXsAA9zZL?format=png&name=360x360'

export const LOGO_SMALL='https://pbs.twimg.com/media/GUHWyUmWMAEVszj?format=png&name=120x120'

export const LOGIN_IMG = 'https://pbs.twimg.com/media/GUE0b_yXwAAmzlu?format=jpg&name=large'

export const USER_AVATAR = "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117"

export const BACKGROUND = 'https://user-images.githubusercontent.com/33485020/108069438-5ee79d80-7089-11eb-8264-08fdda7e0d11.jpg'

export const API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer '+process.env.REACT_APP_TMDB_TOKEN,
    }
  }

export const IMG_CDN_URL ="https://image.tmdb.org/t/p/w500"

export const SUPPORTED_LANGUAGES = [
  {identifier:"en" , name : "English"},
  {identifier:"hindi" , name : "Hindi"},
  {identifier:"spanish", name: "Spanish"}
]

export const OPENAI_KEY =process.env.REACT_APP_OPENAI_KEY;