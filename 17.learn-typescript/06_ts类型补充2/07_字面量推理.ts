type Method = 'get' | 'post'

function request(url: string, method: Method) { }

type Request = {
  url: string,
  method: Method
}

// method会自动推理成string类型
const options: Request = {
  url: 'https://www.baidu.com',
  method: 'get'
}

request(options.url,options.method)

export {}