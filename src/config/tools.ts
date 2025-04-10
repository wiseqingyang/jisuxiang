import { 
  faCode, faExchangeAlt, faClock, faGlobe, faLink, faLock, 
  faImage, faCogs, faFileCode, faKey, faFont, 
  faCalendarAlt, faPalette, faEdit, faRuler, faNetworkWired 
} from '@fortawesome/free-solid-svg-icons';
import { Tool } from '@/types/tools';

// 定义工具列表
const tools: Tool[] = [
  {
    code: 'json_formatter',
    icon: faCode,
    category: ['common', 'json'],
    keywords: ['json', 'json格式化', '格式化', '美化', '压缩', '校验', 'formatter', 'validator', 'gshjson', 'gshjson', 'jsonxg', 'jxg']
  },
  {
    code: 'http_tester',
    icon: faGlobe,
    category: ['common','network'],
    keywords: ['http测试', 'api测试', '接口测试', '请求测试', 'http', 'api', 'request', 'jiekou', 'qingqiu', 'ceshi', 'postman']
  },
  {
    code: 'timestamp_converter',
    icon: faClock,
    category: ['common', 'datetime'],
    keywords: ['时间戳', '时间', '日期', 'timestamp', 'time', 'date', 'unix时间', 'datetime', 'shijian', 'sjc', 'sj', 'riqi', 'rq']
  },

  {
    code: 'encoding_converter',
    icon: faExchangeAlt,
    category: ['common', 'encoding'],
    keywords: ['编码', '解码', 'base64', 'url编码', 'unicode', '编码转换', 'encoding', 'decoding', 'bianma', 'jiema', 'bm', 'jm']
  },
  {
    code: 'regex_tester',
    icon: faKey,
    category: ['text'],
    keywords: ['正则', '正则表达式', 'regex', '表达式', '正则测试', 'regular expression', 'zhengze', 'zz']
  },
  {
    code: 'crypto_tools',
    icon: faLock,
    category: ['encoding'],
    keywords: ['加密', '解密', '哈希', 'md5', 'sha', 'aes', 'des', '加密工具', '解密工具', 'encrypt', 'decrypt', 'hash', 'jiami', 'jiemi', 'jm']
  },
  {
    code: 'color_tools',
    icon: faPalette,
    category: ['frontend'],
    keywords: ['颜色', '调色板', '颜色转换', '颜色选择', 'color', 'rgb', 'hex', 'hsv', 'hsl', 'yanse', 'ys', 'colors']
  },
  {
    code: 'code_formatter',
    icon: faFileCode,
    category: ['code'],
    keywords: ['代码格式化', '代码美化', '格式化', '美化', 'code', 'formatter', 'beautify', 'html', 'css', 'js', 'sql', 'daima', 'dm', 'geshi']
  },

  {
    code: 'json_editor',
    icon: faEdit,
    category: ['common', 'json'],
    keywords: ['json编辑器', 'json修改', '编辑器', 'json', 'editor', 'jsonbj', 'json编辑', 'bianji', 'bj']
  },
  {
    code: 'json_converter',
    icon: faExchangeAlt,
    category: ['json'],
    keywords: ['json转换', 'json2xml', 'json2csv', 'json2yaml', 'xml转json', 'csv转json', 'yaml转json', 'jsonzh', 'json互转', 'zhuanhuan', 'zh']
  },
  {
    code: 'url_encoder',
    icon: faLink,
    category: ['encoding'],
    keywords: ['url编码', 'url解码', 'url转换', '网址编码', 'urlencode', 'urldecode', 'url编解码', 'wangzhi', 'wz']
  },
  {
    code: 'unicode_converter',
    icon: faFont,
    category: ['encoding'],
    keywords: ['unicode', '中文', '编码转换', 'unicode转中文', '中文转unicode', 'zhongwen', 'zw', 'unicode编码', 'unicode解码']
  },
  {
    code: 'jwt_decoder',
    icon: faLock,
    category: ['encoding'],
    keywords: ['jwt', 'token', 'jwt解析', 'jwt验证', 'json web token', '令牌', 'token解析', 'jwtjx', 'lingpai']
  },
  {
    code: 'ip_lookup',
    icon: faNetworkWired,
    category: ['common','network'],
    keywords: ['ip查询', 'ip地址', 'ip归属地', '地址查询', 'ip', 'ip归属', 'dizhi', 'dz', 'ip地址查询', 'ipdz']
  },
  {
    code: 'date_calculator',
    icon: faCalendarAlt,
    category: ['datetime'],
    keywords: ['日期计算', '日期差值', '计算器', '日期', 'date', 'calculator', 'date差值', '天数计算', 'riqi', 'rq', 'jsq']
  },
  {
    code: 'timezone_converter',
    icon: faClock,
    category: ['datetime'],
    keywords: ['时区', '时区转换', '时间转换', '时区计算', 'timezone', 'time zone', 'shiqu', 'sq', 'GMT', 'UTC']
  },
  {
    code: 'text_counter',
    icon: faRuler,
    category: ['text'],
    keywords: ['字数统计', '字符统计', '字数', '词数', '行数', '计数', 'word count', 'character count', 'zishu', 'zs', 'tongji', 'tj']
  },
  {
    code: 'html_markdown_converter',
    icon: faFileCode,
    category: ['code', 'text'],
    keywords: ['html', 'markdown', 'md', 'html转markdown', 'markdown转html', '文档转换', 'html2md', 'md2html', 'wenzhang']
  },
  {
    code: 'image_compressor',
    icon: faImage,
    category: ['common', 'image'],
    keywords: ['图片压缩', '压缩图片', '图片', '压缩', 'image', 'compress', 'compressor', 'tupian', 'tp', 'yasuo', 'ys']
  },
  {
    code: 'qrcode_generator',
    icon: faImage,
    category: ['common','image'],
    keywords: ['二维码', '二维码生成', 'qrcode', 'qr码', '扫码', '二维码生成器', 'erweima', 'ewm', 'saoma', 'sm']
  },
  {
    code: 'css_gradient_generator',
    icon: faCogs,
    category: ['frontend'],
    keywords: ['css渐变', '渐变', '渐变背景', 'css', 'gradient', '背景', 'css生成器', 'jianbian', 'jb', 'beijing', 'bj']
  }
] as Tool[];

export default tools; 